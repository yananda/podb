<?php

declare(strict_types=1);

namespace Rector\CodeQuality\Tests\Rector\FuncCall\StrlenZeroToIdenticalEmptyStringRector;

use Iterator;
use Rector\CodeQuality\Rector\FuncCall\StrlenZeroToIdenticalEmptyStringRector;
use Rector\Core\Testing\PHPUnit\AbstractRectorTestCase;
use Symplify\SmartFileSystem\SmartFileInfo;

final class StrlenZeroToIdenticalEmptyStringRectorTest extends AbstractRectorTestCase
{
    /**
     * @dataProvider provideData()
     */
    public function test(SmartFileInfo $fileInfo): void
    {
        $this->doTestFileInfo($fileInfo);
    }

    public function provideData(): Iterator
    {
        return $this->yieldFilesFromDirectory(__DIR__ . '/Fixture');
    }

    protected function getRectorClass(): string
    {
        return StrlenZeroToIdenticalEmptyStringRector::class;
    }
}
