<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\SuperadminUser;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use PanelKit\Panel\Models\ContentEntry;
use PanelKit\Panel\Models\Ticket;
use Tests\TestCase;

/**
 * The superadmin portal: central by design, and provably so.
 *
 * THE TWO-PORTAL TICKET STORY IS THE GATE the plan set: a ticket raised
 * against one tenant and a ticket raised against another are both visible in
 * ONE list here - which no tenant portal can do, and which is the entire
 * reason this portal runs in central context.
 */
final class SuperadminPanelTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $acme;

    private Tenant $rival;

    protected function setUp(): void
    {
        parent::setUp();

        $this->acme = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);
        $this->rival = Tenant::create(['name' => 'Rival', 'slug' => 'rival']);
    }

    /**
     * A SUPERADMIN, NOT AN OPERATOR, AND THAT CHANGED PART-WAY THROUGH.
     *
     * These tests used to sign in a `User` on `web` with abilities granted
     * through Spatie, because the portal ran on the operator guard and had no
     * front door of its own - which was the defect
     * `SuperadminPanelIsolationTest` now exists to prevent. The portal
     * authenticates its own table now, so the fixture had to move with it.
     *
     * THE ABILITY ARGUMENT SURVIVED THE MOVE ON PURPOSE. A superadmin whose
     * `hasPermission()` was blanket-true would make every `assertForbidden`
     * below unwritable, and the two tests that assert refusal are the ones
     * that prove the policies are wired at all.
     *
     * @param  list<string>  $abilities
     */
    private function superadmin(array $abilities): SuperadminUser
    {
        return SuperadminUser::create([
            'name' => 'Root',
            'email' => 'root'.SuperadminUser::query()->count().'@panel.test',
            'password' => 'password',
            'abilities' => $abilities,
        ]);
    }

    /** Signed in on the portal's own guard - see `superadmin()`. */
    private function actingAsSuperadmin(array $abilities): self
    {
        return $this->actingAs($this->superadmin($abilities), 'superadmins');
    }

    public function test_tickets_from_two_tenants_appear_in_one_list(): void
    {
        $opener = User::factory()->roleless()
            ->create(['tenant_id' => $this->acme->id, 'email_verified_at' => now()]);

        foreach ([[$this->acme, 'Acme cannot print invoices'], [$this->rival, 'Rival lost their logo']] as [$tenant, $subject]) {
            Ticket::withoutEvents(fn () => Ticket::query()->forceCreate([
                'tenant_id' => $tenant->id,
                'opened_by' => $opener->id,
                'subject' => $subject,
                'status' => 'open',
                'priority' => 'normal',
            ]));
        }

        $records = $this->actingAsSuperadmin(['view_any_all_tickets'])
            ->get('/superadmin/all-tickets')->assertOk()
            ->viewData('page')['props']['records'];

        $subjects = array_column($records, 'subject');

        $this->assertContains('Acme cannot print invoices', $subjects);
        $this->assertContains(
            'Rival lost their logo',
            $subjects,
            'The desk must see ANOTHER tenant\'s ticket - that is what makes it a desk.',
        );
    }

    public function test_the_list_is_refused_without_the_ability(): void
    {
        $this->actingAsSuperadmin([])
            ->get('/superadmin/all-tickets')
            ->assertForbidden();
    }

    public function test_content_is_created_through_the_portal_and_renders_on_faq(): void
    {
        $editor = $this->superadmin([
            'view_any_content_entries',
            'view_content_entries',
            'create_content_entries',
        ]);

        $this->actingAs($editor, 'superadmins')->post('/superadmin/content-entries', [
            'kind' => ContentEntry::KIND_FAQ,
            'category' => 'Superadmin',
            'title' => 'Written from the portal?',
            'body' => 'Yes - no deploy involved.',
            'sort' => 1,
            'published' => true,
        ])->assertRedirect();

        $this->assertDatabaseHas('panel_content_entries', ['title' => 'Written from the portal?']);

        /*
         * And the row a superadmin wrote is what a TENANT portal reads - the
         * full loop, not just the insert.
         *
         * READ BY AN OPERATOR, WHICH IS NOW THE ONLY WAY TO READ IT. The
         * superadmin who wrote the row cannot open `/faq` at all: that screen
         * belongs to a panel on the `web` guard, and this account holds no
         * session there. Two accounts is what makes this the full loop rather
         * than one session talking to itself.
         */
        $reader = User::factory()
            ->create(['tenant_id' => $this->acme->id, 'email_verified_at' => now()]);

        /*
         * `'web'` NAMED EXPLICITLY. `actingAs` sets the DEFAULT guard as a
         * side effect, so the superadmin sign-in above left it pointing at
         * `superadmins` - and this operator, handed to that guard, is nobody.
         * A test with two guards has to say which one it means every time.
         */
        $groups = $this->actingAs($reader, 'web')->get('/faq')->assertOk()
            ->viewData('page')['props']['groups'];

        $this->assertNotNull(collect($groups)->firstWhere('title', 'Superadmin'));
    }

    /**
     * THE LIST RENDERS WITH ROWS IN IT, which is a different code path from
     * the empty one and the only one that asks the policy about actions.
     *
     * A row on screen makes the panel ask "may update be offered", with no
     * record in hand - and a policy declaring a required record answers that
     * with an ArgumentCountError. Permissions perfectly correct, screen 500.
     * Every assertion here passed against an EMPTY list while the real screen
     * was broken, which is the whole reason this test exists.
     */
    public function test_the_content_list_renders_with_rows_present(): void
    {
        ContentEntry::create([
            'kind' => ContentEntry::KIND_FAQ,
            'category' => 'Billing',
            'title' => 'Does the list render?',
            'body' => 'It must.',
        ]);

        $records = $this->actingAsSuperadmin([
            'view_any_content_entries',
            'view_content_entries',
            'update_content_entries',
            'delete_content_entries',
        ])->get('/superadmin/content-entries')->assertOk()
            ->viewData('page')['props']['records'];

        $this->assertSame(['Does the list render?'], array_column($records, 'title'));
    }

    public function test_editing_content_is_refused_without_the_ability(): void
    {
        $this->actingAsSuperadmin([])
            ->post('/superadmin/content-entries', [
                'kind' => ContentEntry::KIND_FAQ,
                'title' => 'Should never exist',
            ])
            ->assertForbidden();

        $this->assertDatabaseMissing('panel_content_entries', ['title' => 'Should never exist']);
    }
}
