<?php

declare(strict_types=1);

namespace Rector\SOLID\Tests\Rector\Class_\RepeatedLiteralToClassConstantRector;

use Iterator;
use Rector\Core\Testing\PHPUnit\AbstractRectorTestCase;
use Rector\SOLID\Rector\Class_\RepeatedLiteralToClassConstantRector;
use Symplify\SmartFileSystem\SmartFileInfo;

final class RepeatedLiteralToClassConstantRectorTest extends AbstractRectorTestCase
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
        return RepeatedLiteralToClassConstantRector::class;
    }
}
