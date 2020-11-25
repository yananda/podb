<?php

declare(strict_types=1);

namespace Rector\Symfony\Tests\Rector\MethodCall\CascadeValidationFormBuilderRector;

use Iterator;
use Rector\Core\Testing\PHPUnit\AbstractRectorTestCase;
use Rector\Symfony\Rector\MethodCall\CascadeValidationFormBuilderRector;
use Symplify\SmartFileSystem\SmartFileInfo;

final class CascadeValidationFormBuilderRectorTest extends AbstractRectorTestCase
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
        return CascadeValidationFormBuilderRector::class;
    }
}
