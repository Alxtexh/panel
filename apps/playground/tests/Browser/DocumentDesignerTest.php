<?php

declare(strict_types=1);

namespace Tests\Browser;

use App\Demo\Models\Client;
use App\Models\Plan;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseTruncation;
use Laravel\Dusk\Browser;
use Alxtexh\Panel\Documents\DocumentTemplate;
use Alxtexh\Panel\Documents\Kinds\VoucherKind;
use Tests\DuskTestCase;

/**
 * The document designer, in a real browser.
 *
 * THESE ARE THE TWO BUGS THAT MOTIVATED BROWSER TESTS, written down as tests.
 *
 * The first: the designer bound `@update:model-value` on a component that emits
 * `@change`. It type-checked, it built, clicking an option flipped the radio and
 * the DOM reported `checked` - and the form never heard about it. Every server
 * test passed, because the server was never asked.
 *
 * The second: an invoice rendered a quantity, a unit price and an amount as
 * `1100,000.00100,000.00`, because right-aligned cells had no horizontal
 * padding. No assertion about data could have caught it; the payload was
 * perfect.
 *
 * WHAT A BROWSER TEST IS FOR, therefore, is not "does the endpoint work" - 21
 * feature tests already answer that. It is the gap between a correct payload and
 * a correct screen.
 */
final class DocumentDesignerTest extends DuskTestCase
{
    /*
     * EVERY INITIAL PAGE WAIT IS 15 SECONDS, NOT DUSK'S DEFAULT 5.
     *
     * The first test in a class pays for a cold browser, a cold opcache and a
     * cold route cache all at once, and 5 seconds is tight for exactly that and
     * generous for everything after it. A suite that fails once in ten runs on
     * the first test teaches people to re-run rather than to read, which is
     * worse than a slower suite.
     */
    /*
     * TRUNCATION, NOT MIGRATION, and for two reasons.
     *
     * `DatabaseMigrations` runs `migrate:fresh` before every test and
     * `migrate:rollback` after it - which on this schema fails, because one
     * migration's `down()` drops a column SQLite cannot drop while an index
     * still references it. The rollback is not something a browser test needs to
     * exercise, and a suite that fails in teardown reports the wrong problem.
     *
     * It is also the difference between seconds and minutes: the schema is
     * migrated ONCE by `scripts/dusk.sh` and each test just empties the tables.
     */
    use DatabaseTruncation;

    private int|string|null $operatorId = null;

    private int|string|null $subscriberId = null;

    private function operator(): User
    {
        $tenant = Tenant::create(['name' => 'Lakeside Fibre', 'slug' => 'lakeside']);

        $user = User::factory()->create([
            'tenant_id' => $tenant->id,
            'email_verified_at' => now(),
        ]);

        $this->operatorId = $user->getKey();

        return $user;
    }

    /**
     * A subscriber whose invoice carries six-figure amounts.
     *
     * THE POINT IS THE WIDTH OF THE NUMBERS. `2,500.00` leaves the columns room
     * to breathe whatever the padding; `100,000.00` in three adjacent
     * right-aligned cells is what collided. A regression test for a layout bug
     * has to recreate the geometry, not just the screen.
     */
    private function expensiveSubscriber(int|string $tenantId): void
    {
        $unique = uniqid('b', true);

        // `forceCreate`: `tenant_id` is guarded on these models, so a plain
        // create omits it and the insert fails on the NOT NULL.
        $plan = Plan::withoutGlobalScopes()->forceCreate([
            'tenant_id' => $tenantId,
            'name' => '100Mbps Home',
            'speed_mbps' => 100,
            'price_cents' => 10_000_000,
            'position' => 1,
            'is_active' => true,
        ]);

        $client = Client::withoutGlobalScopes()->forceCreate([
            'tenant_id' => $tenantId,
            'plan_id' => $plan->id,
            'name' => 'Teresa Tembo',
            'phone' => '+254'.substr((string) crc32($unique), 0, 9),
            'access_code' => strtoupper(substr(md5($unique), 0, 10)),
            'plan_type' => 'pppoe',
            'status' => 'active',
            'expiry_date' => '2026-12-31',
        ]);

        $this->subscriberId = $client->getKey();
    }

    /**
     * THE FIRST BUG, as a test.
     *
     * Clicking a framing must reach the form, the server, and the preview. The
     * old wiring passed every step except the first, so the assertion that
     * matters is on the PREVIEW - the far end of the round trip - rather than on
     * the radio's checked state, which was correct while the feature was broken.
     */
    public function test_choosing_a_framing_updates_the_preview(): void
    {
        $this->browse(function (Browser $browser): void {
            $browser->loginAs($this->operator())
                ->visit('/documents/voucher')
                ->waitForText('Voucher template', 15)

                // The preview starts on the default framing, which is dashed.
                ->waitFor('@document')
                ->assertPresent('@document .border-dashed')

                // The label wraps the visually-hidden radio, so clicking the
                // label is what a person does and what the browser records.
                ->click('label:has(input[name="f-code_style"][value="pill"])')

                /*
                 * WAITED FOR, not asserted immediately. The preview is a
                 * debounced round trip to the server; asserting straight after
                 * the click would test the click and nothing else, and would
                 * pass while the wiring was broken, because the tile's own
                 * selected state updates locally.
                 *
                 * A CSS SELECTOR, not `getAttribute('innerHTML')`. Selenium's
                 * `getAttribute` reads an ATTRIBUTE and `innerHTML` is only a
                 * property, so it returns null - and a null coalesced to `''`
                 * never contains anything, which failed this test while the
                 * screenshot showed a perfectly good pill.
                 */
                ->waitFor('@document .rounded-full', 10)
                ->assertMissing('@document .border-dashed');
        });
    }

    /**
     * Typing a title reaches the document.
     *
     * The other half of the same wiring, through a text input rather than a
     * radio - a form that only propagated one of the two would look fine on
     * whichever half somebody happened to try.
     */
    public function test_typing_a_title_updates_the_preview(): void
    {
        $this->browse(function (Browser $browser): void {
            $browser->loginAs($this->operator())
                ->visit('/documents/voucher')
                ->waitForText('Voucher template', 15)
                ->waitFor('@document')
                ->type('#f-title', 'Hotspot voucher')
                ->waitForTextIn('@document', 'Hotspot voucher', 10);
        });
    }

    /**
     * THE SECOND BUG, as a test.
     *
     * Two things about this test were wrong before it caught anything, and both
     * are worth stating because they are the usual ways a regression test turns
     * out to be decorative.
     *
     * IT MEASURES TEXT, NOT CELLS. Adjacent table cells are contiguous by
     * definition and padding sits INSIDE the box, so comparing two `<td>` rects
     * reports 0px however much padding there is. The first version did that and
     * failed on a table that was fine.
     *
     * IT USES A SIX-FIGURE AMOUNT, against a real record. The first version used
     * the sample invoice, whose figures are `2,500.00` - narrow enough that the
     * columns never touch even with no padding at all. So it PASSED with the bug
     * deliberately reintroduced, which is the same as not existing. The collision
     * needs wide figures in a narrow preview column, which is exactly the
     * condition the real subscriber produced and invented data never will.
     */
    public function test_invoice_figures_do_not_touch_each_other(): void
    {
        $operator = $this->operator();
        $this->expensiveSubscriber($operator->tenant_id);

        $this->browse(function (Browser $browser): void {
            $browser->loginAs($this->operatorId)
                ->visit('/documents/invoice')
                ->waitForText('Invoice template', 15)
                ->waitFor('@document')

                // Preview against the real subscriber, not the sample.
                ->select('@preview-record', (string) $this->subscriberId)
                ->waitForTextIn('@document', '100,000.00', 10);

            $gaps = $browser->script(<<<'JS'
                const row = document.querySelector('[dusk="document"] table tbody tr');
                if (!row) return null;

                /*
                 * A `Range` over each cell's text gives the bounds of what is
                 * actually PAINTED - the thing that ran together on screen -
                 * rather than the cell that contains it.
                 */
                const textBox = (cell) => {
                    const walker = document.createTreeWalker(cell, NodeFilter.SHOW_TEXT);
                    let node = null, last = null;
                    while ((node = walker.nextNode())) {
                        if (node.textContent.trim() !== '') last = node;
                    }
                    if (!last) return null;

                    const range = document.createRange();
                    range.selectNodeContents(last);
                    return range.getBoundingClientRect();
                };

                const boxes = [...row.querySelectorAll('td')].map(textBox).filter(Boolean);

                return boxes.slice(1).map((box, i) => Math.round(box.left - boxes[i].right));
            JS)[0];

            $this->assertIsArray($gaps, 'the invoice preview rendered no line-item row');
            $this->assertNotEmpty($gaps, 'the invoice preview rendered no line-item cells');

            foreach ($gaps as $index => $gap) {
                $this->assertGreaterThanOrEqual(
                    4,
                    $gap,
                    'Line-item figures '.$index.' and '.($index + 1).' are '.$gap.'px apart. '
                    .'Adjacent figures with no gap render as one number - this is the '
                    .'`1100,000.00100,000.00` bug.'
                );
            }
        });
    }

    /**
     * A SAVE ROUND TRIP, all the way through.
     *
     * Not because saving is subtle, but because the designer's save goes through
     * Inertia and a redirect - and a redirect that loses the form, or a success
     * toast that fires on a failed request, are both things only a browser sees.
     */
    public function test_saving_a_template_persists_and_reports_a_version(): void
    {
        $this->browse(function (Browser $browser): void {
            $browser->loginAs($this->operator())
                ->visit('/documents/voucher')
                ->waitForText('Voucher template', 15)
                ->assertSee('Still on the shipped defaults')
                ->type('#f-title', 'Wi-Fi voucher')
                ->press('Save template')
                ->waitForText('Version 1', 10)
                ->assertDontSee('Still on the shipped defaults');
        });

        /*
         * `first()` rather than `value('settings')`. `value()` bypasses the model
         * and returns the raw JSON string, so indexing it would be a string
         * offset - which is a confusing failure about array-to-string
         * conversion rather than about the template.
         */
        $saved = DocumentTemplate::withoutGlobalScope('tenant')
            ->where('kind', 'voucher')
            ->first();

        $this->assertNotNull($saved, 'the save produced no template row');
        $this->assertSame('Wi-Fi voucher', $saved->settings['title']);
    }

    /**
     * The segmented colour control repaints the document.
     *
     * `mono` is not a lighter accent - it is black. A control that merely dimmed
     * the colour would look plausible on screen and print a grey heading, and the
     * only place to check is a browser computing the style.
     */
    public function test_black_and_white_paints_the_document_black(): void
    {
        $this->browse(function (Browser $browser): void {
            $browser->loginAs($this->operator())
                ->visit('/documents/invoice')
                ->waitForText('Invoice template', 15)
                ->waitFor('@document')
                ->click('label:has(input[name="f-colour_mode"][value="mono"])')
                ->waitUsing(10, 250, fn (): bool => ($browser->script(
                    'return getComputedStyle(document.querySelector(\'[dusk="document"] h1\')).color'
                )[0] ?? '') === 'rgb(0, 0, 0)', 'the document heading to turn black');
        });
    }

    /**
     * Sample data is always labelled as sample data.
     *
     * The caption is the one thing standing between a preview and somebody
     * quoting an invented figure back at you, and it is a line of text a refactor
     * can silently drop.
     */
    public function test_the_preview_says_when_it_is_showing_sample_data(): void
    {
        $this->browse(function (Browser $browser): void {
            $browser->loginAs($this->operator())
                ->visit('/documents/voucher')
                ->waitForText('Voucher template', 15)
                ->waitForText('Sample data shown for layout only', 10);
        });
    }

    /**
     * The printable document renders, and stamps its version.
     *
     * A print route that renders a blank page is the exact failure mode of an SFC
     * with no template - which has happened in this codebase, type-checked and
     * built and shipped an empty comment node.
     */
    public function test_the_print_page_renders_the_document(): void
    {
        $this->browse(function (Browser $browser): void {
            $browser->loginAs($this->operator())
                ->visit('/documents/voucher')
                ->waitForText('Voucher template', 15)
                ->press('Save template')
                ->waitForText('Version 1', 10)
                ->visit('/documents/voucher/print')
                ->waitForText((new VoucherKind)->defaults()['title'], 10)
                ->assertSee('Template v1')
                ->assertSee('Lakeside Fibre');
        });
    }
}
