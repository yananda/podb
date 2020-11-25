<?php

declare(strict_types=1);

namespace Rector\SOLID\Tests\Rector\Property\ChangeReadOnlyPropertyWithDefaultValueToConstantRector;

use Iterator;
use Rector\Core\Testing\PHPUnit\AbstractRectorTestCase;
use Rector\SOLID\Rector\Property\ChangeReadOnlyPropertyWithDefaultValueToConstantRector;
use Symplify\SmartFileSystem\SmartFileInfo;

final class ChangeReadOnlyPropertyWithDefaultValueToConstantRectorTest extends AbstractRectorTestCase
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
        return ChangeReadOnlyPropertyWithDefaultValueToConstantRector::class;
    }
}
