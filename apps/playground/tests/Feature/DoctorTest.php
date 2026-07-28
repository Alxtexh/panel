<?php

declare(strict_types=1);

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

/**
 * The command that finds configuration which is silently wrong.
 *
 * EVERY CHECK EXISTS BECAUSE THE FAILURE IS INVISIBLE. A misconfiguration that
 * throws is already reported by the exception; `panel:doctor` is for the other
 * kind - a working panel serving wrong or unprotected data, where every page
 * returns 200 and the whole suite passes.
 *
 * So these tests assert two things per check: that it FIRES on the broken
 * configuration, and that it stays QUIET on the correct one. A checker that
 * always complains is one people learn to ignore, which makes it worse than
 * absent.
 */
final class DoctorTest extends TestCase
{
    use RefreshDatabase;

    /* --------------------------------------------------------- broadcasting */

    /**
     * THE ONE THAT COST THIS PROJECT TWO ROUNDS OF FALSE-GREEN TESTS. The log
     * broadcaster never consults channel callbacks, so every channel authorises
     * - including for a guest - and nothing anywhere says so.
     */
    public function test_it_reports_a_broadcast_driver_that_cannot_authorise(): void
    {
        config(['broadcasting.default' => 'log']);

        $this->artisan('panel:doctor')
            ->expectsOutputToContain('channel authorisation is inert')
            ->assertFailed();
    }

    public function test_it_is_quiet_about_a_real_broadcaster(): void
    {
        config(['broadcasting.default' => 'pusher']);

        $this->artisan('panel:doctor')->assertSuccessful();
    }

    /* ------------------------------------------------------- session limits */

    /**
     * A limit with no server-side session store does nothing at all - and
     * "nothing at all" is believed to be "enforced", which is the failure.
     */
    public function test_it_reports_a_session_limit_that_cannot_work(): void
    {
        config([
            'broadcasting.default' => 'pusher',
            'panel.security.max_sessions' => 3,
            'session.driver' => 'cookie',
        ]);

        $this->artisan('panel:doctor')
            ->expectsOutputToContain('cannot support it')
            ->assertFailed();
    }

    public function test_a_limit_with_a_database_store_is_fine(): void
    {
        config([
            'broadcasting.default' => 'pusher',
            'panel.security.max_sessions' => 3,
            'session.driver' => 'database',
        ]);

        $this->artisan('panel:doctor')->assertSuccessful();
    }

    /* -------------------------------------------------------------- session */

    /**
     * A shared cookie across subdomains is survivable here - the session carries
     * its tenant and a mismatch is refused - but it must be deliberate rather
     * than something somebody added to stop being logged out between hosts.
     */
    public function test_it_reports_a_shared_session_domain(): void
    {
        config([
            'broadcasting.default' => 'pusher',
            'session.domain' => '.panelkit.test',
        ]);

        $this->artisan('panel:doctor')
            ->expectsOutputToContain('shares one cookie across subdomains')
            ->assertFailed();
    }

    /* --------------------------------------------------------------- exit */

    /**
     * NOTES DO NOT FAIL THE BUILD. Everything is not equally wrong, and a report
     * where every line is a warning trains people to read none of them.
     */
    public function test_notes_alone_do_not_fail(): void
    {
        config(['broadcasting.default' => 'pusher']);

        // No domains are seeded in this test database, which is a note.
        $this->artisan('panel:doctor')->assertSuccessful();
    }

    /* ------------------------------------------------------------ retrieval */

    /**
     * A KNOWLEDGE BASE THAT CAN NO LONGER BE SEARCHED, and says nothing.
     *
     * Change the embedder or its model and every stored vector becomes a
     * different length from the ones queries produce. Nothing errors:
     * `KnowledgeBase` refuses to compare mismatched vectors and scores them
     * zero, so the passages sit there, `panel:knowledge status` reports
     * thousands of them, and every search comes back empty for good.
     */
    public function test_it_reports_passages_embedded_by_a_different_model(): void
    {
        \Illuminate\Support\Facades\DB::table('panel_knowledge_chunks')->insert([
            'tenant_id' => 1,
            'source' => 'help',
            'source_id' => 'a#0',
            'title' => 'Indexed by something else',
            'content' => 'Stored when the panel used a different embedding model.',
            'content_hash' => str_repeat('a', 64),
            // Eight, where the configured embedder produces 256.
            'embedding' => json_encode(array_fill(0, 8, 0.5)),
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        $this->artisan('panel:doctor')
            ->expectsOutputToContain('Stored passages are 8-dimensional')
            ->assertFailed();
    }

    /** And it is quiet when they match, which is every ordinary installation. */
    public function test_it_is_quiet_about_passages_from_the_current_embedder(): void
    {
        config(['panel.tenancy.resolver' => static fn (): int => 1]);

        app(\PanelKit\Panel\Knowledge\KnowledgeBase::class)
            ->put('help', 'exports', 'Exporting a list', 'Exports run in the background.');

        config(['broadcasting.default' => 'pusher']);

        $this->artisan('panel:doctor')->assertSuccessful();
    }

    public function test_it_emits_machine_readable_findings(): void
    {
        config(['broadcasting.default' => 'log']);

        $this->artisan('panel:doctor --json')->assertFailed();
    }
}
