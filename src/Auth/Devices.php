<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Auth;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

/**
 * The devices signed in to an account, and how to sign them out.
 *
 * A SESSION IS AN AUTHENTICATION FACT, which is why this sits in `Auth` and why
 * the screen that shows it is the security screen. There was briefly a
 * "Sessions" workspace in the reference application built around client
 * CONNECTION sessions - an ISP concept that happens to share the word - and
 * putting that in the navigation under that name was a category error. Somebody
 * looking for "sessions" in a panel is asking where they are logged in, which is
 * a question about their own account.
 *
 * IT READS LARAVEL'S OWN SESSION TABLE and stores nothing. The framework already
 * records `user_id`, `ip_address`, `user_agent` and `last_activity` per session
 * when the driver is `database`. A parallel `devices` table would be a second
 * record of the same fact, and the two would disagree the first time a session
 * expired without the other being told.
 *
 * SIGNING OUT MEANS DELETING THE ROW, which is what makes it immediate. Marking
 * a session revoked and checking a flag later leaves a stolen cookie working
 * until something looks; deleting it means the very next request has no session
 * at all.
 *
 * ON ANY OTHER DRIVER IT REPORTS NOTHING, rather than throwing. A cookie or file
 * driver keeps no server-side record, so there is genuinely nothing to list -
 * the panel OFFERS this, it does not require it, and an installation on the
 * default driver should get a screen without the section rather than a 500.
 */
final class Devices
{
    /** How many to list. Beyond this it is a log, not a thing you scan. */
    private const LIMIT = 50;

    public static function available(): bool
    {
        return config('session.driver') === 'database';
    }

    /**
     * The acting user's sessions, newest activity first.
     *
     * @return list<array<string, mixed>>
     */
    public static function forUser(Request $request): array
    {
        $user = $request->user();

        if ($user === null || ! self::available()) {
            return [];
        }

        $current = $request->hasSession() ? $request->session()->getId() : null;

        return DB::table('sessions')
            ->where('user_id', $user->getAuthIdentifier())
            ->orderByDesc('last_activity')
            ->limit(self::LIMIT)
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
     * Sign one device out. Returns false when the id names nothing of theirs.
     *
     * SCOPED TO THE ACTING USER, so the id names one of their own sessions or
     * nothing. Session ids are opaque and unguessable, but "hard to guess" is
     * not an authorization check - without the constraint this would sign out
     * any account whose session id ever reached a log.
     */
    public static function forget(Request $request, string $id): bool
    {
        $user = $request->user();

        if ($user === null || ! self::available()) {
            return false;
        }

        return DB::table('sessions')
            ->where('user_id', $user->getAuthIdentifier())
            ->where('id', $id)
            ->delete() > 0;
    }

    /**
     * Sign out everywhere else, keeping this session alive.
     *
     * THE CURRENT SESSION IS DELIBERATELY SPARED. Signing yourself out along
     * with everything else is what a "log out" button does, and somebody who
     * has just found an unfamiliar device wants that device gone - not to be
     * thrown back to a sign-in screen wondering whether it worked.
     */
    public static function forgetOthers(Request $request): int
    {
        $user = $request->user();

        if ($user === null || ! self::available() || ! $request->hasSession()) {
            return 0;
        }

        return DB::table('sessions')
            ->where('user_id', $user->getAuthIdentifier())
            ->where('id', '!=', $request->session()->getId())
            ->delete();
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
            // Chrome must be tested BEFORE Safari: every Chrome user agent also
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
