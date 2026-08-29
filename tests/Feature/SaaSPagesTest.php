<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Api\ApiToken;
use Alxtexh\Panel\Pages\ApiKeysPage;
use Alxtexh\Panel\Pages\FeatureFlagsPage;
use Alxtexh\Panel\Pages\InvitePage;
use Alxtexh\Panel\Panel;
use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

final class SaaSPagesTest extends TestCase
{
    use RefreshDatabase;

    public function test_saas_pages_are_off_until_apps_enabled(): void
    {
        $this->assertFalse(ApiKeysPage::isEnabled());
        $this->assertFalse(InvitePage::isEnabled());
        $this->assertFalse(FeatureFlagsPage::isEnabled());
    }

    public function test_panel_apps_opt_in_saas_screens(): void
    {
        $panel = Panel::make('demo')->apps(['api-keys', 'invites', 'feature-flags']);

        $this->assertTrue($panel->offersApp('api-keys'));
        $this->assertTrue($panel->offersApp('invites'));
        $this->assertTrue($panel->offersApp('feature-flags'));
        $this->assertFalse($panel->offersApp('webhooks'));
    }

    public function test_api_keys_page_serializes_empty_keys_without_tenant(): void
    {
        $request = Request::create('/apps/api-keys');

        $data = ApiKeysPage::data($request);

        $this->assertSame([], $data['keys']);
        $this->assertNull($data['plaintext']);
    }

    public function test_api_keys_issue_and_revoke_use_api_token(): void
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

        $request = Request::create('/apps/api-keys');

        $this->assertSame([], ApiKeysPage::keys($request));

        $issued = ApiKeysPage::issue([
            'name' => 'CI token',
            'abilities' => ['view_any_articles'],
        ]);

        $this->assertStringStartsWith('pk_', $issued['plaintext']);

        $keys = ApiKeysPage::keys($request);
        $this->assertCount(1, $keys);
        $this->assertSame('CI token', $keys[0]['name']);

        ApiKeysPage::revoke((string) $keys[0]['id']);

        $this->assertSame([], ApiKeysPage::keys($request));
        $this->assertNull(ApiToken::findFor($issued['plaintext']));
    }

    public function test_invite_page_serializes_empty_pending(): void
    {
        $request = Request::create('/apps/invites');

        $data = InvitePage::data($request);

        $this->assertStringContainsString('{token}', $data['acceptUrlPattern']);
        $this->assertSame([], $data['pending']);
        $this->assertSame([], $data['roles']);
    }

    public function test_invite_send_validates_email_and_role_shape(): void
    {
        $request = Request::create('/apps/invites/send', 'POST', [
            'email' => 'not-an-email',
        ]);

        $this->expectException(ValidationException::class);

        InvitePage::submit($request);
    }

    public function test_feature_flags_serializes_from_tenancy_config(): void
    {
        config([
            'panel.tenancy.features' => static fn (): array => [
                'beta_ui' => true,
                'legacy_api' => false,
            ],
        ]);

        $request = Request::create('/apps/feature-flags');

        $data = FeatureFlagsPage::data($request);

        $this->assertSame([
            ['name' => 'beta_ui', 'enabled' => true, 'description' => null],
            ['name' => 'legacy_api', 'enabled' => false, 'description' => null],
        ], $data['flags']);
    }

    public function test_onboarding_page_serializes_chrome_steps_until_dismissed(): void
    {
        app(PanelManager::class)->panel('admin')->onboarding();

        $request = \Illuminate\Http\Request::create('/get-started');

        $data = \Alxtexh\Panel\Pages\OnboardingPage::data($request);

        $this->assertNotEmpty($data['steps']);
        $this->assertContains('organisation', array_column($data['steps'], 'key'));
        $this->assertFalse($data['dismissed']);
    }

    public function test_billing_portal_serializes_empty(): void
    {
        $request = Request::create('/account/billing');

        $data = \Alxtexh\Panel\Pages\BillingPortalPage::data($request);

        $this->assertNull($data['subscription']);
        $this->assertSame([], $data['invoices']);
        $this->assertSame([], $data['paymentMethods']);
        $this->assertSame([
            'pay_now' => ['label' => 'Pay now', 'href' => null],
            'update_method' => ['label' => 'Update payment method', 'href' => null],
            'view_invoices' => ['label' => 'View invoices', 'href' => null],
            'contact_billing' => ['label' => 'Contact billing', 'href' => null],
        ], $data['billingActions']);
    }

    public function test_media_library_serializes_empty_items_and_action_hrefs(): void
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

        $request = Request::create('/files/media-library');

        $data = \Alxtexh\Panel\Pages\MediaLibraryPage::data($request);

        $this->assertSame([], $data['items']);
        $this->assertSame('', $data['folder']);
        $this->assertSame([], $data['folders']);
        $this->assertStringEndsWith('/files/media-library/upload', $data['uploadHref']);
        $this->assertStringEndsWith('/files/media-library/move', $data['moveHref']);
        $this->assertStringEndsWith('/files/media-library/delete', $data['deleteHref']);
    }

    public function test_email_templates_serializes_empty_and_send_test_href(): void
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

        $request = Request::create('/apps/email-templates');

        $data = \Alxtexh\Panel\Pages\EmailTemplatePage::data($request);

        $this->assertSame([], $data['templates']);
        $this->assertNull($data['selected']);
        $this->assertStringEndsWith('/apps/email-templates/send-test', $data['sendTestHref']);
    }

    public function test_webhooks_and_media_apps_opt_in(): void
    {
        $panel = Panel::make('demo')->webhooks()->apps(['media-library', 'onboarding']);

        $this->assertTrue($panel->offersApp('webhooks'));
        $this->assertTrue($panel->offersApp('media-library'));
        $this->assertTrue($panel->offersApp('onboarding'));
    }
}
