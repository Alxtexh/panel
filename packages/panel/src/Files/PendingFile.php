<?php

declare(strict_types=1);

namespace PanelKit\Panel\Files;

/**
 * The receipt for an accepted upload, before it belongs to a record.
 *
 * The handle is the only part the client is given. Nothing here reveals where
 * the file was written: a client that knows the storage path is a client that
 * can try to read a neighbouring one.
 */
final readonly class PendingFile
{
    public function __construct(
        public string $handle,
        public string $name,
        public int $size,
    ) {}

    /** @return array{handle: string, name: string, size: int} */
    public function toArray(): array
    {
        return ['handle' => $this->handle, 'name' => $this->name, 'size' => $this->size];
    }
}
