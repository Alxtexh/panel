<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Actions\JobStatus;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * An export belongs to whoever asked for it, not to their organisation.
 *
 * A COLLEAGUE IS THE INTERESTING ADVERSARY HERE, not another tenant. The
 * tenant scope already handles strangers; what it does not handle is the
 * person at the next desk, who shares an organisation and every ability, and
 * whose only barrier to reading somebody's export is the ownership check.
 *
 * AND AN EXPORT IS THE WHOLE TABLE. A record screen leaks one row; a finished
 * export is a file containing everything the filter matched, sitting behind a
 * token. That is the largest single object the panel produces, which is why
 * both the STATUS and the DOWNLOAD are checked separately - two endpoints, two
 * chances to forget.
 *
 * THE SETUP RUNS IN THE SAME CONTEXT AS THE REQUEST, deliberately. `JobStatus`
 * lives in the cache, and a tenant-prefixed cache key written in one context
 * and read in another simply MISSES - producing a 404 that looks exactly like
 * the ownership check passing. The reference app records that this exact
 * assertion once passed for that reason, proving a guard that was never
 * consulted.
 */
final class ExportOwnershipTest extends TestCase
{
    use RefreshDatabase;

    private User $owner;

    private User $colleague;

    protected function setUp(): void
    {
        parent::setUp();

        $tenant = Tenant::create(['name' => 'Mine', 'slug' => 'mine']);

        $this->owner = User::create([
            'tenant_id' => $tenant->id,
            'name' => 'Owner',
            'email' => 'owner@example.test',
            'password' => 'password',
            'email_verified_at' => now(),
        ]);

        $this->colleague = User::create([
            'tenant_id' => $tenant->id,
            'name' => 'Colleague',
            'email' => 'colleague@example.test',
            'password' => 'password',
            'email_verified_at' => now(),
        ]);
    }

    /**
     * THE OWNER ID IS CHECKED, NOT JUST THE TOKEN.
     *
     * Asserted against `JobStatus` directly before any HTTP call, so the
     * refusal below cannot be a cache miss wearing a 404. If this assertion
     * passes and the request still 404s, the ownership check is what refused.
     */
    public function test_the_status_store_checks_the_owner_not_only_the_token(): void
    {
        $token = JobStatus::token();

        JobStatus::start($token, $this->owner->getKey(), 'export');

        $this->assertNotNull(JobStatus::get($token, $this->owner->getKey()));
        $this->assertNull(
            JobStatus::get($token, $this->colleague->getKey()),
            'A job status resolved for somebody who did not start it.',
        );
    }

    public function test_a_colleague_cannot_read_a_job_status(): void
    {
        $token = JobStatus::token();

        JobStatus::start($token, $this->owner->getKey(), 'export');

        // Present for the owner, so the colleague's 404 can only be ownership.
        $this->actingAs($this->owner)
            ->getJson("/articles/jobs/{$token}")
            ->assertOk();

        $this->actingAs($this->colleague)
            ->getJson("/articles/jobs/{$token}")
            ->assertNotFound();
    }

    public function test_job_status_has_a_common_operations_payload(): void
    {
        $token = JobStatus::token();
        JobStatus::start($token, $this->owner->getKey(), 'export');
        JobStatus::progress($token, 5, 10);

        $state = JobStatus::get($token, $this->owner->getKey());

        $this->assertSame('export', $state['operation']);
        $this->assertSame(50, $state['progress']);
        $this->assertNotNull($state['startedAt']);

        JobStatus::finish($token);
        $state = JobStatus::get($token, $this->owner->getKey());

        $this->assertSame(JobStatus::DONE, $state['status']);
        $this->assertSame(100, $state['progress']);
        $this->assertNotNull($state['finishedAt']);
    }

    public function test_a_colleague_cannot_download_an_export(): void
    {
        $token = JobStatus::token();

        JobStatus::start($token, $this->owner->getKey(), 'export');

        $this->actingAs($this->colleague)
            ->get("/articles/jobs/{$token}/download")
            ->assertNotFound();
    }

    public function test_status_persists_a_resumable_checkpoint(): void
    {
        $token = JobStatus::token();
        JobStatus::start($token, $this->owner->getKey(), 'import');

        JobStatus::checkpoint($token, [2, 4, 4]);

        $state = JobStatus::get($token, $this->owner->getKey());

        $this->assertSame([2, 4], $state['checkpoint']);
    }

    public function test_a_guest_cannot_read_a_job_status(): void
    {
        $token = JobStatus::token();

        JobStatus::start($token, $this->owner->getKey(), 'export');

        $this->getJson("/articles/jobs/{$token}")->assertUnauthorized();
    }

    /**
     * A TOKEN NOBODY ISSUED IS NOT FOUND, rather than erroring.
     *
     * The token is in the URL, so it is guessable input; a 500 on an unknown
     * one would be a way to tell issued tokens from unissued by their failure
     * mode.
     */
    public function test_an_unknown_token_is_not_found(): void
    {
        $this->actingAs($this->owner)
            ->getJson('/articles/jobs/'.JobStatus::token())
            ->assertNotFound();
    }

    public function test_an_idempotency_key_reuses_a_job_without_dispatching_twice(): void
    {
        $dispatches = 0;

        $first = JobStatus::startFor(
            $this->owner->getKey(),
            'export',
            'same-request',
            static function () use (&$dispatches): void {
                $dispatches++;
            },
        );
        $second = JobStatus::startFor(
            $this->owner->getKey(),
            'export',
            'same-request',
            static function () use (&$dispatches): void {
                $dispatches++;
            },
        );

        $this->assertSame($first, $second);
        $this->assertSame(1, $dispatches);
        $this->assertNotSame(
            $first,
            JobStatus::startFor($this->colleague->getKey(), 'export', 'same-request'),
        );
    }

    public function test_reusing_a_key_for_a_different_request_is_a_conflict(): void
    {
        JobStatus::startFor($this->owner->getKey(), 'export', 'same-request', null, 'first-request');

        $this->expectException(\Symfony\Component\HttpKernel\Exception\ConflictHttpException::class);

        JobStatus::startFor($this->owner->getKey(), 'export', 'same-request', null, 'different-request');
    }

    public function test_a_failed_dispatch_can_be_retried_with_the_same_key(): void
    {
        $attempts = 0;

        try {
            JobStatus::startFor($this->owner->getKey(), 'export', 'retry-after-failure', function (): void {
                throw new \RuntimeException('queue unavailable');
            });
        } catch (\RuntimeException $exception) {
            $this->assertSame('queue unavailable', $exception->getMessage());
        }

        $token = JobStatus::startFor(
            $this->owner->getKey(),
            'export',
            'retry-after-failure',
            static function () use (&$attempts): void {
                $attempts++;
            },
        );

        $this->assertSame(1, $attempts);
        $this->assertSame(JobStatus::PENDING, JobStatus::get($token, $this->owner->getKey())['status']);
    }

    public function test_an_owner_can_cancel_a_live_job_but_a_colleague_cannot(): void
    {
        $token = JobStatus::token();
        JobStatus::start($token, $this->owner->getKey(), 'export');

        $this->assertFalse(JobStatus::cancel($token, $this->colleague->getKey()));
        $this->assertTrue(JobStatus::cancel($token, $this->owner->getKey()));
        $this->assertSame(JobStatus::CANCELED, JobStatus::get($token, $this->owner->getKey())['status']);
        $this->assertFalse(JobStatus::cancel($token, $this->owner->getKey()));
    }
}
