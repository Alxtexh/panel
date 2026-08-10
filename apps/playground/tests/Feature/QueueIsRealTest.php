<?php

declare(strict_types=1);

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

/**
 * `panel:doctor` SAYS SO WHEN "QUEUED" IS NOT QUEUED.
 *
 * WHY THIS IS WORTH A CHECK OF ITS OWN. The panel hands its two unbounded jobs
 * - a bulk mutation over a whole filtered set, and an export of it - to the
 * queue precisely so they do NOT run inside a web request. On the `sync`
 * connection `dispatch()` runs the job inline, and the response then returns a
 * PENDING token pointing at work that already finished.
 *
 * THAT IS WORSE THAN HAVING NO QUEUE, because everything reports success. The
 * operator gets a token, polls it once, and is told the job is done - which is
 * true. Nothing says the five-hundred-thousand-row update ran in the browser's
 * request and was cut off by the web server's timeout at row two hundred
 * thousand, leaving a partial write. The bounded/unbounded split, the queue
 * threshold and the progress tokens are all correct and all inert.
 *
 * ASSERTED IN BOTH DIRECTIONS, because a check that always fires is a check
 * people learn to ignore - the same reason the reference app stopped shipping
 * a permanently broken dashboard widget.
 */
final class QueueIsRealTest extends TestCase
{
    use RefreshDatabase;

    /**
     * THE ENVIRONMENT IS FAKED, AND IT HAS TO BE.
     *
     * `sync` is the CORRECT setting under test - Laravel's own `phpunit.xml`
     * ships it, because a test that queued its work and then asserted the
     * result would assert nothing - so the check deliberately says nothing in
     * the `testing` environment. Exercising it therefore means standing
     * somewhere else for the length of the call.
     */
    private function asDeployment(): void
    {
        $this->app->detectEnvironment(static fn (): string => 'local');
    }

    public function test_a_sync_queue_is_reported_because_nothing_is_actually_queued(): void
    {
        $this->asDeployment();
        config()->set('queue.default', 'sync');

        $this->artisan('panel:doctor')
            ->expectsOutputToContain('nothing this panel queues is actually queued');
    }

    /** A real connection is silent - see the class note on crying wolf. */
    public function test_a_real_queue_connection_says_nothing(): void
    {
        $this->asDeployment();
        config()->set('queue.default', 'database');

        $this->artisan('panel:doctor')
            ->doesntExpectOutputToContain('nothing this panel queues is actually queued');
    }

    /**
     * AND IT IS SILENT UNDER TEST WHATEVER THE CONNECTION SAYS, which is the
     * half that keeps `panel:doctor` worth reading: eleven "doctor is quiet"
     * tests across this suite assert an exit code of zero, and a check that
     * fired on a healthy test run would have turned all of them red.
     */
    public function test_it_is_silent_in_the_testing_environment(): void
    {
        config()->set('queue.default', 'sync');

        $this->artisan('panel:doctor')
            ->doesntExpectOutputToContain('nothing this panel queues is actually queued');
    }
}
