<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Notifications\Notification;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

final class NotificationDatabaseChannelTest extends TestCase
{
    use RefreshDatabase;

    private User $user;

    protected function setUp(): void
    {
        parent::setUp();

        $tenant = Tenant::create(['name' => 'Mine', 'slug' => 'mine']);
        $this->user = User::create([
            'tenant_id' => $tenant->id,
            'name' => 'Operator',
            'email' => 'notif@example.test',
            'password' => 'password',
            'email_verified_at' => now(),
        ]);
    }

    public function test_send_to_database_writes_notification_row(): void
    {
        Notification::make()
            ->title('Invoice posted')
            ->body('INV-001 is ready')
            ->success()
            ->sendToDatabase($this->user);

        $this->assertDatabaseHas('notifications', [
            'notifiable_id' => $this->user->id,
        ]);

        $data = $this->user->notifications()->first()->data;

        $this->assertSame('Invoice posted', $data['title']);
        $this->assertSame('success', $data['severity']);
    }

    public function test_persist_is_alias_for_bell(): void
    {
        $notification = Notification::make()->title('Test')->persist();

        $this->assertInstanceOf(Notification::class, $notification);
    }

    public function test_send_with_bell_writes_to_current_user(): void
    {
        $this->actingAs($this->user);

        Notification::make()
            ->title('Saved')
            ->success()
            ->bell()
            ->send();

        $this->assertDatabaseHas('notifications', [
            'notifiable_id' => $this->user->id,
        ]);
    }
}
