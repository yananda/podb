<?php

declare(strict_types=1);

namespace Rector\Symfony\Rector\New_;

use PhpParser\Node;
use PhpParser\Node\Expr\MethodCall;
use PhpParser\Node\Expr\New_;
use PhpParser\Node\Identifier;
use PhpParser\Node\Scalar\String_;
use Rector\Core\Rector\AbstractRector;
use Rector\Core\RectorDefinition\CodeSample;
use Rector\Core\RectorDefinition\RectorDefinition;
use Rector\NodeTypeResolver\Node\AttributeKey;

/**
 * @see https://github.com/symfony/symfony/pull/27476
 * @see \Rector\Symfony\Tests\Rector\New_\RootNodeTreeBuilderRector\RootNodeTreeBuilderRectorTest
 */
final class RootNodeTreeBuilderRector extends AbstractRector
{
    public function getDefinition(): RectorDefinition
    {
        return new RectorDefinition('Changes  Process string argument to an array', [
            new CodeSample(
                <<<'PHP'
use Symfony\Component\Config\Definition\Builder\TreeBuilder;

$treeBuilder = new TreeBuilder();
$rootNode = $treeBuilder->root('acme_root');
$rootNode->someCall();
PHP
                ,
                <<<'PHP'
use Symfony\Component\Config\Definition\Builder\TreeBuilder;

$treeBuilder = new TreeBuilder('acme_root');
$rootNode = $treeBuilder->getRootNode();
$rootNode->someCall();
PHP
            ),
        ]);
    }

    /**
     * @return string[]
     */
    public function getNodeTypes(): array
    {
        return [New_::class];
    }

    /**
     * @param New_ $node
     */
    public function refactor(Node $node): ?Node
    {
        if (! $this->isObjectType($node->class, 'Symfony\Component\Config\Definition\Builder\TreeBuilder')) {
            return null;
        }

        if (isset($node->args[1])) {
            return null;
        }

        /** @var MethodCall|null $rootMethodCallNode */
        $rootMethodCallNode = $this->getRootMethodCallNode($node);
        if ($rootMethodCallNode === null) {
            return null;
        }

        $rootNameNode = $rootMethodCallNode->args[0]->value;
        if (! $rootNameNode instanceof String_) {
            return null;
        }

        // switch arguments
        [$node->args, $rootMethodCallNode->args] = [$rootMethodCallNode->args, $node->args];

        $rootMethodCallNode->name = new Identifier('getRootNode');

        return $node;
    }

    private function getRootMethodCallNode(Node $node): ?Node
    {
        $expression = $node->getAttribute(AttributeKey::CURRENT_STATEMENT);
        if ($expression === null) {
            return null;
        }

        $nextExpression = $expression->getAttribute(AttributeKey::NEXT_NODE);
        if ($nextExpression === null) {
            return null;
        }

        return $this->betterNodeFinder->findFirst([$nextExpression], function (Node $node): bool {
            if (! $node instanceof MethodCall) {
                return false;
            }

            if (! $this->isObjectType($node->var, 'Symfony\Component\Config\Definition\Builder\TreeBuilder')) {
                return false;
            }

            if (! $this->isName($node->name, 'root')) {
                return false;
            }
            return isset($node->args[0]);
        });
    }
}
