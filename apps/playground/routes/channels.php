<?php

declare(strict_types=1);

use App\Models\User;
use Illuminate\Support\Facades\Broadcast;
use PanelKit\Panel\PanelManager;
use PanelKit\Panel\Support\Abilities;

/*
| A TENANT-SCOPED PANEL WITH AN UNSCOPED BROADCAST CHANNEL IS A CROSS-TENANT
| LEAK THAT NO HTTP TEST WOULD CATCH.
|
| Every guard built so far - the global scope, the policies, the hostname checks -
| sits on the HTTP path. A WebSocket subscription does not travel that path: it is
| authorised once, by name, against these callbacks, and thereafter the server
| pushes whatever is broadcast to that name. So a channel called `clients` with a
| callback that returns `true` for any signed-in user is a live feed of every
| organisation's subscriber changes, and every isolation test in the suite would
| still pass.
|
| THREE THINGS ARE CHECKED, and all three are necessary:
|
|   IDENTITY   the callback only runs for an authenticated user;
|   TENANCY    the tenant in the channel NAME must be the user's own;
|   PERMISSION the user must hold the ability that lets them see the thing.
|
| Dropping any one is a real hole. Without tenancy, anybody can subscribe to
| another organisation by editing a number. Without permission, a read-only role
| gets live updates for records the panel refuses to show it - the same data,
| through a different pipe.
*/

/**
 * Everything a tenant broadcasts lives under one prefix, so the tenant check is
 * written once rather than per resource.
 *
 * `{tenant}` is a STRING in the callback whatever it is in the database - the
 * channel name arrives over the wire - so the comparison is made loosely on
 * purpose, and the callbacks below never trust it for anything but comparison.
 */
Broadcast::channel('tenant.{tenant}.{resource}', function (User $user, string $tenant, string $resource): bool {
    // TENANCY. The user's own tenant, not the one they asked for.
    if ((string) $user->tenant_id !== $tenant) {
        return false;
    }

    $class = app(PanelManager::class)->resource($resource);

    // An unregistered resource is not a channel. Returning true here would make
    // every typo a subscribable feed.
    if ($class === null) {
        return false;
    }

    // PERMISSION. The same ability the list page requires, so the live feed can
    // never show what the screen would refuse.
    return $user->hasPermission(Abilities::name('viewAny', $resource));
});

/**
 * Presence: who else is looking at this record.
 *
 * RETURNS THE MEMBER PAYLOAD, and that payload is broadcast to every other
 * subscriber - so it must contain only what a colleague may see. A name and an
 * id; not an email, not a role, and nothing that would turn "who is here" into a
 * directory of the organisation.
 *
 * @return array{id: int, name: string}|false
 */
Broadcast::channel('tenant.{tenant}.{resource}.{id}', function (User $user, string $tenant, string $resource, string $id): array|false {
    if ((string) $user->tenant_id !== $tenant) {
        return false;
    }

    $class = app(PanelManager::class)->resource($resource);

    if ($class === null || ! $user->hasPermission(Abilities::name('view', $resource))) {
        return false;
    }

    /*
     * THE RECORD MUST BE ONE THEY CAN ACTUALLY REACH. The tenant check above
     * covers the common case, and this covers the rest: a record belonging to
     * this tenant that the person is nonetheless not allowed to open. Reading it
     * through the scoped query is the same gate the detail page uses.
     */
    if ($class::model()::query()->whereKey($id)->doesntExist()) {
        return false;
    }

    return ['id' => $user->id, 'name' => $user->name];
});
