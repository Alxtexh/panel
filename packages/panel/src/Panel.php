<?php

declare(strict_types=1);

namespace Alxtexh\Panel;

use Closure;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Support\Facades\Auth;
use RuntimeException;

/**
 * A panel: an id, a path, a guard, middleware, and a tenancy context.
 *
 * THE GUARD IS THE POINT. Spec §9 item 6: each panel declares its own guard and
 * users resolve through `Auth::guard($panel->guard())`, never a bare
 * `$request->user()`.
 *
 * antipatterns §2.1 is that failure in production: admin code called
 * `$request->user()` on a panel authenticated with a non-default guard, got
 * null, resolved a per-admin draft key to an empty string, and silently fell
 * back to saved settings. Every unsaved edit was discarded. The page returned
 * 200 and looked correct; only logging the resolved id exposed it.
 *
 * CONTEXT matters too (addendum Part A). A central panel - platform or super
 * admin - must never have tenant scoping applied, and a tenant panel must refuse
 * to boot without a resolved tenant. Conflating them is how a super admin ends
 * up seeing one tenant's data, or an operator sees everyone's.
 */
final class Panel
{
    public const CONTEXT_TENANT = 'tenant';

    public const CONTEXT_CENTRAL = 'central';

    private string $path = 'app';

    private string $guard = 'web';

    private string $context = self::CONTEXT_TENANT;

    /** See `databaseTransactions()` for why this is off by default. */
    private bool $databaseTransactions = false;

    private ?string $routeName = null;

    /** @var list<string> */
    private array $middleware = ['web'];

    /** @var list<string> */
    private ?array $authMiddleware = null;

    /**
     * Plugins named by THIS panel, on top of any registered globally.
     *
     * BOTH ROUTES EXIST BECAUSE THEY ANSWER DIFFERENT QUESTIONS. A package
     * registering itself (`PanelManager::plugin`) means "install wherever you
     * apply", which is what makes `composer require` sufficient. Naming one here
     * means "this portal, specifically" - the reseller portal getting a billing
     * screen the operator portal does not.
     *
     * @var list<Plugins\PanelPlugin>
     */
    private array $plugins = [];

    /** See `widgets()`. Concatenated with whatever the dashboard page declares. */
    private array $widgets = [];

    /** @var array<string, string> See `discoverWidgets()`. */
    private array $widgetDirectories = [];

    /** @var list<array<string, mixed>> See `userMenuItems()`. */
    private array $userMenuItems = [];

    /** @var list<array<string, mixed>> See `navigationItems()`. */
    private array $navigationItems = [];

    /** See `favicon()`. Null keeps whatever the layout ships. */
    private ?string $favicon = null;

    /** @var array<int, array{title: string, body: string|null}> See `registerErrorNotification()`. */
    private array $errorNotifications = [];

    private ?Closure $brandName = null;

    private ?Closure $colors = null;

    /** @var list<string> */
    private array $without = [];

    /** @var list<string> */
    private array $with = [];

    /**
     * Screens that mount only when ASKED FOR, not screens somebody must
     * remember to exclude.
     *
     * WHY THESE FOUR AND NOT `help`/`roles`/`workspaces`. The other three
     * screens `offers()` gates are the panel doing its own job - a portal
     * with no help centre, no permission matrix or no workspace switcher is
     * missing something core. These four are the installation's own systems
     * exposed as ADMIN SCREENS: the server's environment file, its logs, its
     * queue, its document store, its bin of deleted records, its AI
     * assistant's settings. A reference app that runs those systems wants
     * them; a portal customers sign into does not, and a portal generated
     * from a starter has no reason to assume either way.
     *
     * THIS USED TO BE `make:panel`'s JOB, not the class's. The generator
     * hardcoded `->without([...])` these four names into every provider it
     * wrote, which reads as "off by default" right up until somebody hand
     * writes a `Panel` without going through the generator, or edits the
     * generated file and drops the line - at which point all four mount with
     * no warning, because the CLASS's own default was never off. Bucketing
     * these four here, ahead of `without()`, means the default is a property
     * of `Panel::offers()` itself and cannot be un-set by skipping a
     * generator.
     */
    private const OPT_IN_SCREENS = ['operations', 'assistant-settings', 'documents', 'trash'];

    /**
     * Directories THIS panel owns, as `directory => namespace`.
     *
     * @var array<string, string>
     */
    private array $resourceDirectories = [];

    /** @var array<string, string> */
    private array $pageDirectories = [];

    /** See `login()`. Null means this panel has no sign-in of its own. */
    private ?string $loginSlug = null;

    private bool $passwordReset = true;

    /** See `loginComponent()` for why this is not `auth/Login`. */
    private string $loginComponent = 'panel/auth/Login';

    private ?string $passwordBroker = null;

    private function __construct(public readonly string $id) {}

    public static function make(string $id): self
    {
        return new self($id);
    }

    /**
     * Install plugins into this panel.
     *
     * @param  list<Plugins\PanelPlugin>  $plugins
     */
    public function plugins(array $plugins): self
    {
        $this->plugins = [...$this->plugins, ...$plugins];

        return $this;
    }

    /** @return list<Plugins\PanelPlugin> */
    public function getPlugins(): array
    {
        return $this->plugins;
    }

    /**
     * WIDGETS THIS PORTAL SHOWS, REGISTERED RATHER THAN INHERITED.
     *
     * THE ONLY WAY TO ADD ONE USED TO BE A SUBCLASS. `DashboardPage::stats()`
     * and `::charts()` are static methods you override, so a portal wanting one
     * extra counter needed its own page class - and a PACKAGE wanting to
     * contribute one had nowhere to put it at all, because it cannot subclass a
     * page the application has not written yet. That is the difference between
     * an extension point and an inheritance hierarchy: Filament registers
     * widgets on the panel (`->widgets([...])`), which is why a Filament plugin
     * can ship a dashboard card and ours could not.
     *
     * BOTH KINDS GO IN ONE LIST, split by type where they are drawn - the call
     * site should not have to know that a counter and a chart are different
     * classes, only that both are things the dashboard shows.
     *
     * SUBCLASSING STILL WORKS AND STILL COMPOSES. What a page declares and what
     * the panel registers are concatenated, so an application that already has
     * its own dashboard keeps it and a plugin can still add to it.
     *
     * VISIBILITY IS UNCHANGED AND STILL SERVER-SIDE. Every widget from either
     * source passes `visibleTo()` before its deferred prop is registered, so
     * registering one here cannot put a number in the payload for somebody who
     * may not see it.
     *
     * @param  list<Widgets\StatWidget|Widgets\ChartWidget>  $widgets
     */
    public function widgets(array $widgets): self
    {
        $this->widgets = [...$this->widgets, ...$widgets];

        return $this;
    }

    /** @return list<Widgets\StatWidget|Widgets\ChartWidget> */
    public function getWidgets(): array
    {
        return [...$this->widgets, ...$this->discoveredWidgets()];
    }

    /**
     * WIDGETS FOUND BY SCANNING, the way resources and pages are found.
     *
     * `widgets([...])` TAKES INSTANCES, which is right for a handful and wrong
     * for a portal with thirty: every one has to be constructed in the provider,
     * so the provider grows to know every widget in the application and adding
     * one means editing a file in a different directory. Filament scans for the
     * same reason it scans resources - discovery is what keeps a provider a
     * DECLARATION rather than a manifest.
     *
     * A CLASS IS FOUND IF IT DECLARES `make(): StatWidget|ChartWidget`. There is
     * no interface to implement because the widgets themselves are final value
     * objects, not a hierarchy - so the contract is the static factory, which is
     * also the thing a reader would look for.
     */
    public function discoverWidgets(string $in, string $for): self
    {
        $this->widgetDirectories[$in] = $for;

        return $this;
    }

    /** @return array<string, string> */
    public function getWidgetDirectories(): array
    {
        return $this->widgetDirectories;
    }

    /**
     * @return list<Widgets\StatWidget|Widgets\ChartWidget>
     */
    private function discoveredWidgets(): array
    {
        $out = [];

        foreach ($this->widgetDirectories as $directory => $namespace) {
            if (! is_dir($directory)) {
                continue;
            }

            foreach (glob(rtrim($directory, '/').'/*.php') ?: [] as $file) {
                $class = rtrim($namespace, '\\').'\\'.basename($file, '.php');

                // Skip anything that is not a concrete widget factory: an
                // abstract base or a stray helper must not become a card.
                if (! class_exists($class) || ! method_exists($class, 'make')) {
                    continue;
                }

                $made = $class::make();

                if ($made instanceof Widgets\StatWidget || $made instanceof Widgets\ChartWidget) {
                    $out[] = $made;
                }
            }
        }

        return $out;
    }

    /**
     * MENU ENTRIES THIS PORTAL ADDS TO THE ACCOUNT DROPDOWN.
     *
     * THE DROPDOWN WAS A VUE SLOT AND NOTHING ELSE, which meant only the
     * APPLICATION could add to it - a plugin had no way in, and a portal could
     * not differ from its neighbours without the shell knowing about it. The
     * packaged core (profile, security, sign out) is unconditional; this is
     * what a panel adds beside it.
     *
     * `href` MAY BE A CLOSURE, and usually should be: panels are registered in
     * a provider's `boot`, which runs before routes exist, so `route()` called
     * eagerly throws about a route that is merely not registered YET.
     *
     * `ability` IS CHECKED SERVER-SIDE like every other grant - an entry
     * somebody may not use is absent rather than disabled.
     *
     * @param  list<array{key: string, label: string, href: string|Closure, icon?: string, ability?: string}>  $items
     */
    public function userMenuItems(array $items): self
    {
        $this->userMenuItems = [...$this->userMenuItems, ...$items];

        return $this;
    }

    /** @return list<array<string, mixed>> */
    public function getUserMenuItems(): array
    {
        return $this->userMenuItems;
    }

    /**
     * NAVIGATION ENTRIES THAT ARE NOT RESOURCES.
     *
     * THE SIDEBAR WAS ENTIRELY RESOURCE-DERIVED, so anything that was not a
     * resource - an external dashboard, a report, a link to the status page -
     * could not appear in it at all. Pages could, by being pages; a plain link
     * could not, and the workaround was a page that existed only to redirect.
     *
     * Same shape as `userMenuItems()`, same closure and ability rules, for the
     * same reasons.
     *
     * @param  list<array{title: string, href: string|Closure, icon?: string, group?: string, sort?: int, ability?: string}>  $items
     */
    public function navigationItems(array $items): self
    {
        $this->navigationItems = [...$this->navigationItems, ...$items];

        return $this;
    }

    /** @return list<array<string, mixed>> */
    public function getNavigationItems(): array
    {
        return $this->navigationItems;
    }

    /**
     * THE BROWSER-TAB ICON FOR THIS PORTAL.
     *
     * FIVE PORTALS SHARED ONE FAVICON, which is the last place branding leaked
     * between them: the sign-in screen, the colours and the brand name are all
     * per-panel, and every tab still looked identical. That matters most for
     * the portal somebody is least likely to have open on purpose - a
     * superadmin tab indistinguishable from a tenant tab is the one you type
     * into by mistake.
     *
     * A URL, NOT A FILE PATH, because the answer is usually an asset the
     * application already publishes and sometimes a data URI. Null falls back
     * to whatever the layout ships, so a portal that says nothing looks exactly
     * as it did.
     */
    public function favicon(string $url): self
    {
        $this->favicon = $url;

        return $this;
    }

    public function getFavicon(): ?string
    {
        return $this->favicon;
    }

    /**
     * WHAT AN ERROR SCREEN SAYS, PER STATUS CODE.
     *
     * THE PACKAGED SCREENS HAVE FIXED COPY, and for one status that is a real
     * problem: 419. "Page expired" is Laravel's wording for a CSRF token that
     * no longer matches, which an operator reads as nonsense - and this panel
     * now MAKES that happen deliberately, because `EnforceSessionLifetime` ends
     * a session at an absolute ceiling however active it has been. Somebody
     * mid-form gets a page telling them something expired, with no hint that
     * they should sign in again.
     *
     * DELIBERATELY VAGUE BY DEFAULT ON 403, and any override should stay that
     * way: an error naming the missing permission tells whoever probed for it
     * exactly what to ask for next. This exists so an installation can be
     * KINDER, not more specific.
     *
     * @param  string|null  $body  A sentence under the title, or null for none.
     */
    public function registerErrorNotification(int $status, string $title, ?string $body = null): self
    {
        $this->errorNotifications[$status] = ['title' => $title, 'body' => $body];

        return $this;
    }

    /** @return array{title: string, body: string|null}|null */
    public function getErrorNotification(int $status): ?array
    {
        return $this->errorNotifications[$status] ?? null;
    }

    /* --------------------------------------------------- what it is made of */

    /**
     * THE DIRECTORY THIS PORTAL'S RESOURCES LIVE IN, and therefore owns.
     *
     * THE OLD ARRANGEMENT WAS BACKWARDS AND IT SHOWED. Discovery was one
     * global list in `panel.discover`, and which portal a resource landed in
     * came from a `protected static $panel` on the CLASS - so a panel provider
     * could not say what its portal contained without appending to a config
     * array shared by every other portal, and a resource moved between folders
     * stayed where its own property said. "Add a portal" meant editing global
     * state, which is precisely the shape somebody means when they say the
     * panels are all the same thing wearing different paths.
     *
     * OWNERSHIP NOW FOLLOWS THE DIRECTORY. A class found here belongs to this
     * portal whatever its `panel()` says, which is the rule Filament settled
     * on for the same reason. The class property still works and is still the
     * right answer for an application with one portal; this is what makes a
     * SECOND portal a self-contained declaration rather than a diff against
     * everybody else's.
     *
     * NAMED `in:` AND `for:` deliberately - a directory and its namespace are
     * two strings of the same shape, and at a call site with two bare
     * arguments there is nothing to say which way round they go.
     */
    public function discoverResources(string $in, string $for): self
    {
        $this->resourceDirectories[$in] = $for;

        return $this;
    }

    /** As `discoverResources()`, for the portal's non-resource screens. */
    public function discoverPages(string $in, string $for): self
    {
        $this->pageDirectories[$in] = $for;

        return $this;
    }

    /** @return array<string, string> */
    public function getResourceDirectories(): array
    {
        return $this->resourceDirectories;
    }

    /** @return array<string, string> */
    public function getPageDirectories(): array
    {
        return $this->pageDirectories;
    }

    /* ------------------------------------------------------ its own sign-in */

    /**
     * THIS PORTAL GETS ITS OWN SIGN-IN, mounted under its own path.
     *
     * WITHOUT THIS A SECOND PORTAL SHARES THE FIRST ONE'S FRONT DOOR, and
     * that is not a cosmetic complaint. Laravel sends a guest to the route
     * named `login`; a portal that registers none inherits whichever screen
     * the application mounted at the root, so opening `/superadmin` landed on
     * the tenant demo's sign-in - the same form, the same branding, the same
     * guard - and the separation the portal exists for was a URL prefix and
     * nothing else.
     *
     * TURNING IT ON IS ALSO WHAT MAKES A SECOND GUARD USABLE. The redirect
     * hook in `PanelServiceProvider` looks for a route named `{id}.login`, so
     * this one line is the difference between `auth:superadmins` bouncing a
     * guest to somebody else's form and bouncing them to this portal's.
     *
     * THE ROUTES ARE REGISTERED BY THE PACKAGE, not written into
     * `routes/panel-{id}-auth.php` by a generator. Both work and both are
     * supported - a hand-written file is still the escape hatch when a portal
     * needs a sign-in the packaged controller does not do - but a portal
     * should not need a second file to be a portal.
     */
    public function login(bool|string $slug = 'login'): self
    {
        $this->loginSlug = $slug === false ? null : (is_string($slug) ? trim($slug, '/') : 'login');

        return $this;
    }

    public function hasLogin(): bool
    {
        return $this->loginSlug !== null;
    }

    /**
     * THE COMPONENT THIS PORTAL'S SIGN-IN RENDERS.
     *
     * DEFAULTS TO THE PACKAGED SCREEN, and it has to. Inertia resolves a page
     * name against the APPLICATION's `resources/js/pages` first, so rendering
     * `auth/Login` gave a portal whatever the host starter kit happened to
     * have under that name - a component written for the application's own
     * controller, with its own prop contract. The reference app's expects
     * `socialProviders` as a `key => label` map where the packaged controller
     * sends a list of objects, so the superadmin sign-in rendered a button
     * captioned with raw JSON and dropped the heading the panel configured.
     * Nothing errored; it simply looked like somebody else's screen.
     *
     * `panel/auth/Login` IS A NAME NO APPLICATION OWNS, so the packaged
     * controller and the packaged component are guaranteed to agree and a new
     * portal gets a working, panel-branded sign-in without the host having to
     * supply one.
     *
     * OVERRIDE IT TO REPLACE THE SCREEN ENTIRELY - the equivalent of
     * Filament's `->login(MyLogin::class)`. The name must be one the
     * application's resolver can find, and the props are the packaged
     * controller's.
     */
    public function loginComponent(string $component): self
    {
        $this->loginComponent = $component;

        return $this;
    }

    public function getLoginComponent(): string
    {
        return $this->loginComponent;
    }

    public function getLoginSlug(): string
    {
        return $this->loginSlug ?? 'login';
    }

    /**
     * A "FORGOT PASSWORD?" LINK LEADING NOWHERE IS WORSE THAN NO LINK,
     * because somebody waits for a message. Off for any portal whose accounts
     * are provisioned rather than self-served.
     */
    public function passwordReset(bool $enabled = true): self
    {
        $this->passwordReset = $enabled;

        return $this;
    }

    public function hasPasswordReset(): bool
    {
        return $this->passwordReset;
    }

    /**
     * THE BROKER THIS PORTAL RESETS THROUGH, and it must match the guard.
     *
     * A BROKER IS A PROVIDER, WHICH MEANS A TABLE. `Password::broker('users')`
     * looks an address up among OPERATORS whatever portal asked, so a customer
     * requesting a reset on the client portal had their address matched
     * against `users` - finding nobody on a good day, and on a bad one mailing
     * a reset link for an operator account that happens to share the address.
     * Two guards and one broker is not a configuration detail.
     *
     * Null falls back to `panel.auth.broker`, which is correct for the portal
     * that runs on the default guard and wrong for every other one.
     */
    public function passwordBroker(string $broker): self
    {
        $this->passwordBroker = $broker;

        return $this;
    }

    public function getPasswordBroker(): ?string
    {
        return $this->passwordBroker ?? config('panel.auth.broker');
    }

    public function path(string $path): self
    {
        $this->path = trim($path, '/');

        return $this;
    }

    public function guard(string $guard): self
    {
        $this->guard = $guard;

        return $this;
    }

    /** @param list<string> $middleware */
    public function middleware(array $middleware): self
    {
        $this->middleware = $middleware;

        return $this;
    }

    /** @param list<string> $middleware */
    public function authMiddleware(array $middleware): self
    {
        $this->authMiddleware = $middleware;

        return $this;
    }

    public function context(string $context): self
    {
        if (! in_array($context, [self::CONTEXT_TENANT, self::CONTEXT_CENTRAL], true)) {
            throw new RuntimeException("Unknown panel context [{$context}].");
        }

        $this->context = $context;

        return $this;
    }

    /** Resolved lazily - branding is tenant data and must not be cached. */
    public function brandName(Closure $brandName): self
    {
        $this->brandName = $brandName;

        return $this;
    }

    /**
     * PACKAGED SCREENS THIS PANEL DOES NOT WANT.
     *
     * REPORTED FROM A REAL PORT: `Changelog`, `Environment`, `Trash` and the
     * document designer mount on EVERY panel, so a customer portal grew an
     * environment editor and a bin for records its readers never delete. There
     * was one global switch - `panel.routes.roles` - and no way to say "not on
     * this one".
     *
     * NAMED HERE RATHER THAN IN CONFIG, beside the guard and the middleware,
     * because which screens a portal offers is the same KIND of decision as
     * which guard it authenticates with: a property of the panel rather than of
     * the installation. A config list keyed by panel id would be a second place
     * to look and a second place to forget.
     *
     * THE ROUTE GOES, NOT JUST THE MENU ENTRY. Hiding an entry leaves the URL
     * answering, and a bookmarked `/portal/environment` would still edit the
     * application's environment file for somebody the panel meant to keep out.
     *
     * @param  list<string>  $screens  any of: roles, trash, documents
     */
    public function without(array $screens): self
    {
        $this->without = array_values(array_unique([...$this->without, ...$screens]));

        return $this;
    }

    /**
     * The opposite call for the OPT_IN_SCREENS - mount one of the four
     * deliberately, rather than deleting a line a generator used to write.
     *
     * @param  list<string>  $screens  any of: operations, assistant-settings, documents, trash
     */
    public function with(array $screens): self
    {
        $this->with = array_values(array_unique([...$this->with, ...$screens]));

        return $this;
    }

    /**
     * Whether a packaged screen is mounted on this panel.
     *
     * TWO DIFFERENT DEFAULTS, on purpose - see `OPT_IN_SCREENS`. For those
     * four, absence from `$with` means off; for everything else, absence from
     * `$without` means on. A single list checked one way could not express
     * both without either turning `help`/`roles`/`workspaces` off for every
     * panel that has never heard of them, or leaving the four installation
     * screens on for the same reason.
     *
     * `without()` STILL VETOES ONE OF THE FOUR, even though they are already
     * off without it - `without()`'s own docblock has always named `trash`
     * and `documents` as valid targets, and a panel that builds its screen
     * list from two separate calls (`with()` broadly, `without()` to carve
     * one back out) should not have the second call silently do nothing.
     */
    public function offers(string $screen): bool
    {
        if (in_array($screen, self::OPT_IN_SCREENS, true)) {
            return in_array($screen, $this->with, true) && ! in_array($screen, $this->without, true);
        }

        return ! in_array($screen, $this->without, true);
    }

    /**
     * PER-PANEL COLOUR TOKENS, applied as CSS variables on every screen.
     *
     * A CLOSURE, NOT AN ARRAY, because the answer may depend on the request -
     * a reseller portal wearing the reseller's own colours has to read who is
     * signed in, and a value computed at boot would serve the first visitor's
     * brand to everybody on that worker.
     *
     * KEYS ARE TOKEN NAMES WITHOUT THE DASHES: `['primary' => 'oklch(...)']`
     * becomes `--primary`. That is the variable the stylesheet's `@theme` block
     * resolves, which is why components read `bg-primary` and never a literal.
     * The prefixed form `--color-primary` is what Tailwind COMPILES TO and
     * writing that instead sets a property nothing reads - a whole release
     * shipped with per-tenant branding doing exactly that.
     *
     * THIS WAS DEAD CODE UNTIL v0.5.0. The method existed, `resolveColors()`
     * existed, and nothing called either - so an installation could configure
     * a panel's palette and watch nothing happen, which is worse than the
     * method being absent. It is read by `SharePanelProps` now.
     *
     * @param  Closure(): array<string, string>  $colors
     */
    public function colors(Closure $colors): self
    {
        $this->colors = $colors;

        return $this;
    }

    /**
     * The prefix every route in this panel is named with.
     *
     * IT DEFAULTS TO THE PANEL ID AND IS OVERRIDABLE, because two panels both
     * naming a route `resource` would have the second silently overwrite the
     * first - and every generated URL in the first portal would then point into
     * the second. The override exists for a panel that was mounted before there
     * were panels: renaming its routes would break every link that already
     * names them.
     */
    public function routeName(string $prefix): self
    {
        $this->routeName = rtrim($prefix, '.').'.';

        return $this;
    }

    public function getRouteName(): string
    {
        return $this->routeName ?? $this->id.'.';
    }

    public function getPath(): string
    {
        return $this->path;
    }

    public function getGuard(): string
    {
        return $this->guard;
    }

    public function getContext(): string
    {
        return $this->context;
    }

    public function isCentral(): bool
    {
        return $this->context === self::CONTEXT_CENTRAL;
    }

    /**
     * Wrap every write this panel performs in a database transaction.
     *
     * WHAT THIS BUYS IS THE ABSENCE OF HALF A RECORD. A create is rarely one
     * INSERT: custom fields fold into a JSON column, observers write an audit
     * entry, a relation is attached, a counter is bumped. Something failing
     * partway through leaves the row saved and the audit trail missing, or the
     * parent written and the children not - and the operator sees an error
     * page and retries, producing the duplicate the first attempt half-made.
     *
     * OFF BY DEFAULT, AND THAT IS NOT TIMIDITY. A transaction changes what
     * happens on failure everywhere at once, including in application code
     * this package has never seen: an action that dispatches a job or calls an
     * external service mid-save now does so inside a transaction that may roll
     * back, so the job runs for a record that no longer exists. Turning this on
     * is a decision about YOUR actions, which is why it is a panel's to make.
     */
    public function databaseTransactions(bool $enabled = true): self
    {
        $this->databaseTransactions = $enabled;

        return $this;
    }

    public function hasDatabaseTransactions(): bool
    {
        return $this->databaseTransactions;
    }

    /** @return list<string> */
    /**
     * THE GATE DEFAULTS TO THIS PANEL'S OWN GUARD, DERIVED RATHER THAN TYPED.
     *
     * IT USED TO DEFAULT TO BARE `['auth']`, and bare `auth` means THE DEFAULT
     * GUARD - not this panel's. Every portal that declared `guard('customers')`
     * and forgot to also write `authMiddleware(['auth:customers'])` therefore
     * authenticated operators and read the customer guard for everything
     * afterwards: a portal that lets the wrong people in and then finds nobody,
     * failing open in ways that answer 200.
     *
     * Nothing caught it because the default panel's guard IS the default
     * guard, so the mistake is invisible on the only panel most tests exercise.
     *
     * DERIVING IT MAKES THE MISTAKE UNREPRESENTABLE rather than merely
     * detectable - which is the difference between this and a `panel:doctor`
     * check. `authMiddleware()` still overrides, for a portal that genuinely
     * wants something else in front of the guard.
     *
     * @return list<string>
     */
    public function getMiddleware(): array
    {
        return [...$this->middleware, ...($this->authMiddleware ?? ['auth:'.$this->guard])];
    }

    /**
     * The panel's middleware WITHOUT the part that demands a session.
     *
     * FOR THE ROUTES A GUEST HAS TO REACH. Social sign-in is the case that
     * needed it: the callback is where somebody BECOMES signed in, so
     * registering it inside the authenticated group redirects every attempt
     * back to the login screen it came from - a loop that looks like the
     * provider refusing.
     *
     * @return list<string>
     */
    public function getGuestMiddleware(): array
    {
        return $this->middleware;
    }

    /**
     * The acting user, resolved through THIS panel's guard.
     *
     * Never `auth()->user()` or `$request->user()`. Both read the default guard,
     * which returns null under a non-default one and fails open in confusing
     * ways - see the class docblock.
     */
    public function user(): ?Authenticatable
    {
        return Auth::guard($this->guard)->user();
    }

    public function resolveBrandName(): ?string
    {
        return $this->brandName === null ? null : ($this->brandName)();
    }

    /** @return array<string, string> */
    public function resolveColors(): array
    {
        return $this->colors === null ? [] : ($this->colors)();
    }
}
