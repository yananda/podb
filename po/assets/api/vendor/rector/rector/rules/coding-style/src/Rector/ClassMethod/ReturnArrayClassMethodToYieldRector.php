<?php

declare(strict_types=1);

namespace Rector\CodingStyle\Rector\ClassMethod;

use Iterator;
use PhpParser\Comment;
use PhpParser\Node;
use PhpParser\Node\Expr\Array_;
use PhpParser\Node\Name\FullyQualified;
use PhpParser\Node\Stmt\ClassMethod;
use PhpParser\Node\Stmt\Return_;
use PHPStan\PhpDocParser\Ast\PhpDoc\ReturnTagValueNode;
use Rector\BetterPhpDocParser\PhpDocInfo\PhpDocInfo;
use Rector\Core\Contract\Rector\ConfigurableRectorInterface;
use Rector\Core\Exception\ShouldNotHappenException;
use Rector\Core\PhpParser\NodeTransformer;
use Rector\Core\Rector\AbstractRector;
use Rector\Core\RectorDefinition\ConfiguredCodeSample;
use Rector\Core\RectorDefinition\RectorDefinition;
use Rector\NodeTypeResolver\Node\AttributeKey;

/**
 * @see https://medium.com/tech-tajawal/use-memory-gently-with-yield-in-php-7e62e2480b8d
 * @see https://3v4l.org/5PJid
 *
 * @see \Rector\CodingStyle\Tests\Rector\ClassMethod\ReturnArrayClassMethodToYieldRector\ReturnArrayClassMethodToYieldRectorTest
 */
final class ReturnArrayClassMethodToYieldRector extends AbstractRector implements ConfigurableRectorInterface
{
    /**
     * @var string
     */
    public const METHODS_BY_TYPE = 'methods_by_type';

    /**
     * @var string[][]
     */
    private $methodsByType = [];

    /**
     * @var Comment[]
     */
    private $returnComments = [];

    /**
     * @var NodeTransformer
     */
    private $nodeTransformer;

    /**
     * @var PhpDocInfo|null
     */
    private $returnPhpDocInfo;

    public function __construct(NodeTransformer $nodeTransformer)
    {
        $this->nodeTransformer = $nodeTransformer;
    }

    public function getDefinition(): RectorDefinition
    {
        return new RectorDefinition('Turns array return to yield return in specific type and method', [
            new ConfiguredCodeSample(
                <<<'PHP'
class SomeEventSubscriber implements EventSubscriberInterface
{
    public static function getSubscribedEvents()
    {
        return ['event' => 'callback'];
    }
}
PHP
                ,
                <<<'PHP'
class SomeEventSubscriber implements EventSubscriberInterface
{
    public static function getSubscribedEvents()
    {
        yield 'event' => 'callback';
    }
}
PHP
                ,
                [
                    self::METHODS_BY_TYPE => [
                        'EventSubscriberInterface' => ['getSubscribedEvents'],
                    ],
                ]
            ),
        ]);
    }

    /**
     * @return string[]
     */
    public function getNodeTypes(): array
    {
        return [ClassMethod::class];
    }

    /**
     * @param ClassMethod $node
     */
    public function refactor(Node $node): ?Node
    {
        $hasChanged = false;
        foreach ($this->methodsByType as $type => $methods) {
            if (! $this->isObjectType($node, $type)) {
                continue;
            }

            foreach ($methods as $methodName) {
                if (! $this->isName($node, $methodName)) {
                    continue;
                }

                $arrayNode = $this->collectReturnArrayNodesFromClassMethod($node);
                if ($arrayNode === null) {
                    continue;
                }

                $this->transformArrayToYieldsOnMethodNode($node, $arrayNode);

                $this->completeComments($node);
                $hasChanged = true;
            }
        }

        if (! $hasChanged) {
            return null;
        }

        return $node;
    }

    public function configure(array $configuration): void
    {
        $this->methodsByType = $configuration[self::METHODS_BY_TYPE] ?? [];
    }

    private function collectReturnArrayNodesFromClassMethod(ClassMethod $classMethod): ?Array_
    {
        if ($classMethod->stmts === null) {
            return null;
        }

        foreach ($classMethod->stmts as $statement) {
            if ($statement instanceof Return_) {
                if (! $statement->expr instanceof Array_) {
                    continue;
                }

                $this->returnPhpDocInfo = $statement->getAttribute(AttributeKey::PHP_DOC_INFO);
                $this->returnComments = $statement->getComments();

                return $statement->expr;
            }
        }

        return null;
    }

    private function transformArrayToYieldsOnMethodNode(ClassMethod $classMethod, Array_ $array): void
    {
        $yieldNodes = $this->nodeTransformer->transformArrayToYields($array);

        // remove whole return node
        $parentNode = $array->getAttribute(AttributeKey::PARENT_NODE);
        if ($parentNode === null) {
            throw new ShouldNotHappenException();
        }

        $this->removeReturnTag($classMethod);

        // change return typehint
        $classMethod->returnType = new FullyQualified(Iterator::class);

        foreach ((array) $classMethod->stmts as $key => $classMethodStmt) {
            if (! $classMethodStmt instanceof Return_) {
                continue;
            }

            unset($classMethod->stmts[$key]);
        }

        $classMethod->stmts = array_merge((array) $classMethod->stmts, $yieldNodes);
    }

    private function completeComments(ClassMethod $classMethod): void
    {
        if ($this->returnPhpDocInfo === null && $this->returnComments === []) {
            return;
        }

        $classMethod->setAttribute(AttributeKey::PHP_DOC_INFO, $this->returnPhpDocInfo);
        $classMethod->setAttribute(AttributeKey::COMMENTS, $this->returnComments);
    }

    private function removeReturnTag(ClassMethod $classMethod): void
    {
        /** @var PhpDocInfo|null $phpDocInfo */
        $phpDocInfo = $classMethod->getAttribute(AttributeKey::PHP_DOC_INFO);
        if ($phpDocInfo !== null) {
            $phpDocInfo->removeByType(ReturnTagValueNode::class);
        }
    }
}
