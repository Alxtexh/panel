<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Schema;

/**
 * A form broken into ordered steps.
 *
 * NOT TABS WITH ARROWS. Tabs are for a form somebody dips into - open the one
 * you need, change it, save. A wizard is for a form that has an ORDER: you
 * cannot choose a plan before you have said which service, and asking for
 * billing details before either is how a form gets abandoned. The distinction is
 * whether the later steps depend on the earlier ones.
 *
 * VALIDATION STILL SEES EVERY FIELD, exactly as it does for tabs.
 * `Component::collectFields()` walks the whole tree, so a field on step 3 is
 * validated and saved whether or not step 3 was ever rendered. Anything else
 * would mean a required field could be skipped by submitting from step 1 - a
 * correctness hole wearing a layout costume.
 *
 * PER-STEP VALIDATION IS AN EXTRA, NOT A REPLACEMENT. `stepRules()` lets the
 * client check one step before advancing, so somebody is told about a bad phone
 * number on the step they typed it rather than three screens later. The full
 * ruleset still runs on submit, because the client's check is a courtesy and the
 * server's is the boundary.
 *
 * THE REFERENCE TARGET is a router-onboarding wizard measured at ~967 ms per
 * step in the system being replaced, because each step was a full server render.
 * Here every step is already in the payload; advancing is local.
 */
final class Wizard extends Component
{
    private ?string $persistInQueryString = null;

    public static function make(): self
    {
        return new self;
    }

    /** @param list<Step> $steps */
    public function steps(array $steps): self
    {
        return $this->schema($steps);
    }

    public function component(): string
    {
        return 'wizard';
    }

    /**
     * Remember the current step in the URL - see `Tabs::persistInQueryString()`
     * for the full reasoning, which is identical here: `$key` names the query
     * parameter (`?step=1` by default) because a layout node has no identity
     * of its own, and the client syncs it with `history.replaceState` rather
     * than a request, so advancing a step never costs a `pushState` entry the
     * back button would have to unwind.
     */
    public function persistInQueryString(string $key = 'step'): self
    {
        $this->persistInQueryString = $key;

        return $this;
    }

    public function toSchema(): array
    {
        return [
            ...parent::toSchema(),
            'persistInQueryString' => $this->persistInQueryString,
        ];
    }

    /**
     * The validation rules belonging to each step, in order.
     *
     * DERIVED FROM THE STEP'S OWN FIELDS rather than declared separately: a
     * second list would drift from the first, and the drift would show up as a
     * step that validates nothing while looking like it does.
     *
     * @return list<array<string, list<mixed>>>
     */
    public function stepRules(): array
    {
        $out = [];

        foreach ($this->children() as $step) {
            if (! $step instanceof Step) {
                continue;
            }

            $rules = [];

            // Static, and it takes the step's CHILDREN - the same walker the
            // form uses, so a field nested in a Section inside a Step is found
            // by exactly the code that would find it anywhere else.
            foreach (Component::collectFields($step->children()) as $field) {
                $rules[$field->key] = $field->rules();

                foreach ($field->additionalRules() as $key => $extra) {
                    $rules[$key] = $extra;
                }
            }

            $out[] = $rules;
        }

        return $out;
    }
}
