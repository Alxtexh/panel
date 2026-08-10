<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Commands;

use Illuminate\Console\Command;
use Alxtexh\Panel\Support\MonitorSampler;

/**
 * One monitoring sample, for the scheduler - roadmap 5.3.
 *
 * The measuring, storing, pruning and alerting all live in
 * `MonitorSampler`; this is the five-minute cron face of it. Runnable by
 * hand for the same reason every panel command is: "did the alert fire"
 * should be answerable from a shell without waiting for the next tick.
 */
final class MonitorSampleCommand extends Command
{
    protected $signature = 'panel:monitor-sample';

    protected $description = 'Record one monitoring sample and alert on any crossed threshold';

    public function handle(MonitorSampler $sampler): int
    {
        $row = $sampler->sample();

        foreach ($row as $metric => $value) {
            $this->components->twoColumnDetail($metric, $value === null ? 'unavailable' : (string) $value);
        }

        return self::SUCCESS;
    }
}
