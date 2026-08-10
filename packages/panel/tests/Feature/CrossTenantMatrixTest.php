<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Schema;
use Illuminate\Testing\TestResponse;

/**
 * EVERY REGISTERED RESOURCE × EVERY MUTATION PATH, against another tenant's row.
 *
 * THE ENUMERATION IS THE FEATURE, and it is the whole reason this file is
 * worth moving rather than leaving in the reference app. Isolation asserted
 * resource by resource proves the resources somebody remembered to write a
 * test for; what is needed is the thing that FAILS WHEN A NEW RESOURCE IS
 * ADDED without anybody adding a line here. If this file ever names a resource
 * explicitly it has become another hand-written list and stopped working.
 *
 * WHY IT BELONGS TO THE PACKAGE. In `apps/playground` the matrix enumerates
 * that application's eleven resources - so it protects the ISP demo, and a
 * CONSUMER's resources are covered by nothing at all. Here it enumerates
 * whatever the fixture panel discovers, which is the same mechanism a
 * consumer's own resources arrive through. The property under test is the
 * framework's, and this is where it can be stated as one.
 *
 * WHAT COUNTS AS PASSING: 403 or 404, never 200 and never 500. A 500 means the
 * row WAS found and something downstream fell over - a leak that happens to
 * have crashed, not a boundary. A 302 to login is also a failure, because the
 * user is authenticated; they are simply not entitled to this record, and
 * conflating the two hides real bugs.
 *
 * SCOPE IS DERIVED, NEVER LISTED. A resource is included when its table
 * carries the tenant column - so `Post`, which deliberately has no tenancy,
 * excludes itself and cannot be forgotten INTO the matrix, while a new
 * tenant-scoped fixture is covered the moment it is discovered. A skip-list of
 * keys fails in the dangerous direction: a scoped resource added to it
 * disappears from the matrix while still looking covered.
 */
final class CrossTenantMatrixTest extends TestCase
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

        $this->me = User::create([
            'tenant_id' => $this->mine->id,
            'name' => 'Operator',
            'email' => 'operator@example.test',
            'password' => 'password',
            'email_verified_at' => now(),
        ]);
    }

    /**
     * The tenant-scoped resources this installation actually registered.
     *
     * @return list<string>
     */
    private function registry(): array
    {
        $column = (string) config('panel.tenancy.column', 'tenant_id');
        $keys = [];

        foreach (app(PanelManager::class)->resources() as $key => $class) {
            $table = (new ($class::model()))->getTable();

            if (Schema::hasColumn($table, $column)) {
                $keys[] = (string) $key;
            }
        }

        return $keys;
    }

    /**
     * A resource's URL, PREFIXED WITH ITS OWN PANEL'S PATH.
     *
     * Not `/{key}`, and finding that out was the point of adding a second
     * portal. A resource belongs to exactly one panel and is routable only
     * under that panel's prefix - so a matrix that asked for every resource at
     * the root would report the second portal's screens as 404 and call that a
     * pass. It would have been asserting "unreachable" while believing it was
     * asserting "refused", which is the failure this file is supposed to
     * catch rather than commit.
     */
    private function base(string $resource): string
    {
        $class = app(PanelManager::class)->resources()[$resource];

        $panel = app(PanelManager::class)->panel($class::panel());

        $prefix = rtrim('/'.trim((string) $panel?->getPath(), '/'), '/');

        return "{$prefix}/{$resource}";
    }

    /**
     * A row belonging to the OTHER organisation.
     *
     * `withoutGlobalScopes()` on the write, because the entire point is a
     * record this user's scope would never produce. Creating it through
     * anything that applies the acting tenant would make every assertion below
     * vacuously true - passing while proving nothing.
     */
    private function foreignRecord(string $resource): Model
    {
        $class = app(PanelManager::class)->resources()[$resource];
        $model = $class::model();

        return $model::withoutGlobalScopes()->forceCreate([
            'tenant_id' => $this->theirs->id,
            'title' => 'Theirs',
        ]);
    }

    /**
     * Run a check over every scoped resource and report ALL failures at once.
     *
     * Not `assert` inside the loop: the first failure would mask the rest, and
     * "which resources leak" is the question this file exists to answer.
     */
    private function everyResource(callable $check): void
    {
        $resources = $this->registry();

        $this->assertNotEmpty(
            $resources,
            'No tenant-scoped resource was registered, so this matrix asserted nothing.',
        );

        $failures = [];

        foreach ($resources as $resource) {
            $failure = $check($resource, $this->foreignRecord($resource));

            if ($failure !== null) {
                $failures[] = $failure;
            }
        }

        $this->assertSame([], $failures, implode("\n", $failures));
    }

    private function refusal(TestResponse $response, string $what): ?string
    {
        if (in_array($response->status(), [403, 404], true)) {
            return null;
        }

        return "{$what} answered {$response->status()}; expected 403 or 404 for another organisation's record.";
    }

    public function test_a_foreign_record_cannot_be_viewed(): void
    {
        $this->everyResource(fn (string $resource, Model $foreign): ?string => $this->refusal(
            $this->actingAs($this->me)->get($this->base($resource)."/{$foreign->getKey()}"),
            "GET /{$resource}/{id}",
        ));
    }

    public function test_a_foreign_record_cannot_be_opened_for_editing(): void
    {
        $this->everyResource(fn (string $resource, Model $foreign): ?string => $this->refusal(
            $this->actingAs($this->me)->get($this->base($resource)."/{$foreign->getKey()}/edit"),
            "GET /{$resource}/{id}/edit",
        ));
    }

    public function test_a_foreign_record_cannot_be_updated(): void
    {
        $this->everyResource(fn (string $resource, Model $foreign): ?string => $this->refusal(
            $this->actingAs($this->me)->putJson($this->base($resource)."/{$foreign->getKey()}", ['title' => 'Taken']),
            "PUT /{$resource}/{id}",
        ));
    }

    public function test_a_foreign_record_cannot_be_deleted(): void
    {
        $this->everyResource(function (string $resource, Model $foreign): ?string {
            $failure = $this->refusal(
                $this->actingAs($this->me)->deleteJson($this->base($resource)."/{$foreign->getKey()}"),
                "DELETE /{$resource}/{id}",
            );

            if ($failure !== null) {
                return $failure;
            }

            // The refusal is only half of it: a 403 returned AFTER the row was
            // deleted would pass the check above and still have destroyed
            // somebody else's record.
            $class = app(PanelManager::class)->resources()[$resource];

            $row = $class::model()::withoutGlobalScopes()->whereKey($foreign->getKey())->first();

            /*
             * NOT GONE **AND** NOT TRASHED. With soft deletes a refused delete
             * that still ran leaves the row present - so `exists()` alone would
             * pass while the record had been removed from every screen its
             * owner can reach, which is the leak wearing a different shape.
             */
            if ($row === null) {
                return "DELETE /{$resource}/{id} refused and deleted the row anyway.";
            }

            return ($row->deleted_at ?? null) === null
                ? null
                : "DELETE /{$resource}/{id} refused and soft-deleted the row anyway.";
        });
    }

    /**
     * THE INLINE CELL EDIT, which is the path a real leak was found on.
     *
     * The reference app's mutation testing removed the policy's ownership
     * check and `PATCH /{resource}/{id}/cell` answered 200 on another
     * organisation's row - a genuine cross-tenant write. It is a separate
     * entrance from the form update and has to be asserted separately.
     */
    public function test_a_foreign_cell_cannot_be_edited(): void
    {
        $this->everyResource(fn (string $resource, Model $foreign): ?string => $this->refusal(
            $this->actingAs($this->me)->patchJson(
                $this->base($resource)."/{$foreign->getKey()}/cell",
                ['column' => 'title', 'value' => 'Taken'],
            ),
            "PATCH /{$resource}/{id}/cell",
        ));
    }

    public function test_a_bulk_action_cannot_reach_a_foreign_record(): void
    {
        $this->everyResource(function (string $resource, Model $foreign): ?string {
            $response = $this->actingAs($this->me)->postJson($this->base($resource).'/bulk', [
                'action' => 'delete',
                'ids' => [$foreign->getKey()],
            ]);

            $class = app(PanelManager::class)->resources()[$resource];

            /*
             * A BULK ENDPOINT MAY ANSWER 200 HAVING DONE NOTHING, and that is a
             * pass: it was handed an id its scope does not resolve, so it
             * selected no rows. What matters is the row, not the status - which
             * is why this one asserts survival rather than a refusal code.
             */
            return $class::model()::withoutGlobalScopes()->whereKey($foreign->getKey())->exists()
                ? null
                : "POST /{$resource}/bulk reached another organisation's record (status {$response->status()}).";
        });
    }

    public function test_a_list_never_includes_a_foreign_record(): void
    {
        $this->everyResource(function (string $resource, Model $foreign): ?string {
            $response = $this->actingAs($this->me)->get($this->base($resource));

            if ($response->status() !== 200) {
                return "GET /{$resource} answered {$response->status()}; expected 200 for the acting tenant.";
            }

            $ids = array_column($response->viewData('page')['props']['records'] ?? [], 'id');

            return in_array($foreign->getKey(), $ids, true)
                ? "GET /{$resource} listed another organisation's record."
                : null;
        });
    }
}
