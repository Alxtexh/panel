<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Support\Locale;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * Kit screens speak through `panel::*` keys, not hardcoded English only.
 */
final class LocalizationTest extends TestCase
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
            'email' => 'operator@example.test',
            'password' => 'password',
            'email_verified_at' => now(),
        ]);
    }

    public function test_package_lang_files_exist_for_all_shipped_locales(): void
    {
        foreach (['en', 'es', 'fr', 'de', 'ar'] as $locale) {
            foreach (Locale::groups() as $group) {
                $this->assertFileExists(
                    Locale::packageLangPath().'/'.$locale.'/'.$group.'.php',
                    "Missing {$locale}/{$group}.php",
                );
            }
        }

        $this->assertContains('en', Locale::available());
        $this->assertContains('es', Locale::available());
        $this->assertContains('fr', Locale::available());
        $this->assertContains('de', Locale::available());
        $this->assertContains('ar', Locale::available());
        $this->assertContains('chrome', Locale::groups());
    }

    public function test_the_suspended_screen_uses_translation_keys(): void
    {
        $this->assertSame('Subscription access', __('panel::billing.heading'));

        app()->setLocale('es');

        $this->assertSame('Acceso de suscripcion', __('panel::billing.heading'));
        $this->assertNotSame('Subscription access', __('panel::billing.heading'));

        app(PanelManager::class)->panel('admin')
            ->billingState(fn (): array => ['status' => 'suspended']);

        $props = $this->actingAs($this->user)
            ->get('/account/suspended')
            ->assertOk()
            ->viewData('page')['props'];

        $this->assertSame(__('panel::billing.heading'), $props['pageHeading']);
        $this->assertSame(__('panel::billing.status.suspended'), $props['statusLabel']);
        $this->assertSame(__('panel::billing.title.suspended'), $props['title']);
    }

    public function test_kit_screens_call_translation_helpers(): void
    {
        $vue = (string) file_get_contents(
            dirname(__DIR__, 2).'/resources/client/inertia/pages/BillingSuspended.vue'
        );

        $this->assertStringContainsString("t('billing.heading')", $vue);
        $this->assertStringContainsString("t('billing.title.limited')", $vue);
        $this->assertStringNotContainsString('Subscription access is limited', $vue);

        $php = (string) file_get_contents(
            dirname(__DIR__, 2).'/src/Support/BillingAccess.php'
        );

        $this->assertStringContainsString("__('panel::billing.", $php);

        $messages = Locale::messages('en');

        $this->assertSame('Subscription access', $messages['billing']['heading'] ?? null);
        $this->assertSame('You have no grants', $messages['grants']['empty']['title'] ?? null);
        $this->assertSame('Profile', $messages['chrome']['account']['profile'] ?? null);

        $menu = (string) file_get_contents(
            dirname(__DIR__, 2).'/resources/client/inertia/components/shell/DefaultAccountMenuItems.vue'
        );

        $this->assertStringContainsString("t('chrome.account.profile')", $menu);
        $this->assertStringContainsString("t('chrome.account.logout')", $menu);
    }

    public function test_shared_props_include_messages_and_locale(): void
    {
        $props = $this->actingAs($this->user)
            ->get('/posts')
            ->assertOk()
            ->viewData('page')['props'];

        $this->assertSame('en', $props['locale']['current'] ?? null);
        $this->assertSame('ltr', $props['locale']['direction'] ?? null);

        $this->assertSame('rtl', Locale::direction('ar'));
        $this->assertSame('rtl', Locale::direction('ar-EG'));
        $this->assertTrue(Locale::isRtl('ar'));
        $this->assertSame('Subscription access', $props['messages']['billing']['heading'] ?? null);
    }
}
