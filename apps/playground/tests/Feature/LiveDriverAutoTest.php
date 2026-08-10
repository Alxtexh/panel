<?php

declare(strict_types=1);

namespace Tests\Feature;

use Alxtexh\Panel\Live\LiveConfig;
use Tests\TestCase;

/**
 * Use the broadcaster if there is one, and poll if there is not.
 *
 * WHY THE DEFAULT IS A QUESTION RATHER THAN AN ANSWER. `poll` worked
 * everywhere, which is why it was the default - but it meant that installing
 * Reverb changed nothing until somebody also remembered a second env var, and
 * that removing Reverb left a panel pointed at a websocket nobody was serving.
 * The application already states which broadcaster it has; asking it is better
 * than asking the operator to keep two settings agreeing.
 *
 * CONFIGURED IS NOT RUNNING, and that asymmetry is the whole reason these tests
 * lean towards `poll`. A slow poll is a slow poll; a broadcast with nothing
 * listening is a list that is silently static and looks exactly like a list
 * where nothing changed. So every uncertain case answers `poll`.
 */
final class LiveDriverAutoTest extends TestCase
{
    /** Laravel's own default. A fresh install polls, as it always did. */
    public function test_a_null_broadcaster_polls(): void
    {
        config(['broadcasting.default' => 'null']);

        $this->assertSame('poll', LiveConfig::resolveDriver('auto'));
    }

    /**
     * AND SO DOES `log`, which is the one that would otherwise look configured.
     * It never consults the channel callbacks and delivers nothing.
     */
    public function test_the_log_broadcaster_polls(): void
    {
        config(['broadcasting.default' => 'log']);

        $this->assertSame('poll', LiveConfig::resolveDriver('auto'));
    }

    public function test_a_configured_reverb_with_a_channel_broadcasts(): void
    {
        config([
            'broadcasting.default' => 'reverb',
            'broadcasting.connections.reverb' => ['driver' => 'reverb', 'key' => 'local-key'],
            'panel.live.channel' => 'panel.tenant.{tenant}',
        ]);

        $this->assertSame('broadcast', LiveConfig::resolveDriver('auto'));
    }

    /**
     * A BROADCASTER WITH NO CHANNEL POLLS, and this is the test that stopped
     * `auto` from being a crash rather than a feature.
     *
     * `LiveConfig` REFUSES the broadcast driver without a channel - a public or
     * tenant-agnostic one is a cross-tenant leak that server-side scoping
     * cannot catch - so resolving to broadcast here made every screen that
     * builds a config throw a 500. Ten tests said so within a minute of it
     * being written.
     */
    public function test_a_broadcaster_without_a_panel_channel_polls(): void
    {
        config([
            'broadcasting.default' => 'reverb',
            'broadcasting.connections.reverb' => ['driver' => 'reverb', 'key' => 'local-key'],
            'panel.live.channel' => null,
        ]);

        $this->assertSame('poll', LiveConfig::resolveDriver('auto'));
    }

    /**
     * A NAMED CONNECTION WITH NO KEY IS SOMEBODY MID-SETUP.
     *
     * This is the test that decides whether `auto` is safe. A `.env` that says
     * `BROADCAST_CONNECTION=pusher` and carries no credentials is half-finished
     * - answering "yes, broadcast" to it turns a working polling panel static,
     * with no error anywhere, on the exact day somebody was busy configuring
     * something else.
     */
    public function test_a_broadcaster_without_credentials_polls(): void
    {
        config([
            'broadcasting.default' => 'pusher',
            'broadcasting.connections.pusher' => ['driver' => 'pusher', 'key' => null],
        ]);

        $this->assertSame('poll', LiveConfig::resolveDriver('auto'));
    }

    /** A connection named in `default` and defined nowhere is not a broadcaster. */
    public function test_an_undefined_connection_polls(): void
    {
        config(['broadcasting.default' => 'ghost', 'broadcasting.connections.ghost' => []]);

        $this->assertSame('poll', LiveConfig::resolveDriver('auto'));
    }

    /**
     * AND AN EXPLICIT CHOICE IS NEVER OVERRULED. Running Reverb and choosing to
     * poll anyway is legitimate - a staging box that shares production's `.env`
     * shape without its websocket - and a package that argued would be wrong.
     */
    public function test_an_explicit_driver_wins(): void
    {
        config([
            'broadcasting.default' => 'reverb',
            'broadcasting.connections.reverb' => ['driver' => 'reverb', 'key' => 'local-key'],
        ]);

        $this->assertSame('poll', LiveConfig::resolveDriver('poll'));
        $this->assertSame('none', LiveConfig::resolveDriver('none'));
    }

    /**
     * `auto` NEVER LEAVES `fromConfig()`, which is what spares every reader -
     * the client, doctor, the platform report - from knowing the word.
     */
    public function test_the_resolved_config_never_carries_auto(): void
    {
        config(['panel.live.driver' => 'auto', 'broadcasting.default' => 'null']);

        $this->assertSame('poll', LiveConfig::fromConfig()->driver);
        $this->assertSame('poll', LiveConfig::fromConfig()->toArray()['driver']);
    }
}
