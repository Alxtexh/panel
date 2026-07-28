<?php

declare(strict_types=1);

namespace PanelKit\Panel\Forms\Fields;

use PanelKit\Panel\Files\FileStore;

/**
 * A file, uploaded before the form is submitted.
 *
 * TWO PHASES, AND THAT IS THE DESIGN. The file goes to its own endpoint first
 * and the form carries only a handle. The alternative - multipart on the form
 * itself - fails in a specific and infuriating way: a validation error anywhere
 * on the form sends the page back, the file input is empty again, and the user
 * re-picks a 4 MB scan because a phone number was short. It also means every
 * form submit is as slow as the largest attachment on it.
 *
 * THE VALUE IS A PATH OR A HANDLE, and the field is what tells them apart. An
 * edit form loads the stored path; picking a new file replaces it with a
 * handle; on save, a handle is promoted and a path is left alone. Nothing else
 * in the form layer has to know the difference.
 *
 * THE ALLOWLIST NARROWS, NEVER WIDENS. `accept()` may only name extensions
 * FileStore already knows how to vet, because vetting means checking that the
 * sniffed bytes agree with the extension - and an extension with no known
 * signature cannot be checked at all. A field cannot opt out of that by asking
 * for something exotic.
 */
final class FileUploadField extends Field
{
    /** @var list<string> */
    private array $extensions = [];

    private ?int $maxKilobytes = null;

    private string $directory = 'files';

    private bool $image = false;

    public function type(): string
    {
        return 'file';
    }

    /**
     * Narrow what may be uploaded.
     *
     * @param  list<string>  $extensions
     */
    public function accept(array $extensions): self
    {
        $known = FileStore::knownExtensions();

        $this->extensions = array_values(array_filter(
            array_map(static fn (string $e): string => strtolower(ltrim($e, '.')), $extensions),
            static fn (string $e): bool => in_array($e, $known, true),
        ));

        return $this;
    }

    /**
     * Images only, and render a preview.
     *
     * SVG is NOT in this set. It is a document format that executes script, so
     * treating it as an image is accepting stored XSS from anyone who can
     * change an avatar.
     */
    public function image(bool $image = true): self
    {
        $this->image = $image;

        if ($image && $this->extensions === []) {
            $this->extensions = FileStore::IMAGES;
        }

        return $this;
    }

    public function maxKilobytes(int $kilobytes): self
    {
        $this->maxKilobytes = $kilobytes;

        return $this;
    }

    /** The subdirectory under the tenant prefix. Never taken from a request. */
    public function directory(string $directory): self
    {
        $this->directory = $directory;

        return $this;
    }

    /** @return list<string> */
    public function extensions(): array
    {
        return $this->extensions === [] ? FileStore::knownExtensions() : $this->extensions;
    }

    public function limitKilobytes(): int
    {
        // The field may lower the ceiling; it may not raise it above what the
        // panel accepts at all.
        return min($this->maxKilobytes ?? FileStore::maxKilobytes(), FileStore::maxKilobytes());
    }

    public function storageDirectory(): string
    {
        return $this->directory;
    }

    /**
     * Validated as a string, because that is what it is by the time it arrives.
     *
     * The FILE was validated at upload time against its own bytes; what reaches
     * the form is either a handle the server issued or a path the server wrote.
     * Re-declaring `file|mimes:...` here would validate nothing - there is no
     * file in this request - while reading as though it did.
     *
     * @return list<mixed>
     */
    protected function typeRules(): array
    {
        return ['string', 'max:2048'];
    }

    /**
     * Turn a submitted value into what the column should hold.
     *
     * A handle is promoted to a permanent path here, on the way to the model,
     * so a form that fails validation never moves a file - and a file is never
     * promoted twice, because the second attempt finds no pending record.
     */
    public function transformForStorage(mixed $value): mixed
    {
        if (! is_string($value) || $value === '') {
            return null;
        }

        // Already stored: an edit that left the existing file alone.
        if (FileStore::readPending($value) === null) {
            return FileStore::belongsToCurrentTenant($value) ? $value : null;
        }

        return FileStore::promote($value, $this->directory);
    }

    /**
     * The stored path, described well enough to render.
     *
     * The path is a uuid, deliberately, so it says nothing useful on screen -
     * the sidecar written at upload time is what remembers the name the person
     * actually chose. The download URL is composed by the client, which is the
     * side that knows the resource and record it is looking at.
     *
     * @return array{value: string, name: string, size: int}|null
     */
    public function presentValue(mixed $value): mixed
    {
        if (! is_string($value) || $value === '') {
            return null;
        }

        $described = FileStore::describe($value);

        // A path with no file behind it renders as empty rather than as a
        // broken attachment: the row outlived the file, and offering a download
        // that 404s is worse than showing nothing.
        if ($described === null) {
            return null;
        }

        return ['value' => $value, 'name' => $described['name'], 'size' => $described['size']];
    }

    /** @return array<string, mixed> */
    public function toSchema(): array
    {
        return [
            ...parent::toSchema(),
            'accept' => $this->extensions(),
            'maxKilobytes' => $this->limitKilobytes(),
            'image' => $this->image,
        ];
    }
}
