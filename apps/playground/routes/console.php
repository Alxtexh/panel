<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Schedule;
use Alxtexh\Panel\Support\BackupSettings;
use Alxtexh\Panel\Support\InstallationState;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');

/*
|--------------------------------------------------------------------------
| Backups
|--------------------------------------------------------------------------
|
| THE SCHEDULE IS THE FEATURE. Installing `spatie/laravel-backup` and building
| a status page over it produced a screen that could only ever say "no backups
| have been taken yet", because nothing was taking any. These three lines are
| the difference between a backup system and a backup page.
|
| ORDER AND TIMING MATTER:
|
|   `backup:clean` runs BEFORE `backup:run` so the disk has room for the
|   snapshot about to be written - the reverse fails on the night the disk
|   fills, which is the night it matters.
|
|   `backup:monitor` runs LATE MORNING, not straight after the run. Its job is
|   to notice that a backup did NOT happen, and asking that question one minute
|   after the attempt only ever catches a crash; asking it hours later catches a
|   scheduler that stopped, a cron that was removed, and a container that never
|   came back up.
|
| `withoutOverlapping` because a backup that runs long must not have a second
| one started on top of it, and `onOneServer` because two workers both backing
| up is twice the load for one snapshot.
*/
/*
| THE FREQUENCY COMES FROM THE SETTINGS SCREEN, not from these lines.
|
| It was hardcoded to 01:30 daily, which meant the page could describe a
| schedule an operator had no way to change - and the honest version of that
| screen would have said "ask a developer". `BackupSettings` is read fresh on
| every scheduler tick, because `schedule:run` is a new process each minute; a
| change saved in the panel is therefore in force within the minute, with no
| deploy and no cache to clear.
|
| A MISSING TABLE FALLS BACK TO THE OLD DEFAULTS rather than scheduling nothing.
| This file is evaluated during `migrate` itself, before `panel_settings`
| exists, and a backup system that silently stops being scheduled because a
| migration is pending is the exact failure this whole screen exists to catch.
*/
$backups = BackupSettings::load();

/*
| APPLIED HERE, WHERE EVERY ARTISAN COMMAND PASSES THROUGH.
|
| `backup:clean` and `backup:run` are separate processes started by the
| scheduler, and each one loads this file - so this is the one place that
| catches them both without a service provider reaching into config on every
| web request too. Retention, destinations and alert routing all live in config
| by the time Spatie reads them.
*/
$backups->apply();

$cleanup = Schedule::command('backup:clean')->withoutOverlapping()->onOneServer();
$run = Schedule::command('backup:run')->withoutOverlapping()->onOneServer();

/*
| CLEANUP RUNS THIRTY MINUTES AHEAD OF THE BACKUP, whatever the cadence, so the
| disk has room for the snapshot about to be written - the reverse fails on the
| night the disk fills, which is the night it matters. On an hourly schedule
| that means cleaning at half past and backing up on the hour.
*/
$before = Carbon::createFromFormat('H:i', $backups->time)->subMinutes(30)->format('H:i');

match ($backups->frequency) {
    'hourly' => [$cleanup->hourlyAt(30), $run->hourly()],
    'twice-daily' => [
        $cleanup->twiceDailyAt((int) substr($before, 0, 2), ((int) substr($before, 0, 2) + 12) % 24, (int) substr($before, 3, 2)),
        $run->twiceDailyAt((int) substr($backups->time, 0, 2), ((int) substr($backups->time, 0, 2) + 12) % 24, (int) substr($backups->time, 3, 2)),
    ],
    'weekly' => [
        $cleanup->weeklyOn($backups->weekday % 7, $before),
        $run->weeklyOn($backups->weekday % 7, $backups->time),
    ],
    /*
     | MONTHLY IS THE ONE CADENCE WHERE "half an hour earlier" CAN CROSS A DAY.
     |
     | A backup at 00:15 on the 1st puts the cleanup at 23:45 on the last day of
     | the previous month - a different day NUMBER, so `monthlyOn` would fire it
     | in a month with that many days and skip the ones without. Clamping to
     | midnight keeps both on the day the operator chose; the ordering, which is
     | what actually matters, is preserved either way.
     */
    'monthly' => [
        $cleanup->monthlyOn($backups->dayOfMonth, $before < $backups->time ? $before : '00:00'),
        $run->monthlyOn($backups->dayOfMonth, $backups->time),
    ],
    default => [$cleanup->dailyAt($before), $run->dailyAt($backups->time)],
};

/*
| `backup:monitor` runs LATE MORNING, not straight after the run. Its job is to
| notice that a backup did NOT happen, and asking that question one minute after
| the attempt only ever catches a crash; asking it hours later catches a
| scheduler that stopped, a cron that was removed, and a container that never
| came back up.
*/
Schedule::command('backup:monitor')->dailyAt('09:00')->onOneServer();

/*
| DOCTOR, DAILY, THROUGH THE SAME CHANNEL - roadmap 7.3.
|
| The command doctor exists to answer is "what is silently wrong", and until
| this line it was only ever asked by somebody who already suspected
| something. The failures it catches are precisely the ones nobody suspects:
| a scheduler that stopped, a destination that quietly went stale, a template
| whose variable was renamed out from under it.
|
| A FEW MINUTES AFTER THE BACKUP MONITOR, so that a night where backups failed
| produces the specific message first and the general one second. Two alerts
| about the same fact is noise; two alerts where the first is precise and the
| second is context is a morning somebody can act on.
|
| It announces only when the answer CHANGES - see `DoctorAlertCommand`. A
| daily "everything is fine" is a message people filter, and the filter
| catches the one that says otherwise.
*/
Schedule::command('panel:doctor-alert')->dailyAt('09:05')->onOneServer();

/*
| A HEARTBEAT, SO THE PLATFORM SCREEN CAN SAY WHETHER CRON IS RUNNING AT ALL.
|
| A missing cron entry is the most commonly broken thing in a Laravel
| deployment and has the quietest failure: no backups, no cleanup, no monitor -
| and every screen reporting on those looks perfectly normal, because they
| simply never ran. There is nothing to notice.
|
| A write per minute is the cheapest evidence that something is ticking. It
| deliberately does NOT go through `onOneServer`: the question is "is anything
| running the schedule", and a lock would let one dead worker's silence be
| covered by another's.
|
| NOT THE CACHE. `CacheTenancyBootstrapper` prefixes every key with the current
| tenant, so a value written here - by cron, with no tenant - is simply absent
| when the platform screen reads it inside a tenant request. It reported a
| perfectly healthy scheduler as dead, silently. See `InstallationState`.
*/
Schedule::call(fn () => app(InstallationState::class)->put(
    'scheduler:last-run',
    now()->toIso8601String(),
    seconds: 86_400,
))->everyMinute()->name('panel-scheduler-heartbeat');

/*
|--------------------------------------------------------------------------
| Scheduled reports
|--------------------------------------------------------------------------
|
| ONE ENTRY, ASKED EVERY MINUTE, rather than a scheduler line per report.
|
| Reports are DATA - created and deleted from a screen by operators - and
| Laravel's schedule is CODE, fixed at boot. A schedule built from rows would be
| wrong until the next deploy, which for a report created five minutes ago means
| it never runs at all.
|
| The question is one indexed read and almost always answers with nothing.
| `withoutOverlapping` because a tick that runs long must not have the next one
| started on top of it.
*/
Schedule::command('panel:reports-due')
    ->everyMinute()
    ->withoutOverlapping()
    ->onOneServer();

/*
|--------------------------------------------------------------------------
| Sweeping up what nothing else collects
|--------------------------------------------------------------------------
|
| TWO COMMANDS THAT EXISTED AND WERE NEVER RUN. Both delete files that no
| screen lists and no record points at - an abandoned upload, an export past
| its retention window - so nothing in the panel ever reports that they are
| accumulating. The disk fills quietly and the first symptom is a write
| failing somewhere unrelated.
|
| DAILY, AND OUT OF HOURS. Neither is urgent to the minute, and both walk a
| disk; running them while people are working buys nothing and competes with
| the requests that matter.
|
| An export's expiry is enforced by the download endpoint itself, so a
| scheduler that stopped means old files linger rather than expired ones
| staying downloadable.
*/
Schedule::command('panel:prune-exports')->dailyAt('03:20')->onOneServer();

/*
 | THE ONLY UNATTENDED HARD DELETE IN THE PANEL. Without it a soft delete is not
 | a delete: the row stays in the table, the backups and every later export, and
 | "deleted" quietly means "hidden". The Trash screen states the same retention
 | this enforces, so the promise on screen and the sweep on disk cannot drift.
 */
Schedule::command('panel:prune-trash')->dailyAt('03:10')->onOneServer();
Schedule::command('panel:prune-uploads')->dailyAt('03:30')->onOneServer();

/*
 | MONITORING HISTORY, EVERY FIVE MINUTES - roadmap 5.3. Each tick stores one
 | compact row and alerts on any threshold CROSSED since the previous one, so
 | "disk at 91%" reaches Telegram when it happens rather than when somebody
 | opens the screen. `onOneServer`: the sample describes a host, and the alert
 | edge detection depends on samples forming one sequence, not one per worker.
 */
Schedule::command('panel:monitor-sample')->everyFiveMinutes()->withoutOverlapping()->onOneServer();
