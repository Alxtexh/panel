<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Actions\Action;
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
        $this->actingAs($this->operator());

        Notification::make()->title('Saved')->success()->send();

        $this->assertPanelToast('Saved');
        $this->assertArrayNotHasKey('actions', session('toast'));
    }

    public function test_payload_includes_action_hrefs(): void
    {
        Notification::make()
            ->title('Invoice posted')
            ->success()
            ->actions([
                Action::make('view')->url('/invoices/12'),
                Action::make('download')->url('/invoices/12.pdf')->openUrlInNewTab(),
                Action::make('approve')->url('/invoices/12/approve')->method('post'),
            ])
            ->send();

        $toast = session('toast');

        $this->assertPanelToast('Invoice posted');
        $this->assertSame([
            [
                'key' => 'view',
                'label' => 'View',
                'href' => '/invoices/12',
            ],
            [
                'key' => 'download',
                'label' => 'Download',
                'href' => '/invoices/12.pdf',
                'newTab' => true,
            ],
            [
                'key' => 'approve',
                'label' => 'Approve',
                'href' => '/invoices/12/approve',
                'method' => 'post',
            ],
        ], $toast['actions']);
    }

    public function test_bell_json_renders_action_hrefs(): void
    {
        $user = $this->operator();
        $this->actingAs($user);

        Notification::make()
            ->title('Invoice posted')
            ->success()
            ->actions([
                Action::make('view')->url('/invoices/12'),
                Action::make('download')->url('/invoices/12.pdf')->openUrlInNewTab(),
            ])
            ->bell()
            ->send();

        $this->getJson('/notifications')
            ->assertOk()
            ->assertJsonPath('notifications.0.title', 'Invoice posted')
            ->assertJsonPath('notifications.0.actions.0.href', '/invoices/12')
            ->assertJsonPath('notifications.0.actions.1.href', '/invoices/12.pdf')
            ->assertJsonPath('notifications.0.actions.1.newTab', true);
    }

    public function test_bell_also_writes_bell_text(): void
    {
        NotificationFacade::fake();

        $user = $this->operator();
        $this->actingAs($user);

        Notification::make()->title('Ready')->body('Exported.')->success()->bell()->send();

        $this->assertPanelToast('Ready');
        NotificationFacade::assertSentTo($user, BellText::class);
    }

    public function test_channels_database_and_mail_without_toast(): void
    {
        NotificationFacade::fake();

        $user = $this->operator();
        $this->actingAs($user);

        Notification::make()
            ->title('Export finished')
            ->body('Your CSV is ready.')
            ->success()
            ->channels(['database', 'mail'])
            ->send();

        $this->assertNull(session('toast'));
        NotificationFacade::assertSentTo($user, BellText::class);
        NotificationFacade::assertSentTo($user, \Alxtexh\Panel\Notifications\PanelMailText::class);
    }

    public function test_channels_respects_toast_preference(): void
    {
        $user = $this->operator();
        $this->actingAs($user);

        \Illuminate\Support\Facades\DB::table('panel_notification_preferences')->insert([
            'user_id' => $user->getKey(),
            'category' => 'exports',
            'toast_enabled' => false,
            'digest_enabled' => false,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        Notification::make()
            ->title('Export finished')
            ->category('exports')
            ->success()
            ->channels(['toast', 'database'])
            ->send();

        $this->assertNull(session('toast'));
    }

    public function test_danger_maps_to_an_error_toast(): void
    {
        Notification::make()->title('Nope')->danger()->send();

        $this->assertPanelToast('Nope', 'error');
    }

    private function operator(): User
    {
        $tenant = Tenant::create(['name' => 'Mine', 'slug' => 'mine']);

        return User::create([
            'tenant_id' => $tenant->id,
            'name' => 'Operator',
            'email' => 'operator@example.test',
            'password' => 'password',
            'email_verified_at' => now(),
        ]);
    }
}
