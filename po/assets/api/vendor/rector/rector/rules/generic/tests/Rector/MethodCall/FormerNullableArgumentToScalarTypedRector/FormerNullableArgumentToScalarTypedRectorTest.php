<?php

declare(strict_types=1);

namespace Rector\Generic\Tests\Rector\MethodCall\FormerNullableArgumentToScalarTypedRector;

use Iterator;
use Rector\Core\Testing\PHPUnit\AbstractRectorTestCase;
use Rector\Generic\Rector\MethodCall\FormerNullableArgumentToScalarTypedRector;
use Symplify\SmartFileSystem\SmartFileInfo;

final class FormerNullableArgumentToScalarTypedRectorTest extends AbstractRectorTestCase
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
        return FormerNullableArgumentToScalarTypedRector::class;
    }
}
