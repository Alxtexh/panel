<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Http\PanelRoutes;
use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Schema;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

/**
 * The starter recipe's index is a real screen: 200, empty table, kit Vue.
 */
final class RecipeInvoicesTest extends TestCase
{
    use RefreshDatabase;

    /** @var list<string> */
    private array $written = [];

    protected function tearDown(): void
    {
        foreach ($this->written as $path) {
            if (is_file($path)) {
                unlink($path);
            }
        }

        parent::tearDown();
    }

    public function test_a_user_who_can_view_any_sees_an_empty_invoices_table(): void
    {
        $this->writeRecipe();
        $this->createInvoicesTable();
        $this->bootRecipe();

        $tenant = Tenant::create(['name' => 'Mine', 'slug' => 'mine']);
        $user = User::create([
            'tenant_id' => $tenant->id,
            'name' => 'Operator',
            'email' => 'operator@example.test',
            'password' => 'password',
            'email_verified_at' => now(),
        ]);

        $role = Role::findOrCreate('reader', 'web');
        $role->givePermissionTo(Permission::findOrCreate('view_any_invoices', 'web'));
        $user->assignRole($role);

        $this->actingAs($user->fresh())
            ->get('/invoices')
            ->assertOk()
            ->assertInertia(fn ($page) => $page
                ->component('ResourceIndex')
                ->has('records', 0));
    }

    private function writeRecipe(): void
    {
        $resource = app_path('Panel/Resources/InvoiceResource.php');
        $model = app_path('Models/Invoice.php');
        $policy = app_path('Policies/InvoicePolicy.php');
        $docs = base_path('docs/recipes/01-invoices.md');

        foreach ([$resource, $model, $policy, $docs] as $path) {
            $this->written[] = $path;
            @unlink($path);
        }

        $directory = database_path('migrations');

        if (is_dir($directory)) {
            foreach (File::files($directory) as $file) {
                if (str_contains($file->getFilename(), 'create_invoices_table')) {
                    $this->written[] = $file->getPathname();
                    @unlink($file->getPathname());
                }
            }
        }

        $this->artisan('make:panel-recipe', ['name' => 'Invoices', '--force' => true])
            ->assertSuccessful();

        $directory = database_path('migrations');

        if (is_dir($directory)) {
            foreach (File::files($directory) as $file) {
                if (str_contains($file->getFilename(), 'create_invoices_table')) {
                    $this->written[] = $file->getPathname();
                }
            }
        }

        $this->assertFileExists($resource);
        $this->assertSame(app_path('Panel/Resources/InvoiceResource.php'), $resource);
    }

    private function createInvoicesTable(): void
    {
        if (Schema::hasTable('invoices')) {
            return;
        }
        Schema::create('invoices', function ($table): void {
            $table->id();
            $table->unsignedBigInteger('tenant_id')->nullable()->index();
            $table->string('number');
            $table->string('status')->default('draft');
            $table->decimal('total', 12, 2)->default(0);
            $table->date('dated_at')->nullable();
            $table->timestamps();
        });
    }

    private function bootRecipe(): void
    {
        $model = app_path('Models/Invoice.php');
        $resource = app_path('Panel/Resources/InvoiceResource.php');
        $policy = app_path('Policies/InvoicePolicy.php');

        require_once $model;
        require_once $policy;
        require_once $resource;

        Gate::policy(\App\Models\Invoice::class, \App\Policies\InvoicePolicy::class);

        $panels = app(PanelManager::class);
        $panels->registerResources([\App\Panel\Resources\InvoiceResource::class], 'admin');

        PanelRoutes::register($panels->panel('admin'));
    }
}
