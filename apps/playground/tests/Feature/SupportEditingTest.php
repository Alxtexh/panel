<?php

declare(strict_types=1);

namespace Tests\Feature;

use Alxtexh\Panel\Models\ContentEntry;
use App\Models\SuperadminUser;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Http;
use Tests\TestCase;

/**
 * Same-page Help / FAQ / What's new / About editing.
 *
 * Opted in on the tenant ISP panel (`/help`) and the superadmin portal
 * (`/superadmin/help`). Client and reseller stay read-only. The button still
 * requires `support.update` (Administrator `grants_all` covers named extras).
 */
final class SupportEditingTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenant;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenant = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);
    }

    /** @param  list<string>  $abilities */
    private function superadmin(array $abilities): SuperadminUser
    {
        return SuperadminUser::create([
            'name' => 'Root',
            'email' => 'root'.SuperadminUser::query()->count().'@panel.test',
            'password' => 'password',
            'abilities' => $abilities,
        ]);
    }

    private function operator(): User
    {
        return User::factory()->create([
            'tenant_id' => $this->tenant->id,
            'email_verified_at' => now(),
        ]);
    }

    public function test_the_tenant_help_page_is_readable_without_edit(): void
    {
        $viewer = User::factory()->withAbilities(['view_any_clients'])->create([
            'tenant_id' => $this->tenant->id,
            'email_verified_at' => now(),
        ]);

        $props = $this->actingAs($viewer, 'web')->get('/help')->assertOk()
            ->viewData('page')['props'];

        $this->assertTrue(empty($props['support']['canEdit'] ?? null));
    }

    public function test_tenant_administrator_can_edit_on_the_same_page(): void
    {
        $props = $this->actingAs($this->operator(), 'web')->get('/help')->assertOk()
            ->viewData('page')['props'];

        $this->assertTrue($props['support']['canEdit'] ?? false);
        $this->assertSame(ContentEntry::KIND_ARTICLE, $props['support']['kind']);
        $this->assertNotEmpty($props['support']['saveUrl'] ?? null);
    }

    public function test_superadmin_with_the_ability_can_edit_on_the_same_page(): void
    {
        $editor = $this->superadmin(['support.update']);

        $props = $this->actingAs($editor, 'superadmins')->get('/superadmin/help')->assertOk()
            ->viewData('page')['props'];

        $this->assertTrue($props['support']['canEdit'] ?? false);
        $this->assertSame(ContentEntry::KIND_ARTICLE, $props['support']['kind']);
    }

    public function test_superadmin_without_the_ability_does_not_get_edit(): void
    {
        $viewer = $this->superadmin([]);

        $props = $this->actingAs($viewer, 'superadmins')->get('/superadmin/faq')->assertOk()
            ->viewData('page')['props'];

        $this->assertTrue(empty($props['support']['canEdit'] ?? null));

        $this->actingAs($viewer, 'superadmins')->put('/superadmin/support/contents', [
            'kind' => ContentEntry::KIND_FAQ,
            'entries' => [['title' => 'Nope?', 'body' => 'No.', 'category' => 'X']],
        ])->assertForbidden();
    }

    public function test_tenant_write_route_is_forbidden_without_the_ability(): void
    {
        $viewer = User::factory()->withAbilities(['view_any_clients'])->create([
            'tenant_id' => $this->tenant->id,
            'email_verified_at' => now(),
        ]);

        $this->actingAs($viewer, 'web')
            ->put('/support/contents', [
                'kind' => ContentEntry::KIND_FAQ,
                'entries' => [],
            ])
            ->assertForbidden();
    }

    public function test_tenant_administrator_can_save_faq_on_the_same_page(): void
    {
        $this->actingAs($this->operator(), 'web')->put('/support/contents', [
            'kind' => ContentEntry::KIND_FAQ,
            'entries' => [[
                'title' => 'Can I edit this on the tenant page?',
                'body' => 'Yes, with support.update.',
                'category' => 'Editing',
                'published' => true,
            ]],
        ])->assertRedirect();

        $groups = $this->actingAs($this->operator(), 'web')->get('/faq')->assertOk()
            ->viewData('page')['props']['groups'];

        $this->assertNotNull(collect($groups)->firstWhere('title', 'Editing'));
    }

    public function test_saving_faq_on_superadmin_renders_on_the_tenant_portal(): void
    {
        $editor = $this->superadmin(['support.update']);

        $this->actingAs($editor, 'superadmins')->put('/superadmin/support/contents', [
            'kind' => ContentEntry::KIND_FAQ,
            'entries' => [[
                'title' => 'Can I edit this on the page?',
                'body' => 'Yes, from superadmin.',
                'category' => 'Editing',
                'published' => true,
            ]],
        ])->assertRedirect();

        $groups = $this->actingAs($this->operator(), 'web')->get('/faq')->assertOk()
            ->viewData('page')['props']['groups'];

        $this->assertNotNull(collect($groups)->firstWhere('title', 'Editing'));
    }

    public function test_saving_about_adds_an_extra_without_replacing_packaged_copy(): void
    {
        $editor = $this->superadmin(['support.update']);

        $before = $this->actingAs($this->operator(), 'web')->get('/about')->assertOk()
            ->viewData('page')['props'];

        $this->actingAs($editor, 'superadmins')->put('/superadmin/support/contents', [
            'kind' => ContentEntry::KIND_ABOUT,
            'entries' => [[
                'title' => 'Office hours',
                'body' => 'Weekdays 9 to 5.',
                'published' => true,
            ]],
        ])->assertRedirect();

        $props = $this->actingAs($this->operator(), 'web')->get('/about')->assertOk()
            ->viewData('page')['props'];

        $this->assertSame($before['name'], $props['name']);
        $this->assertSame($before['description'], $props['description']);
        $this->assertSame('Office hours', $props['extras'][0]['title'] ?? null);
        $this->assertSame('Weekdays 9 to 5.', $props['extras'][0]['body'] ?? null);
    }

    public function test_saving_faq_keeps_packaged_questions(): void
    {
        $this->actingAs($this->operator(), 'web')->put('/support/contents', [
            'kind' => ContentEntry::KIND_FAQ,
            'entries' => [[
                'title' => 'Can I add a question?',
                'body' => 'Yes. Packaged answers stay.',
                'category' => 'Additions',
                'published' => true,
            ]],
        ])->assertRedirect();

        $groups = $this->actingAs($this->operator(), 'web')->get('/faq')->assertOk()
            ->viewData('page')['props']['groups'];

        $this->assertNotNull(collect($groups)->firstWhere('title', 'Using the panel'));
        $this->assertNotNull(collect($groups)->firstWhere('title', 'Additions'));
    }

    public function test_github_sync_imports_missing_releases_and_keeps_local_rows_on_failure(): void
    {
        ContentEntry::create([
            'kind' => ContentEntry::KIND_RELEASE,
            'category' => '1 August 2026',
            'title' => '1.0.0',
            'body' => 'Kept locally.',
        ]);

        Http::fake([
            'api.github.com/*' => Http::response([
                [
                    'tag_name' => 'v1.2.0',
                    'published_at' => '2026-08-10T00:00:00Z',
                    'name' => 'Panel 1.2.0',
                    'body' => 'From GitHub.',
                ],
                [
                    'tag_name' => 'v1.0.15',
                    'published_at' => '2026-08-17T00:00:00Z',
                    'name' => 'Restore of v1.0.9',
                    'body' => 'Must not appear as newer product.',
                ],
            ], 200),
        ]);

        $editor = $this->superadmin(['support.update']);

        $this->actingAs($editor, 'superadmins')
            ->post('/superadmin/support/contents/github')
            ->assertRedirect();

        $this->assertDatabaseHas('panel_content_entries', ['title' => '1.2.0']);
        $this->assertDatabaseHas('panel_content_entries', ['title' => '1.0.0']);
        $this->assertDatabaseMissing('panel_content_entries', ['title' => '1.0.15']);

        Http::fake(['api.github.com/*' => Http::response('nope', 500)]);

        $this->actingAs($editor, 'superadmins')
            ->post('/superadmin/support/contents/github')
            ->assertRedirect();

        $this->assertDatabaseHas('panel_content_entries', ['title' => '1.0.0']);
        $this->assertDatabaseHas('panel_content_entries', ['title' => '1.2.0']);
    }

    public function test_whats_new_is_editable_on_superadmin_even_when_empty(): void
    {
        $editor = $this->superadmin(['support.update']);

        $props = $this->actingAs($editor, 'superadmins')->get('/superadmin/whats-new')->assertOk()
            ->viewData('page')['props'];

        $this->assertTrue($props['support']['canEdit'] ?? false);
        $this->assertNotEmpty($props['support']['githubUrl'] ?? null);
    }
}
