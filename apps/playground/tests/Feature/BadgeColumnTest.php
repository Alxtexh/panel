<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use InvalidArgumentException;
use Alxtexh\Panel\Models\Ticket;
use Alxtexh\Panel\Tables\Columns\BadgeColumn;
use Alxtexh\Panel\Ticketing\TicketResource;
use Tests\TestCase;

/**
 * Filament-style badge resolvers on the ticket queue.
 *
 * A badge is display until `->resolver()` (or `->inlineUpdate()`). The unread
 * pill stays display-only; status and priority opt in.
 */
final class BadgeColumnTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenant;

    private User $operator;

    private Ticket $ticket;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenant = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);

        config(['panel.tenancy.resolver' => fn () => $this->tenant->id]);

        $this->operator = User::factory()
            ->withAbilities(['view_any_tickets', 'view_tickets', 'update_tickets'])
            ->create(['tenant_id' => $this->tenant->id, 'email_verified_at' => now()]);

        $this->ticket = Ticket::query()->forceCreate([
            'tenant_id' => $this->tenant->id,
            'opened_by' => $this->operator->id,
            'subject' => 'Line down',
            'status' => Ticket::OPEN,
            'priority' => 'normal',
        ]);
    }

    public function test_a_badge_is_display_only_until_it_opts_in(): void
    {
        $plain = BadgeColumn::make('unread')->colors(['New' => 'danger'])->toArray();

        $this->assertSame('badge', $plain['type']);
        $this->assertArrayNotHasKey('resolver', $plain);
        $this->assertArrayNotHasKey('editable', $plain);

        $resolver = BadgeColumn::make('status')
            ->colors(['open' => 'warning', 'resolved' => 'success'])
            ->resolver()
            ->toArray();

        $this->assertTrue($resolver['resolver']);
        $this->assertTrue($resolver['editable']);
        $this->assertSame(['open' => 'Open', 'resolved' => 'Resolved'], $resolver['options']);
    }

    public function test_inline_update_is_an_alias_of_resolver(): void
    {
        $column = BadgeColumn::make('priority')->options(['low', 'urgent'])->inlineUpdate();

        $this->assertTrue($column->isResolver());
        $this->assertTrue($column->isInlineWritable());
    }

    public function test_a_resolver_without_options_or_colours_is_refused(): void
    {
        $this->expectException(InvalidArgumentException::class);

        BadgeColumn::make('status')->resolver()->toArray();
    }

    public function test_the_ticket_queue_opts_status_and_priority_in(): void
    {
        $columns = collect(TicketResource::schema()['table']['columns']);

        $status = $columns->firstWhere('key', 'status');
        $priority = $columns->firstWhere('key', 'priority');
        $unread = $columns->firstWhere('key', 'unread');

        $this->assertTrue($status['resolver'] ?? false);
        $this->assertTrue($priority['resolver'] ?? false);
        $this->assertArrayNotHasKey('resolver', $unread ?? []);
    }

    public function test_a_ticket_status_can_be_resolved_from_the_list(): void
    {
        $this->actingAs($this->operator)
            ->patchJson("/tickets/{$this->ticket->id}/cell", [
                'column' => 'status',
                'value' => Ticket::RESOLVED,
            ])
            ->assertOk()
            ->assertJson(['column' => 'status', 'value' => Ticket::RESOLVED]);

        $this->assertSame(Ticket::RESOLVED, $this->ticket->fresh()->status);
    }

    public function test_a_ticket_priority_can_be_resolved_from_the_list(): void
    {
        $this->actingAs($this->operator)
            ->patchJson("/tickets/{$this->ticket->id}/cell", [
                'column' => 'priority',
                'value' => 'urgent',
            ])
            ->assertOk();

        $this->assertSame('urgent', $this->ticket->fresh()->priority);
    }

    public function test_the_unread_badge_cannot_be_written(): void
    {
        $this->actingAs($this->operator)
            ->patchJson("/tickets/{$this->ticket->id}/cell", [
                'column' => 'unread',
                'value' => 'New',
            ])
            ->assertNotFound();
    }

    public function test_a_resolver_rejects_a_value_outside_its_map(): void
    {
        $this->actingAs($this->operator)
            ->patchJson("/tickets/{$this->ticket->id}/cell", [
                'column' => 'status',
                'value' => 'god',
            ])
            ->assertStatus(422);

        $this->assertSame(Ticket::OPEN, $this->ticket->fresh()->status);
    }
}
