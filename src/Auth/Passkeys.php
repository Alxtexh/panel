<?php

declare(strict_types=1);

namespace PanelKit\Panel\Auth;

use Illuminate\Contracts\Auth\Authenticatable;
use Laravel\Fortify\Contracts\PasskeyUser;
use Laravel\Fortify\Features;

/**
 * Passkeys, if the application has Fortify.
 *
 * WHY THIS IS A THIN WRAPPER AND NOT AN IMPLEMENTATION. Laravel Fortify ships
 * WebAuthn support: the `passkeys` relation, the challenge endpoints, the
 * `PasskeyUser` contract. Reimplementing any of that would be writing a second
 * authentication path with the first one still installed, which is how an app
 * ends up with two ways in and only one of them audited.
 *
 * What was missing was never the capability - the reference app has had working
 * passkeys for a long time. It was that the capability lived in the APPLICATION,
 * so `composer require panelkit/panel` produced a panel with no passkey support
 * and no indication that adding it was a solved problem.
 *
 * A SOFT DEPENDENCY, deliberately. PanelKit does not require Fortify: an
 * installation on Breeze, on a starter kit, or on its own auth is a perfectly
 * ordinary consumer, and a hard requirement would drag a second auth stack into
 * every one of them. Every method here answers honestly when Fortify is absent
 * rather than throwing, so a security screen renders without the passkey section
 * instead of failing to render at all.
 */
final class Passkeys
{
    /**
     * Whether this installation can manage passkeys at all.
     *
     * THREE CONDITIONS, NOT ONE. Fortify may be installed with the feature
     * turned off, and a user model may predate the contract - the panel has to
     * know all three before offering a control, because a button that enrols
     * nothing is worse than no button.
     */
    public static function available(?Authenticatable $user = null): bool
    {
        if (! class_exists(Features::class)) {
            return false;
        }

        if (! Features::canManagePasskeys()) {
            return false;
        }

        return $user === null || $user instanceof PasskeyUser;
    }

    /**
     * This person's passkeys, in the shape a screen renders.
     *
     * SERIALISED HERE RATHER THAN IN A CONTROLLER, so every panel that shows
     * them shows the same fields under the same names. `last_used_at` is the one
     * that matters operationally: a key nobody has used in a year is the one to
     * question, and a raw timestamp makes that a calculation the reader has to
     * do.
     *
     * @return list<array{id: mixed, name: string, authenticator: string|null, created: string, lastUsed: string|null}>
     */
    public static function forUser(?Authenticatable $user): array
    {
        if ($user === null || ! self::available($user)) {
            return [];
        }

        /** @var iterable<object> $passkeys */
        $passkeys = $user->passkeys()->latest()->get();

        $out = [];

        foreach ($passkeys as $passkey) {
            $out[] = [
                'id' => $passkey->id,
                'name' => (string) $passkey->name,
                'authenticator' => $passkey->authenticator,
                'created' => $passkey->created_at?->diffForHumans() ?? '',
                'lastUsed' => $passkey->last_used_at?->diffForHumans(),
            ];
        }

        return $out;
    }

    /**
     * Where a browser should send someone to enrol or manage a passkey.
     *
     * THE WELL-KNOWN ENDPOINT IS PART OF THE SPEC, not decoration. Password
     * managers and platform authenticators read
     * `/.well-known/passkey-endpoints` to offer "add a passkey to this site"
     * from their own interface - so an installation without it has passkeys that
     * work only for somebody who already knows where the screen is.
     *
     * @return array{enroll: string, manage: string}
     */
    public static function endpoints(): array
    {
        $url = self::manageUrl();

        return ['enroll' => $url, 'manage' => $url];
    }

    /**
     * The panel's security screen, or the application root.
     *
     * NAMED ROUTE FIRST, because an application that mounts its own security
     * page keeps it. Falling back to `/` rather than throwing means the
     * well-known document is always servable: a wrong-but-present URL sends
     * somebody to the home page, and an exception sends a password manager a
     * 500.
     */
    private static function manageUrl(): string
    {
        foreach (['security.edit', 'panel.pages.security', 'settings.security'] as $name) {
            if (app('router')->has($name)) {
                return route($name);
            }
        }

        return url('/');
    }
}
