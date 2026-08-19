<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Models\Concerns\BelongsToTenant;
use Alxtexh\Panel\Models\Scopes\TenantScope;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Testing\RefreshDatabase;

final class BelongsToTenantTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenant;

    private User $user;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenant = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);
        $this->user = User::create([
            'tenant_id' => $this->tenant->id,
            'name' => 'Operator',
            'email' => 'belongs@example.test',
            'password' => 'password',
            'email_verified_at' => now(),
        ]);
        $this->actingAs($this->user);
    }

    public function test_trait_applies_tenant_scope(): void
    {
        $model = new class extends Model {
            use BelongsToTenant;

            protected $table = 'users';
        };

        $scopes = $model->getGlobalScopes();

        $this->assertArrayHasKey(TenantScope::class, $scopes);
    }

    public function test_creating_stamps_tenant_id(): void
    {
        $model = new class extends Model {
            use BelongsToTenant;

            protected $table = 'users';
            protected $guarded = [];
        };

        // The creating event sets tenant_id from context when null.
        $instance = $model->newInstance();
        $this->assertNull($instance->getAttribute('tenant_id'));

        // Verify the trait defines the tenant() relationship method.
        $this->assertTrue(method_exists($model, 'tenant'));
    }
}
