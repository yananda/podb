<?php

declare(strict_types=1);

namespace Rector\Core\PhpParser\Printer;

use PhpParser\Node;
use Rector\Core\ValueObject\Application\ParsedStmtsAndTokens;
use Symplify\SmartFileSystem\SmartFileInfo;
use Symplify\SmartFileSystem\SmartFileSystem;

/**
 * @see \Rector\Core\Tests\PhpParser\Printer\FormatPerservingPrinterTest
 */
final class FormatPerservingPrinter
{
    /**
     * @var BetterStandardPrinter
     */
    private $betterStandardPrinter;

    /**
     * @var SmartFileSystem
     */
    private $smartFileSystem;

    public function __construct(BetterStandardPrinter $betterStandardPrinter, SmartFileSystem $smartFileSystem)
    {
        $this->betterStandardPrinter = $betterStandardPrinter;
        $this->smartFileSystem = $smartFileSystem;
    }

    /**
     * @param Node[] $newStmts
     * @param Node[] $oldStmts
     * @param Node[] $oldTokens
     */
    public function printToFile(SmartFileInfo $fileInfo, array $newStmts, array $oldStmts, array $oldTokens): string
    {
        $newContent = $this->printToString($newStmts, $oldStmts, $oldTokens);

        $this->smartFileSystem->dumpFile($fileInfo->getRealPath(), $newContent);
        $this->smartFileSystem->chmod($fileInfo->getRealPath(), $fileInfo->getPerms());

        return $newContent;
    }

    /**
     * @param Node[] $newStmts
     * @param Node[] $oldStmts
     * @param Node[] $oldTokens
     */
    public function printToString(array $newStmts, array $oldStmts, array $oldTokens): string
    {
        return $this->betterStandardPrinter->printFormatPreserving($newStmts, $oldStmts, $oldTokens);
    }

    public function printParsedStmstAndTokensToString(ParsedStmtsAndTokens $parsedStmtsAndTokens): string
    {
        return $this->betterStandardPrinter->printFormatPreserving($parsedStmtsAndTokens->getNewStmts(),
            $parsedStmtsAndTokens->getOldStmts(), $parsedStmtsAndTokens->getOldTokens());
    }

    public function printParsedStmstAndTokens(
        SmartFileInfo $smartFileInfo,
        ParsedStmtsAndTokens $parsedStmtsAndTokens
    ): string {
        return $this->printToFile(
            $smartFileInfo,
            $parsedStmtsAndTokens->getNewStmts(),
            $parsedStmtsAndTokens->getOldStmts(),
            $parsedStmtsAndTokens->getOldTokens()
        );
    }
}
