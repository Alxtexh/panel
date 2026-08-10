<?php

namespace App\Providers;

use App\Documents\ClientInvoiceKind;
use App\Documents\OrganisationBranding;
use App\Listeners\RecordLastLogin;
use App\Models\AuditEntry;
use App\Models\Client;
use App\Models\ClientSession;
use App\Models\Plan;
use App\Models\Router;
use App\Models\User;
use App\Policies\AuditEntryPolicy;
use App\Policies\ClientPolicy;
use App\Policies\ClientSessionPolicy;
use App\Policies\CustomFieldPolicy;
use App\Policies\PlanPolicy;
use App\Policies\RouterPolicy;
use App\Policies\TicketPolicy;
use App\Policies\UserPolicy;
use App\Support\HelpArticles;
use Carbon\CarbonImmutable;
use Illuminate\Auth\Events\Login;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\DevCommands;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\ServiceProvider;
use Illuminate\Validation\Rules\Password;
use PanelKit\Panel\CustomFields\CustomField;
use PanelKit\Panel\Documents\DocumentBranding;
use PanelKit\Panel\Documents\DocumentKinds;
use PanelKit\Panel\Models\Ticket;
use PanelKit\Panel\Support\Budgets;
use PanelKit\Panel\Support\HelpCentre;
use PanelKit\Panel\Support\SettingsIndex;
use PanelKit\Panel\Support\TicketStats;
use PanelKit\Panel\Trash\TrashBin;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        /*
         * WHO IS STILL USING THE PANEL. Registered here rather than discovered,
         * so the one guard that matters - impersonation is not a sign-in - is
         * visible from the listener itself. See `RecordLastLogin`.
         */
        Event::listen(Login::class, RecordLastLogin::class);

        /*
         * THIS APPLICATION'S HELP ARTICLES, added to the packaged ones.
         *
         * `HelpCentre` ships articles about the PANEL - search, tables, the
         * trash, roles, the account screens - because those are true of every
         * installation. What is true only here is the ISP part: subscribers,
         * plans, routers, exports of those. Those stay in this application,
         * where the assistant can also cite them.
         *
         * `add()` RATHER THAN `replace()`, because the packaged answers are
         * still the right ones for the questions they cover, and rewriting
         * "how do I search" in our own words to say the same thing is how two
         * copies of an answer start disagreeing.
         */
        HelpCentre::add(HelpArticles::all());

        /*
         * THIS APPLICATION'S OWN SETTINGS ENTRY. Everything else on that index
         * is derived from what the panel routes; the assistant is ours, so the
         * package has no business knowing about it - and the ability is checked
         * the same way the packaged entries are, so an operator without it sees
         * no row rather than a disabled one.
         */
        /*
         * PROFILE AND SECURITY ARE THIS APPLICATION'S OWN ROUTES, so the
         * packaged entries for them never appear - `SettingsIndex` lists a row
         * only when the panel registered that route, and ours claimed the URL
         * first. `order` puts them where they belong rather than after the
         * organisation's logo.
         */
        SettingsIndex::add([[
            'key' => 'profile',
            'title' => 'Profile',
            'description' => 'Your name and your email address.',
            'href' => static fn (): string => route('profile.edit'),
            'order' => 0,
        ], [
            'key' => 'security',
            'title' => 'Security',
            'description' => 'Password, two-factor authentication, passkeys and signed-in devices.',
            'href' => static fn (): string => route('security.edit'),
            'order' => 1,
        ], [
            'key' => 'assistant',
            'title' => 'Assistant',
            'description' => 'The AI provider the assistant runs on, and its key.',
            // A CLOSURE: this runs in boot, before routes exist.
            'href' => static fn (): string => route('assistant-settings.edit'),
            'ability' => 'manage_assistant',
        ]]);

        /*
         * THE DEV SERVER BINDS 127.0.0.1, NOT `localhost`.
         *
         * Laravel's `dev` command hardcodes `serve --host=localhost`, and on a
         * machine that resolves `localhost` to `::1` first that binds IPv6 ONLY
         * - nothing listens on 127.0.0.1 at all.
         *
         * THE TENANT HOSTNAMES ARE THE REASON THIS MATTERS. They live in
         * /etc/hosts pointing at 127.0.0.1, so an IPv6-only bind leaves plain
         * `localhost` working perfectly while every per-tenant subdomain is
         * unreachable - hostname tenancy that looks fine and cannot be
         * exercised. Vite is pinned the same way in vite.config.ts, for the
         * same reason plus one of its own: the asset URLs it writes into every
         * page inherit whatever it bound to.
         *
         * Registered under the same `server` name as the default, which
         * replaces it - userland registration outranks the framework's.
         */
        if ($this->app->runningInConsole()) {
            DevCommands::artisan('serve --host=127.0.0.1', 'server');
        }

        // Explicit registration for now. Filesystem discovery (spec S6
        // ->discoverResources) lands with the panel object in Phase 7; the
        // registry is the same either way.
        // The panel denies any ability whose model has no policy, so these are
        // required rather than optional.
        Gate::policy(Client::class, ClientPolicy::class);
        // The nested sessions resource (roadmap 4.2) - a policy of its own,
        // because "may view the client" grants the LIST through the parent
        // check, while each row still answers to its own model's gate.
        Gate::policy(ClientSession::class, ClientSessionPolicy::class);
        Gate::policy(Router::class, RouterPolicy::class);
        Gate::policy(Plan::class, PlanPolicy::class);
        Gate::policy(User::class, UserPolicy::class);
        /*
         | THE ONE RECORD TWO SIDES READ UNDER DIFFERENT RULES, which is why
         | it is not a `TenantResourcePolicy` subclass like its neighbours: an
         | opener reads their own ticket holding no ticket ability at all,
         | while an operator reads the organisation's without having opened
         | any. See TicketPolicy's own note - it was written before any ticket
         | screen existed, so the screens answer to it rather than the reverse.
         */
        Gate::policy(Ticket::class, TicketPolicy::class);
        // Read-only by construction - see AuditEntryPolicy.
        Gate::policy(AuditEntry::class, AuditEntryPolicy::class);

        /*
         | ANNOUNCEMENTS ARE NOT MAPPED HERE ANY MORE. The model, its policy and
         | the screen that writes one all ship in the package, which registers
         | the mapping in its own `boot()`. An application that disagrees about
         | who may address the whole organisation calls `Gate::policy` here and
         | wins, because application providers boot after package ones.
         */

        // Same reason: `CustomField` lives in the package, and its policy is
        // an application decision - see CustomFieldPolicy's own note on why
        // it is not a TenantResourcePolicy.
        Gate::policy(CustomField::class, CustomFieldPolicy::class);

        /*
         | THE INVOICE KIND, TAUGHT ABOUT THIS APPLICATION'S SUBSCRIBERS.
         |
         | The package ships an invoice that previews against invented data,
         | because it has never heard of a `clients` table. Registering a
         | subclass under the SAME id replaces it - which is the registry's
         | documented override, and the thing that makes "a plugin can add a
         | document kind" true rather than aspirational.
         |
         | In `boot()` rather than `register()`, deliberately: the package
         | registers its three in `register()`, so anything here is guaranteed
         | to run after them and win without depending on provider order.
         */
        app(DocumentKinds::class)
            ->register(new ClientInvoiceKind);

        /*
         | A DOCUMENT'S LETTERHEAD, FROM THE ORGANISATION SETTINGS SCREEN.
         |
         | The package's default reads the name off the tenant and returns no
         | logo, because the logo is a file on the private disk behind THIS
         | application's authenticated route. Binding our own supplies both from
         | one place - so renaming the organisation updates every document and
         | there is no copy in a template to forget.
         */
        $this->app->scoped(
            DocumentBranding::class,
            OrganisationBranding::class,
        );

        $this->declareBudgets();

        $this->configureDefaults();
    }

    /**
     * What the screens THIS APPLICATION wrote may cost - roadmap 7.6.
     *
     * `panel:benchmark` measures every resource list for free, because the
     * panel generates them and knows their shape. It knew nothing about the
     * screens written here, which are exactly the ones that get slow: a
     * generated list has one query shape and a hand-written screen has
     * however many somebody added.
     *
     * THE NUMBERS COME FROM MEASURING, NOT FROM WISHING. Each was read off a
     * run on this machine against tenant 50's ~250k subscribers and then given
     * headroom - roughly three times the observed median, which is wide enough
     * that ordinary variance never trips it and narrow enough that a query
     * added in a loop does.
     *
     * A BUDGET THAT IS NEVER BREACHED IS NOT A BUDGET. If one of these starts
     * failing, the two honest responses are to make the screen cheaper or to
     * decide, in the same diff, that it is allowed to cost more. Raising it
     * because the build is red is neither.
     */
    private function declareBudgets(): void
    {
        /*
         * THE TICKET SUMMARY. One pass over the queue for the counts, plus a
         * grouped read per series - the sort of screen where somebody later
         * adds "and the median per department" inside a foreach.
         */
        Budgets::register(
            'analysis: ticket stats',
            120,
            static fn (): array => TicketStats::for(),
        );

        /*
         * THE TRASH BIN, which reads across EVERY soft-deleting resource. It
         * is the widest fan-out in the panel: one query per resource, so its
         * cost grows with the number of resources rather than with the number
         * of rows, and nothing else in the benchmark would notice a resource
         * being added badly.
         */
        Budgets::register(
            'trash: every resource counted',
            250,
            static fn (): array => app(TrashBin::class)->groups(),
        );
    }

    /**
     * Configure default behaviors for production-ready applications.
     */
    protected function configureDefaults(): void
    {
        Date::use(CarbonImmutable::class);

        /*
         * AN N+1 IS AN EXCEPTION HERE, AND A SLOW PAGE IN PRODUCTION.
         *
         * The query-count guard proves the shape for ONE resource - it counts
         * queries for /clients at ten rows and at a thousand and fails if the
         * number moved. That is a good test and it is one test: every resource
         * added since is unguarded, and the twelfth will be too. This is the
         * version that scales, because it is not a test at all - it is
         * Eloquent refusing to lazy-load, so the mistake cannot be written
         * without something failing immediately.
         *
         * OFF IN PRODUCTION, deliberately. A lazy load that reached production
         * is a slow page; an exception is a white screen for a customer over a
         * performance problem. Development and CI are where this is worth
         * being loud.
         */
        Model::preventLazyLoading(! app()->isProduction());

        /*
         * THE OTHER TWO STRICTNESSES ARE DELIBERATELY OFF, and the reasons are
         * specific to this panel rather than taste.
         *
         * `preventSilentlyDiscardingAttributes` FIGHTS THE MASS-ASSIGNMENT
         * GUARD. The panel deliberately does NOT declare a custom field as
         * fillable - being dropped on the way in is exactly what stops a
         * crafted request writing a column nobody exposed, and there is a test
         * asserting that drop. Turning the exception on converts that defence
         * into a 500.
         *
         * `preventAccessingMissingAttributes` FIGHTS PARTIAL SELECTION. Every
         * list query selects exactly the columns a table declares - which is
         * what keeps them fast - so reading anything else is normal here and
         * would throw on every screen.
         */

        DB::prohibitDestructiveCommands(
            app()->isProduction(),
        );

        Password::defaults(fn (): ?Password => app()->isProduction()
            ? Password::min(12)
                ->mixedCase()
                ->letters()
                ->numbers()
                ->symbols()
                ->uncompromised()
            : null,
        );
    }
}
