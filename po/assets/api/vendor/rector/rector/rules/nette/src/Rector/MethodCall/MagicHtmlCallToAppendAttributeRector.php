<?php

declare(strict_types=1);

namespace Rector\Nette\Rector\MethodCall;

use PhpParser\Node;
use PhpParser\Node\Arg;
use PhpParser\Node\Expr\MethodCall;
use PhpParser\Node\Identifier;
use PhpParser\Node\Scalar\String_;
use Rector\Core\Rector\AbstractRector;
use Rector\Core\RectorDefinition\CodeSample;
use Rector\Core\RectorDefinition\RectorDefinition;

/**
 * @see https://github.com/nette/utils/commit/75abe7c6aa472fd023aa49ba1a4d6c6eca0eaaa6
 * @see https://github.com/nette/utils/issues/88
 *
 * @see \Rector\Nette\Tests\Rector\MethodCall\MagicHtmlCallToAppendAttributeRector\MagicHtmlCallToAppendAttributeRectorTest
 */
final class MagicHtmlCallToAppendAttributeRector extends AbstractRector
{
    public function getDefinition(): RectorDefinition
    {
        return new RectorDefinition('Change magic addClass() etc. calls on Html to explicit methods', [
            new CodeSample(
                <<<'PHP'
use Nette\Utils\Html;

final class SomeClass
{
    public function run()
    {
        $html = Html::el();
        $html->setClass('first');
    }
}
PHP

                ,
                <<<'PHP'
use Nette\Utils\Html;

final class SomeClass
{
    public function run()
    {
        $html = Html::el();
        $html->appendAttribute('class', 'first');
    }
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
        return [MethodCall::class];
    }

    /**
     * @param MethodCall $node
     */
    public function refactor(Node $node): ?Node
    {
        if (! $this->isObjectType($node->var, 'Nette\Utils\Html')) {
            return null;
        }

        // @todo posibly extends by more common names
        if ($this->isName($node->name, 'setClass')) {
            $node->name = new Identifier('appendAttribute');

            $args = array_merge([new Arg(new String_('class'))], $node->args);
            $node->args = $args;

            return $node;
        }

        return null;
    }
}
