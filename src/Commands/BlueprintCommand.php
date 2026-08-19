<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Commands;

use Illuminate\Console\Command;
use Alxtexh\Panel\Support\Blueprint;

/**
 * Writes the instructions an AI agent needs into the application.
 *
 * WHY A FILE AND NOT A PROMPT. Agents read a file in the repository -
 * `AGENTS.md`, `CLAUDE.md`, whatever the tool looks for - on every session,
 * without anybody remembering to paste anything. A prompt somebody has to
 * remember is guidance that is present on the day it was written and absent
 * every day after.
 *
 * WHY GENERATED AND NOT WRITTEN. The resource list, the panels and the commands
 * come from the running application. A hand-maintained instruction file drifts,
 * and drift matters more here than in ordinary documentation: a person notices
 * that a named resource no longer exists, and an agent writes code against it.
 *
 * IT APPENDS RATHER THAN OVERWRITES, between markers. `CLAUDE.md` usually
 * belongs to the team - conventions, deploy notes, things nothing here knows
 * about - and a command that replaced it would be a command nobody runs twice.
 * Re-running replaces only what it wrote last time.
 */
final class BlueprintCommand extends Command
{
    protected $signature = 'panel:blueprint
                            {--file= : Where to write it (default AGENTS.md)}
                            {--print : Write it to output instead of a file}';

    protected $description = 'Write the panel conventions an AI agent should follow into the project';

    private const START = '<!-- alxtexhpanel:blueprint:start -->';

    private const END = '<!-- alxtexhpanel:blueprint:end -->';

    public function handle(): int
    {
        $markdown = Blueprint::markdown();

        if ($this->option('print')) {
            $this->line($markdown);

            return self::SUCCESS;
        }

        $path = base_path((string) ($this->option('file') ?: 'AGENTS.md'));

        $block = self::START."\n\n".$markdown."\n".self::END;

        $existing = is_file($path) ? (string) file_get_contents($path) : '';

        if (str_contains($existing, self::START) && str_contains($existing, self::END)) {
            /*
             * REPLACED IN PLACE, so a file that also holds a team's own notes
             * keeps them and keeps their position. Appending on every run would
             * grow the file by a copy each time, and an instruction file with
             * three versions of the same section in it is worse than none - the
             * agent reads all three.
             */
            $updated = (string) preg_replace(
                '/'.preg_quote(self::START, '/').'.*?'.preg_quote(self::END, '/').'/s',
                $block,
                $existing,
            );

            $this->components->info('Updated the blueprint in '.basename($path).'.');
        } else {
            $updated = trim($existing."\n\n".$block)."\n";

            $this->components->info(
                ($existing === '' ? 'Wrote ' : 'Appended the blueprint to ').basename($path).'.'
            );
        }

        file_put_contents($path, $updated);

        $this->components->twoColumnDetail('  Path', $path);
        $this->components->twoColumnDetail('  Size', number_format(strlen($block)).' bytes');

        $this->newLine();
        $this->components->info(
            'Re-run this after adding a resource or a portal - the inventory is generated, not written.'
        );

        return self::SUCCESS;
    }
}
