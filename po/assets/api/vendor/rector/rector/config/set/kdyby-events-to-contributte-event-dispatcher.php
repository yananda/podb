<?php

declare(strict_types=1);

use Rector\NetteKdyby\Rector\ClassMethod\ChangeNetteEventNamesInGetSubscribedEventsRector;
use Rector\NetteKdyby\Rector\ClassMethod\ReplaceMagicEventPropertySubscriberWithEventClassSubscriberRector;
use Rector\NetteKdyby\Rector\MethodCall\ReplaceEventManagerWithEventSubscriberRector;
use Rector\NetteKdyby\Rector\MethodCall\ReplaceMagicPropertyEventWithEventClassRector;
use Rector\Renaming\Rector\Class_\RenameClassRector;
use Symfony\Component\DependencyInjection\Loader\Configurator\ContainerConfigurator;

return static function (ContainerConfigurator $containerConfigurator): void {
    $services = $containerConfigurator->services();

    $services->set(ChangeNetteEventNamesInGetSubscribedEventsRector::class);

    $services->set(ReplaceMagicPropertyEventWithEventClassRector::class);

    $services->set(ReplaceMagicEventPropertySubscriberWithEventClassSubscriberRector::class);

    $services->set(ReplaceEventManagerWithEventSubscriberRector::class);

    $services->set(RenameClassRector::class)
        ->call('configure', [[
            RenameClassRector::OLD_TO_NEW_CLASSES => [
                'Kdyby\Events\Subscriber' => 'Symfony\Component\EventDispatcher\EventSubscriberInterface',
                'Kdyby\Events\EventManager' => 'Symfony\Contracts\EventDispatcher\EventDispatcherInterface',
            ],
        ]]);
};
