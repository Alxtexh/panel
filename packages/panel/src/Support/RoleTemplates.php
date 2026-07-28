<?php

declare(strict_types=1);

namespace PanelKit\Panel\Support;

use PanelKit\Panel\PanelManager;

/**
 * Starting points for a new role.
 *
 * AN EMPTY PERMISSION MATRIX IS NOT A NEUTRAL DEFAULT. Creating a role meant
 * ticking dozens of boxes correctly from memory, and the mistakes that produces
 * are asymmetric: forgetting `view_any_clients` gives somebody an empty screen
 * they will complain about within the hour, while accidentally leaving
 * `force_delete_clients` ticked is invisible until the day it is used. A blank
 * form quietly biases towards over-granting, because the fastest way to make a
 * role "work" is to tick more.
 *
 * A TEMPLATE IS A STARTING POINT, NEVER A TYPE. It fills the matrix and then
 * gets out of the way: the role that comes out is an ordinary role with an
 * ordinary set of permissions, editable afterwards, with nothing recording where
 * it came from. Roles that stay linked to a template are a second permission
 * system - somebody edits the template and thirty roles change, or the link
 * decays and the name lies about what the role grants.
 *
 * ABILITY NAMES ARE DERIVED, NEVER LISTED. `view_any_clients` exists because a
 * resource keyed `clients` is registered - it is a fact about the code. A
 * template that spelled the names out would be a second copy of that fact, and
 * would silently grant nothing the day a resource is renamed. So templates
 * describe themselves in terms of ACTIONS, and the names are computed against
 * the registry at read time.
 *
 * NOTHING HERE IS ENFORCED. A template is a convenience; `Abilities::all()` is
 * still what decides which names are real, and the policy is still what decides
 * what they permit.
 */
final class RoleTemplates
{
    /**
     * Every template, with its abilities resolved against the live registry.
     *
     * @return list<array{key: string, name: string, description: string, abilities: list<string>}>
     */
    public static function all(): array
    {
        $out = [];

        foreach (self::definitions() as $key => $definition) {
            $abilities = self::resolve($definition);

            /*
             * A TEMPLATE THAT RESOLVES TO NOTHING IS NOT OFFERED. It happens
             * when an installation has no resource matching the template's
             * subject - a panel with no billing has no use for "Finance" - and
             * offering it anyway produces a role that grants nothing while
             * looking like it grants something.
             */
            if ($abilities === []) {
                continue;
            }

            $out[] = [
                'key' => $key,
                'name' => $definition['name'],
                'description' => $definition['description'],
                'abilities' => $abilities,
            ];
        }

        return $out;
    }

    /** @return list<string> */
    public static function abilitiesFor(string $key): array
    {
        $definition = self::definitions()[$key] ?? null;

        return $definition === null ? [] : self::resolve($definition);
    }

    /**
     * The templates themselves.
     *
     * `resources` is either `'*'` or a list of resource KEYS; a key that is not
     * registered is skipped rather than erroring, so one template can serve
     * installations with different resource sets.
     *
     * @return array<string, array{
     *     name: string,
     *     description: string,
     *     actions: list<string>,
     *     resources: string|list<string>,
     *     except?: list<string>,
     *     panel?: list<string>,
     * }>
     */
    private static function definitions(): array
    {
        $appTemplates = (array) config('panel.role_templates', []);

        return [
            /*
             * READ-ONLY IS FIRST because it is the one people reach for and the
             * one they build wrong. Assembled by hand it usually ends up with
             * `update` ticked somewhere - a matrix of forty checkboxes is not
             * something anybody audits after the fact.
             */
            'read-only' => [
                'name' => 'Read only',
                'description' => 'Can open every screen and change nothing.',
                'actions' => ['viewAny', 'view'],
                'resources' => '*',
            ],

            'editor' => [
                'name' => 'Editor',
                'description' => 'Reads everything, creates and edits records, deletes nothing.',
                /*
                 * NO `delete`, AND THAT IS THE POINT OF HAVING THIS ONE. The
                 * common real-world role is somebody trusted to correct data and
                 * not to remove it, and it is exactly the role that is hardest to
                 * build by ticking boxes - the delete column sits beside update
                 * and gets swept up.
                 */
                'actions' => ['viewAny', 'view', 'create', 'update'],
                'resources' => '*',
            ],

            'manager' => [
                'name' => 'Manager',
                'description' => 'Everything except permanently destroying records.',
                /*
                 * `forceDelete` IS WITHHELD, deliberately. Soft deletion is
                 * recoverable and a manager should be able to do it; erasing the
                 * row is the one action with no undo, and separating the two is
                 * the entire reason the policy treats them as different
                 * abilities.
                 */
                'actions' => ['viewAny', 'view', 'create', 'update', 'delete', 'restore'],
                'resources' => '*',
            ],

            /*
             * APPLICATION TEMPLATES COME LAST AND MAY OVERRIDE. An installation
             * knows what a support desk does here; the package does not, and a
             * package guessing at business roles would ship a "Finance" template
             * that grants the wrong things confidently.
             */
            ...$appTemplates,
        ];
    }

    /**
     * @param  array<string, mixed>  $definition
     * @return list<string>
     */
    private static function resolve(array $definition): array
    {
        $registered = app(PanelManager::class)->resources();

        $wanted = $definition['resources'] ?? '*';
        $except = (array) ($definition['except'] ?? []);
        $actions = (array) ($definition['actions'] ?? []);

        $out = [];

        foreach ($registered as $key => $class) {
            if ($wanted !== '*' && ! in_array($key, (array) $wanted, true)) {
                continue;
            }

            if (in_array($key, $except, true)) {
                continue;
            }

            /*
             * INTERSECTED WITH WHAT THE RESOURCE SUPPORTS. A read-only resource
             * has no `update` to grant, and a template that produced one would
             * put a name into a role that `Abilities::all()` does not recognise
             * - which `panel:permissions sync` then prunes, silently changing
             * the role after the fact.
             */
            foreach (array_intersect($actions, $class::actions()) as $action) {
                $out[] = Abilities::name($action, $key);
            }
        }

        /*
         * Panel abilities are named literally, because they are not derived from
         * anything - but they are still checked against the registry, so a
         * template naming an ability this installation does not define
         * contributes nothing rather than an unusable string.
         */
        foreach ((array) ($definition['panel'] ?? []) as $ability) {
            if (in_array($ability, array_keys(Abilities::panelLabelled()), true)) {
                $out[] = $ability;
            }
        }

        return array_values(array_unique($out));
    }
}
