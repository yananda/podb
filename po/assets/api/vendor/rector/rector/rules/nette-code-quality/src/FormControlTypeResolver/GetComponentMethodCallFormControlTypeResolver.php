<?php

declare(strict_types=1);

namespace Rector\NetteCodeQuality\FormControlTypeResolver;

use PhpParser\Node;
use PhpParser\Node\Expr\MethodCall;
use PHPStan\Type\TypeWithClassName;
use Rector\Core\PhpParser\Node\Value\ValueResolver;
use Rector\Core\ValueObject\MethodName;
use Rector\NetteCodeQuality\Contract\FormControlTypeResolverInterface;
use Rector\NetteCodeQuality\Contract\MethodNamesByInputNamesResolverAwareInterface;
use Rector\NetteCodeQuality\NodeResolver\MethodNamesByInputNamesResolver;
use Rector\NodeCollector\NodeFinder\FunctionLikeParsedNodesFinder;
use Rector\NodeNameResolver\NodeNameResolver;
use Rector\NodeTypeResolver\NodeTypeResolver;
use Rector\PHPStan\Type\FullyQualifiedObjectType;

final class GetComponentMethodCallFormControlTypeResolver implements FormControlTypeResolverInterface, MethodNamesByInputNamesResolverAwareInterface
{
    /**
     * @var ValueResolver
     */
    private $valueResolver;

    /**
     * @var NodeNameResolver
     */
    private $nodeNameResolver;

    /**
     * @var NodeTypeResolver
     */
    private $nodeTypeResolver;

    /**
     * @var FunctionLikeParsedNodesFinder
     */
    private $functionLikeParsedNodesFinder;

    /**
     * @var MethodNamesByInputNamesResolver
     */
    private $methodNamesByInputNamesResolver;

    public function __construct(
        FunctionLikeParsedNodesFinder $functionLikeParsedNodesFinder,
        NodeNameResolver $nodeNameResolver,
        NodeTypeResolver $nodeTypeResolver,
        ValueResolver $valueResolver
    ) {
        $this->valueResolver = $valueResolver;
        $this->nodeNameResolver = $nodeNameResolver;
        $this->nodeTypeResolver = $nodeTypeResolver;
        $this->functionLikeParsedNodesFinder = $functionLikeParsedNodesFinder;
    }

    /**
     * @return array<string, string>
     */
    public function resolve(Node $node): array
    {
        if (! $node instanceof MethodCall) {
            return [];
        }

        if (! $this->nodeNameResolver->isName($node->name, 'getComponent')) {
            return [];
        }

        $createComponentClassMethodName = $this->createCreateComponentMethodName($node);

        $staticType = $this->nodeTypeResolver->getStaticType($node);

        if (! $staticType instanceof FullyQualifiedObjectType) {
            return [];
        }

        // combine constructor + method body name
        $constructorClassMethodData = [];
        $constructorClassMethod = $this->functionLikeParsedNodesFinder->findClassMethod(
            MethodName::CONSTRUCT,
            $staticType->getClassName()
        );

        if ($constructorClassMethod !== null) {
            $constructorClassMethodData = $this->methodNamesByInputNamesResolver->resolveExpr($constructorClassMethod);
        }

        $callerType = $this->nodeTypeResolver->getStaticType($node->var);

        $createComponentClassMethodData = [];
        if ($callerType instanceof TypeWithClassName) {
            $createComponentClassMethod = $this->functionLikeParsedNodesFinder->findClassMethod(
                $createComponentClassMethodName,
                $callerType->getClassName()
            );

            if ($createComponentClassMethod !== null) {
                $createComponentClassMethodData = $this->methodNamesByInputNamesResolver->resolveExpr(
                    $createComponentClassMethod
                );
            }
        }

        return array_merge($constructorClassMethodData, $createComponentClassMethodData);
    }

    public function setResolver(MethodNamesByInputNamesResolver $methodNamesByInputNamesResolver): void
    {
        $this->methodNamesByInputNamesResolver = $methodNamesByInputNamesResolver;
    }

    private function createCreateComponentMethodName(MethodCall $methodCall): string
    {
        $firstArgumentValue = $methodCall->args[0]->value;

        return 'createComponent' . ucfirst($this->valueResolver->getValue($firstArgumentValue));
    }
}
