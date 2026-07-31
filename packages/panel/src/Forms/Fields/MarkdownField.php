<?php

declare(strict_types=1);

namespace PanelKit\Panel\Forms\Fields;

/**
 * Prose stored as MARKDOWN, not as HTML - roadmap 4.5.
 *
 * WHY THIS EXISTS BESIDE `RichEditorField`, which already stores formatted
 * text. The difference is what ends up in the column, and it decides what you
 * can do with the value afterwards:
 *
 *   HTML IS A RENDERING. It is hard to diff (an audit entry becomes a wall of
 *   tags), hard to re-target - the same paragraph has to reach an email, a
 *   PDF invoice and a plain-text SMS - and it must be sanitised on every write
 *   forever, because it is markup a user supplied.
 *
 *   MARKDOWN IS THE SOURCE. It diffs as text, a person can read the raw column
 *   in a database client, and it renders to whichever target the moment asks
 *   for. Release notes, help articles and template bodies all want this.
 *
 * IT IS STORED, NOT RENDERED, HERE. This field validates and stores the
 * markdown; turning it into HTML happens where it is displayed, against that
 * surface's own allowlist. A field that eagerly rendered would be storing a
 * rendering again and would have made the same trade it exists to avoid.
 *
 * THE PREVIEW IS THE CLIENT'S BUSINESS. It renders a preview beside the
 * textarea; nothing that preview does is trusted, because it is a courtesy to
 * whoever is typing rather than a boundary.
 */
final class MarkdownField extends Field
{
    private int $rows = 12;

    /** @var list<string> */
    private array $toolbar = ['bold', 'italic', 'link', 'heading', 'list', 'code'];

    public function type(): string
    {
        return 'markdown';
    }

    public function rows(int $rows): self
    {
        $this->rows = max(3, $rows);

        return $this;
    }

    /**
     * Which shortcuts the editor offers.
     *
     * A LIST, NOT A BOOLEAN PER BUTTON, because the useful statement is "this
     * field takes headings and lists" rather than eight independent flags -
     * and because a toolbar somebody has to assemble one switch at a time is
     * a toolbar that ends up inconsistent between two fields of the same kind.
     *
     * @param  list<string>  $toolbar
     */
    public function toolbar(array $toolbar): self
    {
        $this->toolbar = array_values($toolbar);

        return $this;
    }

    /**
     * Markdown is text, so the rules are text rules.
     *
     * NO `string` COERCION BEYOND THIS. A markdown field that stripped tags
     * would corrupt fenced code blocks containing HTML, which is exactly what
     * somebody writing developer documentation is trying to save.
     */
    public function rules(): array
    {
        return ['nullable', 'string', ...$this->rules];
    }

    /** @return array<string, mixed> */
    public function toSchema(): array
    {
        return [
            ...parent::toSchema(),
            'rows' => $this->rows,
            'toolbar' => $this->toolbar,
        ];
    }
}
