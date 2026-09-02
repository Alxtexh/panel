<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Support;

use Closure;
use Illuminate\Http\Request;

/**
 * The screen after the last step - a summary, not a form.
 *
 * EVERY LIST IS A CLOSURE, EVALUATED AFTER `SetupWizard::runSubmit()` HAS
 * ALREADY RUN. A static array would describe what the wizard is ABOUT to do;
 * a closure resolved once the workspace's settings are actually saved and the
 * first real row actually exists can say what it DID - "Nairobi Fibre" rather
 * than "your location", a real plan name rather than a guess. `complete()`
 * calls `toSchema()` fresh on every visit for the same reason: revisiting the
 * screen should not show stale values frozen at the moment it first rendered.
 */
final class SetupWizardCompletion
{
    private string $heading = 'Initial setup completed';

    /** @var Closure(Request): list<array{label: string, detail?: string}>|null */
    private ?Closure $summaryResolver = null;

    /** @var Closure(Request): list<array{label: string, href: string}>|null */
    private ?Closure $nextStepsResolver = null;

    /** @var Closure(Request): list<array{label: string, href: string, primary?: bool}>|null */
    private ?Closure $actionsResolver = null;

    public static function make(): self
    {
        return new self;
    }

    public function heading(string $heading): self
    {
        $this->heading = $heading;

        return $this;
    }

    /** @param  Closure(Request): list<array{label: string, detail?: string}>  $items */
    public function summary(Closure $items): self
    {
        $this->summaryResolver = $items;

        return $this;
    }

    /** @param  Closure(Request): list<array{label: string, href: string}>  $links */
    public function nextSteps(Closure $links): self
    {
        $this->nextStepsResolver = $links;

        return $this;
    }

    /** @param  Closure(Request): list<array{label: string, href: string, primary?: bool}>  $actions */
    public function actions(Closure $actions): self
    {
        $this->actionsResolver = $actions;

        return $this;
    }

    /** @return array<string, mixed> */
    public function toSchema(Request $request): array
    {
        return [
            'heading' => $this->heading,
            'summary' => $this->summaryResolver !== null ? ($this->summaryResolver)($request) : [],
            'nextSteps' => $this->nextStepsResolver !== null ? ($this->nextStepsResolver)($request) : [],
            'actions' => $this->actionsResolver !== null ? ($this->actionsResolver)($request) : [],
        ];
    }
}
