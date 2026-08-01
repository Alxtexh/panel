<?php

declare(strict_types=1);

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Artisan;
use PanelKit\Panel\Models\Role;
use PanelKit\Panel\PanelManager;
use PanelKit\Panel\Resources\Resource;
use PanelKit\Panel\Tables\Table;
use Tests\TestCase;

/**
 * Doctor notices the one permission setting that fails open.
 *
 * `teams => false` IS SPATIE'S DEFAULT and PanelKit's silent disaster. Nothing
 * throws, nothing is logged, and every screen looks correct - the permission
 * package simply stops filtering by the tenant column it was given, so a role
 * answers for every organisation at once. There is no request to find in a log
 * afterwards because every request succeeded.
 *
 * It is therefore exactly the class of fault a doctor exists for: invisible in
 * use, obvious to a check, and catastrophic in a multi-tenant panel.
 */
final class DoctorPermissionTeamsTest extends TestCase
{
    use RefreshDatabase;

    private function findings(): array
    {
        Artisan::call('panel:doctor', ['--json' => true]);

        return json_decode(Artisan::output(), true) ?? [];
    }

    private function titles(): array
    {
        return array_column($this->findings(), 'title');
    }

    public function test_it_reports_a_problem_when_teams_are_off_under_tenancy(): void
    {
        config(['permission.teams' => false, 'panel.tenancy.mode' => 'column']);

        $this->assertContains('Permissions are not tenant-scoped', $this->titles());
    }

    public function test_it_says_nothing_when_teams_are_on(): void
    {
        config(['permission.teams' => true, 'panel.tenancy.mode' => 'column']);

        $this->assertNotContains('Permissions are not tenant-scoped', $this->titles());
    }

    /** WITHOUT TENANCY THE DEFAULT IS CORRECT, so complaining would be noise. */
    public function test_it_says_nothing_in_a_single_tenant_installation(): void
    {
        config(['permission.teams' => false, 'panel.tenancy.mode' => 'none']);

        $this->assertNotContains('Permissions are not tenant-scoped', $this->titles());
    }

    /* ------------------------------------------------- the shadowed screen */

    /**
     * A RESOURCE KEYED `roles` TAKES THE URL, and nothing says so.
     *
     * Resource routes register before the package's own, and match `/roles`
     * through their `{resource}` placeholder - so the permission matrix is
     * simply absent, with no error and no 404. The way an operator finds out is
     * going to change somebody's permissions and arriving at a list of
     * something else.
     */
    public function test_it_reports_a_resource_that_hides_the_roles_screen(): void
    {
        config(['panel.routes.roles' => true]);

        /*
         * A REAL REGISTRATION, because PanelManager is final and a mock of it
         * would only prove that a mock returns what it was told to. Registering
         * an actual resource keyed `roles` is also exactly the situation the
         * check describes, so this cannot pass for a reason the product would not.
         */
        app(PanelManager::class)->registerResources([RolesShapedResource::class]);

        $this->assertContains('A resource keyed [roles] hides the permission matrix', $this->titles());
    }

    /** AN APPLICATION THAT MOUNTS ITS OWN HAS ALREADY ANSWERED - as this one has. */
    public function test_it_says_nothing_when_the_package_route_is_turned_off(): void
    {
        config(['panel.routes.roles' => false]);

        $this->assertNotContains('A resource keyed [roles] hides the permission matrix', $this->titles());
    }

    /** And the finding is a problem, so CI fails on it rather than logging it. */
    public function test_the_finding_is_a_problem_not_a_note(): void
    {
        config(['permission.teams' => false, 'panel.tenancy.mode' => 'column']);

        $finding = collect($this->findings())
            ->firstWhere('title', 'Permissions are not tenant-scoped');

        $this->assertNotNull($finding);
        $this->assertSame('problem', $finding['level']);
    }
}

/**
 * A resource that happens to be called `roles` - the collision this is about.
 *
 * DECLARED HERE, NOT IN THE APP. Registering one for real in the reference app
 * would make `/roles` ambiguous for the whole suite, which is the fault under
 * test rather than a fixture for it. It exists only inside the one test that
 * registers it.
 */
final class RolesShapedResource extends Resource
{
    public static function key(): string
    {
        return 'roles';
    }

    public static function model(): string
    {
        return Role::class;
    }

    // Never rendered - this exists to occupy the key, not to be a screen.
    public static function table(Table $table): Table
    {
        return $table;
    }
}
