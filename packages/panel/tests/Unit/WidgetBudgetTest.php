<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Unit;

use Alxtexh\Panel\Tests\TestCase;
use Alxtexh\Panel\Widgets\WidgetBudget;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

final class WidgetBudgetTest extends TestCase
{
    public function test_query_budget_warning_is_scoped_to_one_widget(): void
    {
        Log::spy();
        $this->app['config']->set('panel.widgets.query_budget', 1);

        $result = WidgetBudget::observe('StatWidget', 'slow', static function (): string {
            DB::select('select 1');
            DB::select('select 1');

            return 'value';
        });

        $this->assertSame('value', $result);
        Log::shouldHaveReceived('warning')
            ->once()
            ->withArgs(static function (string $message, array $context): bool {
                return $message === 'Panel widget exceeded its query budget.'
                    && $context['component'] === 'StatWidget'
                    && $context['widget'] === 'slow'
                    && $context['queries'] === 2
                    && $context['budget'] === 1;
            });
    }
}
