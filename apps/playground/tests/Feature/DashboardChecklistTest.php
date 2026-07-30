<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Http\Middleware\HandleInertiaRequests;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Artisan;
use PanelKit\Panel\Support\Abilities;
use PanelKit\Panel\Support\InstallationState;
use PanelKit\Panel\Support\SetupChecklist;
use Tests\TestCase;

/**
 * Roadmap 3.4: the dashboard checklist, driven by `panel:doctor` and
 * `InstallationState` rather than a fixed onboarding list.
 *
 * THE GATE IS TESTED THE SAME WAY OPERATIONS' OWN IS. This card surfaces the
 * exact findings that page does, so a user who cannot open Monitoring must
 * not receive them a different way, on a screen everybody opens.
 *
 * THE "STAYS VISIBLE" CLAIM IS THE ONE WORTH PROVING DIRECTLY, because it is
 * the one thing `panel:doctor` itself cannot do - a point-in-time command has
 * no memory of what it found last time, so a fixed problem simply stops
 * appearing, indistinguishable from one that was never there.
 */
final class DashboardChecklistTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenant;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenant = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);
    }

    /** @param list<string> $abilities */
    private function operator(array $abilities): User
    {
        return User::factory()
            ->withAbilities($abilities)
            ->create(['tenant_id' => $this->tenant->id, 'email_verified_at' => now()]);
    }

    private function inertiaHeaders(string $prop): array
    {
        return [
            'X-Inertia' => 'true',
            'X-Inertia-Version' => (string) (new HandleInertiaRequests)->version(request()),
            'X-Inertia-Partial-Component' => 'Dashboard',
            'X-Inertia-Partial-Data' => $prop,
        ];
    }

    /* ------------------------------------------------------------ the gate */

    public function test_a_user_without_view_operations_never_receives_the_checklist(): void
    {
        $user = $this->operator(array_values(array_diff(Abilities::all(), ['view_operations'])));

        $response = $this->actingAs($user)
            ->get('/dashboard', $this->inertiaHeaders('checklist'))
            ->assertOk();

        // Never registered, not merely empty - the controller adds no
        // `checklist` key at all for this user, so there is nothing for a
        // partial reload naming it to return.
        $this->assertNull($response->json('props.checklist'));
    }

    public function test_an_operator_with_view_operations_receives_a_checklist_array(): void
    {
        $user = $this->operator(['view_operations']);

        $response = $this->actingAs($user)
            ->get('/dashboard', $this->inertiaHeaders('checklist'))
            ->assertOk();

        $this->assertIsArray($response->json('props.checklist'));
    }

    /* --------------------------------------------------------- the content */

    /**
     * The undone half of the list is, by definition, whatever `panel:doctor`
     * currently calls a problem - computed independently here so the
     * assertion cannot pass by coincidence.
     */
    public function test_undone_items_match_what_doctor_currently_reports(): void
    {
        Artisan::call('panel:doctor', ['--json' => true]);
        $decoded = json_decode(Artisan::output(), true);

        $expectedTitles = collect(is_array($decoded) ? $decoded : [])
            ->where('level', 'problem')
            ->pluck('title')
            ->sort()
            ->values()
            ->all();

        $items = app(SetupChecklist::class)->items();

        $undoneTitles = collect($items)
            ->where('done', false)
            ->pluck('title')
            ->sort()
            ->values()
            ->all();

        $this->assertSame($expectedTitles, $undoneTitles);
    }

    /**
     * THE CLAIM THE WHOLE FEATURE RESTS ON. A problem `panel:doctor` reported
     * once and does not report now must still appear - marked done - rather
     * than vanishing as if it had never happened.
     */
    public function test_a_previously_seen_problem_stays_visible_once_resolved(): void
    {
        app(InstallationState::class)->put('checklist:doctor-findings', [
            'deadbeefcafef00d' => [
                'title' => 'A problem this installation has since fixed',
                'detail' => 'It used to be broken, in a way panel:doctor no longer sees.',
            ],
        ]);

        $items = app(SetupChecklist::class)->items();

        $match = collect($items)->firstWhere('key', 'deadbeefcafef00d');

        $this->assertNotNull($match, 'a previously-seen problem disappeared instead of showing as done');
        $this->assertTrue($match['done']);
        $this->assertSame('A problem this installation has since fixed', $match['title']);
    }

    /** Undone items are never trimmed by the done-tail cap - only resolved ones are. */
    public function test_the_done_tail_is_capped_but_open_problems_never_are(): void
    {
        $seeded = [];

        for ($i = 0; $i < 25; $i++) {
            $seeded["resolved-{$i}"] = ['title' => "Resolved problem {$i}", 'detail' => 'Fixed long ago.'];
        }

        app(InstallationState::class)->put('checklist:doctor-findings', $seeded);

        $items = app(SetupChecklist::class)->items();

        $done = collect($items)->where('done', true);

        $this->assertLessThanOrEqual(10, $done->count(), 'the done tail grew past its cap');
    }
}
