<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Alxtexh\Panel\Files\FileStore;
use Illuminate\Support\Facades\Storage;

/**
 * Accepting a file from a browser, which is accepting a stranger's bytes.
 *
 * EVERY ASSERTION HERE IS A REFUSAL BUT ONE, and that ratio is the point. The
 * happy path is trivial; what matters is that the endpoint takes a FILENAME, a
 * FIELD NAME and a CONTENT TYPE from the request, and all three are supplied
 * by whoever is uploading.
 *
 *   THE FIELD MUST BE DECLARED. Otherwise "upload to field X" writes wherever
 *   the caller names, and the form's allowlist is decoration.
 *
 *   THE EXTENSION MUST BE ALLOWED, checked against the field's own list rather
 *   than against the browser's content type - which is a claim, not a fact.
 *
 *   THE FILENAME MUST NOT TRAVERSE. `../../` in a name is the oldest way out
 *   of a directory, and the directory here is a tenant's.
 *
 * A PENDING UPLOAD BELONGS TO WHOEVER MADE IT. Handles are unattached files
 * waiting to be promoted on save, so a handle that any signed-in colleague
 * could attach or discard would be a way to plant a file on somebody else's
 * record, or delete theirs before it lands.
 */
final class FileUploadTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenant;

    private User $user;

    private User $colleague;

    protected function setUp(): void
    {
        parent::setUp();

        Storage::fake('local');
        Storage::fake('public');

        $this->tenant = Tenant::create(['name' => 'Mine', 'slug' => 'mine']);

        $this->user = User::create([
            'tenant_id' => $this->tenant->id,
            'name' => 'Operator',
            'email' => 'operator@example.test',
            'password' => 'password',
            'email_verified_at' => now(),
        ]);

        $this->colleague = User::create([
            'tenant_id' => $this->tenant->id,
            'name' => 'Colleague',
            'email' => 'colleague@example.test',
            'password' => 'password',
            'email_verified_at' => now(),
        ]);

        $this->actingAs($this->user);
    }

    private function upload(UploadedFile $file, string $field = 'attachment')
    {
        return $this->postJson('/articles/uploads', ['field' => $field, 'file' => $file]);
    }

    public function test_an_accepted_file_returns_a_handle(): void
    {
        $response = $this->upload(UploadedFile::fake()->create('notes.txt', 4, 'text/plain'));

        $response->assertSuccessful();

        $this->assertNotEmpty(
            $response->json('handle') ?? $response->json('path') ?? $response->json('id'),
            'An accepted upload returned no handle to attach later.',
        );
    }

    /**
     * A FIELD THE FORM NEVER DECLARED IS NOT AN UPLOAD TARGET.
     *
     * `title` is a real field on this form - just not an upload one - which is
     * the case worth asserting: being declared is not the same as being
     * declared as a FILE.
     */
    public function test_a_field_that_is_not_an_upload_field_is_rejected(): void
    {
        // 404, the convention this codebase uses throughout: a field that is
        // not an upload target does not exist as far as this endpoint goes.
        $this->upload(UploadedFile::fake()->create('notes.txt', 4, 'text/plain'), 'title')
            ->assertNotFound();
    }

    public function test_an_undeclared_field_is_rejected(): void
    {
        $this->upload(UploadedFile::fake()->create('notes.txt', 4, 'text/plain'), 'not_a_field')
            ->assertNotFound();
    }

    /**
     * THE EXTENSION ALLOWLIST IS CHECKED, not the browser's content type.
     *
     * A content type is a claim made by the uploader. This field accepts pdf
     * and txt; an executable renamed with a permitted-looking type must still
     * be refused on its extension.
     */
    public function test_an_extension_outside_the_allowlist_is_rejected(): void
    {
        $this->upload(UploadedFile::fake()->create('payload.php', 4, 'text/plain'))
            ->assertStatus(422);
    }

    public function test_a_file_over_the_field_limit_is_rejected(): void
    {
        // The field declares 64 kilobytes.
        $this->upload(UploadedFile::fake()->create('big.txt', 256, 'text/plain'))
            ->assertStatus(422);
    }

    /**
     * A TRAVERSING FILENAME CANNOT ESCAPE THE DIRECTORY IT IS GIVEN.
     *
     * Either refused outright or stored under a name that has been stripped of
     * the traversal - both are correct outcomes. What must never happen is a
     * write landing outside the upload root, so that is what is asserted
     * rather than a particular status code.
     */
    public function test_a_traversing_filename_cannot_escape_the_upload_directory(): void
    {
        $this->upload(UploadedFile::fake()->create('../../escaped.txt', 4, 'text/plain'));

        foreach (['local', 'public'] as $disk) {
            foreach (Storage::disk($disk)->allFiles() as $path) {
                $this->assertStringNotContainsString(
                    '..',
                    $path,
                    "An upload was written to a traversing path on [{$disk}]: {$path}",
                );
            }
        }
    }

    public function test_a_guest_cannot_upload(): void
    {
        auth()->logout();

        $this->upload(UploadedFile::fake()->create('notes.txt', 4, 'text/plain'))
            ->assertUnauthorized();
    }

    /**
     * A PENDING UPLOAD BELONGS TO WHOEVER MADE IT.
     *
     * A handle another signed-in colleague could discard is a way to delete
     * somebody's attachment in the window before they save - a race with no
     * error message, since the save simply finds nothing there.
     */
    public function test_a_colleagues_pending_upload_cannot_be_discarded(): void
    {
        $response = $this->upload(UploadedFile::fake()->create('mine.txt', 4, 'text/plain'))
            ->assertSuccessful();

        $handle = $response->json('handle') ?? $response->json('path') ?? $response->json('id');

        /*
         * IT ANSWERS 200 AND DOES NOTHING, which is the right shape rather
         * than a gap: refusing loudly would confirm the handle EXISTS, and a
         * handle is guessable in a way a record id is not interesting to be.
         * So the assertion is the OUTCOME, not the status - the file is still
         * there afterwards.
         */
        $this->actingAs($this->colleague)
            ->deleteJson('/articles/uploads', ['handle' => $handle])
            ->assertSuccessful();

        $this->assertNotNull(
            FileStore::readPending((string) $handle),
            'A colleague discarded somebody else’s pending upload.',
        );

        // And the owner can still discard their own.
        $this->actingAs($this->user)
            ->deleteJson('/articles/uploads', ['handle' => $handle])
            ->assertSuccessful();

        $this->assertNull(FileStore::readPending((string) $handle));
    }
}
