<?php

declare(strict_types=1);

namespace Rector\Privatization\Tests\Rector\ClassConst\PrivatizeLocalClassConstantRector;

use Iterator;
use Rector\Core\Testing\PHPUnit\AbstractRectorTestCase;
use Rector\Privatization\Rector\ClassConst\PrivatizeLocalClassConstantRector;
use Symplify\SmartFileSystem\SmartFileInfo;

final class PrivatizeLocalClassConstantRectorTest extends AbstractRectorTestCase
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
        return PrivatizeLocalClassConstantRector::class;
    }
}
