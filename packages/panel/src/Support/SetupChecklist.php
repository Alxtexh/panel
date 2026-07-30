<?php

declare(strict_types=1);

namespace PanelKit\Panel\Support;

use Illuminate\Support\Facades\Artisan;

/**
 * The dashboard checklist, computed rather than written down.
 *
 * THEIRS IS A STATIC LIST OF SIX ONBOARDING STEPS, checked off once and then
 * stale forever - a panel that has drifted since week one still shows six
 * green ticks. Ours has no fixed steps at all: every item on it is a
 * `panel:doctor` problem, so the list can only ever describe what is
 * ACTUALLY wrong right now, for the life of the installation, not what
 * somebody remembered to configure during setup.
 *
 * "THE FINISHED ONES STAY VISIBLE" is the one thing `panel:doctor` itself
 * cannot do: a point-in-time command has no memory, so a fixed problem just
 * stops appearing in its output - indistinguishable from a problem that was
 * never there to be fixed. `InstallationState` is the difference: every
 * problem doctor reports is recorded, by title, and stays on this list -
 * marked done - once doctor stops reporting it. An operator watching this
 * card sees progress, not a list that quietly shrinks.
 *
 * UNDONE ITEMS ARE NEVER TRIMMED, only the done tail is capped. A real
 * problem going silent because the list "got full" would be worse than the
 * list growing a little.
 */
final class SetupChecklist
{
    private const SEEN_KEY = 'checklist:doctor-findings';

    /** Old resolved items are kept, but not without bound. */
    private const MAX_DONE = 10;

    public function __construct(private readonly InstallationState $state) {}

    /** @return list<array{key: string, title: string, detail: string, done: bool}> */
    public function items(): array
    {
        $open = $this->openProblems();

        /** @var array<string, array{title: string, detail: string}> $seen */
        $seen = (array) $this->state->get(self::SEEN_KEY, []);

        // Anything currently open is (re)recorded, so a problem doctor has
        // reported before under an unchanged title does not read as "new".
        $merged = [...$seen, ...$open];

        $items = [];

        foreach ($merged as $key => $finding) {
            $items[] = [
                'key' => $key,
                'title' => $finding['title'],
                'detail' => $finding['detail'],
                'done' => ! isset($open[$key]),
            ];
        }

        $undone = array_values(array_filter($items, static fn (array $i): bool => ! $i['done']));
        $done = array_values(array_filter($items, static fn (array $i): bool => $i['done']));
        $done = array_slice($done, -self::MAX_DONE);

        $kept = [...$undone, ...$done];

        // Persisted state is trimmed the same way it is returned, so the row
        // this writes to does not grow forever on an installation that has
        // been through hundreds of transient problems over its lifetime.
        $toPersist = [];
        foreach ($kept as $item) {
            $toPersist[$item['key']] = ['title' => $item['title'], 'detail' => $item['detail']];
        }

        if ($toPersist !== $seen) {
            $this->state->put(self::SEEN_KEY, $toPersist);
        }

        return $kept;
    }

    /**
     * `panel:doctor`'s own problems, keyed by a stable hash of their title.
     *
     * THE SAME `Artisan::call` + `--json` PlatformReport ALREADY USES.
     * `DoctorCommand` keeps its checks free of console I/O specifically so
     * something other than its own `report()` can consume them - this is
     * the second caller that does, and the reason neither needed the command
     * refactored to get here.
     *
     * @return array<string, array{title: string, detail: string}>
     */
    private function openProblems(): array
    {
        try {
            Artisan::call('panel:doctor', ['--json' => true]);

            $decoded = json_decode(Artisan::output(), true);
            $findings = is_array($decoded) ? $decoded : [];
        } catch (\Throwable $e) {
            report($e);

            // A checklist that cannot run its own check is itself a problem
            // worth naming, not a silently empty "all clear".
            $findings = [[
                'level' => 'problem',
                'title' => 'The setup checklist could not run its checks',
                'detail' => $e->getMessage(),
            ]];
        }

        $problems = [];

        foreach ($findings as $finding) {
            if (! is_array($finding) || ($finding['level'] ?? null) !== 'problem') {
                continue;
            }

            $title = trim((string) ($finding['title'] ?? ''));

            if ($title === '') {
                continue;
            }

            // A short stable hash, not the title itself - the title is
            // free text a future check could reword, and doing so should
            // not orphan the persisted history under the old wording. The
            // hash is recomputed from whatever title arrives each run, so a
            // genuinely reworded check is treated as the same item as long
            // as `DoctorCommand` does not change it, and as a new one if it
            // does - which is the same ambiguity the command's own findings
            // already have.
            $key = substr(hash('xxh128', $title), 0, 16);

            $problems[$key] = ['title' => $title, 'detail' => trim((string) ($finding['detail'] ?? ''))];
        }

        return $problems;
    }
}
