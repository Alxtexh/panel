<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Notifications;

use Alxtexh\Panel\Actions\Action;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use InvalidArgumentException;

/**
 * Filament-shaped flash, mapped onto the kit's Inertia toast.
 *
 *     Notification::make()->title('Saved')->success()->send();
 *
 *     Notification::make()
 *         ->title('Invoice posted')
 *         ->success()
 *         ->actions([
 *             Action::make('view')->url($url),
 *             Action::make('download')->url($download)->openUrlInNewTab(),
 *         ])
 *         ->send();
 *
 * This is not a Livewire toast stack. `send()` flashes `{ type, message }`
 * and optional `actions` the same way Profile and Operations already do.
 * `bell()` also writes a `BellText` row the topbar already renders.
 */
final class Notification
{
    private string $title = '';

    private string $body = '';

    private ?string $href = null;

    private string $type = 'info';

    private bool $bell = false;

    /** @var list<Action> */
    private array $actions = [];

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

    /**
     * Buttons on the toast and, with `bell()`, the inbox row.
     *
     * @param  list<Action>  $actions
     */
    public function actions(array $actions): self
    {
        foreach ($actions as $action) {
            if (! $action instanceof Action) {
                throw new InvalidArgumentException('Notification actions must be Alxtexh\\Panel\\Actions\\Action instances.');
            }
        }

        $this->actions = array_values($actions);

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

    /**
     * Also persist to the database (the bell inbox) for the current user.
     *
     * Alias for `bell()` kept for Filament parity.
     */
    public function persist(): self
    {
        return $this->bell();
    }

    public function send(): void
    {
        $payload = $this->toArray();

        session()->flash('toast', $payload);
        Inertia::flash('toast', $payload);

        if (! $this->bell) {
            return;
        }

        $this->writeToDatabase(Auth::user());
    }

    /**
     * Send this notification directly to another user's database inbox.
     *
     * No toast, no session flash - the recipient is not the acting user.
     * The bell badge updates the next time they load a page or open the bell.
     */
    public function sendToDatabase(Authenticatable $recipient): void
    {
        $this->writeToDatabase($recipient);
    }

    private function writeToDatabase(?object $user): void
    {
        if (! $user instanceof Authenticatable || ! method_exists($user, 'notify')) {
            return;
        }

        $severity = match ($this->type) {
            'success' => 'success',
            'warning' => 'warning',
            'error' => 'danger',
            default => 'info',
        };

        $user->notify(new BellText(
            $this->title,
            $this->body,
            $this->href ?? $this->firstActionHref(),
            $severity,
            $this->serializedActions(),
        ));
    }

    /**
     * @return array{type: string, message: string, body: string, actions?: list<array<string, mixed>>}
     */
    public function toArray(): array
    {
        $payload = [
            'type' => $this->type,
            'message' => $this->title,
            'body' => $this->body,
        ];

        $actions = $this->serializedActions();

        if ($actions !== []) {
            $payload['actions'] = $actions;
        }

        return $payload;
    }

    /** @return list<array<string, mixed>> */
    private function serializedActions(): array
    {
        $out = [];

        foreach ($this->actions as $action) {
            $schema = $action->toNotificationSchema();

            if ($schema !== null) {
                $out[] = $schema;
            }
        }

        return $out;
    }

    private function firstActionHref(): ?string
    {
        foreach ($this->serializedActions() as $action) {
            $href = $action['href'] ?? null;

            if (is_string($href) && $href !== '') {
                return $href;
            }
        }

        return null;
    }
}
