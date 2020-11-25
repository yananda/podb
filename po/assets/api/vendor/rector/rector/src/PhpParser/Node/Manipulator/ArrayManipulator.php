<?php

declare(strict_types=1);

namespace Rector\Core\PhpParser\Node\Manipulator;

use PhpParser\Node\Expr\Array_;
use PhpParser\Node\Expr\ArrayItem;
use PhpParser\Node\Scalar;
use PhpParser\Node\Scalar\String_;
use Rector\ChangesReporting\Collector\RectorChangeCollector;

final class ArrayManipulator
{
    /**
     * @var RectorChangeCollector
     */
    private $rectorChangeCollector;

    public function __construct(RectorChangeCollector $rectorChangeCollector)
    {
        $this->rectorChangeCollector = $rectorChangeCollector;
    }

    public function isArrayOnlyScalarValues(Array_ $array): bool
    {
        foreach ($array->items as $arrayItem) {
            if ($arrayItem->value instanceof Array_) {
                if (! $this->isArrayOnlyScalarValues($arrayItem->value)) {
                    return false;
                }

                continue;
            }

            if ($arrayItem->value instanceof Scalar) {
                continue;
            }

            return false;
        }

        return true;
    }

    public function addItemToArrayUnderKey(Array_ $array, ArrayItem $newArrayItem, string $key): void
    {
        foreach ($array->items as $item) {
            if ($this->hasKeyName($item, $key)) {
                if (! $item->value instanceof Array_) {
                    continue;
                }

                $item->value->items[] = $newArrayItem;
                return;
            }
        }

        $array->items[] = new ArrayItem(new Array_([$newArrayItem]), new String_($key));
    }

    public function findItemInInArrayByKeyAndUnset(Array_ $array, string $keyName): ?ArrayItem
    {
        foreach ($array->items as $i => $item) {
            if (! $this->hasKeyName($item, $keyName)) {
                continue;
            }

            // remove + recount for the printer
            $removedArrayItem = $array->items[$i];
            unset($array->items[$i]);
            $this->rectorChangeCollector->notifyNodeFileInfo($removedArrayItem);

            return $item;
        }

        return null;
    }

    public function hasKeyName(ArrayItem $arrayItem, string $name): bool
    {
        return $arrayItem->key instanceof String_ && $arrayItem->key->value === $name;
    }
}
