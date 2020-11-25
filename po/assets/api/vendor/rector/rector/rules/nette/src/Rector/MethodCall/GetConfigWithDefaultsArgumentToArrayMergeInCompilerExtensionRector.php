<?php

declare(strict_types=1);

namespace Rector\Nette\Rector\MethodCall;

use PhpParser\Node;
use PhpParser\Node\Expr\MethodCall;
use PhpParser\Node\Expr\Variable;
use Rector\Core\Rector\AbstractRector;
use Rector\Core\RectorDefinition\CodeSample;
use Rector\Core\RectorDefinition\RectorDefinition;

/**
 * @see \Rector\Nette\Tests\Rector\MethodCall\GetConfigWithDefaultsArgumentToArrayMergeInCompilerExtensionRector\GetConfigWithDefaultsArgumentToArrayMergeInCompilerExtensionRectorTest
 */
final class GetConfigWithDefaultsArgumentToArrayMergeInCompilerExtensionRector extends AbstractRector
{
    public function getDefinition(): RectorDefinition
    {
        return new RectorDefinition('Change $this->getConfig($defaults) to array_merge', [
            new CodeSample(
                <<<'PHP'
use Nette\DI\CompilerExtension;

final class SomeExtension extends CompilerExtension
{
    private $defaults = [
        'key' => 'value'
    ];

    public function loadConfiguration()
    {
        $config = $this->getConfig($this->defaults);
    }
}
PHP
,
                <<<'PHP'
use Nette\DI\CompilerExtension;

final class SomeExtension extends CompilerExtension
{
    private $defaults = [
        'key' => 'value'
    ];

    public function loadConfiguration()
    {
        $config = array_merge($this->defaults, $this->getConfig());
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
        if (! $this->isOnClassMethodCall($node, 'Nette\DI\CompilerExtension', 'getConfig')) {
            return null;
        }

        if (count($node->args) !== 1) {
            return null;
        }

        $getConfigMethodCall = new MethodCall(new Variable('this'), 'getConfig');
        $firstArgValue = $node->args[0]->value;

        return $this->createFuncCall('array_merge', [$firstArgValue, $getConfigMethodCall]);
    }
}
