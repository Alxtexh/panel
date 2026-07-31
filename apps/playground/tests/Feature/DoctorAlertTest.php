<?php

declare(strict_types=1);

namespace Tests\Feature;

use GuzzleHttp\Client;
use GuzzleHttp\HandlerStack;
use GuzzleHttp\Promise\Create;
use GuzzleHttp\Psr7\Response;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Storage;
use PanelKit\Panel\Documents\DocumentTemplate;
use Psr\Http\Message\RequestInterface;
use Tests\TestCase;

/**
 * Doctor on a schedule, and the reason it usually says nothing - roadmap 7.3.
 *
 * THE FEATURE IS THE SILENCE. A daily "everything is fine" is a message people
 * filter, and the filter catches the one that says otherwise - so an alert
 * that announced every run would be worse than no alert at all, in the way
 * that is hardest to notice: the channel keeps working and nobody reads it.
 *
 * So what is asserted here is mostly what does NOT get sent.
 *
 * RUN THROUGH `Artisan::call`, NOT `$this->artisan()`. This command reads its
 * own nested call's output with `Artisan::output()`, and PHPUnit's
 * `PendingCommand` swaps that buffer for its own - so the outer helper leaves
 * the inner read empty and the command correctly reports that doctor returned
 * nothing readable. The facade is what production uses anyway; the assertion
 * on the returned int is the same one.
 */
final class DoctorAlertTest extends TestCase
{
    use RefreshDatabase;

    /** @var list<RequestInterface> */
    private array $sent = [];

    protected function setUp(): void
    {
        parent::setUp();

        // A disk of this test's own - see DoctorTest for why doctor must never
        // read whatever backups happen to be on the machine.
        Storage::fake('doctor-test');
        config([
            'backup.backup.destination.disks' => ['doctor-test'],
            'services.telegram.token' => 'test-token',
            'services.telegram.chat_id' => '-100999',
        ]);

        $this->fakeTelegram();
    }

    /* ------------------------------------------------------------- silence */

    /** A healthy installation that was always healthy says nothing at all. */
    public function test_it_says_nothing_when_there_is_nothing_wrong(): void
    {
        $this->assertSame(0, Artisan::call('panel:doctor-alert'));

        $this->assertSame([], $this->sent);
    }

    /**
     * AND SAYS IT ONCE. The second run over the same problem is silent, which
     * is what makes a daily schedule bearable - the alternative is the same
     * sentence every morning until somebody mutes the channel.
     */
    public function test_a_standing_problem_is_announced_once(): void
    {
        $this->breakSomething();

        $this->assertSame(0, Artisan::call('panel:doctor-alert'));
        $this->assertCount(1, $this->sent, 'The first run should announce.');

        $this->assertSame(0, Artisan::call('panel:doctor-alert'));
        $this->assertCount(1, $this->sent, 'The second run should be silent.');
    }

    /** Unless asked, which is what `--force` is for. */
    public function test_force_announces_the_current_state_anyway(): void
    {
        $this->breakSomething();

        $this->assertSame(0, Artisan::call('panel:doctor-alert'));
        $this->assertSame(0, Artisan::call('panel:doctor-alert', ['--force' => true]));

        $this->assertCount(2, $this->sent);
    }

    /* ------------------------------------------------------------ speaking */

    public function test_a_new_problem_is_announced_with_its_title(): void
    {
        $this->breakSomething();

        $this->assertSame(0, Artisan::call('panel:doctor-alert'));

        $body = urldecode((string) $this->sent[0]->getBody());

        $this->assertStringContainsString('found 1 problem', $body);
        $this->assertStringContainsString('unregistered kind', $body);
        $this->assertStringContainsString('panel:doctor', $body, 'The fix must be one command away.');
    }

    /**
     * AND THE RECOVERY IS ANNOUNCED TOO, once. "Is it fixed?" is otherwise a
     * question somebody has to go and check by hand, which is the same reason
     * the problem was announced in the first place.
     */
    public function test_recovery_is_announced_once(): void
    {
        $this->breakSomething();
        $this->assertSame(0, Artisan::call('panel:doctor-alert'));

        DocumentTemplate::query()->withoutGlobalScope('tenant')->delete();

        $this->assertSame(0, Artisan::call('panel:doctor-alert'));

        $this->assertCount(2, $this->sent);
        $this->assertStringContainsString('resolved', urldecode((string) $this->sent[1]->getBody()));

        // And not again on the next quiet day.
        $this->assertSame(0, Artisan::call('panel:doctor-alert'));
        $this->assertCount(2, $this->sent);
    }

    /**
     * A NOTE IS NOT A PAGE. Doctor exits zero on notes by design - they are
     * information - and waking somebody for information is how a channel gets
     * muted before the problem that matters arrives.
     */
    public function test_notes_are_never_announced(): void
    {
        // A pale accent is a NOTE: the document renders, it is simply faint.
        DocumentTemplate::query()->forceCreate([
            'tenant_id' => 1,
            'name' => 'Faint',
            'kind' => 'invoice',
            'settings' => ['accent' => '#fefbc7'],
        ]);

        $this->assertSame(0, Artisan::call('panel:doctor-alert'));

        $this->assertSame([], $this->sent);
    }

    /* ----------------------------------------------------------- fixtures */

    /** A template for a kind nothing registers - a problem doctor reports. */
    private function breakSomething(): void
    {
        DocumentTemplate::query()->forceCreate([
            'tenant_id' => 1,
            'name' => 'Broken',
            'kind' => 'a-kind-no-plugin-registers',
            'settings' => [],
        ]);
    }

    private function fakeTelegram(): void
    {
        $stack = HandlerStack::create();

        $stack->setHandler(function ($request) {
            $this->sent[] = $request;

            return Create::promiseFor(new Response(200, [], '{"ok":true}'));
        });

        $this->app->bind(Client::class, static fn (): Client => new Client(['handler' => $stack]));
    }
}
