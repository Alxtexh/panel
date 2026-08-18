<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Contracts;

use Alxtexh\Panel\Panel;

/**
 * Optional hook on the authenticatable: may this person use this panel at all?
 *
 * Distinct from abilities. A signed-in user with no role still authenticates;
 * returning false here is a 403 for the whole portal.
 */
interface CanAccessPanel
{
    public function canAccessPanel(Panel $panel): bool;
}
