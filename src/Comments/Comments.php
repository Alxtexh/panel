<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Comments;

/**
 * Opt-in threaded comments on a resource's record page.
 *
 * DECLARE VIA `Resource::comments()`. When null (default), comment routes 404
 * and ResourceView ships no comments section. Zero client cost until declared.
 */
final class Comments
{
    private string $label = 'Comments';

    /** When true, only the dedicated `comment` ability may post (not `update`). */
    private bool $commentAbilityOnly = false;

    public static function make(): self
    {
        return new self;
    }

    public function label(string $label): self
    {
        $this->label = $label;

        return $this;
    }

    /**
     * Require the policy's `comment` ability instead of accepting `update`.
     *
     * Default: create when the actor may `update` OR `comment` on the record.
     */
    public function commentAbilityOnly(bool $only = true): self
    {
        $this->commentAbilityOnly = $only;

        return $this;
    }

    public function getLabel(): string
    {
        return $this->label;
    }

    public function requiresCommentAbilityOnly(): bool
    {
        return $this->commentAbilityOnly;
    }

    /** @return array{label: string, commentAbilityOnly: bool} */
    public function toSchema(): array
    {
        return [
            'label' => $this->label,
            'commentAbilityOnly' => $this->commentAbilityOnly,
        ];
    }
}
