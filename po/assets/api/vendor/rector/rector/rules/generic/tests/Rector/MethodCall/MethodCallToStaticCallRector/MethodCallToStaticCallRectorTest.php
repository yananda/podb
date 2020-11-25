<?php

declare(strict_types=1);

namespace Rector\Generic\Tests\Rector\MethodCall\MethodCallToStaticCallRector;

use Iterator;
use Rector\Core\Testing\PHPUnit\AbstractRectorTestCase;
use Rector\Generic\Rector\MethodCall\MethodCallToStaticCallRector;
use Symplify\SmartFileSystem\SmartFileInfo;

final class MethodCallToStaticCallRectorTest extends AbstractRectorTestCase
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

    protected function getRectorsWithConfiguration(): array
    {
        return [
            MethodCallToStaticCallRector::class => [
                MethodCallToStaticCallRector::METHOD_CALLS_TO_STATIC_CALLS => [
                    AnotherDependency::class => [
                        'process' => ['StaticCaller', 'anotherMethod'],
                    ],
                ],
            ],
        ];
    }
}
