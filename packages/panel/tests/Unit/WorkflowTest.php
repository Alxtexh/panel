<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Unit;

use Alxtexh\Panel\Tests\Fixtures\Models\Article;
use Alxtexh\Panel\Tests\TestCase;
use Alxtexh\Panel\Workflow\Transition;
use Alxtexh\Panel\Workflow\Workflow;

final class WorkflowTest extends TestCase
{
    public function test_workflow_builds_transition_map_and_actions(): void
    {
        $workflow = Workflow::make('status')
            ->model(Article::class)
            ->states([
                'draft' => ['label' => 'Draft', 'color' => 'neutral'],
                'published' => ['label' => 'Published', 'color' => 'success'],
            ])
            ->transitions([
                Transition::make('publish', 'Publish')
                    ->from(['draft'])
                    ->to('published')
                    ->authorize('update'),
            ]);

        $this->assertSame([
            'draft' => ['published'],
            'published' => [],
        ], $workflow->transitionsMap());

        $graph = $workflow->toGraph();
        $this->assertSame(['draft', 'published'], array_column($graph['nodes'], 'id'));
        $this->assertSame(['publish__draft'], array_column($graph['edges'], 'id'));

        $actions = $workflow->recordActions();
        $this->assertCount(1, $actions);
        $this->assertSame('publish', $actions[0]->getActions()[0]->key);
    }

    public function test_workflow_filters_actions_for_the_current_record(): void
    {
        $workflow = Workflow::make('status')
            ->model(Article::class)
            ->transitions([
                Transition::make('publish', 'Publish')
                    ->from(['draft'])
                    ->to('published'),
            ]);

        $allowed = $workflow->actionsForRecord(['status' => 'draft'], static fn (): bool => true);
        $blocked = $workflow->actionsForRecord(['status' => 'archived'], static fn (): bool => true);

        $this->assertSame(['publish'], array_column($allowed, 'key'));
        $this->assertSame([], $blocked);
    }
}
