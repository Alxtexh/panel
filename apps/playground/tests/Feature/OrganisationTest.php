<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

/**
 * Organisation name and logo.
 *
 * The thing being guarded is that this is SHARED state. A profile change
 * affects one person; a change here rewrites the sidebar for every colleague,
 * so the interesting cases are all about who may make one and whose
 * organisation it lands on.
 */
final class OrganisationTest extends TestCase
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

    protected function setUp(): void
    {
        parent::setUp();

        Storage::fake('local');

        $this->tenantA = Tenant::create(['name' => 'Nairobi Fibre', 'slug' => 'nairobi-fibre']);
        $this->tenantB = Tenant::create(['name' => 'Rival ISP', 'slug' => 'rival-isp']);

        $this->alice = User::factory()->create([
            'tenant_id' => $this->tenantA->id,
            'email_verified_at' => now(),
        ]);
    }

    /* ------------------------------------------------------------- the name */

    public function test_the_name_can_be_changed(): void
    {
        $this->actingAs($this->alice)
            ->put('/settings/organisation', ['name' => 'Nairobi Fibre Ltd', 'logo' => null])
            ->assertRedirect();

        $this->assertSame('Nairobi Fibre Ltd', $this->tenantA->fresh()->name);
    }

    /**
     * A CHANGE LANDS ON THE SIGNED-IN ORGANISATION AND NO OTHER.
     *
     * There is no tenant id in the route, which is the actual protection - this
     * asserts that no smuggled one is honoured either.
     */
    public function test_another_organisation_is_never_touched(): void
    {
        $this->actingAs($this->alice)
            ->put('/settings/organisation', [
                'name' => 'Renamed',
                'logo' => null,
                // Ignored: the tenant comes from context, never from input.
                'tenant_id' => $this->tenantB->id,
                'id' => $this->tenantB->id,
            ])
            ->assertRedirect();

        $this->assertSame('Rival ISP', $this->tenantB->fresh()->name, "Another tenant's name changed.");
        $this->assertSame('Renamed', $this->tenantA->fresh()->name);
    }

    public function test_a_guest_cannot_change_the_organisation(): void
    {
        $this->put('/settings/organisation', ['name' => 'Hijacked', 'logo' => null])
            ->assertRedirect('/login');

        $this->assertSame('Nairobi Fibre', $this->tenantA->fresh()->name);
    }

    public function test_an_empty_name_is_rejected(): void
    {
        $this->actingAs($this->alice)
            ->put('/settings/organisation', ['name' => '', 'logo' => null])
            ->assertSessionHasErrors('name');
    }

    /* ------------------------------------------------------------- the logo */

    public function test_a_logo_is_uploaded_and_saved(): void
    {
        $handle = $this->uploadLogo();

        $this->actingAs($this->alice)
            ->put('/settings/organisation', ['name' => 'Nairobi Fibre', 'logo' => $handle])
            ->assertRedirect();

        $path = $this->tenantA->fresh()->logo_path;

        $this->assertNotNull($path);
        $this->assertStringStartsWith("tenants/{$this->tenantA->id}/branding/", $path);
        Storage::disk('local')->assertExists($path);
    }

    /** `keep` means "unchanged", and must not need the path to say so. */
    public function test_saving_the_name_alone_keeps_the_logo(): void
    {
        $this->actingAs($this->alice)
            ->put('/settings/organisation', ['name' => 'Nairobi Fibre', 'logo' => $this->uploadLogo()]);

        $path = $this->tenantA->fresh()->logo_path;

        // Asserted before it is compared. Both halves of this test were null
        // when the first save silently failed validation, so it passed while
        // proving nothing - a comparison of two absences is not a test.
        $this->assertNotNull($path);

        $this->actingAs($this->alice)
            ->put('/settings/organisation', ['name' => 'Nairobi Fibre Ltd', 'logo' => 'keep'])
            ->assertRedirect();

        $this->assertSame($path, $this->tenantA->fresh()->logo_path);
        Storage::disk('local')->assertExists($path);
    }

    /**
     * A replaced logo does not linger.
     *
     * There is exactly one current mark; keeping every previous file forever is
     * a slow leak with a company's branding in it.
     */
    public function test_replacing_the_logo_deletes_the_old_file(): void
    {
        $this->actingAs($this->alice)
            ->put('/settings/organisation', ['name' => 'Nairobi Fibre', 'logo' => $this->uploadLogo()]);

        $first = $this->tenantA->fresh()->logo_path;

        $this->actingAs($this->alice)
            ->put('/settings/organisation', ['name' => 'Nairobi Fibre', 'logo' => $this->uploadLogo()]);

        $second = $this->tenantA->fresh()->logo_path;

        $this->assertNotNull($first);
        $this->assertNotNull($second);
        $this->assertNotSame($first, $second);
        Storage::disk('local')->assertMissing($first);
        Storage::disk('local')->assertExists($second);
    }

    public function test_removing_the_logo_deletes_the_file(): void
    {
        $this->actingAs($this->alice)
            ->put('/settings/organisation', ['name' => 'Nairobi Fibre', 'logo' => $this->uploadLogo()]);

        $path = $this->tenantA->fresh()->logo_path;
        $this->assertNotNull($path);

        $this->actingAs($this->alice)
            ->put('/settings/organisation', ['name' => 'Nairobi Fibre', 'logo' => null])
            ->assertRedirect();

        $this->assertNull($this->tenantA->fresh()->logo_path);
        Storage::disk('local')->assertMissing($path);
    }

    /**
     * SVG IS NOT A LOGO FORMAT HERE.
     *
     * It executes script, and the logo is the one upload the panel renders
     * INLINE on every page - the single place stored XSS would reach every
     * colleague at once.
     */
    public function test_an_svg_logo_is_rejected(): void
    {
        $this->actingAs($this->alice)
            ->postJson('/settings/organisation/logo/upload', [
                'file' => $this->realFile('logo.svg', '<svg xmlns="http://www.w3.org/2000/svg"><script>alert(1)</script></svg>'),
            ])
            ->assertStatus(422);
    }

    /** And a script wearing a .png name, same as everywhere else. */
    public function test_a_script_renamed_as_a_logo_is_rejected(): void
    {
        $this->actingAs($this->alice)
            ->postJson('/settings/organisation/logo/upload', [
                'file' => $this->realFile('logo.png', "<?php echo 'not an image'; ?>"),
            ])
            ->assertStatus(422);

        $this->assertSame([], Storage::disk('local')->allFiles());
    }

    /* ------------------------------------------------------ cache busting */

    /**
     * A NEW LOGO MUST GET A NEW URL.
     *
     * The route is a fixed path and the response is cacheable - a mark is
     * fetched on every page of the panel, so re-downloading it each time is
     * waste. Those two facts together were a bug: replacing the logo changed
     * the bytes and not the URL, so browsers kept serving the old one until the
     * cache expired. It looked like the upload had silently failed, and
     * "replace it twice and it works" is what people conclude when the second
     * attempt lands after the timeout.
     */
    public function test_replacing_the_logo_changes_its_url(): void
    {
        $this->actingAs($this->alice)
            ->put('/settings/organisation', ['name' => 'Nairobi Fibre', 'logo' => $this->uploadLogo()]);

        $first = $this->logoUrl();

        $this->actingAs($this->alice)
            ->put('/settings/organisation', ['name' => 'Nairobi Fibre', 'logo' => $this->uploadLogo()]);

        $second = $this->logoUrl();

        $this->assertNotNull($first);
        $this->assertNotNull($second);
        $this->assertNotSame($first, $second, 'A replaced logo kept the old URL, so caches kept the old image.');
    }

    /** And an unchanged logo keeps its URL, so the cache still does its job. */
    public function test_an_unchanged_logo_keeps_its_url(): void
    {
        $this->actingAs($this->alice)
            ->put('/settings/organisation', ['name' => 'Nairobi Fibre', 'logo' => $this->uploadLogo()]);

        $first = $this->logoUrl();

        $this->actingAs($this->alice)
            ->put('/settings/organisation', ['name' => 'Nairobi Fibre Ltd', 'logo' => 'keep']);

        $this->assertSame($first, $this->logoUrl());
    }

    /** No logo, no URL - the wordmark falls back rather than breaking an image. */
    public function test_no_logo_means_no_url(): void
    {
        $this->assertNull($this->logoUrl());
    }

    /* ---------------------------------------------------------- serving it */

    public function test_the_logo_is_served_to_a_member_of_the_organisation(): void
    {
        $this->actingAs($this->alice)
            ->put('/settings/organisation', ['name' => 'Nairobi Fibre', 'logo' => $this->uploadLogo()]);

        $response = $this->actingAs($this->alice)->get('/settings/organisation/logo');

        $response->assertOk();
        $this->assertSame('nosniff', $response->headers->get('x-content-type-options'));
    }

    /**
     * Another organisation asking for "the logo" gets THEIRS, which is none -
     * the route names no tenant, so there is nothing to point at somebody else.
     */
    public function test_another_organisation_does_not_get_this_logo(): void
    {
        $this->actingAs($this->alice)
            ->put('/settings/organisation', ['name' => 'Nairobi Fibre', 'logo' => $this->uploadLogo()]);

        $intruder = User::factory()->create([
            'tenant_id' => $this->tenantB->id,
            'email_verified_at' => now(),
        ]);

        $this->actingAs($intruder)->get('/settings/organisation/logo')->assertNotFound();
    }

    public function test_a_guest_cannot_fetch_the_logo(): void
    {
        $this->get('/settings/organisation/logo')->assertRedirect('/login');
    }

    /* ---------------------------------------------------------------- setup */

    /** The shared prop the sidebar renders its mark from. */
    private function logoUrl(): ?string
    {
        return $this->actingAs($this->alice)
            ->get('/settings/organisation')
            ->viewData('page')['props']['panelLogo'] ?? null;
    }

    private function uploadLogo(): string
    {
        return $this->actingAs($this->alice)
            ->postJson('/settings/organisation/logo/upload', [
                'file' => $this->realFile('logo.png', self::PNG_BYTES),
            ])
            ->assertCreated()
            ->json('handle');
    }

    /**
     * A REAL FILE ON DISK. `UploadedFile::fake()` reports the MIME guessed from
     * the FILENAME, so a fake script called `logo.png` sails straight through
     * the check that exists to catch it.
     */
    private function realFile(string $name, string $contents): UploadedFile
    {
        $path = tempnam(sys_get_temp_dir(), 'pk-logo');

        file_put_contents($path, $contents);

        /*
         * READABLE, OR SAY SO. On Windows, Defender locks files whose contents
         * it reads as a backdoor - written, present, correct size, and every
         * open fails with "Invalid argument". `finfo` then errors and the
         * endpoint answers 500, so a test asserting 422 failed pointing at a
         * MIME guesser rather than at the antivirus.
         */
        $this->assertNotFalse(
            @file_get_contents($path),
            "The upload fixture [{$name}] was written but cannot be read back. On Windows "
            .'this is normally Defender quarantining the payload, not a fault in the code '
            .'under test.',
        );

        return new UploadedFile($path, $name, null, null, true);
    }
}
