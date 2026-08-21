<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Forms\Fields;

/**
 * Geographic point on a Leaflet map.
 *
 * Value shape: `{ lat: float, lng: float }` (JSON / array cast on the model).
 * `latLng()` renames those keys when your columns differ.
 *
 * Leaflet is loaded only when this control mounts (dynamic import), so forms
 * without a map field never pay for the library.
 *
 *     MapField::make('location')
 *         ->defaultCenter(-1.286389, 36.817223)
 *         ->zoom(12)
 *         ->latLng('lat', 'lng');
 */
final class MapField extends Field
{
    private float $defaultLat = 0.0;

    private float $defaultLng = 0.0;

    private int $zoom = 12;

    private int $height = 280;

    private string $latKey = 'lat';

    private string $lngKey = 'lng';

    public function type(): string
    {
        return 'map';
    }

    public function defaultCenter(float $lat, float $lng): static
    {
        $this->defaultLat = $lat;
        $this->defaultLng = $lng;

        return $this;
    }

    public function zoom(int $zoom): static
    {
        $this->zoom = max(1, min(18, $zoom));

        return $this;
    }

    public function height(int $pixels): static
    {
        $this->height = max(160, min(720, $pixels));

        return $this;
    }

    /**
     * Keys inside the stored object (defaults `lat` / `lng`).
     */
    public function latLng(string $latKey, string $lngKey): static
    {
        $this->latKey = $latKey;
        $this->lngKey = $lngKey;

        return $this;
    }

    protected function typeRules(): array
    {
        return ['nullable', 'array'];
    }

    /** @return array<string, mixed> */
    public function toSchema(): array
    {
        return [
            ...parent::toSchema(),
            'defaultCenter' => ['lat' => $this->defaultLat, 'lng' => $this->defaultLng],
            'zoom' => $this->zoom,
            'height' => $this->height,
            'latKey' => $this->latKey,
            'lngKey' => $this->lngKey,
        ];
    }
}
