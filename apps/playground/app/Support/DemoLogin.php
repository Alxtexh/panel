<?php

declare(strict_types=1);

namespace App\Support;

use App\Console\Commands\SeedReferenceCommand;
use Illuminate\Support\Facades\App;

/**
 * Prefilled sign-in for the reference app, on this machine only.
 *
 * WHY THIS IS ACCEPTABLE HERE AND NOWHERE ELSE. `panel:seed-reference` creates
 * operator accounts whose password is the literal string "password", written in
 * that command, which is public. This puts nothing new on screen: it types a
 * credential anybody reading the repository already has, into a form on a
 * server bound to localhost.
 *
 * THAT ARGUMENT COLLAPSES THE MOMENT THE ENVIRONMENT IS NOT LOCAL, which is why
 * the environment check is not a config option. An installation can turn this
 * on by mistake - `.env` files get copied, and the one being copied FROM is
 * usually a developer's. It cannot turn it on in production, because production
 * is not `local` and no key in any file changes that.
 *
 * DEFAULT OFF EVEN LOCALLY. A panel that fills in an administrator's password
 * for whoever opens it is a habit, and habits travel. Somebody has to ask.
 *
 * IT NEVER INVENTS AN ACCOUNT. If the demo data has not been seeded, the email
 * this returns does not exist and the form fails the way it should - which is
 * better than a seeder that quietly creates a known-password administrator on a
 * database somebody pointed at something real.
 */
final class DemoLogin
{
    /**
     * The seeder's own literal, and the reason this is not a secret.
     *
     * @see SeedReferenceCommand
     */
    private const SEEDED_PASSWORD = 'password';

    /**
     * The credentials to prefill, or null to prefill nothing.
     *
     * @return array{email: string, password: string}|null
     */
    public static function credentials(): ?array
    {
        if (! self::enabled()) {
            return null;
        }

        return [
            'email' => (string) config('demo.login.email'),
            'password' => self::SEEDED_PASSWORD,
        ];
    }

    /**
     * BOTH CONDITIONS, AND THE ENVIRONMENT ONE IS NOT NEGOTIABLE.
     *
     * `App::environment('local')` is checked directly rather than through a
     * config key so that no published file, no `.env` copied from a laptop and
     * no override in a service provider can satisfy it on a deployed machine.
     */
    public static function enabled(): bool
    {
        return App::environment('local') && (bool) config('demo.login.prefill', false);
    }
}
