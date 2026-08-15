<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Inertia;
use Alxtexh\Panel\Auth\Impersonation;
use Alxtexh\Panel\Http\Middleware\SharePanelProps;
use Alxtexh\Panel\Panel;
use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Support\PanelNavigation;
use Tests\TestCase;

/**
 * The props every panel screen needs, and the one that was dead code.
 *
 * WHY THIS FILE EXISTS. `panelPages()` and the resource registry have always
 * been available server-side and nothing handed them to Inertia, so every
 * consuming application wrote its own middleware - rebuilding the sidebar, the
 * panel prefix and the ability filter, each differently. This pins the packaged
 * version so a port has something to rely on rather than something to copy.
 */
final class SharedPanelPropsTest extends TestCase
{
    use RefreshDatabase;

    /**
     * `Panel::colors()` WAS DEFINED, RESOLVED AND CALLED FROM NOWHERE.
     *
     * A configuration method that silently does nothing is worse than an absent
     * one: an installation sets a palette, sees no change, and has no way to
     * tell a broken feature from a misunderstanding of the API. It was reported
     * from a real port, and this is the assertion that stops it recurring -
     * `resolveColors()` having a caller is the whole point.
     *
     * WITHOUT THE `--color-` PREFIX, and that distinction is not cosmetic.
     * `@theme` declares `--color-primary: var(--primary)`, which Tailwind
     * resolves at BUILD time, so `bg-primary` compiles to `var(--primary)`.
     * Sending the prefixed name sets a property nothing reads - which is
     * exactly how per-tenant branding shipped for a release, storing, resolving
     * and applying colours that rendered nowhere.
     */
    public function test_a_panels_colours_are_shared_with_the_client(): void
    {
        app(PanelManager::class)->registerPanel(
            Panel::make('paletteprobe')
                ->path('paletteprobe')
                ->guard('web')
                ->middleware(['web'])
                ->colors(fn (): array => ['primary' => 'oklch(0.5 0.2 250)']),
        );

        $shared = $this->sharedFor('paletteprobe');

        $this->assertSame(
            ['primary' => 'oklch(0.5 0.2 250)'],
            $shared['panel']['colors'],
            'Panel::colors() resolves to nothing on the client, so configuring a palette does nothing.',
        );
    }

    public function test_the_page_footer_links_are_shared_from_config(): void
    {
        config(['panel.footer.links' => [
            ['label' => 'Privacy', 'href' => '/privacy'],
            ['not-a-link' => true],
        ]]);

        $shared = $this->sharedFor('admin');

        $this->assertSame(
            [['label' => 'Privacy', 'href' => '/privacy']],
            $shared['panel']['footerLinks'],
        );
        $this->assertNotEmpty($shared['name']);
    }

    /**
     * THE SIDEBAR CARRIES THIS PANEL'S PREFIX, which is the half that fails
     * silently.
     *
     * The operator portal usually sits at the root, so a bare `/clients` link
     * works and nothing looks wrong. A generated portal is mounted under its own
     * path, where the same link points at a route that does not exist - and the
     * menu happily renders it.
     */
    public function test_navigation_hrefs_carry_the_panels_prefix(): void
    {
        $tenant = Tenant::query()->first() ?? Tenant::create(['name' => 'Acme', 'slug' => 'acme']);

        $this->actingAs(
            User::factory()->withAbilities(['view_any_reseller_plans'])
                ->create(['tenant_id' => $tenant->getKey(), 'email_verified_at' => now()]),
        );

        foreach (PanelNavigation::build('reseller') as $item) {
            $this->assertStringStartsWith(
                '/reseller/',
                $item['href'],
                "[{$item['key']}] links outside its own portal, to a route that portal does not mount.",
            );
        }
    }

    /**
     * AND NOTHING FROM ANOTHER PANEL APPEARS. Without the current-panel filter a
     * reseller's screens turn up in the operator's sidebar, advertising other
     * people's portals.
     */
    public function test_navigation_contains_only_this_panels_screens(): void
    {
        $keys = array_column(PanelNavigation::build('reseller'), 'key');

        $this->assertNotContains('clients', $keys);
        $this->assertNotContains('routers', $keys);
    }

    /**
     * THE IMPERSONATION BANNER'S DATA, which is null on every ordinary request.
     *
     * That is the assertion worth having: the key is shared unconditionally, so
     * if it ever became truthy by default every panel in every installation
     * would wear an amber warning claiming somebody else is signed in.
     */
    public function test_nothing_is_shared_about_impersonation_when_nobody_is(): void
    {
        $this->assertNull($this->sharedFor('admin')['impersonating']);
    }

    /**
     * AND WHEN SOMEBODY IS, IT NAMES THEM AND WHERE TO STOP.
     *
     * `Impersonation` has been in the package since v0.2 and nothing packaged
     * ever displayed it - so an installation could switch into an account with
     * no indication anywhere that it had.
     */
    public function test_an_active_impersonation_is_shared_with_a_stop_url(): void
    {
        $tenant = Tenant::create(['name' => 'Acme', 'slug' => 'acme-imp']);

        config(['panel.tenancy.resolver' => fn () => $tenant->getKey()]);

        $actor = User::factory()->create([
            'tenant_id' => $tenant->getKey(),
            'name' => 'Grace Wanjiru',
            'email_verified_at' => now(),
        ]);

        $target = User::factory()->create([
            'tenant_id' => $tenant->getKey(),
            'name' => 'Amina Achieng',
            'email_verified_at' => now(),
        ]);

        // The middleware reads a SESSION fact, so the request under test needs
        // one - the same `web` session a real panel request always has.
        $this->startSession();
        request()->setLaravelSession(app('session.store'));

        $this->actingAs($actor);

        app(Impersonation::class)->start($actor, $target);

        $shared = $this->sharedFor('admin')['impersonating'];

        $this->assertSame('Grace Wanjiru', $shared['name']);

        // The reference app routes `impersonate.stop`; the shell posts wherever
        // the server says, exactly as sign-out does.
        $this->assertSame(url('/impersonate-stop'), $shared['stopUrl']);
    }

    /**
     * APP-OWNED OPERATIONS ROUTES MUST SHARE THE SAME SHELL PROPS as packaged
     * pages. They used to skip SharePanelProps, so Backups/Logs/Monitoring
     * arrived without `panel.help` or `panelIdleLock`: the footer vanished,
     * the account menu shrank to Trash, and the header padlock never rendered.
     */
    public function test_operations_pages_share_the_shell_props(): void
    {
        $tenant = Tenant::query()->first() ?? Tenant::create(['name' => 'Acme', 'slug' => 'acme']);

        $user = User::factory()->withAbilities(['view_operations'])->create([
            'tenant_id' => $tenant->id,
            'email_verified_at' => now(),
        ]);

        foreach (['/operations/backups', '/operations/logs', '/operations/monitoring'] as $url) {
            $props = $this->actingAs($user)
                ->get($url)
                ->assertOk()
                ->viewData('page')['props'];

            $this->assertNotEmpty(
                $props['panel']['help'] ?? null,
                "{$url} did not share panel.help, so the sidebar footer would vanish.",
            );
            $this->assertNotEmpty(
                $props['panel']['account'] ?? null,
                "{$url} did not share panel.account, so Profile would vanish from the menu.",
            );
            $this->assertNotEmpty(
                $props['panel']['logout'] ?? null,
                "{$url} did not share panel.logout.",
            );
            $this->assertNotEmpty(
                $props['panelIdleLock']['lockUrl'] ?? null,
                "{$url} did not share panelIdleLock, so the header padlock would hide.",
            );
        }
    }

    /** @return array<string, mixed> */
    private function sharedFor(string $panelId): array
    {
        app(PanelManager::class)->usePanel($panelId);

        (new SharePanelProps)->handle(request(), static fn () => response(''));

        return array_map(
            static fn (mixed $value): mixed => is_callable($value) ? $value() : $value,
            Inertia::getShared(),
        );
    }
}
