<?php

declare(strict_types=1);

namespace PanelKit\Panel\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;
use PanelKit\Panel\Alerts\Telegram;
use PanelKit\Panel\Support\InstallationState;

/**
 * `panel:doctor` on a schedule, reporting through Telegram - roadmap 7.3.
 *
 * DOCTOR'S WHOLE VALUE IS FINDING WHAT IS SILENTLY WRONG, and until now it
 * only found it when somebody thought to ask. The failures it catches are
 * exactly the ones nobody thinks to ask about: a scheduler that stopped, a
 * destination that quietly went stale, a template whose variable was renamed
 * out from under it. Something has to run it on the days nobody does.
 *
 * IT ONLY SPEAKS WHEN THE ANSWER CHANGES, and that is the design decision
 * that makes a daily check bearable. A message every morning saying
 * "everything is fine" is a message people filter, and the filter catches the
 * one that says otherwise. So the finding set is fingerprinted and compared
 * with what was last announced:
 *
 *   NEW PROBLEMS -> a message, naming them.
 *   THE SAME PROBLEMS -> silence. It was already said.
 *   PROBLEMS GONE -> one message saying so, because "is it fixed?" is a
 *   question somebody is otherwise left to check by hand.
 *
 * NOTES ARE NEVER ANNOUNCED. A note is informational by definition - see
 * `DoctorCommand`, which exits zero on them - and paging somebody about
 * information is how a channel gets muted.
 */
final class DoctorAlertCommand extends Command
{
    protected $signature = 'panel:doctor-alert {--force : Announce the current state even if it has not changed}';

    protected $description = 'Run panel:doctor and announce changes through Telegram';

    /** Where the last announced fingerprint is kept. */
    private const STATE = 'doctor.last_announced';

    public function handle(InstallationState $state): int
    {
        /*
         * THE JSON MODE, not a re-implementation of the checks. There is one
         * doctor; this is a caller. A second copy of the check list is a
         * second thing to keep in step, and the one that drifts is the one
         * that runs unattended.
         */
        Artisan::call('panel:doctor', ['--json' => true]);

        $findings = json_decode(Artisan::output(), true);

        if (! is_array($findings)) {
            // Doctor itself is broken. Say so rather than reporting health.
            $this->error('panel:doctor did not return a readable report.');

            return self::FAILURE;
        }

        $problems = array_values(array_filter(
            $findings,
            static fn (array $f): bool => ($f['level'] ?? '') === 'problem',
        ));

        $fingerprint = $this->fingerprint($problems);
        $last = (string) ($state->get(self::STATE) ?? '');

        if ($fingerprint === $last && ! $this->option('force')) {
            $this->info('Nothing new to announce.');

            return self::SUCCESS;
        }

        $state->put(self::STATE, $fingerprint);

        if ($problems === []) {
            /*
             * ONLY WORTH SAYING IF SOMETHING WAS WRONG BEFORE. On an
             * installation that has always been healthy this would be the
             * morning "everything is fine" message that trains people to
             * ignore the channel.
             */
            if ($last !== '' && $last !== $this->fingerprint([])) {
                $this->announce("✅ The panel's earlier problems are resolved.");
            }

            $this->info('Healthy.');

            return self::SUCCESS;
        }

        $lines = array_map(
            static fn (array $f): string => '• '.($f['title'] ?? 'Unnamed problem'),
            $problems,
        );

        $this->announce(sprintf(
            "⚠️ %s found %d problem%s\n\n%s\n\nRun `php artisan panel:doctor` for the fix.",
            config('app.name', 'The panel'),
            count($problems),
            count($problems) === 1 ? '' : 's',
            implode("\n", $lines),
        ));

        /*
         * SUCCESS EVEN WHEN PROBLEMS WERE FOUND. This command's job is to
         * ANNOUNCE, and it did. A non-zero exit here would put the scheduler
         * into a failure loop over a condition that is already being reported
         * - and `panel:doctor` itself is the one that fails a deploy.
         */
        return self::SUCCESS;
    }

    /**
     * Announce, and say in the console what happened either way.
     *
     * A SILENT NO-OP WOULD BE THE WORST OUTCOME: an installation with no
     * Telegram configured would run this every day, find problems, tell
     * nobody, and look like it was working.
     */
    private function announce(string $message): void
    {
        if (! Telegram::configured()) {
            $this->warn('Telegram is not configured - nothing was sent. The message was:');
            $this->line($message);

            return;
        }

        Telegram::send($message)
            ? $this->info('Announced.')
            : $this->error('Telegram refused the message.');
    }

    /**
     * A stable hash of WHICH problems exist, ignoring their order.
     *
     * Titles rather than details, because a detail carries counts and ages
     * that move every run - "the newest backup is 27 hours old" becomes 28 an
     * hour later, and fingerprinting that would announce the same broken
     * scheduler hourly, for ever.
     *
     * @param  list<array<string, mixed>>  $problems
     */
    private function fingerprint(array $problems): string
    {
        $titles = array_map(static fn (array $f): string => (string) ($f['title'] ?? ''), $problems);

        sort($titles);

        return hash('xxh128', implode('|', $titles));
    }
}
