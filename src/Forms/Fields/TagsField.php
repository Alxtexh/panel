<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Forms\Fields;

/**
 * Free-form labels somebody types themselves.
 *
 * THE DIFFERENCE FROM EVERY OTHER MULTI-VALUE FIELD IS THAT THERE IS NO OPTION
 * LIST. A multi-select and a checkbox list validate what was submitted against a
 * set the server declared; here the set is whatever people type, which means the
 * only things that can be enforced are shape and size. Being clear-eyed about
 * that is the point: this field is for notes-like data - "vip", "night shift",
 * "chased twice" - and NOT for anything another part of the system will branch
 * on. A tag that changes behaviour is a status column wearing a disguise, and it
 * will be spelled three ways within a month.
 *
 * THE LIMITS ARE NOT COSMETIC. An unbounded array of unbounded strings is a JSON
 * column somebody can fill with a megabyte of text through an ordinary form, so
 * `max` and `maxLength` both have defaults rather than waiting to be set.
 *
 * SUGGESTIONS ARE A HINT AND NOTHING MORE. They help people reuse a tag they
 * already have instead of inventing a synonym; they are not a validation rule,
 * and treating them as one would quietly turn this into a select that refuses
 * anything new - which is the one thing it exists to allow.
 */
final class TagsField extends Field
{
    private int $max = 25;

    private int $maxLength = 40;

    /** @var list<string> */
    private array $suggestions = [];

    public function max(int $max): static
    {
        $this->max = max(1, $max);

        return $this;
    }

    public function maxLength(int $characters): static
    {
        $this->maxLength = max(1, $characters);

        return $this;
    }

    /** @param list<string> $suggestions */
    public function suggestions(array $suggestions): static
    {
        $this->suggestions = array_values($suggestions);

        return $this;
    }

    public function type(): string
    {
        return 'tags';
    }

    protected function typeRules(): array
    {
        return ['array', 'max:'.$this->max];
    }

    /**
     * EACH TAG IS A SHORT STRING, checked individually.
     *
     * Without this the field validates that an array is an array and nothing
     * else - so one element could be a 4MB string, or an object, or another
     * array. The member rule is where a free-form field gets its only real
     * boundary.
     *
     * @return array<string, list<mixed>>
     */
    public function additionalRules(): array
    {
        return [
            $this->key.'.*' => ['string', 'max:'.$this->maxLength],
        ];
    }

    public function toSchema(): array
    {
        return [
            ...parent::toSchema(),
            'max' => $this->max,
            'maxLength' => $this->maxLength,
            'suggestions' => $this->suggestions,
        ];
    }
}
