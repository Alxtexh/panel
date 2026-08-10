<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;

/**
 * Somebody who runs the INSTALLATION, as opposed to somebody who runs an
 * organisation inside it.
 *
 * A THIRD AUTHENTICATABLE AND A THIRD GUARD, and the count is the point:
 * `users` on `web` operate a tenant, `customers` on `customers` buy from one,
 * and this operates the software all of them run on. Three tables rather than
 * three flags, so that reaching the wrong one requires a different session
 * rather than a missing `where`.
 *
 * TWO INDEPENDENT LIMITS, AND IT NEEDS BOTH.
 *
 * The GUARD is the outer one: this model authenticates only on `superadmins`,
 * and only the superadmin panel runs on that guard, so no permission it could
 * ever hold opens a tenant screen. The ABILITIES column is the inner one, and
 * it is what keeps the policies on this portal falsifiable - the first draft
 * of this class returned true from `hasPermission()` unconditionally, which
 * made every policy here a check that cannot fail, which is a check nobody has
 * tested.
 *
 * NO `HasRoles`, for two reasons. The same one `Customer` has none - a path by
 * which this model could hold a Spatie grant is a path by which a Spatie grant
 * could reach an operator screen - and a practical one: `laravel-permission`
 * runs with TEAMS here, keyed on `tenant_id`, and this account has no tenant,
 * so its grants would sit under a null team. A list of strings on the row
 * answers the same question with nothing to get wrong.
 */
final class SuperadminUser extends Authenticatable
{
    protected $table = 'superadmin_users';

    protected $fillable = ['name', 'email', 'password', 'abilities'];

    /** @var list<string> */
    protected $hidden = ['password', 'remember_token'];

    /** @return array<string, string> */
    protected function casts(): array
    {
        return ['password' => 'hashed', 'abilities' => 'array'];
    }

    /**
     * `Support\Ability::held()` checks `method_exists($user, 'hasPermission')`
     * before falling back to `can()`, so defining this is what makes every
     * packaged policy consult the column above.
     *
     * DENY BY DEFAULT: an account with no abilities holds none, and a row
     * written without the column falls to an empty list rather than to
     * everything.
     */
    public function hasPermission(string $ability): bool
    {
        $held = $this->abilities ?? [];

        return in_array('*', $held, true) || in_array($ability, $held, true);
    }
}
