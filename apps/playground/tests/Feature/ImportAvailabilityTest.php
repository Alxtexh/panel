<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Demo\Panel\Resources\ClientResource;
use App\Models\Tenant;
use App\Models\User;
use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Resources\Resource;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

/**
 * Which screens offer to take a spreadsheet, and which must not.
 *
 * IMPORT IS OPT-IN. It used to follow `isWritable()`, so every resource with a
 * form inherited a button - plans, routers, people, the lot. Creating one
 * record and importing a CSV are different acts; the default is no Import.
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

        $this->admin = User::factory()->create([
            'tenant_id' => $tenant->id,
            'email_verified_at' => now(),
        ]);
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

    public function test_plans_and_routers_do_not_offer_import_by_default(): void
    {
        $this->assertFalse(
            $this->offersImport('/plans'),
            'Plans have a form, which used to be enough to grow an Import button.',
        );
        $this->assertFalse(
            $this->offersImport('/routers'),
            'Routers have a form, which used to be enough to grow an Import button.',
        );
    }

    /**
     * THE DECLARATION, ACROSS EVERY REGISTERED RESOURCE.
     *
     * The list page is the symptom; this is the cause. A new ISP resource with
     * a form must not inherit Import because nobody remembered to opt out.
     */
    public function test_only_resources_that_opt_in_declare_importable(): void
    {
        $allowed = [ClientResource::class];
        $wrong = [];

        foreach ($this->everyResource() as $class) {
            if ($class::importable() && ! in_array($class, $allowed, true)) {
                $wrong[] = $class;
            }
        }

        $this->assertSame(
            [],
            $wrong,
            "These resources advertise Import without opting in on purpose:\n"
            .implode("\n", $wrong)."\n"
            .'Return true from importable() only on screens that should take a CSV.',
        );
    }

    public function test_a_resource_that_did_not_opt_in_cannot_hit_the_import_endpoint(): void
    {
        $this->actingAs($this->admin)
            ->post('/plans/import', [
                'file' => \Illuminate\Http\UploadedFile::fake()->create('plans.csv', 1, 'text/csv'),
                'mapping' => ['Name' => 'name'],
            ])
            ->assertNotFound();
    }

    /** @return list<class-string<Resource>> */
    private function everyResource(): array
    {
        $manager = app(PanelManager::class);
        $classes = [];

        foreach (array_keys($manager->panels()) as $panelId) {
            foreach ($manager->resourcesFor($panelId) as $class) {
                $classes[$class] = $class;
            }
        }

        return array_values($classes);
    }
}
