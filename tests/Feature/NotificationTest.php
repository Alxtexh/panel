<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Notifications\BellText;
use Alxtexh\Panel\Notifications\Notification;
use Alxtexh\Panel\Testing\InteractsWithPanels;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Notification as NotificationFacade;

/**
 * Filament-shaped Notification::make() maps onto Inertia toast flash.
 */
final class NotificationTest extends TestCase
{
    use InteractsWithPanels;
    use RefreshDatabase;

    public function test_send_flashes_an_inertia_toast(): void
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

        Notification::make()->title('Saved')->success()->send();

        $this->assertPanelToast('Saved');
    }

    public function test_bell_also_writes_bell_text(): void
    {
        NotificationFacade::fake();

        $tenant = Tenant::create(['name' => 'Mine', 'slug' => 'mine']);
        $user = User::create([
            'tenant_id' => $tenant->id,
            'name' => 'Operator',
            'email' => 'operator@example.test',
            'password' => 'password',
            'email_verified_at' => now(),
        ]);

        $this->actingAs($user);

        Notification::make()->title('Ready')->body('Exported.')->success()->bell()->send();

        $this->assertPanelToast('Ready');
        NotificationFacade::assertSentTo($user, BellText::class);
    }

    public function test_danger_maps_to_an_error_toast(): void
    {
        Notification::make()->title('Nope')->danger()->send();

        $this->assertPanelToast('Nope', 'error');
    }
}
