<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Tables\Columns\TextColumn;
use Alxtexh\Panel\Tables\Filters\BooleanFilter;
use Alxtexh\Panel\Tables\Filters\DateRangeFilter;
use Alxtexh\Panel\Tables\Filters\Indicator;
use Alxtexh\Panel\Tables\Filters\SelectFilter;
use Alxtexh\Panel\Tables\Table;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * Active filters as chips: one per applied filter, clearable, from the same
 * query string the toolbar already writes.
 */
final class FilterIndicatorTest extends TestCase
{
    use RefreshDatabase;

    public function test_a_select_filter_becomes_a_chip_on_the_list(): void
    {
        $this->signInToTenant();

        $this->get('/articles?status=published')
            ->assertOk()
            ->assertInertia(fn ($page) => $page
                ->has('indicators', 1)
                ->where('indicators.0.key', 'status')
                ->where('indicators.0.label', 'Status: published')
                ->where('indicators.0.removable', true));
    }

    public function test_idle_filters_produce_no_chips(): void
    {
        $this->signInToTenant();

        $this->get('/articles')
            ->assertOk()
            ->assertInertia(fn ($page) => $page->where('indicators', []));
    }

    public function test_indicate_using_can_rename_or_split_chips(): void
    {
        $filter = SelectFilter::make('status')
            ->options(['draft', 'published'])
            ->indicateUsing(fn (mixed $value): array => [
                Indicator::make('Only '.$value)->removeField('status'),
            ]);

        $this->assertSame(
            [['key' => 'status', 'label' => 'Only published', 'removable' => true]],
            $filter->indicators('published'),
        );
        $this->assertSame([], $filter->indicators(null));
    }

    public function test_boolean_and_date_range_chips_use_their_labels(): void
    {
        $active = BooleanFilter::make('active')->labels('On', 'Off');
        $this->assertSame('Availability: On', $active->label('Availability')->indicators(true)[0]['label']);
        $this->assertSame('Availability: Off', $active->indicators(false)[0]['label']);

        $raised = DateRangeFilter::make('created_at')->label('Raised');
        $value = $raised->normalise('this_month');
        $this->assertSame('Raised: This month', $raised->indicators($value)[0]['label']);
    }

    public function test_view_state_still_round_trips_the_filter_the_chip_clears(): void
    {
        $table = Table::make()
            ->columns([TextColumn::make('title')->sortable()])
            ->filters([
                SelectFilter::make('status')->options(['draft', 'published']),
            ]);

        $state = \Alxtexh\Panel\Tables\ViewState::sanitize(
            ['filters' => ['status' => 'published', 'secret' => 'nope']],
            $table,
        );

        $this->assertSame(['status' => 'published'], $state['filters']);
    }

    private function signInToTenant(): void
    {
        $tenant = Tenant::create(['name' => 'Mine', 'slug' => 'mine']);

        $user = User::create([
            'tenant_id' => $tenant->id,
            'name' => 'Operator',
            'email' => 'operator@example.test',
            'password' => 'password',
            'email_verified_at' => now(),
        ]);

        $this->actingAs($user);
    }
}
