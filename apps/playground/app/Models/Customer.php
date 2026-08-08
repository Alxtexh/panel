<?php

declare(strict_types=1);

namespace App\Models;

use Database\Factories\CustomerFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Foundation\Auth\User as Authenticatable;

/**
 * Somebody who BUYS the service, as opposed to somebody who operates it.
 *
 * A SEPARATE MODEL AND A SEPARATE TABLE, and the separation is the point. The
 * alternative - a flag on `users` - is the arrangement that leaks: every query
 * that forgets the flag returns customers among operators, and every
 * permission check that forgets it hands a customer an operator's screen. One
 * missed `where` is the whole failure.
 *
 * IT HOLDS NO PERMISSIONS AT ALL. There is no `HasRoles`, no abilities, no
 * `hasPermission()`. That is not an omission to fill in later: a customer's
 * authorisation question is "is this mine", which the client panel's own
 * policies answer from `tenant_id` and ownership. Giving this model a role
 * system would create a path by which a customer could hold an operator's
 * grant, and the only reliable way to prevent that is not to have the path.
 *
 * WHY IT EXISTS IN THE REFERENCE APPLICATION. `Panel::guard()` was wired
 * everywhere and exercised nowhere - every panel here ran on `web`. A type
 * with no consumer is a type nobody has looked at, and this codebase has paid
 * for that four times. So the demo now runs a panel on a second guard backed
 * by a second model, and `SecondGuardIsolationTest` asserts that neither side
 * can reach the other.
 */
final class Customer extends Authenticatable
{
    /** @use HasFactory<CustomerFactory> */
    use HasFactory;

    protected $fillable = ['tenant_id', 'name', 'email', 'password'];

    /** @var list<string> */
    protected $hidden = ['password', 'remember_token'];

    /** @return array<string, string> */
    protected function casts(): array
    {
        return ['password' => 'hashed'];
    }

    /** @return BelongsTo<Tenant, $this> */
    public function tenant(): BelongsTo
    {
        return $this->belongsTo(Tenant::class);
    }
}
