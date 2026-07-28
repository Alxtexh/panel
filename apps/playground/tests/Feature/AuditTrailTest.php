<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\AuditEntry;
use App\Models\Client;
use App\Models\Role;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use PanelKit\Panel\Audit\AuditRecorder;
use PanelKit\Panel\Support\Abilities;
use Tests\TestCase;

/**
 * Who changed what, and what must never appear in the record of it.
 *
 * THE REDACTION TESTS ARE THE IMPORTANT ONES. An audit trail stores
 * before-and-after values for every changed attribute, so a password change
 * writes the password - in plain text, into a table designed to be kept for
 * years, read by more people than the original and exported for compliance.
 * That is a worse leak than the one auditing exists to detect, and it happens
 * silently and by default.
 *
 * The rest of the file is about the trail being trustworthy: entries survive the
 * record they describe, they cannot be edited, and they cannot be read by
 * somebody who could not open the record.
 */
final class AuditTrailTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenant;

    private User $user;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenant = Tenant::create(['name' => 'A', 'slug' => 'a']);

        $this->user = User::factory()
            ->withAbilities(Abilities::all())
            ->create(['tenant_id' => $this->tenant->id, 'email_verified_at' => now()]);

        $this->actingAs($this->user);

        tenancy()->initialize($this->tenant);
    }

    protected function tearDown(): void
    {
        tenancy()->end();

        parent::tearDown();
    }

    private function client(string $name = 'Amina'): Client
    {
        $client = new Client([
            'name' => $name,
            'phone' => '+2547'.random_int(10000000, 99999999),
            'access_code' => strtoupper(bin2hex(random_bytes(3))),
            'status' => 'active',
            'plan_type' => 'pppoe',
            'expiry_date' => now()->addMonth(),
        ]);

        $client->forceFill(['tenant_id' => $this->tenant->id])->save();

        return $client;
    }

    /* ------------------------------------------------------------ recording */

    public function test_a_change_records_who_what_and_the_previous_value(): void
    {
        $client = $this->client('Amina');

        $client->status = 'suspended';
        $client->save();

        $entry = AuditEntry::query()->where('event', 'updated')->sole();

        $this->assertSame($this->user->id, $entry->user_id);
        $this->assertSame($this->user->name, $entry->actor_name);
        $this->assertSame('active', $entry->changes['status']['from']);
        $this->assertSame('suspended', $entry->changes['status']['to']);
    }

    /**
     * A SAVE THAT CHANGED NOTHING IS NOT AN EVENT. Eloquent fires `updated` on a
     * re-submitted form or a touch, and a timeline full of "updated (nothing)"
     * makes the real entries harder to find rather than easier.
     */
    public function test_a_save_with_no_changes_records_nothing(): void
    {
        $client = $this->client();

        AuditEntry::query()->delete();

        $client->save();
        $client->name = $client->name;
        $client->save();

        $this->assertSame(0, AuditEntry::query()->count());
    }

    /** `updated_at` moves on every save and is already implied by the entry's own time. */
    public function test_timestamps_are_not_recorded_as_changes(): void
    {
        $client = $this->client();

        $client->status = 'expired';
        $client->save();

        $entry = AuditEntry::query()->where('event', 'updated')->sole();

        $this->assertArrayNotHasKey('updated_at', $entry->changes);
        $this->assertArrayHasKey('status', $entry->changes);
    }

    /* ------------------------------------------------------------ REDACTION */

    /**
     * THE ONE THAT MATTERS. The field NAME is kept - "the password changed" is
     * exactly what an audit trail is for - and the VALUE must not survive.
     */
    public function test_a_password_is_never_written_to_the_trail(): void
    {
        AuditEntry::query()->delete();

        $this->user->password = bcrypt('a-new-secret');
        $this->user->save();

        $entry = AuditEntry::query()
            ->where('auditable_type', User::class)
            ->where('event', 'updated')
            ->sole();

        $this->assertArrayHasKey('password', $entry->changes, 'That it changed is recorded.');
        $this->assertSame(
            AuditRecorder::REDACTED,
            $entry->changes['password']['to'],
            'What it changed to is not.',
        );
        $this->assertStringNotContainsString(
            '$2y$',
            json_encode($entry->changes),
            'Not even the hash - an audit table is kept for years and read widely.',
        );
    }

    /**
     * MATCHED AS SUBSTRINGS, so `password`, `remember_token` and
     * `two_factor_secret` are all covered without anybody maintaining a list of
     * exact names - which is a list they would forget to extend.
     */
    public function test_every_sensitive_name_shape_is_redacted(): void
    {
        AuditEntry::query()->delete();

        $this->user->forceFill([
            'name' => 'Renamed',
            'remember_token' => 'rt-abcdef123456',
            'two_factor_secret' => 'ts-abcdef123456',
        ])->save();

        $changes = AuditEntry::query()
            ->where('auditable_type', User::class)
            ->where('event', 'updated')
            ->sole()
            ->changes;

        $this->assertSame('Renamed', $changes['name']['to'], 'Ordinary fields are recorded in full.');

        foreach (['remember_token', 'two_factor_secret'] as $field) {
            $this->assertSame(AuditRecorder::REDACTED, $changes[$field]['to'], "{$field} must be redacted.");
        }

        $this->assertStringNotContainsString('abcdef123456', json_encode($changes));
    }

    /* ------------------------------------------------------------- evidence */

    /**
     * THE ENTRY OUTLIVES THE RECORD. There is deliberately no foreign key to the
     * audited row - a cascade would delete the evidence along with the thing it
     * describes, which is precisely when the evidence is wanted.
     */
    public function test_the_trail_survives_the_record_being_deleted(): void
    {
        $client = $this->client();

        $client->forceDelete();

        $this->assertGreaterThan(0, AuditEntry::query()->where('event', 'deleted')->count());
    }

    /** The actor's name is a snapshot, so a departure does not blank the history. */
    public function test_the_actor_is_still_named_after_they_leave(): void
    {
        $client = $this->client();
        $client->status = 'expired';
        $client->save();

        $name = $this->user->name;
        $this->user->delete();

        $entry = AuditEntry::query()->where('event', 'updated')->sole();

        $this->assertNull($entry->fresh()->user_id, 'The foreign key goes null.');
        $this->assertSame($name, $entry->actor_name, 'The name recorded at the time does not.');
    }

    /* ------------------------------------------------------------- reading */

    public function test_the_timeline_is_readable_for_a_record_you_can_open(): void
    {
        $client = $this->client();
        $client->status = 'suspended';
        $client->save();

        $this->getJson("/clients/{$client->id}/audit")
            ->assertOk()
            ->assertJsonPath('entries.0.event', 'updated')
            ->assertJsonPath('entries.0.actor', $this->user->name);
    }

    /**
     * AND NOT FOR ONE YOU CANNOT. `auditable_id` is a string in the URL, so
     * without the scoped lookup another organisation's record id would return
     * its entire history.
     */
    public function test_another_tenants_history_is_not_readable(): void
    {
        $other = Tenant::create(['name' => 'B', 'slug' => 'b']);

        tenancy()->end();
        tenancy()->initialize($other);

        $theirs = new Client([
            'name' => 'Theirs',
            'phone' => '+254700000002',
            'access_code' => 'BBB222',
            'status' => 'active',
            'plan_type' => 'pppoe',
            'expiry_date' => now()->addMonth(),
        ]);
        $theirs->forceFill(['tenant_id' => $other->id])->save();
        $theirs->status = 'suspended';
        $theirs->save();

        tenancy()->end();
        tenancy()->initialize($this->tenant);

        $this->getJson("/clients/{$theirs->id}/audit")->assertNotFound();
    }

    /** A role without `view_clients` cannot read a subscriber's history either. */
    public function test_the_history_needs_the_same_ability_as_the_record(): void
    {
        $client = $this->client();

        $limited = User::factory()
            ->withAbilities([Abilities::name('viewAny', 'clients')])
            ->create(['tenant_id' => $this->tenant->id, 'email_verified_at' => now()]);

        $this->actingAs($limited)
            ->getJson("/clients/{$client->id}/audit")
            ->assertForbidden();
    }
}
