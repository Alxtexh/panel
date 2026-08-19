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

    public function test_a_colleague_cannot_download_an_export(): void
    {
        $token = JobStatus::token();

        JobStatus::start($token, $this->owner->getKey(), 'export');

        $this->actingAs($this->colleague)
            ->get("/articles/jobs/{$token}/download")
            ->assertNotFound();
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
}
