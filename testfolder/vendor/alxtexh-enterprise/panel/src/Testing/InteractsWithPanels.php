<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Testing;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Testing\TestResponse;
use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Resources\Resource;

/**
 * Assertions for somebody building ON this package.
 *
 * WHY IT SHIPS. This repository has over a thousand tests and exported none of
 * them. Anybody adding a resource to their own panel had to work out from
 * scratch how to reach `props.records`, which key the schema arrives under, and
 * what a refusal looks like - and the honest outcome of that is that they test
 * the model and skip the panel. Then the resource that lists another
 * organisation's rows ships, because nothing they wrote would have caught it.
 *
 * THE ASSERTIONS ARE CHOSEN BY WHAT GOES WRONG, not by what is easy to assert:
 *
 *   IT DOES NOT APPEAR AT ALL. A resource that was never discovered has no
 *   route, no menu entry and no error - the single most common "why is my screen
 *   missing" question, and one line answers it.
 *
 *   IT SHOWS SOMEBODY ELSE'S ROWS. The failure that matters most and the one
 *   least likely to be noticed, because the screen looks perfect to whoever
 *   built it - they only ever sign in as one tenant.
 *
 *   IT IGNORES A PERMISSION. A policy that is not registered denies everything,
 *   which is loud; one that is registered and not consulted permits everything,
 *   which is silent.
 *
 * EVERY HELPER GOES THROUGH HTTP, deliberately. Calling a resource's methods
 * directly proves the class works and says nothing about whether the route, the
 * middleware, the panel, the guard and the policy line up - which is where the
 * failures actually are.
 *
 * MIX IT INTO A TEST CASE that already has Laravel's testing traits:
 *
 *     final class BillingResourceTest extends TestCase
 *     {
 *         use InteractsWithPanels;
 *         use RefreshDatabase;
 *     }
 */
trait InteractsWithPanels
{
    /* ------------------------------------------------------------ addresses */

    /**
     * The URL of a resource screen, including the portal prefix.
     *
     * BUILT FROM THE REGISTRY rather than written out, because a test with
     * `/clients` hardcoded in it passes in the portal mounted at the root and
     * fails in every other - and the failure is a 404 that reads as a broken
     * route rather than a wrong assumption in the test.
     */
    protected function panelUrl(string $resourceKey, string $suffix = ''): string
    {
        $manager = app(PanelManager::class);

        $class = $manager->resource($resourceKey);

        if ($class === null) {
            $this->fail(
                "There is no resource keyed [{$resourceKey}]. Registered: "
                .(implode(', ', array_keys($manager->resources())) ?: 'none')
            );
        }

        $panel = $manager->panel($class::panel()) ?? $manager->currentPanel();

        $prefix = rtrim('/'.trim((string) ($panel?->getPath() ?? ''), '/'), '/');

        return $prefix.'/'.$resourceKey.($suffix === '' ? '' : '/'.ltrim($suffix, '/'));
    }

    /* ------------------------------------------------------------- presence */

    /**
     * The resource is registered, routed and openable.
     *
     * THE FIRST THING TO ASSERT ABOUT A NEW RESOURCE, because a class that was
     * never discovered fails silently in three separate ways at once: no route,
     * no navigation entry, and no error anywhere saying so.
     */
    protected function assertResourceRegistered(string $resourceKey): static
    {
        $manager = app(PanelManager::class);

        $this->assertNotNull(
            $manager->resource($resourceKey),
            "The resource [{$resourceKey}] is not registered. Check that its directory is in "
            .'panel.discover, or that a plugin registered it. Registered: '
            // THE LIST IS THE USEFUL HALF: the answer is almost always a typo in
            // a key, and seeing the real ones is faster than any explanation.
            .(implode(', ', array_keys($manager->resources())) ?: 'none'),
        );

        return $this;
    }

    /**
     * `$user` can open the list screen and it renders.
     */
    protected function assertResourceListsFor(object $user, string $resourceKey): TestResponse
    {
        $this->assertResourceRegistered($resourceKey);

        return $this->actingAs($user)
            ->get($this->panelUrl($resourceKey))
            ->assertOk();
    }

    /* ---------------------------------------------------------------- rows */

    /**
     * The rows a list screen actually returned, as the client receives them.
     *
     * THROUGH THE PROPS, NOT THE QUERY. A test that re-runs the resource's own
     * query proves the query works twice and proves nothing about the filters,
     * the tenant scope or the transform between them.
     *
     * @return list<array<string, mixed>>
     */
    protected function panelRecords(object $user, string $resourceKey, array $query = []): array
    {
        $url = $this->panelUrl($resourceKey);

        if ($query !== []) {
            $url .= '?'.http_build_query($query);
        }

        $props = $this->actingAs($user)->get($url)->assertOk()->viewData('page')['props'];

        return array_values((array) ($props['records'] ?? []));
    }

    /** `$record` is on the list screen for `$user`. */
    protected function assertResourceShows(object $user, string $resourceKey, Model $record): static
    {
        $this->assertContains(
            $record->getKey(),
            array_column($this->panelRecords($user, $resourceKey), 'id'),
            "[{$resourceKey}] does not list record #{$record->getKey()} for this user.",
        );

        return $this;
    }

    /** `$record` is NOT on the list screen for `$user`. */
    protected function assertResourceHides(object $user, string $resourceKey, Model $record): static
    {
        $this->assertNotContains(
            $record->getKey(),
            array_column($this->panelRecords($user, $resourceKey), 'id'),
            "[{$resourceKey}] lists record #{$record->getKey()}, which this user must not see.",
        );

        return $this;
    }

    /**
     * ANOTHER ORGANISATION'S RECORD IS INVISIBLE AND UNREACHABLE.
     *
     * THE ONE TO WRITE FIRST for any resource in a tenant panel. The list is the
     * obvious half; the record URL is the half people forget, and it is the one
     * an attacker uses - guessing an id is easy, and a `find()` without the
     * scope answers it happily.
     */
    protected function assertTenantIsolation(object $user, string $resourceKey, Model $foreign): static
    {
        $this->assertResourceHides($user, $resourceKey, $foreign);

        $response = $this->actingAs($user)->get($this->panelUrl($resourceKey, (string) $foreign->getKey()));

        $this->assertContains(
            $response->getStatusCode(),
            [403, 404],
            "[{$resourceKey}] served another organisation's record #{$foreign->getKey()} "
            .'with status '.$response->getStatusCode().'.',
        );

        return $this;
    }

    /* --------------------------------------------------------- permissions */

    /**
     * Somebody without the ability is refused.
     *
     * A POLICY THAT IS NOT CONSULTED PERMITS EVERYTHING, silently - the opposite
     * of a policy that is missing, which denies everything and is noticed within
     * a minute. This is how you tell the two apart.
     */
    protected function assertResourceRefuses(object $user, string $resourceKey, string $suffix = ''): static
    {
        $response = $this->actingAs($user)->get($this->panelUrl($resourceKey, $suffix));

        $this->assertContains(
            $response->getStatusCode(),
            [403, 404],
            "[{$resourceKey}] was served to a user who should not have it "
            .'(status '.$response->getStatusCode().').',
        );

        return $this;
    }

    /* -------------------------------------------------------------- schema */

    /**
     * The table schema the client is given.
     *
     * @return array<string, mixed>
     */
    protected function panelSchema(object $user, string $resourceKey): array
    {
        $props = $this->actingAs($user)
            ->get($this->panelUrl($resourceKey))
            ->assertOk()
            ->viewData('page')['props'];

        return (array) ($props['schema'] ?? []);
    }

    /**
     * A column reaches the client.
     *
     * READ FROM `schema.table.columns`, which is where the payload actually puts
     * them - a helper reaching for `schema.columns` would report every resource
     * as having no columns at all, and the person using it would believe their
     * table was broken.
     *
     * WORTH ASSERTING BECAUSE COLUMNS ARE FILTERED ON THE WAY OUT - by
     * permission, by feature flag, by whether the resource is writable - and a
     * column that quietly disappears for one role is a report somebody files as
     * "the table is missing data".
     */
    protected function assertSchemaHasColumn(object $user, string $resourceKey, string $column): static
    {
        $schema = $this->panelSchema($user, $resourceKey);

        $columns = array_column((array) ($schema['table']['columns'] ?? []), 'key');

        $this->assertContains(
            $column,
            $columns,
            "[{$resourceKey}] does not send a [{$column}] column. It sends: ".implode(', ', $columns),
        );

        return $this;
    }

    /**
     * A form field reaches the client, at any depth.
     *
     * ANY DEPTH BECAUSE A FORM IS A TREE - sections, tabs, wizard steps and
     * repeaters all nest - and a test that reached into `form.fields[3]` would
     * break the first time somebody wrapped two fields in a section.
     *
     * @return array<string, mixed> The field node, so a caller can assert on it.
     */
    protected function assertSchemaHasField(object $user, string $resourceKey, string $field): array
    {
        $form = (array) ($this->panelSchema($user, $resourceKey)['form'] ?? []);

        $node = $this->findFieldNode($form, $field);

        $this->assertNotNull($node, "[{$resourceKey}] has no [{$field}] field in its form schema.");

        return $node;
    }

    /* -------------------------------------------------------------- writes */

    /**
     * A create request is refused, and names `$field`.
     *
     * THE FIELD MATTERS. Asserting only that a save failed passes when it failed
     * for a completely different reason - a missing required column, a policy,
     * a CSRF token - which is how a validation test ends up green while the rule
     * it was written for does nothing.
     *
     * @param  array<string, mixed>  $payload
     */
    protected function assertPanelValidationFails(
        object $user,
        string $resourceKey,
        array $payload,
        string $field,
    ): static {
        $this->actingAs($user)
            ->post($this->panelUrl($resourceKey), $payload)
            ->assertSessionHasErrors($field);

        return $this;
    }

    /**
     * A create request succeeds and the row exists.
     *
     * @param  array<string, mixed>  $payload
     * @param  array<string, mixed>  $expect  Columns to look for; defaults to the payload.
     */
    protected function assertPanelCreates(
        object $user,
        string $resourceKey,
        array $payload,
        array $expect = [],
    ): static {
        $class = app(PanelManager::class)->resource($resourceKey);

        $this->assertNotNull($class, "There is no resource keyed [{$resourceKey}].");

        $this->actingAs($user)
            ->post($this->panelUrl($resourceKey), $payload)
            ->assertSessionHasNoErrors();

        /** @var class-string<resource> $class */
        $model = $class::model();

        $this->assertDatabaseHas((new $model)->getTable(), $expect === [] ? $payload : $expect);

        return $this;
    }

    /* -------------------------------------------------------------- helpers */

    /**
     * Depth-first search for a field node in a form tree.
     *
     * @param  array<string, mixed>  $node
     * @return array<string, mixed>|null
     */
    private function findFieldNode(array $node, string $key): ?array
    {
        if (($node['component'] ?? null) === 'field' && ($node['key'] ?? null) === $key) {
            return $node;
        }

        foreach ($node as $value) {
            if (! is_array($value)) {
                continue;
            }

            if (isset($value['component']) || isset($value['key'])) {
                if (($found = $this->findFieldNode($value, $key)) !== null) {
                    return $found;
                }

                continue;
            }

            foreach ($value as $child) {
                if (is_array($child) && ($found = $this->findFieldNode($child, $key)) !== null) {
                    return $found;
                }
            }
        }

        return null;
    }
}
