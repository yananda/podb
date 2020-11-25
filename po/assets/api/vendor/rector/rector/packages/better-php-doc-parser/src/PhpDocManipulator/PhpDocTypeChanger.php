<?php

declare(strict_types=1);

namespace Rector\BetterPhpDocParser\PhpDocManipulator;

use PhpParser\Node\Param;
use PHPStan\Type\Constant\ConstantArrayType;
use PHPStan\Type\MixedType;
use PHPStan\Type\NeverType;
use PHPStan\Type\Type;
use Rector\AttributeAwarePhpDoc\Ast\PhpDoc\AttributeAwareReturnTagValueNode;
use Rector\AttributeAwarePhpDoc\Ast\PhpDoc\AttributeAwareVarTagValueNode;
use Rector\BetterPhpDocParser\PhpDocInfo\PhpDocInfo;
use Rector\NodeTypeResolver\PHPStan\TypeComparator;
use Rector\StaticTypeMapper\StaticTypeMapper;
use Rector\TypeDeclaration\PhpDocParser\ParamPhpDocNodeFactory;

final class PhpDocTypeChanger
{
    /**
     * @var TypeComparator
     */
    private $typeComparator;

    /**
     * @var StaticTypeMapper
     */
    private $staticTypeMapper;

    /**
     * @var ParamPhpDocNodeFactory
     */
    private $paramPhpDocNodeFactory;

    public function __construct(
        ParamPhpDocNodeFactory $paramPhpDocNodeFactory,
        StaticTypeMapper $staticTypeMapper,
        TypeComparator $typeComparator
    ) {
        $this->typeComparator = $typeComparator;
        $this->staticTypeMapper = $staticTypeMapper;
        $this->paramPhpDocNodeFactory = $paramPhpDocNodeFactory;
    }

    public function changeVarType(PhpDocInfo $phpDocInfo, Type $newType): void
    {
        // make sure the tags are not identical, e.g imported class vs FQN class
        if ($this->typeComparator->areTypesEquals($phpDocInfo->getVarType(), $newType)) {
            return;
        }

        // prevent existing type override by mixed
        if (! $phpDocInfo->getVarType() instanceof MixedType && $newType instanceof ConstantArrayType && $newType->getItemType() instanceof NeverType) {
            return;
        }

        // override existing type
        $newPHPStanPhpDocType = $this->staticTypeMapper->mapPHPStanTypeToPHPStanPhpDocTypeNode($newType);

        $currentVarTagValueNode = $phpDocInfo->getVarTagValue();
        if ($currentVarTagValueNode !== null) {
            // only change type
            $currentVarTagValueNode->type = $newPHPStanPhpDocType;
        } else {
            // add completely new one
            $attributeAwareVarTagValueNode = new AttributeAwareVarTagValueNode($newPHPStanPhpDocType, '', '');
            $phpDocInfo->addTagValueNode($attributeAwareVarTagValueNode);
        }
    }

    public function changeReturnType(PhpDocInfo $phpDocInfo, Type $newType): void
    {
        // make sure the tags are not identical, e.g imported class vs FQN class
        if ($this->typeComparator->areTypesEquals($phpDocInfo->getReturnType(), $newType)) {
            return;
        }

        // override existing type
        $newPHPStanPhpDocType = $this->staticTypeMapper->mapPHPStanTypeToPHPStanPhpDocTypeNode($newType);

        $currentReturnTagValueNode = $phpDocInfo->getReturnTagValue();
        if ($currentReturnTagValueNode !== null) {
            // only change type
            $currentReturnTagValueNode->type = $newPHPStanPhpDocType;
        } else {
            // add completely new one
            $attributeAwareReturnTagValueNode = new AttributeAwareReturnTagValueNode($newPHPStanPhpDocType, '');
            $phpDocInfo->addTagValueNode($attributeAwareReturnTagValueNode);
        }
    }

    public function changeParamType(PhpDocInfo $phpDocInfo, Type $type, Param $param, string $paramName): void
    {
        $paramTagValueNode = $phpDocInfo->getParamTagValueByName($paramName);

        $phpDocType = $this->staticTypeMapper->mapPHPStanTypeToPHPStanPhpDocTypeNode($type);

        // override existing type
        if ($paramTagValueNode !== null) {
            $paramTagValueNode->type = $phpDocType;
            return;
        }

        $paramTagValueNode = $this->paramPhpDocNodeFactory->create($type, $param);

        $phpDocInfo->addTagValueNode($paramTagValueNode);
    }
}
