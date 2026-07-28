<?php

declare(strict_types=1);

namespace PanelKit\Panel\Schema;

/**
 * Anything that can be a LEAF in a schema tree.
 *
 * Both a form Field and a table Column qualify: each describes one piece of
 * content and serialises to a node the client can render. Sharing an interface
 * is what lets Section, Tabs and Grid be used for a form AND a view page without
 * two parallel layout hierarchies - which is exactly the duplication a separate
 * "Entry" class family would have been.
 *
 * @method array<string, mixed> toSchema()
 */
interface Renderable
{
    /** @return array<string, mixed> */
    public function toSchema(): array;
}
