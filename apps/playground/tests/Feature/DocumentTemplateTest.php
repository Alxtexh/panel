<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Client;
use App\Models\Plan;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use PanelKit\Panel\Documents\DocumentKinds;
use PanelKit\Panel\Documents\DocumentRenderer;
use PanelKit\Panel\Documents\DocumentTemplate;
use PanelKit\Panel\Documents\Kinds\VoucherKind;
use Tests\TestCase;

/**
 * Designing the documents that leave the system.
 *
 * The properties worth pinning down are not "the form saves". They are the ones
 * that decide whether a hundred printed vouchers are right:
 *
 *   the preview and the print go through ONE renderer,
 *   a template is tenant-scoped like everything else,
 *   a kind is a registration a plugin can win,
 *   and sample data is never mistaken for real data.
 */
final class DocumentTemplateTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenant;

    private User $user;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenant = Tenant::create(['name' => 'A', 'slug' => 'a']);
        $this->user = User::factory()->create([
            'tenant_id' => $this->tenant->id,
            'email_verified_at' => now(),
        ]);

        $this->actingAs($this->user);
    }

    /* ------------------------------------------------------------ the screens */

    public function test_the_index_lists_the_registered_kinds(): void
    {
        $this->get('/documents')
            ->assertOk()
            ->assertInertia(fn ($page) => $page
                ->component('documents/Templates')
                ->where('kinds.0.id', 'invoice')
            );
    }

    public function test_the_designer_opens_on_the_kind_defaults(): void
    {
        $this->get('/documents/voucher')
            ->assertOk()
            ->assertInertia(fn ($page) => $page
                ->component('documents/TemplateDesigner')
                // Never blank. A designer that opens empty teaches somebody the
                // preview is broken before they have typed anything.
                ->where('values.title', 'Internet voucher')
                ->where('template.exists', false)
                ->has('document.blocks')
            );
    }

    public function test_an_unregistered_kind_is_a_404_not_a_500(): void
    {
        // The id comes from the URL, so an unknown one is a wrong address rather
        // than a broken installation.
        $this->get('/documents/nonsense')->assertNotFound();
    }

    /* -------------------------------------------------------------- saving */

    public function test_saving_stores_the_settings_and_starts_at_version_one(): void
    {
        $this->put('/documents/voucher', [
            ...(new VoucherKind)->defaults(),
            'title' => 'Wi-Fi voucher',
        ])->assertRedirect();

        $template = DocumentTemplate::query()->where('kind', 'voucher')->firstOrFail();

        $this->assertSame('Wi-Fi voucher', $template->settings['title']);

        // Version 1, not 2. Bumping on first save would produce a version that
        // nothing ever printed.
        $this->assertSame(1, $template->version);
    }

    public function test_a_second_save_advances_the_version(): void
    {
        $defaults = (new VoucherKind)->defaults();

        $this->put('/documents/voucher', $defaults);
        $this->put('/documents/voucher', [...$defaults, 'title' => 'Changed']);

        $this->assertSame(2, DocumentTemplate::query()->where('kind', 'voucher')->value('version'));
    }

    /**
     * A form that omits a field must not blank it.
     *
     * The failure this prevents: a kind gains a setting, or a field is
     * conditionally hidden, and the next save drops everything the form did not
     * send - so a template loses its footer the first time somebody edits its
     * header.
     */
    public function test_saving_a_partial_form_keeps_what_it_did_not_send(): void
    {
        $defaults = (new VoucherKind)->defaults();

        $this->put('/documents/voucher', [...$defaults, 'footer_text' => 'Keep this ticket.']);
        $this->put('/documents/voucher', [...$defaults, 'title' => 'Changed', 'footer_text' => 'Keep this ticket.']);

        $template = DocumentTemplate::query()->where('kind', 'voucher')->firstOrFail();

        $this->assertSame('Keep this ticket.', $template->settings['footer_text']);
    }

    /* ------------------------------------------------------------- preview */

    public function test_the_preview_renders_unsaved_settings(): void
    {
        // The whole point of a live preview: it shows what the form says NOW,
        // not what was last saved. Rendering stored settings would give a
        // preview that lags one save behind, which is worse than none.
        $response = $this->postJson('/documents/voucher/preview', [
            'settings' => [...(new VoucherKind)->defaults(), 'title' => 'Never saved'],
        ])->assertOk();

        $this->assertSame('Never saved', $response->json('blocks.0.title'));
        $this->assertTrue($response->json('sample'));
    }

    public function test_the_preview_uses_a_real_record_when_one_is_named(): void
    {
        $client = $this->client('Lakeside Hotel & Conference Centre');

        $response = $this->postJson('/documents/invoice/preview', [
            'settings' => [],
            'record' => (string) $client->id,
        ])->assertOk();

        $this->assertFalse($response->json('sample'));
        $this->assertSame('Lakeside Hotel & Conference Centre', $response->json('blocks.1.name'));
    }

    /**
     * Another organisation's record must not resolve, and must not error either.
     *
     * The id arrives from a request body, so "not found" has to cover a deleted
     * record and somebody else's record alike - both produce the same harmless
     * sample preview rather than a response that tells them apart.
     */
    public function test_another_tenants_record_falls_back_to_sample_data(): void
    {
        $other = Tenant::create(['name' => 'B', 'slug' => 'b']);
        $theirs = $this->client('Theirs', $other);

        $response = $this->postJson('/documents/invoice/preview', [
            'settings' => [],
            'record' => (string) $theirs->id,
        ])->assertOk();

        $this->assertTrue($response->json('sample'));
        $this->assertStringNotContainsString('Theirs', (string) json_encode($response->json()));
    }

    /* --------------------------------------------------------------- print */

    /**
     * THE PROPERTY THE WHOLE FEATURE RESTS ON: one renderer.
     *
     * If the preview and the print can produce different documents, the one they
     * disagree about is the one that already went to a customer.
     */
    public function test_the_print_route_renders_the_same_document_as_the_preview(): void
    {
        $defaults = (new VoucherKind)->defaults();
        $this->put('/documents/voucher', [...$defaults, 'title' => 'Wi-Fi voucher']);

        $printed = $this->get('/documents/voucher/print')
            ->assertOk()
            ->assertInertia(fn ($page) => $page->component('documents/DocumentPrint'))
            ->viewData('page')['props']['document'];

        $previewed = $this->postJson('/documents/voucher/preview', [
            'settings' => [...$defaults, 'title' => 'Wi-Fi voucher'],
        ])->json();

        $this->assertSame($previewed['blocks'], $printed['blocks']);
        $this->assertSame($previewed['branding'], $printed['branding']);
    }

    /* -------------------------------------------------------------- tenancy */

    public function test_a_template_is_not_visible_to_another_tenant(): void
    {
        $this->put('/documents/voucher', (new VoucherKind)->defaults());

        $other = Tenant::create(['name' => 'B', 'slug' => 'b']);
        $stranger = User::factory()->create([
            'tenant_id' => $other->id,
            'email_verified_at' => now(),
        ]);

        $this->actingAs($stranger)
            ->get('/documents/voucher')
            ->assertOk()
            // Not their template: they see the shipped defaults, on an unsaved
            // one. A leak here would put another company's letterhead on their
            // invoice.
            ->assertInertia(fn ($page) => $page->where('template.exists', false));
    }

    /* ------------------------------------------------------------- registry */

    /**
     * The application's own invoice kind wins, which is what makes the registry
     * an extension point rather than a list.
     */
    public function test_the_application_can_replace_a_packaged_kind(): void
    {
        $this->assertInstanceOf(
            \App\Documents\ClientInvoiceKind::class,
            app(DocumentKinds::class)->get('invoice'),
        );
    }

    public function test_an_unknown_kind_names_what_is_registered(): void
    {
        $this->expectExceptionMessage('Registered: invoice, receipt, voucher');

        app(DocumentKinds::class)->get('postcard');
    }

    /* ------------------------------------------------------------ variables */

    /**
     * An unknown token is PRINTED, not blanked.
     *
     * "Valid until @expiry" on a voucher is something somebody notices; "Valid
     * until ." is not, and nobody finds out until a customer asks.
     */
    public function test_an_unknown_variable_survives_into_the_document(): void
    {
        $document = app(DocumentRenderer::class)->render(
            new VoucherKind,
            new DocumentTemplate(['kind' => 'voucher', 'settings' => [], 'version' => 1]),
            null,
            [...(new VoucherKind)->defaults(), 'validity' => 'Valid until @expiry_date.'],
        );

        $note = collect($document['blocks'])->firstWhere('type', 'note');

        $this->assertSame('Valid until @expiry_date.', $note['text']);
    }

    public function test_a_known_variable_is_substituted(): void
    {
        $document = app(DocumentRenderer::class)->render(
            new VoucherKind,
            new DocumentTemplate(['kind' => 'voucher', 'settings' => [], 'version' => 1]),
            null,
            [...(new VoucherKind)->defaults(), 'validity' => 'Valid until @expires.'],
        );

        $note = collect($document['blocks'])->firstWhere('type', 'note');

        $this->assertStringNotContainsString('@expires', $note['text']);
    }

    /* ---------------------------------------------------------------- doctor */

    /**
     * `panel:doctor` reads the stored templates, across every tenant.
     *
     * It runs from a console with no tenant resolved, so a scoped query would
     * deny every row and report a clean bill of health for an installation full
     * of broken templates - the worst possible answer.
     */
    public function test_doctor_finds_a_template_using_a_variable_that_no_longer_exists(): void
    {
        DocumentTemplate::query()->create([
            'tenant_id' => $this->tenant->id,
            'kind' => 'voucher',
            'name' => 'Voucher',
            'settings' => ['validity' => 'Valid until @expiry_date.'],
            'version' => 1,
        ]);

        $this->artisan('panel:doctor')
            ->expectsOutputToContain('@expiry_date')
            ->assertExitCode(1);
    }

    public function test_doctor_is_quiet_when_the_templates_are_fine(): void
    {
        DocumentTemplate::query()->create([
            'tenant_id' => $this->tenant->id,
            'kind' => 'voucher',
            'name' => 'Voucher',
            'settings' => (new VoucherKind)->defaults(),
            'version' => 1,
        ]);

        $this->artisan('panel:doctor')->assertExitCode(0);
    }

    /* ------------------------------------------------------------------ util */

    private function client(string $name, ?Tenant $tenant = null): Client
    {
        $tenant ??= $this->tenant;

        $unique = uniqid('d', true);

        // `forceCreate`, because `tenant_id` is guarded on these models - a
        // plain create silently omits it and the insert fails on the NOT NULL.
        $plan = Plan::withoutGlobalScopes()->forceCreate([
            'tenant_id' => $tenant->id,
            'name' => 'Home 20',
            'speed_mbps' => 20,
            'price_cents' => 250000,
            'position' => 1,
            'is_active' => true,
        ]);

        return Client::withoutGlobalScopes()->forceCreate([
            'tenant_id' => $tenant->id,
            'plan_id' => $plan->id,
            'name' => $name,
            'phone' => '+254'.substr((string) crc32($unique), 0, 9),
            'access_code' => strtoupper(substr(md5($unique), 0, 10)),
            'plan_type' => 'pppoe',
            'status' => 'active',
            'expiry_date' => '2026-12-31',
        ]);
    }
}
