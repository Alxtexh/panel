<?php

declare(strict_types=1);

namespace PanelKit\Panel\Http;

use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Route;
use PanelKit\Panel\Http\Controllers\Api\ResourceApiController;
use PanelKit\Panel\Http\Middleware\AuthenticateApiToken;
use PanelKit\Panel\PanelManager;

/**
 * The public API, mounted once at a versioned prefix.
 *
 * NOT PER PANEL, and that is the difference between this and `PanelRoutes`. A
 * panel is a way for a PERSON to reach data - it has a guard, a session, a
 * navigation. An API token is not a person browsing a portal; it is an
 * integration reading records. Giving each portal its own API would mean a
 * caller had to know which portal a resource "belongs" to in order to address
 * it, which is an implementation detail of the interface leaking into a
 * contract.
 *
 * VERSIONED IN THE PATH. `/api/v1` is a promise that this shape will keep
 * working; the panel's own endpoints make no such promise and change whenever a
 * screen does. Without the version there is nowhere to put a breaking change
 * except on top of the people already using it.
 *
 * STATELESS. No session, no CSRF, no cookies - `api` middleware only. A session
 * cookie sent to this prefix must not authenticate anything, or the API becomes
 * a CSRF surface reachable from any page the browser has open.
 *
 * THROTTLED BY TOKEN. The limit belongs to the credential rather than the
 * address: one customer behind a NAT is one address and many integrations, and a
 * per-IP limit punishes them all for the noisiest.
 */
final class ApiRoutes
{
    /**
     * The `api` limiter, if the application has not defined one.
     *
     * DEFINED HERE BECAUSE THE ROUTE IS DEFINED HERE. Laravel throws when a
     * named limiter is missing, so a package that mounts a throttled route and
     * leaves the limiter to the application ships an API that 500s on the first
     * request - which is a worse default than any number this could pick.
     *
     * THE APPLICATION'S OWN DEFINITION WINS. This only fills a gap; an
     * installation that has already thought about its limits keeps them.
     *
     * KEYED BY TOKEN, NOT BY ADDRESS. One customer behind a NAT is one address
     * and many integrations, and a per-IP limit punishes all of them for the
     * noisiest. Falling back to the address for an UNAUTHENTICATED request is
     * the other half: without it, somebody guessing tokens is unthrottled.
     */
    private static function defineRateLimiter(): void
    {
        if (RateLimiter::limiter('api') !== null) {
            return;
        }

        RateLimiter::for('api', static fn (Request $request): Limit => Limit::perMinute(
            (int) config('panel.api.rate_limit', 120),
        )->by($request->bearerToken() ?? $request->ip()));
    }

    public static function register(): void
    {
        self::defineRateLimiter();

        /*
         * ONLY DOCUMENTED RESOURCES. The same flag that keeps the activity trail
         * out of the reference keeps it out of the API - an internal read-only
         * record of what the panel did to itself is not an integration surface,
         * and it should not be reachable by guessing its key either.
         */
        $keys = [];

        foreach (app(PanelManager::class)->resources() as $key => $class) {
            if ($class::documented()) {
                $keys[] = $key;
            }
        }

        if ($keys === []) {
            return;
        }

        Route::middleware(['api', AuthenticateApiToken::class, 'throttle:api'])
            ->prefix('api/v1')
            ->name('api.v1.')
            ->group(function () use ($keys): void {
                /*
                 * ORDER, as everywhere else in this codebase: the collection
                 * before the member, or a literal segment is captured as an id.
                 */
                Route::get('{resource}', [ResourceApiController::class, 'index'])
                    ->whereIn('resource', $keys)->name('index');

                Route::post('{resource}', [ResourceApiController::class, 'store'])
                    ->whereIn('resource', $keys)->name('store');

                Route::get('{resource}/{id}', [ResourceApiController::class, 'show'])
                    ->whereIn('resource', $keys)->whereNumber('id')->name('show');

                /*
                 * PUT AND PATCH BOTH, mapped to the same partial update. The
                 * distinction is one people argue about and nobody's client
                 * library agrees on; refusing one of them buys nothing and costs
                 * an afternoon for whoever guessed wrong.
                 */
                Route::match(['put', 'patch'], '{resource}/{id}', [ResourceApiController::class, 'update'])
                    ->whereIn('resource', $keys)->whereNumber('id')->name('update');

                Route::delete('{resource}/{id}', [ResourceApiController::class, 'destroy'])
                    ->whereIn('resource', $keys)->whereNumber('id')->name('destroy');
            });
    }
}
