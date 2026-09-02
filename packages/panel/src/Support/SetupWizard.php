<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Support;

use Closure;
use Illuminate\Http\Request;
use Alxtexh\Panel\Forms\Form;
use Alxtexh\Panel\Schema\Wizard;

/**
 * A first-run, full-screen setup flow: a `Wizard` plus what happens when it's
 * submitted and what the completion screen says afterward.
 *
 * ONE SUBMIT, NOT ONE PER STEP - see `Wizard`'s own docblock for why: every
 * step's fields are already in the client payload, so advancing is local and
 * the whole thing validates and saves together. That is also why this wraps a
 * `Wizard` rather than being one itself: `Wizard::stepRules()`/the client
 * renderer assume ONE eventual submit somewhere outside the schema tree, the
 * same way `ResourceForm.vue` supplies its own Save button below a wizard
 * node. This class IS that outside.
 *
 * THE SUBMIT HANDLER, NOT `Forms\Form`'s CALLER CONVENTION. Every other
 * `Form` in this codebase is mass-assigned onto ONE Eloquent model by whoever
 * calls `sanitize()`. A setup wizard's steps routinely touch DIFFERENT
 * records - the workspace's own settings, then a first real row in an
 * unrelated table - so there is no single model to hand `sanitize()`'s
 * output to. `submit()` is a closure instead, given the whole sanitised
 * payload and left to decide where each part goes.
 */
final class SetupWizard
{
    private ?Wizard $wizard = null;

    private ?SetupWizardCompletion $completion = null;

    /** @var Closure(array<string, mixed>, Request): void|null */
    private ?Closure $submitHandler = null;

    public static function make(): self
    {
        return new self;
    }

    public function wizard(Wizard $wizard): self
    {
        $this->wizard = $wizard;

        return $this;
    }

    public function completion(SetupWizardCompletion $completion): self
    {
        $this->completion = $completion;

        return $this;
    }

    /** @param  Closure(array<string, mixed> $sanitized, Request $request): void  $handler */
    public function submit(Closure $handler): self
    {
        $this->submitHandler = $handler;

        return $this;
    }

    public function getWizard(): Wizard
    {
        return $this->wizard ?? Wizard::make()->steps([]);
    }

    public function getCompletion(): SetupWizardCompletion
    {
        return $this->completion ?? SetupWizardCompletion::make();
    }

    /**
     * The wizard's fields as a standalone form - `rules()`, `sanitize()` and
     * `toSchema()` all work exactly as they do for any resource form, because
     * none of them ever touched a model in the first place (see `Form`'s own
     * docblock: validation is closed over the declared fields, mass
     * assignment is closed by only ever returning declared keys). Only the
     * CALLER differs - a `submit()` closure instead of `Model::create()`.
     */
    public function form(): Form
    {
        return Form::make()->schema([$this->getWizard()]);
    }

    /** @param  array<string, mixed>  $sanitized */
    public function runSubmit(array $sanitized, Request $request): void
    {
        if ($this->submitHandler !== null) {
            ($this->submitHandler)($sanitized, $request);
        }
    }
}
