<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Feedback;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

/**
 * Filing a feature request or a bug report from inside the panel.
 *
 * THE INTERESTING TESTS ARE THE ONES ABOUT IDENTITY, and they are asserted by
 * SENDING the forbidden fields and checking they were ignored - a test that
 * merely omits them proves nothing, because omitting them is what an honest
 * client does anyway.
 *
 * WHAT EACH ONE ACTUALLY PROVES, established by mutation rather than assumed:
 *
 *   `status` and `severity` - REAL guards. Rewriting the controller to
 *   mass-assign `$request->all()` fails both of these tests, which is the
 *   realistic mistake they exist to catch.
 *
 *   `tenant_id` and `user_id` - STRUCTURAL, and these two tests cannot fail
 *   while the controller is shaped as it is. `forceFill()` runs after
 *   construction and overwrites whatever arrived, so no payload can win. They
 *   are kept as regression guards on that SHAPE - they would fail if identity
 *   moved into the validated array or the forceFill were dropped - but they are
 *   not evidence that mass assignment is being filtered.
 *
 * The distinction is recorded because the first version of this file claimed
 * they proved `$fillable` was doing the work. It is not: `$request->validate()`
 * returns only declared keys, so an undeclared `tenant_id` never reaches mass
 * assignment at all, and making it fillable changes nothing. Making the model's
 * identity columns fillable leaves all eleven tests green - which is exactly the
 * hollow-test pattern this project has already been caught by once.
 */
final class FeedbackTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenant;

    private Tenant $other;

    private User $user;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenant = Tenant::create(['name' => 'A', 'slug' => 'a']);
        $this->other = Tenant::create(['name' => 'B', 'slug' => 'b']);

        $this->user = User::factory()->create([
            'tenant_id' => $this->tenant->id,
            'email_verified_at' => now(),
        ]);

        $this->actingAs($this->user);
    }

    /* ------------------------------------------------------------- the happy path */

    public function test_a_feature_request_is_filed(): void
    {
        $this->post('/feedback', [
            'kind' => 'feature',
            'subject' => 'Let me pin a column',
            'body' => 'The name column scrolls out of view on wide tables.',
            'page_url' => 'http://localhost/clients',
            'viewport' => '1440x900',
        ])->assertRedirect();

        $row = Feedback::sole();

        $this->assertSame('feature', $row->kind);
        $this->assertSame('open', $row->status);
        $this->assertSame($this->tenant->id, $row->tenant_id);
        $this->assertSame($this->user->id, $row->user_id);
    }

    /**
     * The context is what makes filing in-app worth doing - see the controller.
     * A report that loses the page it came from is a support email.
     */
    public function test_the_page_and_browser_are_recorded(): void
    {
        $this->withHeader('User-Agent', 'Mozilla/5.0 (TestBrowser/1.0)')
            ->post('/feedback', [
                'kind' => 'bug',
                'severity' => 'high',
                'subject' => 'Export does nothing',
                'body' => 'Clicking export produces no file.',
                'page_url' => 'http://localhost/clients?status=active',
                'viewport' => '390x844',
            ])->assertRedirect();

        $row = Feedback::sole();

        $this->assertSame('http://localhost/clients?status=active', $row->page_url);
        $this->assertSame('390x844', $row->viewport);
        $this->assertStringContainsString('TestBrowser', $row->user_agent);
    }

    /* ------------------------------------------------------------------ identity */

    /**
     * A supplied `tenant_id` must be ignored, not honoured - otherwise anybody
     * can file into another organisation's queue, which is both a nuisance
     * channel and a way to put text in front of somebody else's staff.
     *
     * STRUCTURAL, not filtered - see the class note. `forceFill()` runs last, so
     * this cannot fail while the controller keeps that shape. It guards the
     * shape, not the filtering.
     */
    public function test_a_supplied_tenant_id_is_ignored(): void
    {
        $this->post('/feedback', [
            'kind' => 'feature',
            'subject' => 'Filed elsewhere',
            'body' => 'This should not land in tenant B.',
            'tenant_id' => $this->other->id,
        ])->assertRedirect();

        $this->assertSame(
            $this->tenant->id,
            Feedback::sole()->tenant_id,
            'The tenant comes from the session, never from the payload.',
        );
    }

    /** The same, for the reporter - a report attributed to somebody else is worse than anonymous. */
    public function test_a_supplied_user_id_is_ignored(): void
    {
        $someoneElse = User::factory()->create(['tenant_id' => $this->tenant->id]);

        $this->post('/feedback', [
            'kind' => 'feature',
            'subject' => 'Attributed wrongly',
            'body' => 'This should be attributed to me.',
            'user_id' => $someoneElse->id,
        ])->assertRedirect();

        $this->assertSame($this->user->id, Feedback::sole()->user_id);
    }

    /** A reporter cannot open their bug as already resolved, or close it. */
    public function test_a_supplied_status_is_ignored(): void
    {
        $this->post('/feedback', [
            'kind' => 'bug',
            'severity' => 'low',
            'subject' => 'Already closed?',
            'body' => 'Status is not the reporter to set.',
            'status' => 'resolved',
        ])->assertRedirect();

        $this->assertSame('open', Feedback::sole()->status);
    }

    public function test_a_guest_cannot_file_anything(): void
    {
        auth()->logout();

        $this->post('/feedback', [
            'kind' => 'feature',
            'subject' => 'From nobody',
            'body' => 'Should not be accepted.',
        ])->assertRedirect('/login');

        $this->assertSame(0, Feedback::count());
    }

    /* ---------------------------------------------------------------- validation */

    /**
     * SEVERITY IS FOR BUGS ONLY, and stripped rather than rejected on a feature
     * request. A request carrying a severity sorts above real bugs in any triage
     * list ordered by it - a queue-jumping field nobody meant to send.
     */
    public function test_severity_is_stripped_from_a_feature_request(): void
    {
        $this->post('/feedback', [
            'kind' => 'feature',
            'severity' => 'high',
            'subject' => 'Not a bug',
            'body' => 'Severity does not apply here.',
        ])->assertRedirect();

        $this->assertNull(Feedback::sole()->severity);
    }

    public function test_a_bug_without_a_severity_is_refused(): void
    {
        $this->post('/feedback', [
            'kind' => 'bug',
            'subject' => 'How bad?',
            'body' => 'No severity supplied.',
        ])->assertSessionHasErrors('severity');

        $this->assertSame(0, Feedback::count());
    }

    public function test_an_unknown_kind_is_refused(): void
    {
        $this->post('/feedback', [
            'kind' => 'invoice',
            'subject' => 'Wrong kind',
            'body' => 'Not a kind this endpoint knows.',
        ])->assertSessionHasErrors('kind');

        $this->assertSame(0, Feedback::count());
    }

    /** Bounded, because this is the cheapest authenticated write in the panel. */
    public function test_an_oversized_body_is_refused(): void
    {
        $this->post('/feedback', [
            'kind' => 'feature',
            'subject' => 'Too much',
            'body' => str_repeat('a', 5001),
        ])->assertSessionHasErrors('body');

        $this->assertSame(0, Feedback::count());
    }

    /* ----------------------------------------------------------------- isolation */

    /** The global scope hides another organisation's reports, as for every other model. */
    public function test_another_tenants_reports_are_not_visible(): void
    {
        $theirs = new Feedback(['kind' => 'bug', 'severity' => 'low', 'subject' => 'Theirs', 'body' => 'x']);
        $theirs->forceFill(['tenant_id' => $this->other->id])->save();

        $this->assertSame(0, Feedback::count(), 'The tenant scope excludes it.');
        $this->assertSame(1, Feedback::withoutGlobalScopes()->count(), 'But it does exist.');
    }
}
