<?php

declare(strict_types=1);

namespace Rector\Renaming\Rector\ConstFetch;

use PhpParser\Node;
use PhpParser\Node\Expr\ConstFetch;
use PhpParser\Node\Name;
use Rector\Core\Contract\Rector\ConfigurableRectorInterface;
use Rector\Core\Rector\AbstractRector;
use Rector\Core\RectorDefinition\CodeSample;
use Rector\Core\RectorDefinition\RectorDefinition;

/**
 * @see \Rector\Renaming\Tests\Rector\ConstFetch\RenameConstantRector\RenameConstantRectorTest
 */
final class RenameConstantRector extends AbstractRector implements ConfigurableRectorInterface
{
    /**
     * @var string
     */
    public const OLD_TO_NEW_CONSTANTS = '$oldToNewConstants';

    /**
     * @var string[]
     */
    private $oldToNewConstants = [];

    public function getDefinition(): RectorDefinition
    {
        return new RectorDefinition('Replace constant by new ones', [
            new CodeSample(
                <<<'PHP'
final class SomeClass
{
    public function run()
    {
        return MYSQL_ASSOC;
    }
}
PHP
                ,
                <<<'PHP'
final class SomeClass
{
    public function run()
    {
        return MYSQLI_ASSOC;
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
        return [ConstFetch::class];
    }

    /**
     * @param ConstFetch $node
     */
    public function refactor(Node $node): ?Node
    {
        foreach ($this->oldToNewConstants as $oldConstant => $newConstant) {
            if (! $this->isName($node, $oldConstant)) {
                continue;
            }

            $node->name = new Name($newConstant);
            break;
        }

        return $node;
    }

    public function configure(array $configuration): void
    {
        $this->oldToNewConstants = $configuration[self::OLD_TO_NEW_CONSTANTS] ?? [];
    }
}
