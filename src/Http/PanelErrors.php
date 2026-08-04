<?php

declare(strict_types=1);

namespace PanelKit\Panel\Http;

use Illuminate\Contracts\Debug\ExceptionHandler;
use Illuminate\Http\Request;
use Inertia\Inertia;
use PanelKit\Panel\PanelManager;
use ReflectionClass;
use ReflectionProperty;
use Symfony\Component\HttpFoundation\Response;
use Throwable;

/**
 * The panel's own error screens, rendered rather than merely shipped.
 *
 * THEY WERE PACKAGED AND UNREACHABLE. `errors/Error` moved into
 * `@panelkit/inertia`, was exported from its entry point, and then nothing
 * routed to it and no page file existed - so a fresh installation went on
 * showing Laravel's default 404 and 403 while the designed ones sat in
 * `node_modules`. Shipping a screen and rendering a screen are different
 * claims, and only the second one is worth making.
 *
 * THE RULES BELOW ARE THE REFERENCE APPLICATION'S, MOVED. They were worked out
 * in its `bootstrap/app.php` and are not obvious; rewriting them here from
 * scratch produced a version that got two of them wrong, which is the whole
 * pattern this package keeps being caught by.
 *
 * IT ONLY TAKES OVER INSIDE A PANEL. An application's own marketing 404 is its
 * own business; hijacking every error page in the application because it
 * happens to have a panel installed would be the package deciding something
 * that was never asked of it. The test is the request PATH against the
 * registered panels' paths - see `handles()`.
 *
 * A PANEL AT THE ROOT IS THE EXCEPTION TO THAT: it IS the application, so it
 * answers for everything. See `handles()` for why the more modest-sounding rule
 * is worse.
 */
final class PanelErrors
{
    /**
     * The statuses worth a designed screen.
     *
     * 404, 403, 429 AND 503 ARE ANSWERS. Nothing went wrong that a stack trace
     * explains - the route does not exist, the policy said no, the session
     * aged out. There is nothing to debug, so the panel page is the better
     * response in every environment, including local. An earlier version of
     * this skipped the whole thing in `local` on the reasoning that a developer
     * wants the trace, and the consequence was that these pages were never seen
     * in the environment they were being built in.
     *
     * 500 IS DIAGNOSABLE, and is handled but only with debug OFF - see below.
     *
     * 419 IS NOT IN THIS LIST, on purpose. A session expiry is not a place you
     * went; it is something that happened to the click you just made. Rendering
     * a page for it throws away the page you were actually on, which is the one
     * thing worth keeping: a half-filled form, a scroll position, an open
     * filter. The client intercepts it and shows a dialog over the page instead.
     */
    private const RENDERED = [403, 404, 429, 500, 503];

    /**
     * Register the renderer, once, at boot.
     *
     * THROUGH `respondUsing()` RATHER THAN A PUBLISHED HANDLER. Laravel 11 moved
     * exception handling into `bootstrap/app.php`, so telling every consumer to
     * paste a closure there would be one more wiring step to forget - and the
     * failure when they did would be silent, because a default error page looks
     * like a decision rather than an omission. This is the same hook
     * `$exceptions->respond()` calls, reached from the provider instead.
     *
     * ON THE RESPONSE, NOT THE EXCEPTION, which is what lets it answer for
     * anything the framework turned into a status - a missing route, a failed
     * `authorize()`, a throttle - rather than only for `HttpException`.
     */
    public static function register(): void
    {
        if (config('panel.errors.render', true) !== true) {
            return;
        }

        $handler = self::responder(app(ExceptionHandler::class));

        if ($handler === null) {
            return;
        }

        /*
         * AN APPLICATION THAT ALREADY DECIDED KEEPS ITS DECISION.
         *
         * `respondUsing()` holds ONE callback, and `$exceptions->respond()` in
         * `bootstrap/app.php` runs while the application is being built - which
         * is before any provider boots. So registering unconditionally would
         * REPLACE a consumer's own error handling with ours, silently, and the
         * symptom would be their custom page simply never appearing.
         */
        if (self::alreadyHandled($handler)) {
            return;
        }

        $handler->respondUsing(
            static fn (Response $response, Throwable $e, Request $request): Response => self::render($response, $request)
        );
    }

    /**
     * The handler that actually holds the response callback, unwrapping any
     * decorator in front of it.
     *
     * FOUND BY THIS FAILING SILENTLY IN A FRESH APPLICATION. Collision wraps the
     * framework's handler in its own `ExceptionHandler`, which implements the
     * contract and forwards `report`/`render` - and does NOT forward
     * `respondUsing`. So `method_exists()` said no, this returned, and a fresh
     * install went on showing Laravel's 404 with nothing anywhere reporting a
     * problem. The `verify-install` check added alongside is what caught it;
     * every test in the monorepo passed throughout.
     *
     * THE SEARCH IS BOUNDED AND SHAPE-BASED rather than naming Collision: any
     * decorator holds the handler it wraps in a property, and looking for "a
     * property that is itself an exception handler" survives the next one.
     */
    public static function responder(object $handler, int $depth = 0): ?object
    {
        if (method_exists($handler, 'respondUsing')) {
            return $handler;
        }

        if ($depth > 3) {
            return null;
        }

        foreach ((new ReflectionClass($handler))->getProperties() as $property) {
            $value = $property->getValue($handler);

            if ($value instanceof ExceptionHandler && $value !== $handler) {
                $found = self::responder($value, $depth + 1);

                if ($found !== null) {
                    return $found;
                }
            }
        }

        return null;
    }

    /** Has something already claimed the handler's one response callback? */
    public static function alreadyHandled(object $handler): bool
    {
        if (! property_exists($handler, 'finalizeResponseCallback')) {
            return false;
        }

        return (new ReflectionProperty($handler, 'finalizeResponseCallback'))
            ->getValue($handler) !== null;
    }

    /** The panel's screen, or the response the framework already made. */
    public static function render(Response $response, Request $request): Response
    {
        /*
         * JSON AND THE API ARE SOMEBODY ELSE'S SHAPE. A token asking for a
         * record wants a JSON error; rendering a full page into one is how a
         * fetch() ends up parsing HTML.
         */
        if ($request->expectsJson() || $request->is('api/*')) {
            return $response;
        }

        $status = $response->getStatusCode();

        // The one case where a stack trace beats a designed page.
        if ($status >= 500 && config('app.debug')) {
            return $response;
        }

        if (! in_array($status, self::RENDERED, true)) {
            return $response;
        }

        if (! self::handles($request)) {
            return $response;
        }

        return Inertia::render('errors/Error', ['status' => $status])
            ->toResponse($request)
            ->setStatusCode($status);
    }

    /**
     * Is this URL the panel's to answer for?
     *
     * @internal Exposed for the test that pins the root-panel case.
     */
    public static function handles(Request $request): bool
    {
        $panels = app(PanelManager::class)->panels();

        if ($panels === []) {
            return false;
        }

        foreach ($panels as $panel) {
            $path = trim($panel->getPath(), '/');

            if ($path !== '' && $request->is($path, $path.'/*')) {
                return true;
            }
        }

        /*
         * A PANEL AT THE ROOT ANSWERS FOR EVERYTHING, which is the reference
         * application's behaviour and is deliberate rather than a fallback.
         *
         * The tempting alternative - claim only URLs matching a route this
         * package registered - sounds more modest and is worse: a 404 is by
         * definition a URL that matched NO route, so the panel would show its
         * designed page for every status except the one people actually hit.
         * A panel mounted at `/` IS the application; an application that wants
         * its own error pages there should mount the panel under a path, or set
         * `PANEL_RENDER_ERRORS=false`.
         */
        foreach ($panels as $panel) {
            if (trim($panel->getPath(), '/') === '') {
                return true;
            }
        }

        return false;
    }
}
