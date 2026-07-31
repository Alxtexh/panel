<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Http\Middleware\HandleInertiaRequests;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Storage;
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

        /*
         * NO CHECKLIST TEST MAY DEPEND ON THIS MACHINE'S DISK. The checklist
         * renders `panel:doctor`'s findings, and doctor now reads the real
         * backup destination - so without this, every assertion here about a
         * quiet checklist starts failing three days after somebody's last
         * local backup. A suite that goes red because of the calendar is the
         * worst kind of flake: the diff explains nothing.
         */
        /*
         * A DISK OF OUR OWN, not a fake of whichever one is configured.
         * Faking the configured disk still leaves spatie resolving the
         * destination through its own registry, which found the real files;
         * naming a disk that exists only for this test is the version that
         * cannot see them.
         */
        Storage::fake('doctor-test');
        config(['backup.backup.destination.disks' => ['doctor-test']]);

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

    /** A checklist with deterministic open problems, via the class's test seam. */
    private function checklistReporting(array $problems): SetupChecklist
    {
        return new SetupChecklist(app(InstallationState::class), static fn (): array => $problems);
    }

    /**
     * THE CLAIM THE WHOLE FEATURE RESTS ON, amended: a resolved problem stays
     * visible - marked done - WHILE something else is still outstanding.
     * "Two fixed, one to go" is progress; the outstanding item is what makes
     * the card worth showing at all.
     */
    public function test_a_previously_seen_problem_stays_visible_while_another_is_open(): void
    {
        app(InstallationState::class)->put('checklist:doctor-findings', [
            'deadbeefcafef00d' => [
                'title' => 'A problem this installation has since fixed',
                'detail' => 'It used to be broken, in a way panel:doctor no longer sees.',
            ],
        ]);

        $items = $this->checklistReporting([
            'stillbroken00001' => ['title' => 'Something is still wrong', 'detail' => 'Genuinely.'],
        ])->items();

        $match = collect($items)->firstWhere('key', 'deadbeefcafef00d');

        $this->assertNotNull($match, 'a previously-seen problem disappeared instead of showing as done');
        $this->assertTrue($match['done']);
        $this->assertSame('A problem this installation has since fixed', $match['title']);
    }

    /**
     * ONCE NOTHING IS OUTSTANDING, THE CARD IS GONE. A setup guide's job is
     * to get you to a working installation and then get out of the way -
     * struck-through history on every dashboard load, forever, is noise.
     * The widget already hides itself on an empty array; this is the server
     * sending one.
     */
    public function test_the_checklist_is_empty_once_every_problem_is_resolved(): void
    {
        app(InstallationState::class)->put('checklist:doctor-findings', [
            'deadbeefcafef00d' => [
                'title' => 'A problem this installation has since fixed',
                'detail' => 'Long gone.',
            ],
        ]);

        $this->assertSame([], $this->checklistReporting([])->items());

        // The history is persistence, not presentation: the next real problem
        // brings the resolved context back with it.
        $items = $this->checklistReporting([
            'freshproblem0001' => ['title' => 'A brand new problem', 'detail' => 'Just appeared.'],
        ])->items();

        $this->assertNotNull(collect($items)->firstWhere('key', 'deadbeefcafef00d'));
        $this->assertNotNull(collect($items)->firstWhere('key', 'freshproblem0001'));
    }

    /** Undone items are never trimmed by the done-tail cap - only resolved ones are. */
    public function test_the_done_tail_is_capped_but_open_problems_never_are(): void
    {
        $seeded = [];

        for ($i = 0; $i < 25; $i++) {
            $seeded["resolved-{$i}"] = ['title' => "Resolved problem {$i}", 'detail' => 'Fixed long ago.'];
        }

        app(InstallationState::class)->put('checklist:doctor-findings', $seeded);

        $items = $this->checklistReporting([
            'stillbroken00001' => ['title' => 'Something is still wrong', 'detail' => 'Genuinely.'],
        ])->items();

        $done = collect($items)->where('done', true);

        $this->assertLessThanOrEqual(10, $done->count(), 'the done tail grew past its cap');
        $this->assertNotNull(collect($items)->firstWhere('key', 'stillbroken00001'));
    }

    /**
     * The dashboard headline is operator copy, never console shorthand -
     * "[custom-fields] has no policy" belongs in a terminal, not on the one
     * screen everybody opens. The precise key still travels in the detail,
     * where whoever fixes it needs it.
     */
    public function test_no_finding_title_leads_with_a_bracketed_key(): void
    {
        Artisan::call('panel:doctor', ['--json' => true]);
        $decoded = json_decode(Artisan::output(), true);

        foreach (is_array($decoded) ? $decoded : [] as $finding) {
            $this->assertDoesNotMatchRegularExpression(
                '/^\[/',
                (string) ($finding['title'] ?? ''),
                'A doctor finding title starts with a bracketed key - that is console shorthand, '
                .'and the setup checklist shows these titles verbatim on the dashboard.',
            );
        }
    }
}
