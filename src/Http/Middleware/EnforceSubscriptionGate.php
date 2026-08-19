<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Alxtexh\Panel\Pages\BillingPortalPage;
use Alxtexh\Panel\Pages\PaymentSettingsPage;
use Alxtexh\Panel\Pages\PlanSetupPage;
use Alxtexh\Panel\Panel;
use Alxtexh\Panel\PanelManager;
use Symfony\Component\HttpFoundation\Response;

/**
 * Opt-in wall when `Panel::subscriptionGate()` says the plan is not active.
 *
 * IT IS A REDIRECT FOR COMPANY USERS, NOT A 403. Same shape as
 * `RequirePasswordRenewal`: they still have an account, they just cannot use
 * the product until billing is current. A 403 would read as a permissions
 * fault. Staff on a central panel get 403 instead: they have no company billing
 * screen on that portal.
 *
 * THE WHOLE DIFFICULTY IS NOT LOCKING THEM OUT OF THE FIX. Plan setup, payment
 * settings, logout, lock, and impersonation-stop stay reachable. Named suffixes
 * match the idle-lock / password-renewal allow-lists so a panel-prefixed route
 * (`admin.logout`) is still a way out.
 *
 * OFF UNTIL A CALLBACK IS SET. The playground must not lock Nairobi Fibre.
 */
final class EnforceSubscriptionGate
{
    /**
     * @var list<string>
     */
    private const ALWAYS_ALLOWED = [
        'logout',
        'unlock',
        'unlock.passkey',
        'unlock.passkey.options',
        'lock',
        'screens.locked',
        'impersonate.stop',
        'password.change',
        'password.change.update',
        'user-password.update',
        'billing.suspended',
        'login',
        'two-factor.login',
        'two-factor.login.store',
        'password.request',
        'password.reset',
        'social.redirect',
        'social.callback',
    ];

    public function handle(Request $request, Closure $next): Response
    {
        $panel = app(PanelManager::class)->currentPanel();

        if ($panel === null || ! $panel->hasSubscriptionGate()) {
            return $next($request);
        }

        $user = $request->user($panel->getGuard());

        if ($user === null) {
            return $next($request);
        }

        $billing = $panel->resolveBillingState();

        if (! ($billing['blocksAccess'] ?? false)) {
            return $next($request);
        }

        if (self::routeIsAllowed($request, $panel)) {
            return $next($request);
        }

        if ($panel->getContext() === Panel::CONTEXT_CENTRAL) {
            abort(403, 'This organisation\'s subscription is not active.');
        }

        if ($request->expectsJson() && ! $request->header('X-Inertia')) {
            abort(402, 'This organisation\'s subscription is not active.');
        }

        return redirect()
            ->to(self::suspendedPath($panel))
            ->with('toast', [
                'type' => 'warning',
                'message' => 'Billing access is limited. Manage billing to restore access.',
            ]);
    }

    private static function routeIsAllowed(Request $request, Panel $panel): bool
    {
        $name = (string) $request->route()?->getName();

        foreach (self::ALWAYS_ALLOWED as $allowed) {
            if ($name === $allowed || str_ends_with($name, '.'.$allowed)) {
                return true;
            }
        }

        $slug = $request->route()?->defaults['page'] ?? $request->route()?->parameter('page');

        if (is_string($slug) && $slug !== '') {
            $class = app(PanelManager::class)->pagesFor($panel->id)[$slug] ?? null;

            if (is_string($class) && self::pageIsBilling($class)) {
                return true;
            }
        }

        $relative = self::relativePath($request, $panel);

        return str_starts_with($relative, 'settings/plans')
            || str_starts_with($relative, 'settings/payments');
    }

    private static function pageIsBilling(string $class): bool
    {
        return is_a($class, PlanSetupPage::class, true)
            || is_a($class, PaymentSettingsPage::class, true)
            || is_a($class, BillingPortalPage::class, true);
    }

    private static function relativePath(Request $request, Panel $panel): string
    {
        $path = trim($request->path(), '/');
        $prefix = trim($panel->getPath(), '/');

        if ($prefix !== '' && str_starts_with($path, $prefix.'/')) {
            return substr($path, strlen($prefix) + 1);
        }

        return $path;
    }

    private static function suspendedPath(Panel $panel): string
    {
        return '/'.trim($panel->getPath().'/account/suspended', '/');
    }
}
