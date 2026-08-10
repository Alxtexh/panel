<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Audit\AuditRecorder;
use Alxtexh\Panel\Tests\Fixtures\Models\Article;
use Alxtexh\Panel\Tests\Fixtures\Models\Ledger;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

/**
 * The trail, whose whole difficulty is what it must NOT write down.
 *
 * REDACTION IS THE POINT OF THIS CLASS, not the writing. An audit entry records
 * what changed - and "what changed" includes the password somebody just set, in
 * a table built to be kept for years and read by people who are not the
 * account's owner. A trail that logs secrets is a breach with good intentions.
 *
 * IT MUST NEVER BREAK THE CHANGE IT IS AUDITING. Refusing a record's save
 * because the audit table is missing turns an observability feature into an
 * outage, so failures are reported and swallowed. That is asserted here by
 * DROPPING the table and saving anyway.
 *
 * NO TENANT, NO ENTRY. Writing with a null tenant would either violate the
 * constraint or land the row where the wrong organisation can read it. A
 * console command that edits records without establishing a tenant produces no
 * trail - which is the honest outcome, since it also produced no tenant-scoped
 * change.
 */
final class AuditRecorderTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenant;

    private User $user;

    private Article $article;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenant = Tenant::create(['name' => 'Mine', 'slug' => 'mine']);

        $this->user = User::create([
            'tenant_id' => $this->tenant->id,
            'name' => 'Grace Wanjiku',
            'email' => 'grace@example.test',
            'password' => 'password',
            'email_verified_at' => now(),
        ]);

        $this->actingAs($this->user);

        $this->article = Article::withoutGlobalScopes()->create([
            'tenant_id' => $this->tenant->id,
            'title' => 'Original',
            'status' => 'draft',
        ]);
    }

    private function recorder(): AuditRecorder
    {
        return app(AuditRecorder::class);
    }

    private function entries(): array
    {
        return DB::table('audit_entries')->get()->all();
    }

    public function test_it_records_an_event_against_the_record(): void
    {
        $this->recorder()->record($this->article, 'created');

        $entries = $this->entries();

        $this->assertCount(1, $entries);
        $this->assertSame('created', $entries[0]->event);
        $this->assertSame(Article::class, $entries[0]->auditable_type);
        $this->assertSame((string) $this->article->getKey(), $entries[0]->auditable_id);
    }

    /**
     * THE ACTOR'S NAME IS A SNAPSHOT, not a join.
     *
     * The entries anybody actually needs are deletions, and a deleted actor has
     * no name left to join to - so a name resolved at read time is guaranteed
     * to be missing exactly when it matters.
     */
    public function test_it_snapshots_the_actor_rather_than_only_their_id(): void
    {
        $this->recorder()->record($this->article, 'created');

        $entry = $this->entries()[0];

        $this->assertSame($this->user->getKey(), (int) $entry->user_id);
        $this->assertSame('Grace Wanjiku', $entry->actor_name);
    }

    /**
     * EVERY REDACTED KEY, ASSERTED BY NAME.
     *
     * The list is deliberately broad - the cost of redacting something harmless
     * is a less useful line; the cost of missing one is a secret in a table kept
     * for years. Looping the constant means a key REMOVED from it fails here.
     */
    public function test_it_redacts_every_key_on_the_list(): void
    {
        $context = [];

        foreach (AuditRecorder::REDACT as $key) {
            $context[$key] = 'the actual secret';
        }

        $this->recorder()->record($this->article, 'custom', $context);

        $changes = json_decode((string) $this->entries()[0]->changes, true);

        /*
         * `['to' => …]`, because context is stored in the same
         * `{field: {from, to}}` shape an update uses - one column, one reader,
         * whether the entry came from a save or from a hand-passed context.
         */
        foreach (AuditRecorder::REDACT as $key) {
            $this->assertSame(
                AuditRecorder::REDACTED,
                $changes[$key]['to'] ?? null,
                "[{$key}] reached the audit table in plain text.",
            );
        }
    }

    public function test_it_redacts_a_key_that_merely_contains_a_sensitive_word(): void
    {
        $this->recorder()->record($this->article, 'custom', [
            'current_password' => 'hunter2',
            'api_key_for_billing' => 'sk-live-1234',
        ]);

        $changes = json_decode((string) $this->entries()[0]->changes, true);

        $this->assertSame(AuditRecorder::REDACTED, $changes['current_password']['to'] ?? null);
        $this->assertSame(AuditRecorder::REDACTED, $changes['api_key_for_billing']['to'] ?? null);
    }

    public function test_ordinary_context_survives_redaction(): void
    {
        $this->recorder()->record($this->article, 'custom', ['reason' => 'Requested by the customer']);

        $changes = json_decode((string) $this->entries()[0]->changes, true);

        $this->assertSame('Requested by the customer', $changes['reason']['to'] ?? null);
    }

    /**
     * AN UPDATE THAT CHANGED NOTHING WRITES NOTHING.
     *
     * Saving a model with no dirty attributes is common - a form resubmitted, a
     * job touching a record - and an entry for it is a line in the trail that
     * says something happened when nothing did.
     */
    public function test_an_update_with_no_changes_records_nothing(): void
    {
        $this->recorder()->record($this->article, 'updated');

        $this->assertCount(0, $this->entries());
    }

    /**
     * THE DIFF IS ONLY CORRECT FROM INSIDE THE EVENT, so this goes through
     * `Auditable` rather than calling the recorder by hand.
     *
     * Laravel syncs a model's originals AFTER the `updated` event fires, so a
     * `record()` made once `save()` has returned reads the new value as the old
     * one - `from` and `to` both say "Renamed". The observer runs at the only
     * moment both halves are available, which is also how every real caller
     * reaches this. Written down because calling the recorder directly looks
     * equivalent and silently is not.
     */
    public function test_an_update_records_what_actually_changed(): void
    {
        $ledger = Ledger::withoutGlobalScopes()->create([
            'tenant_id' => $this->tenant->id,
            'name' => 'Original',
        ]);

        DB::table('audit_entries')->delete();

        $ledger->forceFill(['name' => 'Renamed'])->save();

        $entries = $this->entries();

        $this->assertCount(1, $entries, 'The observer did not record the update.');

        $changes = json_decode((string) $entries[0]->changes, true);

        $this->assertSame('Original', $changes['name']['from'] ?? null);
        $this->assertSame('Renamed', $changes['name']['to'] ?? null);
    }

    /**
     * AND A SENSITIVE COLUMN IS REDACTED ON BOTH SIDES OF THE DIFF.
     *
     * Recording the OLD secret is the same breach as recording the new one -
     * arguably worse, since the old value is the one somebody may still be
     * using elsewhere.
     */
    public function test_a_sensitive_column_is_redacted_on_both_sides(): void
    {
        $ledger = Ledger::withoutGlobalScopes()->create([
            'tenant_id' => $this->tenant->id,
            'name' => 'Book',
            'secret' => 'first-secret',
        ]);

        DB::table('audit_entries')->delete();

        $ledger->forceFill(['secret' => 'second-secret'])->save();

        $changes = json_decode((string) $this->entries()[0]->changes, true);

        $this->assertSame(AuditRecorder::REDACTED, $changes['secret']['from'] ?? null);
        $this->assertSame(AuditRecorder::REDACTED, $changes['secret']['to'] ?? null);
    }

    /**
     * NO TENANT, NO ENTRY - rather than a row with a null tenant that the wrong
     * organisation could read.
     */
    public function test_nothing_is_recorded_without_a_tenant(): void
    {
        auth()->logout();

        $this->recorder()->record($this->article, 'created');

        $this->assertCount(0, $this->entries());
    }

    /**
     * A MISSING TABLE DOES NOT BREAK THE SAVE.
     *
     * The strongest form of "never break the change being audited": the table
     * is dropped, and writing a record still succeeds. A consumer who never ran
     * the migration gets no trail and a working panel, rather than an outage on
     * every write.
     */
    public function test_a_missing_audit_table_does_not_break_the_change(): void
    {
        Schema::drop('audit_entries');

        $this->recorder()->record($this->article, 'created');

        $this->article->forceFill(['title' => 'Still saveable'])->save();

        $this->assertSame('Still saveable', $this->article->fresh()->title);
    }
}
