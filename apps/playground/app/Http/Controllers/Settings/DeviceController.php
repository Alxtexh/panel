<?php

declare(strict_types=1);

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

/**
 * The devices signed in to this account, and how to sign them out.
 *
 * A SESSION IS AN AUTHENTICATION FACT, and this is where it belongs. There was
 * briefly a "Sessions" workspace built around client CONNECTION sessions - an
 * ISP concept that happens to share the word - and putting it in the navigation
 * under that name was a category error: somebody looking for "sessions" in a
 * panel is looking for where they are logged in, which is a security question
 * about their own account, not a report about subscribers.
 *
 * READS LARAVEL'S OWN SESSION TABLE. Nothing new is stored: the framework
 * already records `user_id`, `ip_address`, `user_agent` and `last_activity` per
 * session when the driver is `database`. A parallel "devices" table would be a
 * second record of the same fact, and the two would disagree the first time a
 * session expired without the other being told.
 *
 * SIGNING OUT MEANS DELETING THE ROW, which is what makes it immediate. Marking
 * a session revoked and checking a flag later leaves the stolen cookie working
 * until something looks; deleting it means the very next request has no session.
 */
final class DeviceController extends Controller
{
    public function destroy(Request $request, string $id): RedirectResponse
    {
        /*
         * SCOPED TO THE ACTING USER, so the id names one of their own sessions
         * or nothing. Session ids are opaque and unguessable, but "hard to
         * guess" is not an authorization check - without the constraint this
         * endpoint would sign out any account whose id leaked into a log.
         */
        $deleted = DB::table('sessions')
            ->where('user_id', $request->user()->id)
            ->where('id', $id)
            ->delete();

        if ($deleted === 0) {
            throw new NotFoundHttpException('No such session.');
        }

        return back()->with('success', 'That device was signed out.');
    }

    /**
     * Sign out everywhere else, keeping this session alive.
     *
     * THE CURRENT SESSION IS DELIBERATELY SPARED. Signing yourself out along
     * with everything else is the behaviour of a "log out" button, and somebody
     * who has just discovered an unfamiliar device wants that device gone -
     * not to be thrown back to a login screen wondering whether it worked.
     */
    public function destroyOthers(Request $request): RedirectResponse
    {
        DB::table('sessions')
            ->where('user_id', $request->user()->id)
            ->where('id', '!=', $request->session()->getId())
            ->delete();

        return back()->with('success', 'Every other device was signed out.');
    }

    /**
     * The acting user's sessions, newest activity first.
     *
     * Static so the settings controller that renders the page can call it
     * without this class becoming a dependency of it.
     *
     * @return list<array<string, mixed>>
     */
    public static function forUser(Request $request): array
    {
        if (config('session.driver') !== 'database') {
            /*
             * A cookie or file driver keeps no server-side record, so there is
             * genuinely nothing to list. Returning an empty list rather than
             * throwing: the panel offers this, it does not require it.
             */
            return [];
        }

        $current = $request->session()->getId();

        return DB::table('sessions')
            ->where('user_id', $request->user()->id)
            ->orderByDesc('last_activity')
            ->limit(50)
            ->get(['id', 'ip_address', 'user_agent', 'last_activity'])
            ->map(static fn (object $row): array => [
                'id' => $row->id,
                'current' => $row->id === $current,
                'ip' => $row->ip_address,
                ...self::describe((string) $row->user_agent),
                'lastActiveAt' => $row->last_activity
                    ? now()->setTimestamp((int) $row->last_activity)->toIso8601String()
                    : null,
            ])
            ->all();
    }

    /**
     * A user agent, reduced to something a person recognises.
     *
     * DELIBERATELY CRUDE, and that is the right trade. Full UA parsing needs a
     * regularly-updated database to stay accurate, and this is a recognition
     * aid - somebody scanning for a device that is not theirs needs "Chrome on
     * Windows", not a version string. Anything unrecognised says so plainly
     * rather than guessing.
     *
     * @return array{browser: string, platform: string}
     */
    private static function describe(string $agent): array
    {
        $browser = match (true) {
            str_contains($agent, 'Edg/') => 'Edge',
            str_contains($agent, 'OPR/') => 'Opera',
            str_contains($agent, 'Firefox/') => 'Firefox',
            // Chrome must be tested BEFORE Safari: every Chrome UA also
            // contains "Safari", so the obvious order reports Chrome as Safari.
            str_contains($agent, 'Chrome/') => 'Chrome',
            str_contains($agent, 'Safari/') => 'Safari',
            default => 'Unknown browser',
        };

        $platform = match (true) {
            str_contains($agent, 'iPhone') => 'iPhone',
            str_contains($agent, 'iPad') => 'iPad',
            str_contains($agent, 'Android') => 'Android',
            str_contains($agent, 'Windows') => 'Windows',
            str_contains($agent, 'Mac OS X') => 'macOS',
            str_contains($agent, 'Linux') => 'Linux',
            default => 'Unknown device',
        };

        return ['browser' => $browser, 'platform' => $platform];
    }
}
