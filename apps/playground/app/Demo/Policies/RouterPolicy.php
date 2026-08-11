<?php

declare(strict_types=1);

namespace App\Demo\Policies;

use Alxtexh\Panel\Policies\TenantResourcePolicy;
use App\Demo\Models\Router;

/**
 * Router's policy, which has to NAME its model.
 *
 * `TenantResourcePolicy::modelFor()` derives the model from the policy's own
 * class name plus the application namespace - `RouterPolicy` guards
 * `App\Models\Router` - which is right for a conventional application and
 * wrong the moment a model moves. Fencing the ISP domain moved these into
 * `App\Demo\Models`, so the derivation named a class that does not exist,
 * `Abilities::forModel()` returned null, and every CLASS-LEVEL check - the
 * ones asked without a record, like `viewAny` and `create` - denied.
 *
 * THE SYMPTOM WAS A REFUSAL TO SOMEBODY HOLDING THE RIGHT ABILITY, which reads
 * as a permissions bug rather than as a moved file. Anybody relocating a model
 * out of `App\Models` needs this override; the convention has no way to follow.
 */
final class RouterPolicy extends TenantResourcePolicy
{
    protected function modelFor(): string
    {
        return Router::class;
    }
}
