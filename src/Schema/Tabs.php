<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Schema;

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
    private ?string $persistInQueryString = null;

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

    /**
     * Remember which tab was open in the URL, so a refresh or a back-button
     * return lands where it was left rather than resetting to the first one.
     *
     * `$key` NAMES THE QUERY PARAMETER (`?tab=2` by default) rather than
     * being inferred, because a layout node has no identity of its own the
     * way a `Field` does - two persisted `Tabs` on one page need two
     * different names, chosen by whoever declared them, or the second
     * would silently read and overwrite the first's position.
     *
     * CLIENT-SIDE ONLY. Switching tabs is local state, so the client
     * updates the URL with `history.replaceState` - no request, no
     * `pushState` entry that would need the back button pressed once per
     * tab switch to escape.
     */
    public function persistInQueryString(string $key = 'tab'): self
    {
        $this->persistInQueryString = $key;

        return $this;
    }

    public function toSchema(): array
    {
        return [
            ...parent::toSchema(),
            'persistInQueryString' => $this->persistInQueryString,
        ];
    }
}
