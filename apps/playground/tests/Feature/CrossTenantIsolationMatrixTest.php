<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\AuditEntry;
use App\Models\Client;
use App\Models\Plan;
use App\Models\Router;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Testing\TestResponse;
use PanelKit\Panel\PanelManager;
use Tests\TestCase;

/**
 * EVERY REGISTERED RESOURCE × EVERY MUTATION PATH, against another tenant's row.
 *
 * §14 requires this and, until now, it did not exist. Isolation was asserted in
 * a dozen individual tests - Clients here, Plans there, one path each - which
 * proves the paths that somebody remembered to write a test for. What was
 * missing is the thing that FAILS WHEN A NEW RESOURCE IS ADDED: the twelfth
 * resource ships, nobody writes its isolation test, and nothing anywhere
 * notices. This file enumerates the registry, so a new resource is covered the
 * moment it is discovered, without a line being added here.
 *
 * THE ENUMERATION IS THE FEATURE. If this file ever names resources explicitly,
 * it has stopped doing its job and become another hand-written list.
 *
 * WHAT COUNTS AS PASSING: 404 or 403, never 200 and never 500. A 500 would mean
 * the row was found and something downstream failed - which is a leak that
 * happens to have crashed, not a boundary. A 302 to login is also a failure
 * here, because the user IS authenticated; they are simply not entitled to this
 * record, and conflating the two hides real bugs.
 *
 * THE FOREIGN RECORD IS CREATED WITH `withoutGlobalScopes()->forceCreate()`,
 * because the whole point is a row this user's scope would never produce. Using
 * a factory that applies the acting tenant would make every assertion below
 * vacuously true.
 *
 * WHAT MUTATION TESTING SHOWED, recorded because it is the only evidence that
 * this file is not decoration:
 *
 *   Removing the tenant GLOBAL SCOPE from record lookup - every case still
 *   passed. The policy caught it.
 *
 *   Removing the POLICY's ownership check as well - four cases failed, with
 *   `PATCH /editable-plans/{id}/cell` answering 200 on another organisation's
 *   row. A real cross-tenant write, reported by resource and by path.
 *
 * So isolation here rests on two independent gates, and this file asserts the
 * OBSERVABLE boundary rather than either mechanism. That is the right level: a
 * test coupled to one gate passes while the other silently rots.
 */
final class CrossTenantIsolationMatrixTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $mine;

    private Tenant $theirs;

    private User $me;

    protected function setUp(): void
    {
        parent::setUp();

        $this->mine = Tenant::create(['name' => 'Mine', 'slug' => 'mine']);
        $this->theirs = Tenant::create(['name' => 'Theirs', 'slug' => 'theirs']);

        $this->me = User::factory()->create([
            'tenant_id' => $this->mine->id,
            'email_verified_at' => now(),
        ]);

        $this->actingAs($this->me);
    }

    /**
     * The registry, exactly as the routes read it.
     *
     * AT RUNTIME, NOT IN A DATA PROVIDER. A provider is a static method that
     * runs before the application boots, and `config/panel.php` calls
     * `app_path()` - so reading it there either explodes or forces the paths to
     * be duplicated here, which is precisely how the matrix and the router
     * would drift apart. Resolving through the container means they cannot.
     *
     * @return array<string, class-string>
     */
    private function registry(): array
    {
        $manager = app(PanelManager::class);

        /*
         * TENANT-CONTEXT PANELS ONLY, and the exclusion is not a convenience.
         *
         * A central panel - the platform portal - administers the tenants
         * themselves. Its records are not scoped to an organisation, so there is
         * no such thing as a "foreign" one and every assertion below would be
         * meaningless: the whole point of that panel is to see across.
         *
         * IT IS DERIVED FROM THE PANEL, NEVER A NAME LIST. A skip-list of
         * resource keys is a list somebody forgets to update, and the direction
         * it fails in is the dangerous one - a tenant-scoped resource added to
         * it disappears from this matrix while looking covered.
         */
        $central = [];

        foreach ($manager->panels() as $panel) {
            if ($panel->isCentral()) {
                $central[] = $panel->id;
            }
        }

        $resources = array_filter(
            $manager->resources(),
            static fn (string $class): bool => ! in_array($class::panel(), $central, true),
        );

        // An empty registry would make every test below pass without asserting
        // anything - the exact silent success this file exists to prevent.
        $this->assertNotEmpty($resources, 'No tenant-scoped resources discovered; the matrix would be vacuous.');

        return $resources;
    }

    /**
     * Run one check against every resource, and report ALL the failures.
     *
     * Collecting rather than failing on the first one is deliberate: when a
     * change breaks isolation it usually breaks it everywhere, and a report
     * naming one resource sends somebody to fix one resource.
     *
     * @param  callable(string, Model): (string|null)  $check  A failure message, or null when it held.
     */
    private function everyResource(callable $check): void
    {
        $failures = [];
        $checked = 0;

        foreach (array_keys($this->registry()) as $resource) {
            $foreign = $this->foreignRecordFor($resource);

            if ($foreign === null) {
                $failures[] = "[{$resource}] has no foreign fixture - add one to `foreignRecordFor`, "
                    .'or this resource is silently uncovered.';

                continue;
            }

            $checked++;

            $failure = $check($resource, $foreign);

            if ($failure !== null) {
                $failures[] = $failure;
            }
        }

        $this->assertSame([], $failures, "\n".implode("\n", $failures)."\n");
        $this->assertGreaterThan(0, $checked);
    }

    /* ==================================================================== reads */

    /**
     * Reading one record. The gateway act: everything below assumes the
     * attacker already knows an id, and this is where they would learn one.
     */
    public function test_a_foreign_record_cannot_be_viewed(): void
    {
        $this->everyResource(fn (string $resource, Model $foreign): ?string => $this->refusal(
            $this->get("/{$resource}/{$foreign->getKey()}"),
            "GET /{$resource}/{id}",
        ));
    }

    public function test_a_foreign_record_cannot_be_opened_for_editing(): void
    {
        $this->everyResource(fn (string $resource, Model $foreign): ?string => $this->refusal(
            $this->get("/{$resource}/{$foreign->getKey()}/edit"),
            "GET /{$resource}/{id}/edit",
        ));
    }

    /**
     * A LIST NEVER CONTAINS A FOREIGN ROW. Distinct from the checks above: those
     * ask whether a known id can be reached, this asks whether the id is handed
     * out in the first place.
     */
    public function test_a_list_never_includes_a_foreign_record(): void
    {
        $this->everyResource(function (string $resource, Model $foreign): ?string {
            $response = $this->get("/{$resource}");

            // A resource whose index this user cannot open at all is isolated
            // by a stronger rule than the one under test.
            if ($response->status() !== 200) {
                return $this->refusal($response, "GET /{$resource}");
            }

            $ids = collect($response->viewData('page')['props']['records'] ?? [])
                ->pluck('id')
                ->all();

            return in_array($foreign->getKey(), $ids, false)
                ? "GET /{$resource} leaked row {$foreign->getKey()} from another organisation."
                : null;
        });
    }

    /* ================================================================== writes */

    public function test_a_foreign_record_cannot_be_updated(): void
    {
        $this->everyResource(function (string $resource, Model $foreign): ?string {
            $before = $this->snapshot($foreign);

            $refusal = $this->refusal(
                $this->putJson("/{$resource}/{$foreign->getKey()}", ['name' => 'Renamed by an outsider']),
                "PUT /{$resource}/{id}",
            );

            return $refusal ?? $this->unchanged($resource, 'PUT /{id}', $foreign, $before);
        });
    }

    public function test_a_foreign_record_cannot_be_deleted(): void
    {
        $this->everyResource(function (string $resource, Model $foreign): ?string {
            $refusal = $this->refusal(
                $this->deleteJson("/{$resource}/{$foreign->getKey()}"),
                "DELETE /{$resource}/{id}",
            );

            if ($refusal !== null) {
                return $refusal;
            }

            return $foreign->fresh() === null
                ? "DELETE /{$resource}/{id} removed another organisation's row."
                : null;
        });
    }

    /** An inline cell edit is a write endpoint with a small control in front. */
    public function test_a_foreign_cell_cannot_be_edited(): void
    {
        $this->everyResource(function (string $resource, Model $foreign): ?string {
            $before = $this->snapshot($foreign);

            // 404 for "no such editable column" is indistinguishable from 404
            // for "no such record", and both are correct refusals here.
            $refusal = $this->refusal(
                $this->patchJson("/{$resource}/{$foreign->getKey()}/cell", [
                    'column' => 'is_active',
                    'value' => false,
                ]),
                "PATCH /{$resource}/{id}/cell",
                allowUnprocessable: true,
            );

            return $refusal ?? $this->unchanged($resource, 'PATCH /{id}/cell', $foreign, $before);
        });
    }

    /** A declared record action, aimed at a row the caller cannot see. */
    public function test_a_record_action_cannot_be_run_on_a_foreign_record(): void
    {
        $this->everyResource(function (string $resource, Model $foreign): ?string {
            $before = $this->snapshot($foreign);

            $refusal = $this->refusal(
                $this->postJson("/{$resource}/{$foreign->getKey()}/action", ['action' => 'suspend']),
                "POST /{$resource}/{id}/action",
                allowUnprocessable: true,
            );

            return $refusal ?? $this->unchanged($resource, 'POST /{id}/action', $foreign, $before);
        });
    }

    /**
     * BULK IS THE WIDEST DOOR, because the ids arrive as a list in the BODY
     * rather than in the URL - so nothing about the route shape constrains them,
     * and a naive `whereIn` over unscoped ids updates every row named.
     */
    public function test_a_bulk_action_cannot_reach_a_foreign_record(): void
    {
        $this->everyResource(function (string $resource, Model $foreign): ?string {
            $before = $this->snapshot($foreign);

            // The STATUS is not asserted: a bulk endpoint legitimately answers
            // 200 having affected nothing. Only the row matters.
            $this->postJson("/{$resource}/bulk", [
                'action' => 'suspend',
                'ids' => [$foreign->getKey()],
            ]);

            return $this->unchanged($resource, 'POST /bulk', $foreign, $before);
        });
    }

    /** Reordering rewrites a position column, which is still a write. */
    public function test_reordering_cannot_move_a_foreign_record(): void
    {
        $this->everyResource(function (string $resource, Model $foreign): ?string {
            $before = $this->snapshot($foreign);

            $this->postJson("/{$resource}/reorder", ['ids' => [$foreign->getKey()]]);

            return $this->unchanged($resource, 'POST /reorder', $foreign, $before);
        });
    }

    /* =================================================================== files */

    /**
     * A download is a read of stored bytes, and it is the path where a policy
     * check is most often forgotten - the record is only there to name a file.
     */
    public function test_a_foreign_file_cannot_be_downloaded(): void
    {
        $this->everyResource(fn (string $resource, Model $foreign): ?string => $this->refusal(
            $this->get("/{$resource}/{$foreign->getKey()}/file/id_document"),
            "GET /{$resource}/{id}/file/{field}",
        ));
    }

    /* ================================================================= helpers */

    /**
     * A message when the response did NOT refuse, or null when it did.
     *
     * 200 is the failure this whole file exists to catch. 500 counts as a
     * failure too, and that is not pedantry: it means the row WAS reached and
     * something later broke, which is a leak that crashed rather than a
     * boundary that held. A 302 is a failure as well - the user is
     * authenticated, so being bounced to login would mean the wrong mechanism
     * refused and the right one was never consulted.
     */
    private function refusal(
        TestResponse $response,
        string $what,
        bool $allowUnprocessable = false,
    ): ?string {
        $acceptable = [403, 404];

        if ($allowUnprocessable) {
            $acceptable[] = 422;
        }

        if (in_array($response->status(), $acceptable, true)) {
            return null;
        }

        return "{$what} answered {$response->status()}; expected "
            .implode(' or ', $acceptable)." for another organisation's record.";
    }

    /**
     * The row as the DATABASE holds it.
     *
     * Read back rather than taken from the in-memory model, and that is not
     * fussiness - comparing the two produced four false leak reports on the
     * first run. A model just written differs from the same row read back in
     * three ways, none of which is a mutation: `is_active` is `true` in PHP and
     * `1` from the driver, the key order is insertion order versus column
     * order, and a column carrying a database default (`position`) is absent
     * from the in-memory attributes entirely. Both sides now come from the same
     * place, so a difference means somebody wrote.
     *
     * @return array<string, mixed>
     */
    private function snapshot(Model $record): array
    {
        $fresh = $record->fresh()?->getAttributes() ?? [];

        ksort($fresh);

        return $fresh;
    }

    /**
     * A message when the row changed, or null when it is untouched.
     *
     * ASSERTED SEPARATELY FROM THE STATUS, because the two can disagree in the
     * direction that matters: an endpoint may refuse loudly and still have
     * written, or answer 200 having written nothing. The row is the truth.
     *
     * @param  array<string, mixed>  $before
     */
    private function unchanged(string $resource, string $what, Model $foreign, array $before): ?string
    {
        $after = $this->snapshot($foreign);

        if ($after == $before) {
            return null;
        }

        $changed = implode(', ', array_keys(array_diff_assoc($after, $before)));

        return "{$resource}: {$what} mutated another organisation's row ({$changed}).";
    }

    /**
     * A row belonging to the OTHER tenant, for whichever model the resource uses.
     *
     * Built from the resource's own `model()` rather than a lookup table, so a
     * new resource over an existing model is covered without editing this file.
     * A model this fixture does not know how to build returns null and the case
     * is skipped LOUDLY - a silent pass would be the same hole this file exists
     * to close.
     */
    private function foreignRecordFor(string $resource): ?Model
    {
        $class = app(PanelManager::class)->resource($resource);

        if ($class === null) {
            return null;
        }

        return match ($class::model()) {
            Client::class => $this->foreignClient(),
            Plan::class => $this->foreignPlan(),
            Router::class => $this->foreignRouter(),
            User::class => $this->foreignUser(),
            AuditEntry::class => $this->foreignAuditEntry(),
            \PanelKit\Panel\Alerts\Announcement::class => $this->foreignAnnouncement(),
            default => null,
        };
    }

    /**
     * A notice written in the OTHER organisation.
     *
     * IT EARNS ITS PLACE HERE because an announcement is the most visible
     * surface in the panel - it renders at the top of the dashboard before
     * anybody has clicked anything - so a missing scope would not be a subtle
     * leak, it would be somebody else's internal notice on the front page.
     *
     * `forceCreate`, because the model stamps the tenant from context on create
     * and this fixture deliberately belongs to the other one.
     */
    private function foreignAnnouncement(): Model
    {
        return \PanelKit\Panel\Alerts\Announcement::query()->forceCreate([
            'tenant_id' => $this->theirs->id,
            'title' => 'Their internal notice',
            'body' => 'Not for this organisation.',
            'severity' => 'info',
            'display' => 'banner',
        ]);
    }

    /**
     * A recorded change belonging to the OTHER organisation.
     *
     * WRITTEN THROUGH THE QUERY BUILDER, like the real recorder does, because
     * `AuditEntry` has an empty `$fillable` on purpose - an audit entry that can
     * be mass-assigned is not evidence. Reading it back through the model is
     * what puts it under the tenant scope this matrix is testing.
     */
    private function foreignAuditEntry(): AuditEntry
    {
        $id = DB::table('audit_entries')->insertGetId([
            'tenant_id' => $this->theirs->id,
            'user_id' => null,
            'actor_name' => 'Somebody Else',
            'auditable_type' => Client::class,
            'auditable_id' => '1',
            'event' => 'updated',
            'changes' => json_encode(['status' => ['from' => 'active', 'to' => 'suspended']]),
            'ip_address' => '203.0.113.9',
            'user_agent' => null,
            'created_at' => now(),
        ]);

        return AuditEntry::withoutGlobalScopes()->findOrFail($id);
    }

    /**
     * A colleague at the OTHER organisation.
     *
     * `User` is the one tenant-owned model with no global scope, because sign-in
     * has to find a person by email before any tenant exists - so `UserResource`
     * constrains its own queries instead. That makes this fixture the only thing
     * standing between the user list and every account in the database, and it
     * is not hypothetical: registering the resource showed all seven users
     * across five tenants on the first load.
     */
    private function foreignUser(): User
    {
        $user = User::factory()->make(['email' => 'theirs-'.uniqid().'@example.test']);

        $user->forceFill(['tenant_id' => $this->theirs->id])->save();

        return $user;
    }

    private function foreignPlan(): Plan
    {
        return Plan::withoutGlobalScopes()->create([
            'tenant_id' => $this->theirs->id,
            'name' => 'Their Plan '.uniqid(),
            'speed_mbps' => 50,
            'price_cents' => 5000,
            'is_active' => true,
        ]);
    }

    private function foreignRouter(): Router
    {
        return Router::withoutGlobalScopes()->create([
            'tenant_id' => $this->theirs->id,
            'name' => 'Their Router '.uniqid(),
            'ip_address' => '10.9.9.'.random_int(2, 250),
            'model' => 'RB750',
            'status' => 'online',
        ]);
    }

    private function foreignClient(): Client
    {
        $unique = uniqid('t', true);

        return Client::withoutGlobalScopes()->forceCreate([
            'tenant_id' => $this->theirs->id,
            'plan_id' => $this->foreignPlan()->id,
            'router_id' => $this->foreignRouter()->id,
            'name' => "Their Client {$unique}",
            'phone' => '+254'.substr((string) crc32($unique), 0, 9),
            'access_code' => strtoupper(substr(md5($unique), 0, 10)),
            'status' => 'active',
            'plan_type' => 'pppoe',
            'expiry_date' => '2026-12-31',
        ]);
    }
}
