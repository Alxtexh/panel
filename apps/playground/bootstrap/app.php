<?php

use App\Http\Middleware\EnsurePanelIsUnlocked;
use App\Http\Middleware\HandleAppearance;
use App\Http\Middleware\HandleInertiaRequests;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets;
use Illuminate\Http\Request;
use Inertia\Inertia;
use PanelKit\Panel\Alerts\ReportsToTelegram;
use PanelKit\Panel\Auth\SetPermissionsTeam;
use PanelKit\Panel\Http\Middleware\BlockImpersonatedCredentialChanges;
use PanelKit\Panel\Http\Middleware\DenySuspendedAccount;
use PanelKit\Panel\Http\Middleware\DenySuspendedTenant;
use PanelKit\Panel\Http\Middleware\InitializeTenancyForUser;
use PanelKit\Panel\Http\Middleware\RequirePasswordRenewal;
use PanelKit\Panel\Http\Middleware\ResolveTenantByHost;
use PanelKit\Panel\Http\Middleware\ScopeSessionToTenant;
use PanelKit\Panel\Http\Middleware\SetPanelLocale;
use PanelKit\Panel\Http\Middleware\VerifyTurnstile;
use Symfony\Component\HttpFoundation\Response;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    /*
     | Channel authorisation. See routes/channels.php - a tenant-scoped panel
     | with an unscoped channel is a leak no HTTP test would catch.
     */
    ->withBroadcasting(__DIR__.'/../routes/channels.php')
    ->withMiddleware(function (Middleware $middleware): void {
        $middleware->encryptCookies(except: ['appearance', 'sidebar_state']);

        /*
         | THE CLIENT'S IP, NOT THE LOAD BALANCER'S.
         |
         | The audit trail records `request()->ip()` against every change, and
         | that field is the one that answers "was this really them". Behind a
         | proxy - which is every production deployment - PHP sees the proxy's
         | address, so without this every entry in the log records the same
         | internal IP and the column becomes decoration.
         |
         | It fails in the safe direction locally: on a direct connection there
         | are no forwarded headers to trust, so the address is the real one
         | either way.
         |
         | `TRUSTED_PROXIES` names them. `*` trusts any forwarded header and is
         | correct ONLY when nothing but the load balancer can reach the app -
         | otherwise a caller can set `X-Forwarded-For` and choose what the audit
         | trail records about them.
         */
        $middleware->trustProxies(
            at: env('TRUSTED_PROXIES') === '*'
                ? '*'
                : array_filter(explode(',', (string) env('TRUSTED_PROXIES', ''))),
        );

        /*
         | THE TENANT IS RESOLVED FROM THE HOSTNAME BEFORE THE SESSION IS READ,
         | which is the whole of hostname tenancy. Prepended rather than
         | appended: `ScopeSessionToTenant` scopes the cookie by the tenant, so a
         | tenant resolved after the session has loaded cannot affect WHICH
         | session loaded - and that is the entire security property.
         |
         | An unknown host passes straight through. The central domain has no
         | tenant and must keep working.
         */
        /*
         | A SUSPENDED ORGANISATION IS DENIED BEFORE THE SESSION LOADS.
         |
         | Registered BEFORE the resolver so that it runs AFTER it. Each
         | `prependToGroup` goes to the very front of the group, so the LAST one
         | written is the FIRST to run - an ordering that reads backwards and is
         | worth stating, because getting it wrong here silently moves the check
         | ahead of the tenant it is meant to inspect. Verified by printing the
         | resolved group, not by reasoning about it.
         |
         | The effect is: resolve the host's tenant, then refuse it if suspended
         | - still ahead of session, auth and anything that reads data.
         |
         | One gate, ahead of every route: the panel, the JSON endpoints and the
         | broadcasting auth route are all covered without any of them knowing
         | suspension exists.
         */
        $middleware->prependToGroup('web', DenySuspendedTenant::class);
        $middleware->prependToGroup('web', ResolveTenantByHost::class);

        $middleware->web(append: [
            /*
             * FIRST, because everything after it queries as the tenant.
             *
             * Resolving the tenant for the column scope was never the same as
             * initialising tenancy: a tenant with its own database is isolated
             * by the CONNECTION, and nothing switched it. A dedicated tenant
             * signed in, got the central database, and saw an empty panel with
             * no error anywhere. This runs after authentication (the tenant is
             * a property of the user) and before anything reads data.
             */
            /*
             | Falls back to the signed-in user's tenant when the HOST did not
             | identify one - a path-based deployment, or the central domain
             | where somebody is signed in. It skips when tenancy is already
             | initialised, so the hostname always wins.
             */
            // Language before anything renders. See the class note on why
            // Accept-Language is deliberately ignored.
            SetPanelLocale::class,
            InitializeTenancyForUser::class,

            // Refuses a session that belongs to another organisation. See the
            // class note: this is the defence that survives somebody widening
            // SESSION_DOMAIN to share the cookie across subdomains.
            ScopeSessionToTenant::class,

            /*
             | Spatie's teams feature only filters by tenant once a team id is
             | set. Without this it considers every tenant's roles at once - not
             | an error, just a person holding the union of their permissions
             | everywhere. It runs after the tenant is resolved and before
             | anything asks an authorisation question.
             */
            SetPermissionsTeam::class,

            /*
             | AND AGAIN, AFTER AUTHENTICATION, which is not belt-and-braces.
             |
             | The copy above runs before the session and can therefore only see
             | the tenant in the HOSTNAME. On the central domain there is none,
             | so a suspended organisation's operator could sign in at
             | `localhost` and work normally - the lockout bypassed by using a
             | different URL for the same data.
             |
             | This one runs once the user is known, so the tenant it sees is
             | the one the ACCOUNT belongs to. Neither can see what the other
             | does, which is why there are two rather than one moved later:
             | moving it would give up denying before the session loads, and
             | that is the property covering the sign-in page.
             |
             | A DIFFERENT CLASS, not the same one twice - Laravel de-duplicates
             | groups by class name and silently dropped the second entry.
             */
            DenySuspendedAccount::class,

            /*
             | Credentials are frozen while somebody else's account is being
             | worn. Middleware rather than a check per settings screen, so a
             | route added later is covered by existing.
             */
            BlockImpersonatedCredentialChanges::class,

            /*
             | An expired password sends somebody to change it before anything
             | else. Off unless `PANEL_PASSWORD_MAX_AGE_DAYS` is set - forced
             | rotation is no longer recommended practice, and exists here
             | because some installations are audited against a requirement to
             | have it.
             |
             | AFTER the impersonation guard, because it exempts an impersonated
             | session: the expired password belongs to the account being worn,
             | not to the person wearing it.
             */
            RequirePasswordRenewal::class,

            /*
             | Turnstile on every auth write, matched by route name. Off unless
             | `PANEL_TURNSTILE` is set, so development and the test suite need
             | no keys and no network.
             */
            VerifyTurnstile::class,
            HandleAppearance::class,
            HandleInertiaRequests::class,
            AddLinkHeadersForPreloadedAssets::class,
            /*
             * After the Inertia middleware, so the lock screen renders with the
             * shared props naming the account it is asking about, and so a
             * locked JSON request still gets a well-formed response.
             */
            EnsurePanelIsUnlocked::class,
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        $exceptions->shouldRenderJsonWhen(
            fn (Request $request) => $request->is('api/*') || $request->expectsJson(),
        );

        /*
         * UNHANDLED EXCEPTIONS GO TO TELEGRAM, if the operator turned that on.
         *
         * The panel already reports a failed backup and said nothing at all
         * about the exception making every subscriber screen a 500 - so the
         * failure most worth knowing about was the one that waited in a log
         * file until a customer telephoned.
         *
         * `report()` RATHER THAN A CUSTOM HANDLER, so this runs alongside
         * whatever else reports - the log, Sentry, Flare - rather than
         * replacing any of it. It is off by default, ignores the exceptions
         * that are the framework working correctly, and sends one message per
         * signature per fifteen minutes; see `ReportsToTelegram` for why that
         * last part is the whole design.
         */
        $exceptions->report(function (Throwable $e): void {
            ReportsToTelegram::report($e);
        });

        /*
         * THE PANEL'S ERROR SCREENS ARE THE PACKAGE'S NOW.
         *
         * The closure that used to be here - which statuses get a designed
         * page, why 419 does not, why 500 keeps its trace with debug on -
         * moved to `PanelKit\Panel\Http\PanelErrors`, registered from the
         * package's provider. Every installation gets those pages; this
         * application had them and no other did.
         */
    })->create();
