<?php

declare(strict_types=1);

namespace PanelKit\Panel\Schema;

/**
 * A notice inside a form, where the thing it warns about is.
 *
 * THE POINT IS THE PLACEMENT. "Saving this emails every customer on the plan"
 * belongs beside the plan selector, not in a toast after the fact and not in a
 * paragraph at the top that people scrolled past. A form that surprises
 * somebody has usually told them somewhere they were not looking.
 *
 * IT IS NOT A VALIDATION ERROR. Errors are per-field, arrive from the server,
 * and go away when the value is fixed. A callout is authored, always present,
 * and describes a consequence rather than a mistake - so it never borrows the
 * error styling, or people learn to read red as "I did something wrong" and
 * dismiss it.
 */
final class Callout extends Component
{
    public const INFO = 'info';

    public const WARNING = 'warning';

    public const DANGER = 'danger';

    public const SUCCESS = 'success';

    private ?string $title = null;

    private function __construct(
        private readonly string $body,
        private readonly string $tone,
    ) {}

    public static function make(string $body, string $tone = self::INFO): self
    {
        return new self($body, $tone);
    }

    public static function warning(string $body): self
    {
        return new self($body, self::WARNING);
    }

    /**
     * DANGER IS FOR WHAT CANNOT BE UNDONE, and nothing else. A tone that gets
     * used for "check this carefully" stops meaning "this deletes data", and
     * the one time it matters it reads like the other twelve.
     */
    public static function danger(string $body): self
    {
        return new self($body, self::DANGER);
    }

    public function title(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function component(): string
    {
        return 'callout';
    }

    public function toSchema(): array
    {
        return [
            ...parent::toSchema(),
            'body' => $this->body,
            'tone' => $this->tone,
            'title' => $this->title,
        ];
    }
}
