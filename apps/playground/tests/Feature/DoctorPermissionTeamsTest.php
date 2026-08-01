<?php

declare(strict_types=1);

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Artisan;
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
