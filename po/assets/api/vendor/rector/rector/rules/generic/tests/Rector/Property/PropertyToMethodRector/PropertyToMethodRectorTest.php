<?php

declare(strict_types=1);

namespace Rector\Generic\Tests\Rector\Property\PropertyToMethodRector;

use Iterator;
use Rector\Core\Testing\PHPUnit\AbstractRectorTestCase;
use Rector\Generic\Rector\Property\PropertyToMethodRector;
use Rector\Generic\Tests\Rector\Property\PropertyToMethodRector\Source\Translator;
use Symplify\SmartFileSystem\SmartFileInfo;

final class PropertyToMethodRectorTest extends AbstractRectorTestCase
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

    /**
     * @return mixed[]
     */
    protected function getRectorsWithConfiguration(): array
    {
        return [
            PropertyToMethodRector::class => [
                PropertyToMethodRector::PER_CLASS_PROPERTY_TO_METHODS => [
                    Translator::class => [
                        'locale' => [
                            'get' => 'getLocale',
                            'set' => 'setLocale',
                        ],
                    ],
                    'Rector\Generic\Tests\Rector\Property\PropertyToMethodRector\Fixture\SomeClassWithParameters' => [
                        'parameter' => [
                            'get' => [
                                'method' => 'getConfig',
                                'arguments' => ['parameter'],
                            ],
                        ],
                    ],
                ],
            ],
        ];
    }
}
