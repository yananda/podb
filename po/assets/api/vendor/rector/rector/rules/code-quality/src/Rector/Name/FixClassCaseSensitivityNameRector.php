<?php

declare(strict_types=1);

namespace Rector\CodeQuality\Rector\Name;

use PhpParser\Node;
use PhpParser\Node\Expr\ClassConstFetch;
use PhpParser\Node\Name;
use PhpParser\Node\Name\FullyQualified;
use PhpParser\Node\Param;
use PhpParser\Node\Stmt\UseUse;
use PHPStan\Reflection\ReflectionProvider;
use Rector\Core\Rector\AbstractRector;
use Rector\Core\RectorDefinition\CodeSample;
use Rector\Core\RectorDefinition\RectorDefinition;
use Rector\NodeTypeResolver\Node\AttributeKey;

/**
 * Mostly mimics source from
 * @see https://github.com/phpstan/phpstan-src/blob/master/src/Rules/ClassCaseSensitivityCheck.php
 *
 * @see \Rector\CodeQuality\Tests\Rector\Name\FixClassCaseSensitivityNameRector\FixClassCaseSensitivityNameRectorTest
 */
final class FixClassCaseSensitivityNameRector extends AbstractRector
{
    /**
     * @var ReflectionProvider
     */
    private $reflectionProvider;

    public function __construct(ReflectionProvider $reflectionProvider)
    {
        $this->reflectionProvider = $reflectionProvider;
    }

    public function getDefinition(): RectorDefinition
    {
        return new RectorDefinition('Change miss-typed case sensitivity name to correct one', [
            new CodeSample(
                <<<'PHP'
final class SomeClass
{
    public function run()
    {
        $anotherClass = new anotherclass;
    }
}

final class AnotherClass
{
}
PHP
,
                <<<'PHP'
final class SomeClass
{
    public function run()
    {
        $anotherClass = new AnotherClass;
    }
}

final class AnotherClass
{
}
PHP
            ),
        ]);
    }

    /**
     * @return string[]
     */
    public function getNodeTypes(): array
    {
        return [Name::class];
    }

    /**
     * @param Name $node
     */
    public function refactor(Node $node): ?Node
    {
        $fullyQualifiedName = $this->resolveFullyQualifiedName($node);
        if ($fullyQualifiedName === null) {
            return null;
        }

        if (! $this->reflectionProvider->hasClass($fullyQualifiedName)) {
            return null;
        }

        $classReflection = $this->reflectionProvider->getClass($fullyQualifiedName);
        if ($classReflection->isBuiltin()) {
            // skip built-in classes
            return null;
        }

        $realClassName = $classReflection->getName();
        if (strtolower($realClassName) !== strtolower($fullyQualifiedName)) {
            // skip class alias
            return null;
        }

        if ($realClassName === $fullyQualifiedName) {
            return null;
        }

        $parent = $node->getAttribute(AttributeKey::PARENT_NODE);

        // do not FQN use imports
        if ($parent instanceof UseUse) {
            return new Name($realClassName);
        }

        return new FullyQualified($realClassName);
    }

    private function resolveFullyQualifiedName(Name $name): string
    {
        $parent = $name->getAttribute(AttributeKey::PARENT_NODE);
        // for some reason, Param gets already corrected name
        if (! $parent instanceof Param && ! $parent instanceof ClassConstFetch) {
            return $this->getName($name);
        }

        /** @var Name|null $originalName */
        $originalName = $name->getAttribute(AttributeKey::ORIGINAL_NAME);
        if ($originalName === null) {
            return $this->getName($name);
        }

        // replace parts from the old one
        $originalReversedParts = array_reverse($originalName->parts);
        $resolvedReversedParts = array_reverse($name->parts);

        $mergedReversedParts = $originalReversedParts + $resolvedReversedParts;
        $mergedParts = array_reverse($mergedReversedParts);

        return implode('\\', $mergedParts);
    }
}
