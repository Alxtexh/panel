<?php

declare(strict_types=1);

namespace PanelKit\Panel\Jobs;

use Illuminate\Support\Facades\Auth;
use PanelKit\Panel\PanelManager;
use PanelKit\Panel\Resources\Resource;
use RuntimeException;

/**
 * Re-establishes the actor inside a queued job.
 *
 * THIS IS THE SECURITY-CRITICAL PART OF ANY BACKGROUND PANEL WORK, and it is a
 * trait rather than four copies for exactly that reason.
 *
 * A queue worker has no session. `Auth::user()` is null, so TenantContext
 * resolves no tenant, so the tenant global scope has nothing to scope by. The
 * scope FAILS CLOSED — a job that forgets this exports zero rows rather than
 * every tenant's rows — but "fails closed" is only true of the current scope
 * implementation, and a background job silently producing empty files is its
 * own bug.
 *
 * Setting the user fixes both halves at once: tenancy resolves from the user's
 * tenant, and the policy check resolves against the same user. One fact, two
 * consequences, no second place to keep them in sync.
 *
 * `setUser`, not `login`: there is no session to persist into, and `login`
 * would fire authentication events for something that is not an authentication.
 */
trait ActsAsPanelUser
{
    /** The user this job is running as, once actAs() has established it. */
    protected mixed $actor = null;

    /**
     * @return class-string<Resource>
     */
    protected function actAs(int|string $userId, string $resourceKey): string
    {
        $provider = Auth::guard(config('panel.guard', 'web'))->getProvider();
        $user = $provider?->retrieveById($userId);

        if ($user === null) {
            throw new RuntimeException("Cannot run panel job: user [{$userId}] no longer exists.");
        }

        Auth::setUser($user);
        $this->actor = $user;

        $class = app(PanelManager::class)->resource($resourceKey);

        if ($class === null) {
            throw new RuntimeException("No panel resource registered for [{$resourceKey}].");
        }

        /*
         * RE-AUTHORIZED HERE, not only at dispatch.
         *
         * A queued job runs later — sometimes much later. Permission can be
         * revoked, a feature flag can be turned off, or a tenant can be
         * suspended between the click and the worker picking it up. Trusting
         * the check made at dispatch means a revoked operator's queued action
         * still lands.
         */
        if (! $class::isEnabled()) {
            throw new RuntimeException("Resource [{$resourceKey}] is not enabled for this tenant.");
        }

        return $class;
    }

    /**
     * Tell the operator their background work finished.
     *
     * Guarded, because a notification failure must not fail the JOB — the export
     * is already written and the mutation already committed, so throwing here
     * would retry work that is done and, worse, report a success as a failure.
     */
    protected function notifyActor(string $title, string $body, ?string $href = null, string $severity = 'info'): void
    {
        if ($this->actor === null || ! method_exists($this->actor, 'notify')) {
            return;
        }

        try {
            $this->actor->notify(new \App\Notifications\JobFinished($title, $body, $href, $severity));
        } catch (\Throwable $e) {
            \Illuminate\Support\Facades\Log::warning('Could not notify the panel user about a finished job.', [
                'component' => 'ActsAsPanelUser',
                'operation' => 'notifyActor',
                'exception' => $e->getMessage(),
            ]);
        }
    }
}
