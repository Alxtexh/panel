<?php

declare(strict_types=1);

namespace PanelKit\Panel\Schema;

/**
 * Tabbed sections, for a form or a view page.
 *
 * VALIDATION STILL SEES EVERY FIELD. A field hidden behind an inactive tab is
 * validated and saved exactly like a visible one - `Component::collectFields()`
 * walks the whole tree. Anything else would mean a required field could be
 * skipped by never opening its tab, which is a correctness hole rather than a
 * layout quirk.
 */
final class Tabs extends Component
{
    public static function make(): self
    {
        return new self;
    }

    /** @param list<Tab> $tabs */
    public function tabs(array $tabs): self
    {
        return $this->schema($tabs);
    }

    public function component(): string
    {
        return 'tabs';
    }
}
