<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Actions;

/**
 * A convenience factory for the built-in CSV export bulk action.
 *
 * The export is already wired: BulkController::export() dispatches
 * ExportRecords, streams CSV in chunks, and records the result in
 * panel_exports for later download. This class provides a Filament-style
 * API so resources can declare export in their bulkActions() array:
 *
 *     ExportBulkAction::make()
 *     ExportBulkAction::make('export-csv')->label('Download CSV')
 *
 * The Vue side already has the export button in the BulkActions/SelectionBar
 * component. This class emits the metadata the client needs to show it.
 */
final class ExportBulkAction
{
    private string $key;

    private string $label = 'Export';

    private string $icon = 'download';

    private string $format = 'csv';

    private function __construct(string $key)
    {
        $this->key = $key;
    }

    public static function make(string $key = 'export'): self
    {
        return new self($key);
    }

    public function label(string $label): self
    {
        $this->label = $label;

        return $this;
    }

    public function icon(string $icon): self
    {
        $this->icon = $icon;

        return $this;
    }

    /**
     * Preferred format: csv (always available) or xlsx (requires openspout).
     */
    public function format(string $format): self
    {
        $this->format = $format;

        return $this;
    }

    public function csv(): self
    {
        return $this->format('csv');
    }

    public function xlsx(): self
    {
        return $this->format('xlsx');
    }

    /** @return array<string, mixed> */
    public function toArray(): array
    {
        return [
            'key' => $this->key,
            'label' => $this->label,
            'icon' => $this->icon,
            'export' => true,
            'format' => $this->format,
        ];
    }
}
