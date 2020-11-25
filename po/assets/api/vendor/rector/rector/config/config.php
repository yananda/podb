<?php

declare(strict_types=1);

use Rector\Core\Configuration\Option;
use Symfony\Component\DependencyInjection\Loader\Configurator\ContainerConfigurator;

return static function (ContainerConfigurator $containerConfigurator): void {
    $containerConfigurator->import(__DIR__ . '/../packages/**/config/config.*');

    $containerConfigurator->import(__DIR__ . '/../rules/**/config/config.*');

    $containerConfigurator->import(__DIR__ . '/services.php');

    $containerConfigurator->import(__DIR__ . '/parameters/parameter_name_guard.php');

    $containerConfigurator->import(__DIR__ . '/../utils/**/config/config.php', null, true);

    $parameters = $containerConfigurator->parameters();

    $parameters->set(Option::PATHS, []);

    $parameters->set(Option::FILE_EXTENSIONS, ['php']);

    $parameters->set(Option::EXCLUDE_PATHS, []);

    $parameters->set(Option::EXCLUDE_RECTORS, []);

    $parameters->set(Option::AUTOLOAD_PATHS, []);

    $parameters->set(Option::PROJECT_TYPE, 'proprietary');

    $parameters->set(Option::NESTED_CHAIN_METHOD_CALL_LIMIT, 30);

    $parameters->set(Option::AUTO_IMPORT_NAMES, false);

    $parameters->set(Option::IMPORT_SHORT_CLASSES, true);

    $parameters->set(Option::IMPORT_DOC_BLOCKS, true);

    $parameters->set(Option::PHP_VERSION_FEATURES, null);

    $parameters->set('safe_types', false);
};
