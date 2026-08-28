<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Plugins;

/**
 * Named places a plugin may put markup - roadmap 4.4.
 *
 * THE GAP THIS CLOSES. The plugin API could add a resource, a page and
 * routes - a whole screen - and could not add a sentence to a screen that
 * already existed. So a billing plugin that wanted to show "3 days left in
 * your trial" above the record list had exactly one option: fork the page.
 * A fork is a copy that stops receiving fixes, and the first person to
 * notice is a customer.
 *
 * HOOKS ARE NAMED, NOT ARBITRARY. A plugin names a position from this
 * class's constants; anything else is refused at registration rather than
 * silently rendering nowhere - which is the failure mode that has somebody
 * debugging their own code for an hour over a typo in a string.
 *
 * WHAT A HOOK RENDERS IS A VUE COMPONENT NAME AND PROPS, never HTML. The
 * panel is an Inertia application: markup arriving as a string cannot be
 * hydrated, cannot use the design tokens, and would be the one place in the
 * system where a plugin's content is not subject to the same escaping as
 * everything else. A component name is resolved by the client against the
 * pages it already bundles.
 *
 * SCOPING IS PART OF THE REGISTRATION. A hook may apply everywhere, or only
 * on named resources - because "above every list in the panel" and "above
 * the invoices list" are different requests and a plugin that cannot say
 * which will always choose the loud one.
 */
final class RenderHooks
{
    /** Above the page title on a resource list. */
    public const LIST_BEFORE_HEADER = 'list.before-header';

    /** Between the list header and the table shell. */
    public const LIST_BEFORE_TABLE = 'list.before-table';

    /** Below the table, inside the page. */
    public const LIST_AFTER_TABLE = 'list.after-table';

    /** Above a record's form, before the first section. */
    public const FORM_BEFORE = 'form.before';

    /** Below a record's form, above the save bar. */
    public const FORM_AFTER = 'form.after';

    /** Above a record's read-only detail. */
    public const VIEW_BEFORE = 'view.before';

    /** Below a record's read-only detail. */
    public const VIEW_AFTER = 'view.after';

    /** Top of the dashboard, above the widgets. */
    public const DASHBOARD_BEFORE = 'dashboard.before';

    /** Bottom of the dashboard, below the widgets. */
    public const DASHBOARD_AFTER = 'dashboard.after';

    /**
     * Inside the panel shell, for chrome that is not a resource screen.
     * Mount `FeedbackDialog` here, or any other portal-wide dialog.
     */
    public const SHELL_FEEDBACK = 'shell.feedback';

    /** @return list<string> Every position a plugin may name. */
    public static function positions(): array
    {
        return [
            self::LIST_BEFORE_HEADER,
            self::LIST_BEFORE_TABLE,
            self::LIST_AFTER_TABLE,
            self::FORM_BEFORE,
            self::FORM_AFTER,
            self::VIEW_BEFORE,
            self::VIEW_AFTER,
            self::DASHBOARD_BEFORE,
            self::DASHBOARD_AFTER,
            self::SHELL_FEEDBACK,
        ];
    }

    public static function isPosition(string $position): bool
    {
        return in_array($position, self::positions(), true);
    }
}
