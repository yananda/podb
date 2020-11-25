<?php

declare(strict_types=1);

namespace Rector\Php70\Rector\Variable;

use PhpParser\Node;
use PhpParser\Node\Expr\PropertyFetch;
use PhpParser\Node\Expr\Variable;
use Rector\Core\Rector\AbstractRector;
use Rector\Core\RectorDefinition\CodeSample;
use Rector\Core\RectorDefinition\RectorDefinition;

/**
 * @see \Rector\Php70\Tests\Rector\Variable\WrapVariableVariableNameInCurlyBracesRector\WrapVariableVariableNameInCurlyBracesRectorTest
 * @see https://www.php.net/manual/en/language.variables.variable.php
 */
final class WrapVariableVariableNameInCurlyBracesRector extends AbstractRector
{
    public function getDefinition(): RectorDefinition
    {
        return new RectorDefinition('Ensure variable variables are wrapped in curly braces', [
            new CodeSample(
                <<<'PHP'
function run($foo)
{
    global $$foo->bar;
}
PHP
                ,
                <<<'PHP'
function run($foo)
{
    global ${$foo->bar};
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
        return [Variable::class];
    }

    /**
     * @param Variable $node
     */
    public function refactor(Node $node): ?Node
    {
        $nodeName = $node->name;

        if (! $nodeName instanceof PropertyFetch && ! $nodeName instanceof Variable) {
            return null;
        }

        if ($node->getEndTokenPos() !== $nodeName->getEndTokenPos()) {
            return null;
        }

        if ($nodeName instanceof PropertyFetch) {
            return new Variable(new PropertyFetch($nodeName->var, $nodeName->name));
        }

        if ($nodeName instanceof Variable) {
            return new Variable(new Variable($nodeName->name));
        }

        return null;
    }
}
