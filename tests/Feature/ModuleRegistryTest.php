<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Http\Middleware\EnsureModule;
use Alxtexh\Panel\Pages\PlanSetupPage;
use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Support\Module;
use Alxtexh\Panel\Support\ModuleRegistry;
use Alxtexh\Panel\Support\PanelNavigation;
use Alxtexh\Panel\Tests\Fixtures\Gated\GatedPostResource;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\Fixtures\Pages\CampaignsPage;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Request;

final class ModuleRegistryTest extends TestCase
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

        $this->actingAs($this->user);
    }

    public function test_registered_modules_are_enabled_until_grants_are_wired(): void
    {
        ModuleRegistry::register([
            Module::make('devices')->label('Devices'),
            ['key' => 'storage', 'label' => 'Storage'],
        ]);

        $this->assertTrue(moduleEnabled('devices'));
        $this->assertTrue(ModuleRegistry::enabled('storage'));
        $this->assertFalse(moduleEnabled('campaigns'));
        $this->assertFalse(ModuleRegistry::grantsAreSet());
    }

    public function test_a_grant_resolver_limits_what_is_enabled(): void
    {
        ModuleRegistry::register([
            ['key' => 'devices', 'label' => 'Devices'],
            ['key' => 'campaigns', 'label' => 'Campaigns'],
        ]);

        ModuleRegistry::grants(fn (): array => ['devices']);

        $this->assertTrue(moduleEnabled('devices'));
        $this->assertFalse(moduleEnabled('campaigns'));
        $this->assertSame(['devices'], ModuleRegistry::granted());
        $this->assertTrue(ModuleRegistry::grantsAreSet());
    }

    public function test_ensure_module_middleware_denies_an_ungranted_key(): void
    {
        ModuleRegistry::register([
            ['key' => 'devices', 'label' => 'Devices'],
        ]);
        ModuleRegistry::grants(fn (): array => []);

        $middleware = new EnsureModule;
        $request = Request::create('/devices', 'GET');

        $this->expectException(\Symfony\Component\HttpKernel\Exception\HttpException::class);

        $middleware->handle($request, fn () => response('ok'), 'devices');
    }

    public function test_plan_setup_defaults_modules_and_limits_from_the_registry(): void
    {
        ModuleRegistry::register([
            Module::make('campaigns')
                ->label('Campaigns')
                ->description('Outbound campaigns')
                ->planLimit(kind: 'number'),
            Module::make('beta')
                ->label('Beta')
                ->planLimit(kind: 'toggle', hint: 'Preview features'),
        ]);

        $page = new class extends PlanSetupPage
        {
            public static function plans(Request $request): array
            {
                return [];
            }
        };

        $this->assertSame('campaigns', $page::modules()[0]['key']);
        $this->assertSame('Campaigns', $page::limits()[0]['label']);
        $this->assertSame('toggle', $page::limits()[1]['kind']);
        $this->assertSame('Preview features', $page::limits()[1]['hint']);
    }

    public function test_an_ungranted_page_is_inaccessible_and_answers_403(): void
    {
        ModuleRegistry::register([
            Module::make('campaigns')->label('Campaigns'),
        ]);
        ModuleRegistry::grants(fn (): array => []);

        $this->assertFalse(CampaignsPage::isAccessible());

        $this->get('/campaigns')->assertForbidden();
    }

    public function test_nav_omits_an_ungranted_module_page_and_resource(): void
    {
        ModuleRegistry::register([
            Module::make('campaigns')->label('Campaigns'),
        ]);
        ModuleRegistry::grants(fn (): array => []);

        app(PanelManager::class)->registerResources([GatedPostResource::class], 'admin');

        $pageTitles = array_column(app(PanelManager::class)->panelPages('admin'), 'title');
        $this->assertNotContains('Campaigns', $pageTitles);

        $navKeys = array_column(PanelNavigation::build('admin'), 'key');
        $this->assertNotContains('gated-posts', $navKeys);
        $this->assertFalse(GatedPostResource::isAccessible());
    }

    public function test_a_granted_module_page_stays_in_nav(): void
    {
        ModuleRegistry::register([
            Module::make('campaigns')->label('Campaigns'),
        ]);
        ModuleRegistry::grants(fn (): array => ['campaigns']);

        $this->assertTrue(CampaignsPage::isAccessible());

        $pageTitles = array_column(app(PanelManager::class)->panelPages('admin'), 'title');
        $this->assertContains('Campaigns', $pageTitles);
    }

    public function test_minus_one_is_unlimited_and_skips_usage(): void
    {
        $usageCalls = 0;

        ModuleRegistry::register([
            Module::make('campaigns')
                ->label('Campaigns')
                ->planLimit(kind: 'number')
                ->usage(function () use (&$usageCalls): int {
                    $usageCalls++;

                    return 999;
                }),
        ]);
        ModuleRegistry::grants(fn (): array => ['campaigns']);
        ModuleRegistry::caps(fn (): array => ['campaigns' => -1]);

        $this->assertSame(-1, ModuleRegistry::limit('campaigns'));
        $this->assertTrue(ModuleRegistry::withinLimit('campaigns'));
        $this->assertSame(0, $usageCalls);
    }

    public function test_within_limit_compares_usage_to_the_cap(): void
    {
        ModuleRegistry::register([
            Module::make('campaigns')
                ->label('Campaigns')
                ->planLimit(kind: 'number')
                ->usage(fn (): int => 3),
        ]);
        ModuleRegistry::grants(fn (): array => ['campaigns']);
        ModuleRegistry::caps(fn (): array => ['campaigns' => 3]);

        $this->assertFalse(ModuleRegistry::withinLimit('campaigns'));

        ModuleRegistry::caps(fn (): array => ['campaigns' => 4]);

        $this->assertTrue(ModuleRegistry::withinLimit('campaigns'));
    }

    public function test_make_panel_module_writes_a_gated_page_and_prints_the_snippet(): void
    {
        $page = app_path('Panel/Pages/CampaignsPage.php');
        $vue = resource_path('js/pages/Campaigns.vue');

        @unlink($page);
        @unlink($vue);

        $this->artisan('make:panel-module', ['key' => 'campaigns', '--force' => true])
            ->expectsOutputToContain('Module::make')
            ->expectsOutputToContain('ModuleRegistry::grants')
            ->assertSuccessful();

        $this->assertFileExists($page);
        $contents = (string) file_get_contents($page);
        $this->assertStringContainsString("protected static ?string \$module = 'campaigns';", $contents);

        @unlink($page);
        @unlink($vue);
    }

    public function test_a_child_module_is_off_unless_its_parent_is_granted(): void
    {
        ModuleRegistry::register([
            Module::make('accounting')->label('Accounting')->children(['double-entry']),
            Module::make('double-entry')->label('Double entry')->requires(['accounting']),
        ]);
        ModuleRegistry::grants(fn (): array => ['double-entry']);

        $this->assertFalse(ModuleRegistry::enabled('double-entry'));
        $this->assertFalse(ModuleRegistry::enabled('accounting'));
        $this->assertSame([], ModuleRegistry::granted());
    }

    public function test_parent_and_child_are_on_when_granted_together(): void
    {
        ModuleRegistry::register([
            Module::make('accounting')->label('Accounting')->children(['double-entry']),
            Module::make('double-entry')->label('Double entry')->requires(['accounting']),
        ]);
        ModuleRegistry::grants(fn (): array => ['accounting', 'double-entry']);

        $this->assertTrue(ModuleRegistry::enabled('accounting'));
        $this->assertTrue(ModuleRegistry::enabled('double-entry'));
        $this->assertTrue(moduleEnabled('double-entry'));
    }

    public function test_apply_grants_expands_parents_and_runs_on_grant_once(): void
    {
        $calls = [];

        ModuleRegistry::register([
            Module::make('accounting')
                ->label('Accounting')
                ->children(['double-entry'])
                ->onGrant(function (mixed $org) use (&$calls): void {
                    $calls[] = ['accounting', $org];
                }),
            Module::make('double-entry')
                ->label('Double entry')
                ->requires(['accounting'])
                ->onGrant(function (mixed $org) use (&$calls): void {
                    $calls[] = ['double-entry', $org];
                }),
        ]);

        $first = ModuleRegistry::applyGrants('acme', ['double-entry']);

        $this->assertSame(['accounting', 'double-entry'], $first);
        $this->assertSame([['accounting', 'acme'], ['double-entry', 'acme']], $calls);

        ModuleRegistry::applyGrants('acme', ['accounting', 'double-entry'], $first);

        $this->assertCount(2, $calls);
    }

    public function test_plan_setup_save_expands_required_parents(): void
    {
        ModuleRegistry::register([
            Module::make('accounting')->label('Accounting')->children(['double-entry']),
            Module::make('double-entry')->label('Double entry')->requires(['accounting']),
        ]);

        $page = new class extends PlanSetupPage
        {
            public static mixed $captured = null;

            public static function plans(Request $request): array
            {
                return [];
            }

            public static function persist(array $plan): void
            {
                self::$captured = $plan;
            }
        };

        $request = Request::create('/settings/plans/save', 'POST', [
            'plan' => [
                'name' => 'Pro',
                'days' => 30,
                'price' => 9,
                'perks' => ['modules' => ['value' => ['double-entry']]],
            ],
        ]);
        $request->setUserResolver(fn () => $this->user);

        $page::save($request);

        $this->assertSame(
            ['accounting', 'double-entry'],
            $page::$captured['perks']['modules']['value'] ?? null,
        );
    }
}
