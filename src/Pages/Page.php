<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Pages;

use Illuminate\Http\Request;

/**
 * A screen that is not a resource.
 *
 * WHY THIS EXISTS. Until now the panel could declare exactly one kind of thing:
 * a list of records with a form behind it. Everything else - a settings centre,
 * a health page, a device manager, a dashboard - had no declaration point at
 * all. The whole package route table was `{resource}/…` plus a handful of named
 * exceptions, so a screen that was not a resource meant a hand-written
 * controller, a hand-written route, a hand-written navigation entry and a
 * hand-written permission check. Four things to get right, none of them checked
 * by anything, per screen.
 *
 * The reference app has twenty-two of those and seventy routes to carry them.
 * That is the cost this class removes.
 *
 * ONE CLASS, ONE SCREEN, and this is the constraint that makes the rest work. It
 * would be easy to allow a controller-shaped page that renders three different
 * things depending on the request - the reference app's mail and operations
 * controllers do exactly that today. But then "which page am I" becomes a
 * runtime question, and a navigation entry, an ability name and a URL cannot be
 * derived from the class at all. A resource gets one key and one URL segment; a
 * page gets the same deal.
 *
 * A PAGE IS NOT ONLY A RENDER. Half the reference app's page controllers do
 * something as well as show something - restore a backup, invite a member, send
 * a message. A base class offering only `data()` would have covered the easy
 * half and sent the interesting half back to hand-written routes, which is how
 * this kind of work reaches "most of the pages, mostly". So `actions()` is here
 * from the start, each action carrying its own ability.
 *
 * WHAT A SUBCLASS MUST SAY: `component()`, the Vue page to render, and `data()`,
 * what to hand it. Everything else has a default derived from the class name.
 */
abstract class Page
{
    /**
     * WIDGETS ACROSS THE TOP OF THIS PAGE.
     *
     * THE THIRD AND LAST HOST, which is what turns a dashboard feature into a
     * widget system. `Panel::widgets()` made them registerable and
     * `DashboardPage` was the only screen that resolved them, so putting a
     * stat card on a custom page meant reimplementing the resolution - and
     * reimplementing it is how the permission check or the deferred grouping
     * ends up subtly different on one screen.
     *
     * `WidgetSet` owns both rules for every host: a widget the viewer may not
     * see is never sent and never queried, and the whole row is ONE deferred
     * request rather than one per card.
     *
     * @return list<\Alxtexh\Panel\Widgets\StatWidget|\Alxtexh\Panel\Widgets\ChartWidget|\Alxtexh\Panel\Widgets\TableWidget>
     */
    public static function headerWidgets(): array
    {
        return [];
    }

    /**
     * Lucide icon name for the navigation entry.
     *
     * A NAME, NEVER A CLASS. The client decides what an icon looks like; a page
     * that shipped markup would be a page that cannot be restyled.
     */
    protected static string $icon = 'file';

    /** Sidebar heading this page sits under, or null for the top level. */
    protected static ?string $group = null;

    /** Which portal shows it. A page belongs to exactly one, like a resource. */
    protected static string $panel = 'admin';

    /** Lower sorts first within a group. */
    protected static ?int $sort = null;

    /**
     * Product module this screen belongs to, or null for always-on.
     *
     * When set, `isAccessible()` requires `moduleEnabled($module)`, the
     * sidebar omits the entry, and the URL answers 403. Register the key
     * with `Panel::modules()` / `Module::make()`. SaaS apps MUST set
     * `ModuleRegistry::grants()`; until then every registered module is on.
     */
    protected static ?string $module = null;

    /**
     * The URL segment and the identity.
     *
     * SHARED NAMESPACE WITH RESOURCE KEYS, deliberately, and enforced at
     * registration. A page slugged `roles` beside a resource keyed `roles` is
     * two screens claiming one URL, and whichever registers first wins silently
     * - the loser is not a 404, it is simply gone. That exact collision shipped
     * in 0.2.0 and had to be papered over with a doctor check.
     */
    public static function slug(): string
    {
        return str(class_basename(static::class))->beforeLast('Page')->kebab()->value();
    }

    /**
     * The route URI, which is the slug unless the page needs parameters.
     *
     * FOUND BY CONVERTING A REAL SCREEN. The first version routed `slug()` and
     * nothing else, and the first page picked up to test it was
     * `/user-management/{tab?}` - a tab in the path, not a query string. A
     * mechanism that could not express that would have sent exactly the pages
     * with any structure back to hand-written routes, which is the failure this
     * class exists to remove.
     *
     * THE SLUG STILL IDENTIFIES IT. The URI may carry segments; the slug remains
     * the key, the ability stem and the navigation href, so a parameterised page
     * is still one nameable thing.
     */
    public static function uri(): string
    {
        return static::slug();
    }

    /** What the sidebar calls it. */
    public static function label(): string
    {
        return str(class_basename(static::class))->beforeLast('Page')->headline()->value();
    }

    public static function icon(): string
    {
        return static::$icon;
    }

    public static function group(): ?string
    {
        return static::$group;
    }

    public static function panel(): string
    {
        return static::$panel;
    }

    public static function sort(): ?int
    {
        return static::$sort;
    }

    public static function module(): ?string
    {
        $module = static::$module;

        return $module === null || $module === '' ? null : $module;
    }

    /**
     * The ability required to open this page, or null for anyone signed in.
     *
     * AN ABILITY NAME, NOT A POLICY, and that is the difference from a resource.
     * `Resource::can()` asks the Gate for a policy on a model; a page has no
     * model, so there is nothing to write a policy for. The name is checked
     * against the permission system directly - the pattern already carrying
     * `view_operations` and `manage_billing` in the reference app.
     *
     * DEFAULTS TO ONE DERIVED FROM THE SLUG, so a page is protected by having
     * been written rather than by somebody remembering. Returning null is
     * allowed and is a deliberate act: it means every authenticated operator.
     */
    public static function ability(): ?string
    {
        return 'view_'.str(static::slug())->snake()->value();
    }

    /**
     * Endpoints this page owns, as `name => ability`.
     *
     * ROUTED UNDER THE PAGE'S OWN SLUG - `POST /organisation/invite` - so a page
     * and the things it does travel together. The handler is a method on the
     * page named for the action.
     *
     * EACH CARRIES ITS OWN ABILITY because seeing and doing are different
     * grants. A support operator reading the backup page is not the same person
     * as one restoring over the live database, and a mechanism that could not
     * express that would push everything that mutates back out to hand-written
     * routes - which is most of what a panel is for.
     *
     * @return array<string, string|null>
     */
    public static function actions(): array
    {
        return [];
    }

    /**
     * The HTTP method for each action, when it is not POST.
     *
     * @return array<string, string>
     */
    public static function actionMethods(): array
    {
        return [];
    }

    /**
     * Where each action sits, relative to the page - the action's name by default.
     *
     * AN EMPTY STRING MEANS THE PAGE'S OWN URI, which is the ordinary save: a
     * settings screen is `GET /settings/organisation` and `PUT` to the same
     * address. The first version of this routed every action at
     * `slug/{action}`, so saving a page meant `PUT /settings/organisation/update`
     * - a URL nobody writes by hand, invented by a mechanism rather than chosen.
     *
     * Found by converting a real screen rather than by thinking about it, which
     * is why the two conversions were worth doing before calling this finished.
     *
     * @return array<string, string>
     */
    public static function actionUris(): array
    {
        return [];
    }

    /** The Vue page name this renders - resolved exactly as a resource screen is. */
    abstract public static function component(): string;

    /**
     * Optional layout tree for the generic `PanelPage` shell.
     *
     * Return a `PageLayout` when the screen is mostly structured fields and
     * cards rather than bespoke Vue. Custom pages keep returning null and draw
     * everything in their own component.
     */
    public static function layout(): ?PageLayout
    {
        return null;
    }

    /** @return array<string, mixed>|null */
    public static function layoutSchema(): ?array
    {
        $layout = static::layout();

        return $layout?->toSchema();
    }

    /** Form rules for a layout-only page, when one is declared. */
    public static function layoutForm(): ?\Alxtexh\Panel\Forms\Form
    {
        $layout = static::layout();

        return $layout?->toForm();
    }

    /**
     * The props the screen needs.
     *
     * MAY QUERY, unlike a resource's `table()` and `form()`. Those build a
     * cached description of a screen and run before anybody has asked for a row;
     * this runs per request, for one signed-in person, and returns their data.
     * It is the ordinary controller body, with the routing and the authorising
     * already done.
     *
     * @return array<string, mixed>
     */
    abstract public static function data(Request $request): array;

    /**
     * Shown in the page header, above whatever `component()` draws.
     *
     * Optional, and separate from `label()`: a sidebar entry wants two words and
     * a heading can afford a sentence.
     */
    public static function heading(): ?string
    {
        return null;
    }

    public static function description(): ?string
    {
        return null;
    }

    /**
     * Whether this page exists in this installation at all.
     *
     * DIFFERENT FROM `shouldShowInNavigation()`, and the distinction cost a real
     * screen. Hidden-from-the-menu means routed and reached from somewhere else
     * - a record, an account menu, a link in an email. NOT ENABLED means there
     * is nothing here: no route, no navigation entry, nothing to collide with.
     *
     * The package's own pages need it. `ChangelogPage` registered itself into an
     * installation with no release notes and took `/whats-new` from the
     * application's own changelog - same URI, later registration, and 304 lines
     * of real content replaced by an empty state. A page with nothing to offer
     * should not be routed at all.
     *
     * BOOT-TIME ONLY. This is evaluated during route registration, before any
     * HTTP request exists and before any tenant is initialised. It must not
     * read tenant data, session data, or request state.
     *
     * For checks that require a live request (e.g. whether the tenant's database
     * has the table the page needs), override `isAccessible()` instead - it is
     * evaluated at request time, after the tenant context is resolved.
     */
    public static function isEnabled(): bool
    {
        return true;
    }

    /**
     * Whether this page may be served for the current request.
     *
     * REQUEST-TIME GATE, evaluated after tenant initialisation. Returning false
     * results in a 403. Override this for tenant- or feature-flag-dependent
     * visibility; `isEnabled()` is evaluated at boot time where no tenant exists.
     *
     * The route is registered regardless of this return value - only pages where
     * `isEnabled()` returns false skip route registration entirely.
     */
    public static function isAccessible(): bool
    {
        $module = static::module();

        return $module === null || moduleEnabled($module);
    }

    /**
     * Whether this page appears in the navigation at all.
     *
     * A PAGE HIDDEN HERE IS STILL ROUTED. Some screens are reached from
     * somewhere specific - a record, an account menu, a link in an email - and
     * putting them in the sidebar as well makes the sidebar longer for no gain.
     * The navigation coverage rule accounts for them as somebody else's entry
     * rather than as missing.
     */
    public static function shouldShowInNavigation(): bool
    {
        return true;
    }

    /**
     * The navigation entry, in the shape the sidebar already consumes.
     *
     * `$prefix` IS FORCED ABSOLUTE HERE, the same way `PanelManager::clusterNavFor()`
     * already builds a resource's cluster links (`rtrim('/'.trim($p, '/'), '/')`,
     * not `rtrim($p, '/')`). `Panel::getPath()` returns the raw path a host
     * declared - `'client'`, not `'/client'` - so without forcing the slash
     * this produced a HREF WITH NO LEADING `/` on every panel whose path is
     * non-empty. On the `admin` panel (`path('')`) that bug is invisible: an
     * empty prefix plus the leading `/` this method already inserts before
     * `navigationPath()` happens to make an absolute path anyway, by
     * coincidence rather than by the code being correct. A relative href
     * only shows the bug when the browser resolves it against the CURRENT
     * page's URL, which is exactly what a click from the same page does -
     * found on `PlanCatalogPage`'s sidebar entry, clicked while already on
     * that page: `client/account/subscription` (no leading slash) resolved
     * relative to `/client/account/subscription`, landing on
     * `/client/account/client/account/subscription`.
     *
     * @return array{title: string, href: string, icon: string, group: string|null, sort: int|null}
     */
    public static function navigationEntry(string $prefix = ''): array
    {
        $absolutePrefix = rtrim('/'.trim($prefix, '/'), '/');

        return [
            'title' => static::label(),
            'href' => $absolutePrefix.'/'.static::navigationPath(),
            'icon' => static::icon(),
            'group' => static::group(),
            'sort' => static::sort(),
        ];
    }

    /**
     * The URI with its parameters dropped - what a menu entry can link to.
     *
     * BUILT FROM `uri()`, NOT `slug()`, and getting that wrong shipped a broken
     * link: a page slugged `organisation` but mounted at `settings/organisation`
     * appeared in the sidebar pointing at `/organisation`, which is routed to
     * nothing. The slug is the IDENTITY; the uri is the address, and a menu
     * needs the address.
     *
     * OPTIONAL SEGMENTS ARE DROPPED so `user-management/{tab?}` links to
     * `user-management` and the page picks its own default. A REQUIRED
     * parameter cannot be guessed at all - a page that needs one is not
     * something a static menu entry can reach, and should say
     * `shouldShowInNavigation(): false` and be linked from wherever supplies it.
     */
    public static function navigationPath(): string
    {
        $segments = [];

        foreach (explode('/', static::uri()) as $segment) {
            if (str_starts_with($segment, '{')) {
                break;
            }

            $segments[] = $segment;
        }

        return implode('/', $segments);
    }
}
