<?php

declare(strict_types=1);

namespace Rector\Generic\Rector\MethodCall;

use PhpParser\Node;
use PhpParser\Node\Arg;
use PhpParser\Node\Expr\MethodCall;
use PhpParser\Node\Expr\StaticCall;
use PhpParser\Node\Scalar\DNumber;
use PhpParser\Node\Scalar\LNumber;
use PhpParser\Node\Scalar\String_;
use PHPStan\Type\BooleanType;
use PHPStan\Type\FloatType;
use PHPStan\Type\IntegerType;
use PHPStan\Type\StringType;
use Rector\Core\Rector\AbstractRector;
use Rector\Core\RectorDefinition\CodeSample;
use Rector\Core\RectorDefinition\RectorDefinition;
use Rector\Generic\NodeTypeAnalyzer\CallTypeAnalyzer;

/**
 * @sponsor Thanks https://amateri.com for sponsoring this rule - visit them on https://www.startupjobs.cz/startup/scrumworks-s-r-o
 *
 * @see \Rector\Generic\Tests\Rector\MethodCall\FormerNullableArgumentToScalarTypedRector\FormerNullableArgumentToScalarTypedRectorTest
 */
final class FormerNullableArgumentToScalarTypedRector extends AbstractRector
{
    /**
     * @var CallTypeAnalyzer
     */
    private $callTypeAnalyzer;

    public function __construct(CallTypeAnalyzer $callTypeAnalyzer)
    {
        $this->callTypeAnalyzer = $callTypeAnalyzer;
    }

    public function getDefinition(): RectorDefinition
    {
        return new RectorDefinition('Change null in argument, that is now not nullable anymore', [
            new CodeSample(
                <<<'PHP'
final class SomeClass
{
    public function run()
    {
        $this->setValue(null);
    }

    public function setValue(string $value)
    {
    }
}
PHP
                ,
                <<<'PHP'
final class SomeClass
{
    public function run()
    {
        $this->setValue('');
    }

    public function setValue(string $value)
    {
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
        return [MethodCall::class, StaticCall::class];
    }

    /**
     * @param MethodCall|StaticCall $node
     */
    public function refactor(Node $node): ?Node
    {
        if (count($node->args) === 0) {
            return null;
        }

        $methodParameterTypes = $this->callTypeAnalyzer->resolveMethodParameterTypes($node);
        if ($methodParameterTypes === []) {
            return null;
        }

        foreach ($node->args as $key => $arg) {
            if (! $this->isNull($arg->value)) {
                continue;
            }

            /** @var int $key */
            $this->refactorArg($arg, $methodParameterTypes, $key);
        }

        return $node;
    }

    private function refactorArg(Arg $arg, array $methodParameterTypes, int $key): void
    {
        if (! isset($methodParameterTypes[$key])) {
            return;
        }

        $parameterType = $methodParameterTypes[$key];
        if ($parameterType instanceof StringType) {
            $arg->value = new String_('');
        }

        if ($parameterType instanceof IntegerType) {
            $arg->value = new LNumber(0);
        }

        if ($parameterType instanceof FloatType) {
            $arg->value = new DNumber(0);
        }

        if ($parameterType instanceof BooleanType) {
            $arg->value = $this->createFalse();
        }
    }
}
