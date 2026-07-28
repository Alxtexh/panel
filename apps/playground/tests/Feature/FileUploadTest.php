<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Client;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use PanelKit\Panel\Files\FileStore;
use Tests\TestCase;

/**
 * Uploads.
 *
 * AN UPLOAD IS THE HIGHEST-LEVERAGE INPUT IN A PANEL: untrusted bytes that the
 * server stores and later serves back. Most of what follows is not testing a
 * feature, it is testing that a specific attack does not work - and each one is
 * written as the attack rather than as the rule, because a rule can pass while
 * the thing it was written to stop still succeeds by another route.
 */
final class FileUploadTest extends TestCase
{
    use RefreshDatabase;

    /** A genuine 1x1 PNG, so finfo reports image/png from the bytes. */
    private const PNG_BYTES = "\x89PNG\r\n\x1a\n".
        "\x00\x00\x00\x0dIHDR\x00\x00\x00\x01\x00\x00\x00\x01\x08\x06\x00\x00\x00\x1f\x15\xc4\x89".
        "\x00\x00\x00\x0aIDATx\x9cc\x00\x01\x00\x00\x05\x00\x01\x0d\x0a\x2d\xb4".
        "\x00\x00\x00\x00IEND\xaeB\x60\x82";

    private Tenant $tenantA;

    private Tenant $tenantB;

    private User $alice;

    private User $bob;

    protected function setUp(): void
    {
        parent::setUp();

        Storage::fake('local');

        $this->tenantA = Tenant::create(['name' => 'A', 'slug' => 'a']);
        $this->tenantB = Tenant::create(['name' => 'B', 'slug' => 'b']);

        $this->alice = User::factory()->create([
            'tenant_id' => $this->tenantA->id,
            'email_verified_at' => now(),
        ]);

        $this->bob = User::factory()->create([
            'tenant_id' => $this->tenantA->id,
            'email_verified_at' => now(),
        ]);
    }

    /* --------------------------------------------------------- it works */

    public function test_an_accepted_file_returns_a_handle(): void
    {
        $response = $this->actingAs($this->alice)
            ->postJson('/clients/uploads', [
                'file' => $this->realFile('scan.png', self::PNG_BYTES),
                'field' => 'id_document',
            ]);

        $response->assertCreated()
            ->assertJsonStructure(['handle', 'name', 'size']);

        $this->assertSame('scan.png', $response->json('name'));
    }

    /** The handle becomes a stored path when the form is saved. */
    public function test_a_handle_is_promoted_on_save(): void
    {
        $handle = $this->upload();

        $this->actingAs($this->alice)
            ->post('/clients', [...$this->clientPayload(), 'id_document' => $handle])
            ->assertRedirect();

        $path = Client::withoutGlobalScopes()->latest('id')->first()->id_document;

        $this->assertNotNull($path);
        $this->assertStringStartsWith("tenants/{$this->tenantA->id}/id-documents/", $path);
        Storage::disk('local')->assertExists($path);

        // The pending copy is gone: promotion is a move, not a copy, so a
        // rejected form does not leave megabytes behind forever.
        Storage::disk('local')->assertMissing("tenants/{$this->tenantA->id}/pending/{$handle}");
    }

    /**
     * A FAILED FORM MUST NOT LOSE THE FILE. This is the entire reason uploads
     * happen before submit rather than with it.
     */
    public function test_a_validation_failure_leaves_the_upload_intact(): void
    {
        $handle = $this->upload();

        $this->actingAs($this->alice)
            ->post('/clients', ['name' => '', 'id_document' => $handle])
            ->assertSessionHasErrors('name');

        $this->assertNotNull(FileStore::readPending($handle), 'The file must survive to be resubmitted.');
    }

    /** An edit that touches nothing else keeps the file it already had. */
    public function test_an_edit_that_does_not_change_the_file_keeps_it(): void
    {
        $handle = $this->upload();

        $this->actingAs($this->alice)->post('/clients', [...$this->clientPayload(), 'id_document' => $handle]);

        $client = Client::withoutGlobalScopes()->latest('id')->first();
        $path = $client->id_document;

        $this->actingAs($this->alice)
            ->put("/clients/{$client->id}", [...$this->clientPayload(), 'id_document' => $path])
            ->assertRedirect();

        $this->assertSame($path, $client->fresh()->id_document);
        Storage::disk('local')->assertExists($path);
    }

    /* ------------------------------------------------- what must not work */

    /**
     * THE HEADLINE ATTACK: a PHP script wearing a .png name.
     *
     * The browser is free to claim any Content-Type, and the filename is chosen
     * by whoever is uploading. The only statement about the file the attacker
     * cannot author is what its BYTES are.
     */
    public function test_a_script_renamed_as_an_image_is_rejected(): void
    {
        $payload = $this->realFile('avatar.png', "<?php system(\$_GET['c']); ?>");

        $this->actingAs($this->alice)
            ->postJson('/clients/uploads', ['file' => $payload, 'field' => 'id_document'])
            ->assertStatus(422)
            ->assertJsonPath('message', fn (string $m): bool => str_contains($m, 'do not match'));

        $this->assertSame([], Storage::disk('local')->allFiles());
    }

    /** And the same script under its own name, which is not on the allowlist. */
    public function test_an_extension_outside_the_allowlist_is_rejected(): void
    {
        foreach (['shell.php', 'shell.phtml', 'shell.phar', 'page.html', 'icon.svg'] as $name) {
            $this->actingAs($this->alice)
                ->postJson('/clients/uploads', [
                    'file' => $this->realFile($name, 'anything at all'),
                    'field' => 'id_document',
                ])
                ->assertStatus(422, "[{$name}] must not be accepted.");
        }

        $this->assertSame([], Storage::disk('local')->allFiles());
    }

    /** The client's filename never becomes part of a path. */
    public function test_a_traversing_filename_cannot_escape_the_tenant_directory(): void
    {
        $handle = $this->upload('../../../../.env.png');

        $this->actingAs($this->alice)
            ->post('/clients', [...$this->clientPayload(), 'id_document' => $handle]);

        $path = Client::withoutGlobalScopes()->latest('id')->first()->id_document;

        $this->assertStringStartsWith("tenants/{$this->tenantA->id}/", $path);
        $this->assertStringNotContainsString('..', $path);
    }

    /** Over the field's own ceiling, which is lower than the panel's. */
    public function test_a_file_over_the_field_limit_is_rejected(): void
    {
        $this->actingAs($this->alice)
            ->postJson('/clients/uploads', [
                // The field declares 4096 KB. Real bytes, and a real PDF
                // header, so it is the SIZE rule that rejects this and not the
                // type rule standing in for it.
                'file' => $this->realFile('big.pdf', "%PDF-1.4\n".str_repeat('0', 5_000_000)),
                'field' => 'id_document',
            ])
            ->assertStatus(422);
    }

    /** Only a declared upload field may be uploaded to. */
    public function test_a_field_that_is_not_an_upload_field_is_rejected(): void
    {
        $this->actingAs($this->alice)
            ->postJson('/clients/uploads', [
                'file' => $this->realFile('scan.png', self::PNG_BYTES),
                'field' => 'name',
            ])
            ->assertNotFound();
    }

    public function test_a_guest_cannot_upload(): void
    {
        $this->postJson('/clients/uploads', [
            'file' => $this->realFile('scan.png', self::PNG_BYTES),
            'field' => 'id_document',
        ])->assertUnauthorized();
    }

    /**
     * A HANDLE IS NOT A BEARER TOKEN FOR SOMEONE ELSE'S FILE.
     *
     * It travels through the browser, so by the time it comes back the only
     * thing known is that somebody sent it - and that somebody must not be able
     * to attach a colleague's ID scan to their own record by pasting an id.
     */
    public function test_a_colleagues_pending_upload_cannot_be_attached(): void
    {
        $handle = $this->upload(as: $this->bob);

        $this->actingAs($this->alice)
            ->post('/clients', [...$this->clientPayload(), 'id_document' => $handle]);

        $this->assertNull(
            Client::withoutGlobalScopes()->latest('id')->first()?->id_document,
            "Alice must not be able to claim Bob's upload.",
        );
    }

    /** Nor discarded: deleting someone else's pending file is still touching it. */
    public function test_a_colleagues_pending_upload_cannot_be_discarded(): void
    {
        $handle = $this->upload(as: $this->bob);

        $this->actingAs($this->alice)
            ->deleteJson('/clients/uploads', ['handle' => $handle])
            ->assertOk();

        $this->assertNotNull(FileStore::readPending($handle));
    }

    /* ------------------------------------------------------------ reading */

    public function test_the_owner_can_download_the_file_under_its_original_name(): void
    {
        $client = $this->clientWithDocument();

        $response = $this->actingAs($this->alice)->get("/clients/{$client->id}/file/id_document");

        $response->assertOk();
        $this->assertStringContainsString('scan.png', $response->headers->get('content-disposition'));

        // Never served as its own type, and never sniffable into one: a file
        // that got past the upload checks still must not execute on the
        // panel's origin, where it would inherit the session.
        $this->assertSame('application/octet-stream', $response->headers->get('content-type'));
        $this->assertSame('nosniff', $response->headers->get('x-content-type-options'));
        $this->assertStringContainsString('attachment', $response->headers->get('content-disposition'));
    }

    /**
     * A PRIVATE DISK IS NOT AUTHORIZATION. The record is what is checked.
     */
    public function test_another_tenant_cannot_download_the_file(): void
    {
        $client = $this->clientWithDocument();

        $intruder = User::factory()->create([
            'tenant_id' => $this->tenantB->id,
            'email_verified_at' => now(),
        ]);

        $this->actingAs($intruder)
            ->get("/clients/{$client->id}/file/id_document")
            ->assertNotFound();
    }

    /**
     * Built WITHOUT signing in, deliberately.
     *
     * `actingAs()` persists for the rest of the test, so a "guest" request made
     * after a helper that authenticates is not a guest request at all - it
     * asserts nothing and passes. The record is written straight to the
     * database so that no part of this test has ever been logged in.
     */
    public function test_a_guest_cannot_download_the_file(): void
    {
        $client = $this->clientRow();

        Storage::disk('local')->put($client->id_document, self::PNG_BYTES);

        $this->get("/clients/{$client->id}/file/id_document")->assertRedirect('/login');
    }

    /** A record with no file is a 404, not an empty download. */
    public function test_a_record_without_a_file_has_nothing_to_download(): void
    {
        $client = $this->clientRow(document: null);

        $this->actingAs($this->alice)
            ->get("/clients/{$client->id}/file/id_document")
            ->assertNotFound();
    }

    /* ------------------------------------------------------------- pruning */

    /**
     * THE COST OF THE TWO-PHASE DESIGN, paid deliberately.
     *
     * A file is accepted before its form is submitted, so every abandoned form
     * leaves bytes nothing points at. Without a sweep the panel has a slow leak
     * the size of "however many people started attaching something and stopped".
     */
    public function test_an_abandoned_upload_is_pruned_once_it_is_old(): void
    {
        $handle = $this->upload();
        $path = "tenants/{$this->tenantA->id}/pending/{$handle}";

        // Fresh: still within the window somebody might be filling the form in.
        $this->artisan('panel:prune-uploads', ['--hours' => 24])->assertSuccessful();
        Storage::disk('local')->assertExists($path);

        $this->age($path, hours: 48);

        $this->artisan('panel:prune-uploads', ['--hours' => 24])->assertSuccessful();

        Storage::disk('local')->assertMissing($path);
        Storage::disk('local')->assertMissing($path.'.json');
    }

    /** A promoted file belongs to a record and is never swept. */
    public function test_pruning_never_touches_a_saved_file(): void
    {
        $client = $this->clientWithDocument();

        $this->age($client->id_document, hours: 24 * 365);

        $this->artisan('panel:prune-uploads', ['--hours' => 1])->assertSuccessful();

        Storage::disk('local')->assertExists($client->id_document);
    }

    /** A dry run reports and deletes nothing. */
    public function test_a_dry_run_deletes_nothing(): void
    {
        $handle = $this->upload();
        $path = "tenants/{$this->tenantA->id}/pending/{$handle}";

        $this->age($path, hours: 48);

        $this->artisan('panel:prune-uploads', ['--hours' => 24, '--dry-run' => true])->assertSuccessful();

        Storage::disk('local')->assertExists($path);
    }

    /* ---------------------------------------------------------------- setup */

    /** Backdates a stored file, so age-based behaviour is testable at all. */
    private function age(string $path, int $hours): void
    {
        $absolute = Storage::disk('local')->path($path);

        touch($absolute, now()->subHours($hours)->getTimestamp());
        clearstatcache(true, $absolute);
    }

    private function upload(string $name = 'scan.png', ?User $as = null): string
    {
        return $this->actingAs($as ?? $this->alice)
            ->postJson('/clients/uploads', [
                'file' => $this->realFile($name, self::PNG_BYTES),
                'field' => 'id_document',
            ])
            ->assertCreated()
            ->json('handle');
    }

    /**
     * A REAL FILE ON DISK, not `UploadedFile::fake()`.
     *
     * This is not fussiness. `Illuminate\Http\Testing\File::getMimeType()`
     * returns the type guessed from the FILENAME, so a fake PHP script called
     * `avatar.png` reports `image/png` and sails through the exact check that
     * exists to catch it. Every one of these tests would have passed against a
     * server that did no sniffing at all.
     *
     * A real UploadedFile in test mode skips the `is_uploaded_file` check and
     * nothing else - `getMimeType()` still runs finfo over the bytes, which is
     * the behaviour under test.
     */
    private function realFile(string $name, string $contents): UploadedFile
    {
        $path = tempnam(sys_get_temp_dir(), 'pk-upload');

        file_put_contents($path, $contents);

        return new UploadedFile($path, $name, null, null, true);
    }

    private function clientWithDocument(): Client
    {
        $handle = $this->upload();

        $this->actingAs($this->alice)
            ->post('/clients', [...$this->clientPayload(), 'id_document' => $handle]);

        return Client::withoutGlobalScopes()->latest('id')->first();
    }

    /**
     * A client written straight to the database.
     *
     * `forceFill`, because `tenant_id` is not mass assignable - it comes from
     * context on the real path, which is exactly the protection that makes it
     * awkward here.
     */
    private function clientRow(?string $document = 'set'): Client
    {
        $client = new Client;

        $client->forceFill([
            ...$this->clientPayload(),
            'tenant_id' => $this->tenantA->id,
            'id_document' => $document === null
                ? null
                : "tenants/{$this->tenantA->id}/id-documents/".uniqid().'.png',
        ])->save();

        return $client;
    }

    /** @return array<string, mixed> */
    private function clientPayload(): array
    {
        return [
            'name' => 'Test Subscriber',
            'phone' => '0700000000',
            'access_code' => 'AC-'.uniqid(),
            'status' => 'active',
            'plan_type' => 'pppoe',
        ];
    }
}
