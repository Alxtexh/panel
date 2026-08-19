<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Support\Blueprint;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Support\Facades\File;

/**
 * The official starter recipe writes one SaaS resource, not a widget dump.
 */
final class MakeRecipeCommandTest extends TestCase
{
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

    public function test_it_writes_the_invoice_resource_into_the_discovery_path(): void
    {
        $resource = app_path('Panel/Resources/InvoiceResource.php');
        $model = app_path('Models/Invoice.php');
        $policy = app_path('Policies/InvoicePolicy.php');
        $docs = base_path('docs/recipes/01-invoices.md');
        $this->forget($resource, $model, $policy, $docs);
        $this->forgetMigrations('invoices');

        $this->artisan('make:panel-recipe', ['name' => 'Invoices', '--force' => true])
            ->assertSuccessful();

        $this->forgetMigrations('invoices');

        $this->assertFileExists($resource);
        $this->assertFileExists($model);
        $this->assertFileExists($policy);
        $this->assertFileExists($docs);

        $contents = File::get($resource);

        $this->assertStringContainsString('namespace App\\Panel\\Resources', $contents);
        $this->assertStringContainsString('final class InvoiceResource extends Resource', $contents);
        $this->assertStringContainsString("TextField::make('number')", $contents);
        $this->assertStringContainsString("SelectField::make('status')", $contents);
        $this->assertStringContainsString("NumberField::make('total')", $contents);
        $this->assertStringContainsString("DateField::make('dated_at')", $contents);
        $this->assertStringContainsString("->apps(['billing-portal'])", $contents);
        $this->assertStringContainsString('billingState()', $contents);
        $this->assertStringContainsString('ResourceIndex', $contents);
        $this->assertStringNotContainsString('Livewire', $contents);
        $this->assertStringNotContainsString('Stripe', $contents);
        $this->assertStringNotContainsString('Router', $contents);
        $this->assertStringNotContainsString('—', $contents);
        $this->assertStringNotContainsString('–', $contents);

        $this->assertFileDoesNotExist(resource_path('js/pages/Invoice.vue'));
        $this->assertFileDoesNotExist(resource_path('js/pages/Invoices.vue'));
        $this->assertFileDoesNotExist(resource_path('js/Pages/Invoice.vue'));
    }

    public function test_the_panel_recipe_alias_writes_the_same_resource(): void
    {
        $resource = app_path('Panel/Resources/InvoiceResource.php');
        $this->forget($resource);
        $this->forget(app_path('Models/Invoice.php'));
        $this->forget(app_path('Policies/InvoicePolicy.php'));
        $this->forget(base_path('docs/recipes/01-invoices.md'));
        $this->forgetMigrations('invoices');

        $this->artisan('panel:recipe', ['name' => 'invoices', '--force' => true])
            ->assertSuccessful();

        $this->forgetMigrations('invoices');

        $this->assertFileExists($resource);
        $this->assertStringContainsString('InvoiceResource', File::get($resource));
    }

    public function test_it_does_not_seed_rows_by_default(): void
    {
        $source = (string) file_get_contents(dirname(__DIR__, 2).'/src/Commands/MakeRecipeCommand.php');

        $this->assertStringContainsString('{--seed', $source);
        $this->assertStringContainsString('empty canvas', $source);
        $this->assertStringContainsString('Rows: none', $source);
    }

    public function test_the_blueprint_names_the_starter_recipe(): void
    {
        $markdown = Blueprint::markdown();

        $this->assertStringContainsString('make:panel-recipe', $markdown);
        $this->assertStringContainsString('panel:recipe', $markdown);
        $this->assertStringContainsString('Official starter', $markdown);
    }

    public function test_install_points_at_the_recipe_after_get_started(): void
    {
        $install = (string) file_get_contents(
            dirname(__DIR__, 2).'/src/Commands/InstallCommand.php'
        );

        $this->assertStringContainsString('make:panel-recipe Invoices', $install);
        $this->assertStringContainsString('Get started card', $install);
    }

    private function forget(string ...$paths): void
    {
        foreach ($paths as $path) {
            $this->written[] = $path;
            @unlink($path);
        }
    }

    private function forgetMigrations(string $table): void
    {
        $directory = database_path('migrations');

        if (! is_dir($directory)) {
            return;
        }

        foreach (File::files($directory) as $file) {
            if (str_contains($file->getFilename(), "create_{$table}_table")) {
                $this->forget($file->getPathname());
            }
        }
    }
}
