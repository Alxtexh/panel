<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Demo\Models\Client;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Alxtexh\Panel\Support\TenantContext;
use Spatie\Permission\PermissionRegistrar;
use Tests\TestCase;

/**
 * A business with ONE organisation, which is the ordinary first install.
 *
 * IT WAS LOCKED OUT OF ITS OWN PANEL. `TenantResourcePolicy` denied on
 * `currentKey() === null`, which is exactly right when tenancy is on and the
 * tenant did not resolve - an unresolved tenant there is a request that would
 * read across all of them. It is exactly wrong in `MODE_NONE`, where null is not
 * a failure to resolve but the honest answer: there are no tenants.
 *
 * So a fresh `composer require` generated a resource, generated a policy, told
 * you to run `panel:permissions sync`, and then answered every screen with
 * "Forbidden" - and the generated policy's own docblock made it read like the
 * permissions had not synced. Found by installing into a fresh application and
 * opening it in a browser; no test in this repository could see it, because the
 * reference app is multi-tenant in every one of them.
 *
 * THE DENIALS THAT MUST SURVIVE ARE HALF THIS FILE. Relaxing a policy is the
 * change most likely to be too broad, so the multi-tenant refusals are asserted
 * alongside the single-tenant permission.
 */
final class SingleTenantInstallTest extends TestCase
{
    use RefreshDatabase;

    /**
     * THE ROLE PIVOT STILL NEEDS A TEAM, even with the panel's tenancy off.
     *
     * That is Spatie's storage shape and the reference app's schema, not
     * Alxtexhpanel's decision - `model_has_roles.tenant_id` is NOT NULL here. A
     * single-tenant installation stores its roles under one team id and never
     * looks at it again, which is what this mirrors. What is under test is the
     * POLICY, not the pivot.
     */
    private function operator(array $abilities, ?Tenant $tenant = null): User
    {
        $tenant ??= Tenant::firstOrCreate(['slug' => 'sole'], ['name' => 'Sole']);

        $registrar = app(PermissionRegistrar::class);
        $registrar->setPermissionsTeamId($tenant->getKey());

        return User::factory()->withAbilities($abilities)->create([
            'tenant_id' => $tenant->getKey(),
            'email_verified_at' => now(),
        ]);
    }

    /**
     * WITH TENANCY OFF, THE ABILITY IS THE WHOLE QUESTION.
     */
    public function test_a_single_tenant_installation_can_open_its_own_screens(): void
    {
        config(['panel.tenancy.mode' => TenantContext::MODE_NONE]);

        $this->assertTrue(
            $this->operator(['view_any_clients'])->can('viewAny', Client::class),
            'A single-tenant installation was refused its own resource.',
        );
    }

    /** And the ability still decides. Tenancy off is not authorisation off. */
    public function test_tenancy_off_does_not_mean_permissions_off(): void
    {
        config(['panel.tenancy.mode' => TenantContext::MODE_NONE]);

        $this->assertFalse(
            $this->operator(['view_any_routers'])->can('viewAny', Client::class),
            'Turning tenancy off granted an ability nobody holds.',
        );
    }

    /** A record is reachable too, not only the list. */
    public function test_a_record_is_viewable_with_tenancy_off(): void
    {
        config(['panel.tenancy.mode' => TenantContext::MODE_NONE]);

        $tenant = Tenant::create(['name' => 'Only', 'slug' => 'only-one']);

        $client = Client::withoutGlobalScopes()->forceCreate([
            'tenant_id' => $tenant->getKey(),
            'name' => 'Amina Achieng',
            'phone' => '+254700000001',
            'access_code' => 'SINGLE1',
            'status' => 'active',
            'plan_type' => 'pppoe',
            'expiry_date' => '2026-12-31',
        ]);

        $this->assertTrue(
            $this->operator(['view_any_clients', 'view_clients'])->can('view', $client),
        );
    }

    /* ---------------------------------------------- what must NOT change */

    /**
     * COLUMN MODE WITH NO TENANT STILL DENIES. This is the assertion that keeps
     * the fix from being a hole: an unresolved tenant in a multi-tenant panel is
     * a request that would otherwise read every organisation at once.
     */
    public function test_an_unresolved_tenant_still_denies_in_column_mode(): void
    {
        config([
            'panel.tenancy.mode' => TenantContext::MODE_COLUMN,
            'panel.tenancy.resolver' => fn () => null,
        ]);

        $this->assertFalse(
            $this->operator(['view_any_clients'])->can('viewAny', Client::class),
            'A multi-tenant panel served a resource with no tenant resolved.',
        );
    }

    /** AND ANOTHER ORGANISATION'S RECORD IS STILL REFUSED. */
    public function test_a_foreign_record_is_still_refused_in_column_mode(): void
    {
        $mine = Tenant::create(['name' => 'Acme', 'slug' => 'acme-single']);
        $theirs = Tenant::create(['name' => 'Rival', 'slug' => 'rival-single']);

        config([
            'panel.tenancy.mode' => TenantContext::MODE_COLUMN,
            'panel.tenancy.resolver' => fn () => $mine->getKey(),
        ]);

        $foreign = Client::withoutGlobalScopes()->forceCreate([
            'tenant_id' => $theirs->getKey(),
            'name' => 'Rival Customer',
            'phone' => '+254700000002',
            'access_code' => 'SINGLE2',
            'status' => 'active',
            'plan_type' => 'pppoe',
            'expiry_date' => '2026-12-31',
        ]);

        $this->assertFalse(
            $this->operator(['view_any_clients', 'view_clients'], $mine)->can('view', $foreign),
            'The single-tenant relaxation leaked another organisation\'s record.',
        );
    }
}
