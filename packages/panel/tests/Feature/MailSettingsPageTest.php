<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Http\PanelRoutes;
use Alxtexh\Panel\Pages\MailSettingsPage;
use Alxtexh\Panel\Panel;
use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Support\Abilities;
use Alxtexh\Panel\Support\SmtpSettings;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;

final class MailSettingsPageTest extends TestCase
{
    use RefreshDatabase;

    public function test_smtp_settings_are_off_until_enabled(): void
    {
        $this->assertFalse(MailSettingsPage::isEnabled());
        $this->assertFalse(Panel::make('alone')->offersMailSettings());
    }

    public function test_mail_settings_shorthand_opts_in(): void
    {
        $panel = Panel::make('ops')->mailSettings();

        $this->assertTrue($panel->offersMailSettings());
    }

    public function test_manage_mail_settings_is_a_panel_ability(): void
    {
        $this->assertContains('manage_mail_settings', Abilities::PANEL);
        $this->assertArrayHasKey('manage_mail_settings', Abilities::PANEL_LABELS);
    }

    public function test_route_registers_when_mail_settings_is_enabled(): void
    {
        $panels = app(PanelManager::class);
        $admin = $panels->panel('admin');
        $this->assertNotNull($admin);
        $admin->mailSettings();

        $this->resetPageDiscovery($panels);

        $this->assertTrue(MailSettingsPage::isEnabled());
        $this->assertArrayHasKey('mail-settings', $panels->pagesFor('admin'));

        PanelRoutes::register($admin);

        $pageRoute = collect(Route::getRoutes())->first(
            static fn (\Illuminate\Routing\Route $route): bool => $route->uri() === 'settings/smtp',
        );
        $testRoute = collect(Route::getRoutes())->first(
            static fn (\Illuminate\Routing\Route $route): bool => $route->uri() === 'settings/smtp/test',
        );

        $this->assertNotNull($pageRoute);
        $this->assertSame($admin->getRouteName().'pages.mail-settings', $pageRoute->getName());
        $this->assertNotNull($testRoute);
        $this->assertSame($admin->getRouteName().'pages.mail-settings.test', $testRoute->getName());
    }

    public function test_page_data_reports_the_unconfigured_state(): void
    {
        $admin = app(PanelManager::class)->panel('admin');
        $this->assertNotNull($admin);
        $admin->mailSettings();

        $data = MailSettingsPage::data(Request::create('/settings/smtp'));

        $this->assertFalse($data['configured']);
        $this->assertNull($data['maskedPassword']);
        $this->assertSame('/settings/smtp/test', $data['routes']['test']);
    }

    public function test_save_persists_and_a_blank_password_keeps_the_stored_one(): void
    {
        $tenant = Tenant::create(['name' => 'Mine', 'slug' => 'mine']);
        config(['panel.tenancy.resolver' => static fn (): int => $tenant->id]);

        User::create([
            'tenant_id' => $tenant->id,
            'name' => 'Operator',
            'email' => 'operator@example.test',
            'password' => 'password',
            'email_verified_at' => now(),
        ]);

        $this->actingAs(User::first());

        MailSettingsPage::save(Request::create('/settings/smtp', 'PUT', [
            'host' => 'smtp.example.test',
            'port' => 587,
            'encryption' => 'tls',
            'username' => 'mailer',
            'password' => 'first-secret',
            'from_address' => 'noreply@example.test',
            'from_name' => 'Example App',
        ]));

        $settings = app(SmtpSettings::class);
        $this->assertTrue($settings->configured());
        $this->assertSame('first-secret', $settings->password());
        $this->assertStringEndsWith('cret', (string) $settings->maskedPassword());

        // A resave with the password field left blank must not clear it -
        // the form never receives the stored secret to resubmit.
        MailSettingsPage::save(Request::create('/settings/smtp', 'PUT', [
            'host' => 'smtp.example.test',
            'port' => 2525,
            'encryption' => 'tls',
            'username' => 'mailer',
            'password' => '',
            'from_address' => 'noreply@example.test',
            'from_name' => 'Example App',
        ]));

        $settings = app(SmtpSettings::class);
        $this->assertSame(2525, $settings->config()['port']);
        $this->assertSame('first-secret', $settings->password());
    }

    public function test_test_action_sends_to_the_signed_in_user_and_reports_ok(): void
    {
        Mail::fake();

        $tenant = Tenant::create(['name' => 'Mine', 'slug' => 'mine']);
        config(['panel.tenancy.resolver' => static fn (): int => $tenant->id]);

        User::create([
            'tenant_id' => $tenant->id,
            'name' => 'Operator',
            'email' => 'operator@example.test',
            'password' => 'password',
            'email_verified_at' => now(),
        ]);

        $this->actingAs(User::first());

        $response = MailSettingsPage::test(Request::create('/settings/smtp/test', 'POST', [
            'host' => 'smtp.example.test',
            'port' => 587,
            'encryption' => 'tls',
            'username' => 'mailer',
            'password' => 'a-password',
            'from_address' => 'noreply@example.test',
            'from_name' => 'Example App',
        ]));

        $payload = $response->getData(true);

        $this->assertTrue($payload['ok']);
        $this->assertStringContainsString('operator@example.test', $payload['message']);
    }

    public function test_test_action_requires_the_signed_in_user_to_have_an_email(): void
    {
        $tenant = Tenant::create(['name' => 'Mine', 'slug' => 'mine']);
        config(['panel.tenancy.resolver' => static fn (): int => $tenant->id]);

        $user = User::create([
            'tenant_id' => $tenant->id,
            'name' => 'Operator',
            'email' => 'operator@example.test',
            'password' => 'password',
            'email_verified_at' => now(),
        ]);

        $this->actingAs($user);

        // In memory only, never persisted - the fixture's `email` column is
        // NOT NULL, and the point of this test is the guard clause, not a
        // row that could not exist in a real installation.
        $user->email = null;

        $this->expectException(\Symfony\Component\HttpKernel\Exception\HttpException::class);

        MailSettingsPage::test(Request::create('/settings/smtp/test', 'POST', [
            'host' => 'smtp.example.test',
            'port' => 587,
            'encryption' => null,
            'username' => null,
            'password' => 'a-password',
            'from_address' => 'noreply@example.test',
            'from_name' => 'Example App',
        ]));
    }

    private function resetPageDiscovery(PanelManager $panels): void
    {
        $ref = new \ReflectionClass($panels);

        foreach (['pagesDiscovered' => false, 'pages' => [], 'panelPageMap' => []] as $property => $value) {
            $prop = $ref->getProperty($property);
            $prop->setAccessible(true);
            $prop->setValue($panels, $value);
        }
    }
}
