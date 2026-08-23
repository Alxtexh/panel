<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Forms\Fields;

use InvalidArgumentException;

/**
 * Code, kept exactly as it was typed - roadmap 4.5.
 *
 * WHAT A TEXTAREA GETS WRONG ABOUT CODE. Nothing about a plain textarea is
 * hostile to prose and everything about it is hostile to a config snippet: a
 * proportional font makes columns not line up, Tab moves focus out of the
 * field instead of indenting, and there is no line number to quote when
 * somebody says "the error is on line 14". Those are not decorations - they
 * are the difference between a field somebody can use and one they paste
 * into an editor and back.
 *
 * THE LANGUAGE IS DECLARED, NOT DETECTED. Guessing is wrong often enough to
 * matter - JSON and JavaScript are indistinguishable in short samples - and a
 * mis-highlight makes an operator distrust the whole screen. It is also what
 * lets the client validate: a `json` field can say "that is not valid JSON"
 * beside the cursor rather than after a failed save.
 *
 * WHITESPACE IS NOT TRIMMED, and that is deliberate against the framework's
 * usual instinct. Trailing spaces are meaningful in markdown inside a code
 * block, and leading indentation is the whole shape of a YAML document.
 */
final class CodeField extends Field
{
    /** Languages the client can highlight and, where relevant, validate. */
    public const LANGUAGES = ['json', 'yaml', 'sql', 'php', 'javascript', 'html', 'css', 'bash', 'plain'];

    private string $language = 'plain';

    private int $rows = 14;

    public function type(): string
    {
        return 'code';
    }

    public function language(string $language): self
    {
        if (! in_array($language, self::LANGUAGES, true)) {
            throw new InvalidArgumentException(
                "[{$language}] is not a supported code language. One of: "
                .implode(', ', self::LANGUAGES).'.'
            );
        }

        $this->language = $language;

        return $this;
    }

    public function rows(int $rows): self
    {
        $this->rows = max(3, $rows);

        return $this;
    }

    /**
     * A `json` field must contain JSON - checked on the SERVER.
     *
     * The editor checks as you type, which is a courtesy; this is the
     * boundary. Without it a malformed document reaches a column that
     * something later `json_decode`s, and the failure surfaces days away
     * from the screen that accepted it.
     */
    public function rules(): array
    {
        return [
            'nullable',
            'string',
            ...($this->language === 'json' ? ['json'] : []),
            ...$this->rules,
        ];
    }

    /** @return array<string, mixed> */
    public function toSchema(): array
    {
        return [
            ...parent::toSchema(),
            'language' => $this->language,
            'rows' => $this->rows,
        ];
    }
}
