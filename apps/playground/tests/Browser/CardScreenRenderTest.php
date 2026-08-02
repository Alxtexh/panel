<?php

declare(strict_types=1);

namespace Tests\Browser;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseTruncation;
use Laravel\Dusk\Browser;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;
use Tests\DuskTestCase;

/**
 * `PkCard` draws, on a real screen, in a real browser.
 *
 * WHY THIS EXISTS RATHER THAN A UNIT TEST. `PkCard.spec.ts` mounts the
 * component in jsdom and proves its contract; the production build proves it
 * compiles. NEITHER PROVES THE PAGE STILL LOOKS RIGHT after four hand-written
 * sections were replaced by it - a slot named wrongly renders nothing at all,
 * silently, and every other check in this repository would still pass.
 *
 * BACKUP SETTINGS IS THE SCREEN THAT WAS CONVERTED, so it is the screen that is
 * asserted. The four headings below were in the hand-rolled markup and are now
 * inside `#header`; the hint text on the right was a bare span and is now
 * `#actions`. If either slot stopped rendering, this is what would say so.
 */
final class CardScreenRenderTest extends DuskTestCase
{
    use DatabaseTruncation;

    private int|string|null $operatorId = null;

    /**
     * An operator who may see the screen.
     *
     * A ROLE IS GRANTED because the panel denies any ability whose model has no
     * grant, and the team is set first because roles are team-scoped by
     * `tenant_id` from a registrar that a request populates and a test does not.
     */
    private function seedOperator(): void
    {
        $tenant = Tenant::create(['name' => 'Lakeside Fibre', 'slug' => 'lakeside-cards']);

        $user = User::factory()->create([
            'tenant_id' => $tenant->id,
            'email_verified_at' => now(),
        ]);

        $registrar = app(PermissionRegistrar::class);
        $previous = $registrar->getPermissionsTeamId();
        $registrar->setPermissionsTeamId($tenant->id);

        try {
            $user->assignRole(Role::findOrCreate('Administrator', 'web'));
        } finally {
            $registrar->setPermissionsTeamId($previous);
        }

        $this->operatorId = $user->getKey();
    }

    public function test_the_converted_cards_render_their_headers_and_bodies(): void
    {
        $this->seedOperator();

        $this->browse(function (Browser $browser): void {
            $browser->loginAs($this->operatorId)
                ->visit('/operations/backups/settings')
                ->waitForText('Schedule', 15)

                // The four headings, each now inside PkCard's `#header` slot.
                ->assertSee('Schedule')
                ->assertSee('Retention')
                ->assertSee('Destination')

                // The right-hand hint, which is the `#actions` slot. It renders
                // in a different element from the heading, so a slot collapsing
                // into the other would still show one and lose this.
                ->assertSee('when it runs')

                /*
                 * THE CARD ELEMENT ITSELF. `PkCard` renders a <section> with
                 * the shared shape, so this is what distinguishes "the page
                 * still works" from "the page still works and is using the
                 * component" - the second being the thing under test.
                 */
                ->assertPresent('section.bg-card.rounded-lg.border')

                // And the body inside it: a control that lived in the
                // hand-rolled section and must still be reachable.
                ->assertPresent('select, input[type="number"]');

            $browser->screenshot('backup-settings-cards');
        });
    }
}
