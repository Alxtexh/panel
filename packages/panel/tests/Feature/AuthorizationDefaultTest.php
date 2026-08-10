<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Tests\Fixtures\Models\Note;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\Fixtures\Resources\NoteResource;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * A MODEL WITH NO POLICY IS DENIED, not allowed.
 *
 * THE SINGLE MOST CONSEQUENTIAL DEFAULT IN THIS PACKAGE, and the one no test
 * inside `apps/playground` can state: every model over there has a policy
 * registered in `AppServiceProvider`, so the demo can only demonstrate the
 * behaviour when the answer EXISTS. What a consumer actually hits is the other
 * case - `make:panel-resource` writes a resource and a policy STUB, and the
 * stub denies until `panel:permissions sync` grants the abilities. Somebody
 * who skips that step, or who hand-writes a resource and forgets the policy
 * entirely, meets this default and nothing else.
 *
 * FAILING CLOSED IS THE WHOLE POINT. A panel that allowed an unanswered
 * ability would hand out access on the strength of a missing file, and the
 * symptom would be a screen that works - the failure mode nobody investigates.
 *
 * IT ALSO WARNS. `Resource::can` logs when it denies for this reason,
 * precisely because a silent 403 reads as a bug in the panel rather than as a
 * policy the application never wrote.
 */
final class AuthorizationDefaultTest extends TestCase
{
    use RefreshDatabase;

    private User $user;

    protected function setUp(): void
    {
        parent::setUp();

        $tenant = Tenant::create(['name' => 'Mine', 'slug' => 'mine']);

        $this->user = User::create([
            'tenant_id' => $tenant->id,
            'name' => 'Operator',
            'email' => 'operator@example.test',
            'password' => 'password',
            'email_verified_at' => now(),
        ]);

        Note::create(['body' => 'Something']);

        $this->actingAs($this->user);
    }

    public function test_a_resource_without_a_policy_refuses_its_list(): void
    {
        $this->get('/notes')->assertForbidden();
    }

    public function test_a_resource_without_a_policy_refuses_a_record(): void
    {
        $note = Note::query()->firstOrFail();

        $this->get("/notes/{$note->getKey()}")->assertForbidden();
    }

    public function test_a_resource_without_a_policy_refuses_a_write(): void
    {
        $note = Note::query()->firstOrFail();

        $this->putJson("/notes/{$note->getKey()}", ['body' => 'Changed'])
            ->assertForbidden();

        $this->assertSame('Something', $note->fresh()->body);
    }

    public function test_a_resource_without_a_policy_refuses_a_delete(): void
    {
        $note = Note::query()->firstOrFail();

        $this->deleteJson("/notes/{$note->getKey()}")->assertForbidden();

        $this->assertNotNull($note->fresh(), 'A record was deleted through a resource with no policy.');
    }

    /**
     * THE DENIAL IS THE RESOURCE'S ANSWER, not an accident of routing.
     *
     * Asked directly, so a future change that made the routes 404 instead
     * would not quietly turn "denied" into "absent" - those look identical
     * from a browser and are very different properties.
     */
    public function test_the_resource_itself_reports_the_denial(): void
    {
        $this->assertFalse(NoteResource::can('viewAny'));
        $this->assertFalse(NoteResource::can('create'));
    }
}
