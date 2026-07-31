<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

/**
 * Which screens offer to take a spreadsheet, and which must not.
 *
 * IMPORT WAS ON BY DEFAULT and inherited by everything with a form, so the
 * question "should this screen accept a CSV" was answered by omission on every
 * resource nobody had thought about. It is a different question from "may I
 * create one of these": creating is what the screen is for, and importing is an
 * administrative act with a wizard and a mapping step behind it.
 *
 * THE FLAG IS THREE THINGS ANDED TOGETHER - `importable()`, `isWritable()` and
 * `can('create')` - so asserting the declaration alone proves nothing about
 * what an operator sees. Every test here signs somebody in and reads the flag
 * the client actually receives.
 */
final class ImportAvailabilityTest extends TestCase
{
    use RefreshDatabase;

    private User $admin;

    protected function setUp(): void
    {
        parent::setUp();

        $tenant = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);
        config(['panel.tenancy.resolver' => fn () => $tenant->id]);

        $this->admin = User::factory()
            ->withAbilities([
                'view_any_users', 'view_users', 'create_users',
                'view_any_clients', 'view_clients', 'create_clients',
            ])
            ->create(['tenant_id' => $tenant->id, 'email_verified_at' => now()]);
    }

    private function offersImport(string $url): bool
    {
        $page = $this->actingAs($this->admin)->get($url)->assertOk()->viewData('page');

        return (bool) ($page['props']['can']['import'] ?? false);
    }

    /**
     * COLLEAGUES ARE INVITED, NOT UPLOADED.
     *
     * Every row of such a spreadsheet carries a role, which is a grant of
     * permissions - and the invitation flow, the password rules and the "you
     * cannot create somebody more powerful than yourself" check all live on the
     * paths an import goes around. A mistyped column is a quiet privilege
     * escalation of exactly the kind nobody reviews.
     */
    public function test_the_users_list_does_not_offer_import(): void
    {
        $this->assertFalse(
            $this->offersImport('/users'),
            'The users list offers Import. People are invited, not uploaded.',
        );
    }

    /** And the screen that import exists for still has it. */
    public function test_the_subscribers_list_still_offers_import(): void
    {
        $this->assertTrue(
            $this->offersImport('/clients'),
            'Subscribers are the case bulk import was built for.',
        );
    }
}
