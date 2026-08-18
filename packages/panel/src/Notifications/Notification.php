<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Notifications;

use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

/**
 * Filament-shaped flash, mapped onto the kit's Inertia toast.
 *
 *     Notification::make()->title('Saved')->success()->send();
 *
 * This is not a Livewire toast stack. `send()` flashes `{ type, message }`
 * the same way Profile and Operations already do. `bell()` also writes a
 * `BellText` row the topbar already renders.
 */
final class Notification
{
    private string $title = '';

    private string $body = '';

    private ?string $href = null;

    private string $type = 'info';

    private bool $bell = false;

    public static function make(): self
    {
        return new self;
    }

    public function title(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function body(string $body): self
    {
        $this->body = $body;

        return $this;
    }

    public function href(?string $href): self
    {
        $this->href = $href;

        return $this;
    }

    public function success(): self
    {
        return $this->status('success');
    }

    public function info(): self
    {
        return $this->status('info');
    }

    public function warning(): self
    {
        return $this->status('warning');
    }

    public function danger(): self
    {
        return $this->status('error');
    }

    public function error(): self
    {
        return $this->status('error');
    }

    private function status(string $type): self
    {
        $this->type = $type;

        return $this;
    }

    /**
     * Also write the topbar bell. The toast still fires.
     */
    public function bell(): self
    {
        $this->bell = true;

        return $this;
    }

    public function send(): void
    {
        $payload = [
            'type' => $this->type,
            'message' => $this->title,
            'body' => $this->body,
        ];

        session()->flash('toast', $payload);
        Inertia::flash('toast', $payload);

        if (! $this->bell) {
            return;
        }

        $user = Auth::user();

        if (! $user instanceof Authenticatable || ! method_exists($user, 'notify')) {
            return;
        }

        $severity = match ($this->type) {
            'success' => 'success',
            'warning' => 'warning',
            'error' => 'danger',
            default => 'info',
        };

        $user->notify(new BellText($this->title, $this->body, $this->href, $severity));
    }

    /**
     * @return array{type: string, message: string, body: string}
     */
    public function toArray(): array
    {
        return [
            'type' => $this->type,
            'message' => $this->title,
            'body' => $this->body,
        ];
    }
}
