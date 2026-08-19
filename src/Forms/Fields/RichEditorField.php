<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Forms\Fields;

use DOMAttr;
use DOMDocument;
use DOMElement;
use DOMNode;
use InvalidArgumentException;

/**
 * Formatted prose, stored as HTML.
 *
 * THE ONLY THING THAT MATTERS HERE IS THE SANITISER, and it runs on the SERVER.
 * A rich editor is a control whose entire purpose is to produce markup, which
 * makes it the one field where a user legitimately submits HTML that will later
 * be rendered as HTML. Everything else in this class is a toolbar.
 *
 * WHAT THE CLIENT SENDS IS NEVER WHAT IS STORED. `contenteditable` produces
 * whatever the browser felt like, a paste carries a whole document's worth of
 * markup from Word or a web page, and a hostile client sends whatever it wants.
 * Client-side cleaning is a courtesy to the person typing; it is not a boundary,
 * because there is no client-side code an attacker cannot skip.
 *
 * IT IS AN ALLOWLIST, AND IT IS PARSED, NOT MATCHED. Two decisions worth stating
 * because the alternatives are the classic ways this goes wrong:
 *
 *   NOT A DENYLIST. Blocking `<script>` leaves `<iframe>`, `<object>`, `<svg>`,
 *   `<math>`, `<form>`, and every attribute starting `on`. A list of what is
 *   permitted cannot be incomplete in the dangerous direction - a tag nobody
 *   thought about is dropped rather than passed.
 *
 *   NOT A REGEX. `preg_replace` over HTML loses to `<img src=x onerror=alert(1)>`
 *   written with a newline in the attribute name, or a `<scr<script>ipt>` that
 *   becomes valid after the naive replacement. `DOMDocument` parses the markup
 *   the way a browser would and the tree is rebuilt from what survives, so the
 *   output is whatever the allowlist permits and nothing else by construction.
 *
 * URLS ARE SCHEME-CHECKED SEPARATELY, because an anchor is allowed and
 * `javascript:` is a scheme, not a tag. `http`, `https`, `mailto` and relative
 * paths only - a `data:` URL is how an SVG payload gets in through an `href`
 * that passed every other check.
 */
final class RichEditorField extends Field
{
    /**
     * Tags that survive, and which attributes each may keep.
     *
     * Deliberately small. Every entry is a thing an operator writing a note
     * about a subscriber actually needs; nothing here can load a resource,
     * submit anything, or execute.
     *
     * @var array<string, list<string>>
     */
    private const ALLOWED = [
        'p' => [],
        'br' => [],
        'strong' => [],
        'b' => [],
        'em' => [],
        'i' => [],
        'u' => [],
        's' => [],
        'h2' => [],
        'h3' => [],
        'ul' => [],
        'ol' => [],
        'li' => [],
        'blockquote' => [],
        'code' => [],
        'pre' => [],
        'a' => ['href'],
    ];

    /** Schemes an `href` may use. Everything else is stripped to a plain link. */
    private const SCHEMES = ['http', 'https', 'mailto'];

    /** @var list<string> */
    private array $toolbar = ['bold', 'italic', 'heading', 'list', 'link'];

    private ?int $maxLength = null;

    public function type(): string
    {
        return 'richtext';
    }

    /**
     * Which controls the toolbar offers.
     *
     * PRESENTATION ONLY. Removing `link` from the toolbar hides the button; it
     * does NOT stop an anchor being submitted, because the sanitiser is what
     * decides that and it does not consult this list. Wiring the two together
     * would make a cosmetic choice look like a security control.
     *
     * @param  list<string>  $controls
     */
    public function toolbar(array $controls): self
    {
        $known = ['bold', 'italic', 'underline', 'strike', 'heading', 'list', 'link', 'quote', 'code'];

        foreach ($controls as $control) {
            if (! in_array($control, $known, true)) {
                throw new InvalidArgumentException("[{$control}] is not a known editor control.");
            }
        }

        $this->toolbar = array_values($controls);

        return $this;
    }

    /** A ceiling on the stored markup, in characters. */
    public function maxLength(int $max): self
    {
        $this->maxLength = $max;

        return $this;
    }

    /** @return list<mixed> */
    protected function typeRules(): array
    {
        return array_values(array_filter([
            'string',
            $this->maxLength !== null ? "max:{$this->maxLength}" : null,
        ]));
    }

    /**
     * Parse, walk, and rebuild from the allowlist.
     *
     * The `max` rule above counts the RAW submitted length, and this runs after
     * it - so a caller cannot use markup that will be stripped to inflate the
     * count past the limit and have the remainder stored.
     */
    public function transformForStorage(mixed $value): mixed
    {
        if (! is_string($value) || trim($value) === '') {
            return null;
        }

        $clean = self::sanitize($value);

        // Markup that was ENTIRELY disallowed leaves nothing behind. Storing an
        // empty `<p></p>` would render as a blank line nobody typed.
        return trim(strip_tags($clean)) === '' && ! str_contains($clean, '<br') ? null : $clean;
    }

    /**
     * The sanitiser, public so it can be tested directly and reused.
     *
     * A hostile string is the interesting input, and a private method would mean
     * only ever testing it through a form request - which proves the field is
     * wired up, not that the sanitiser is correct.
     */
    public static function sanitize(string $html): string
    {
        $document = new DOMDocument;

        /*
         * The wrapper and the encoding declaration are both load-bearing.
         *
         * Without a single root, `loadHTML` invents `<html><body>` anyway and
         * the walk has to guess where the content starts. Without the meta
         * charset, DOMDocument assumes ISO-8859-1 and mangles every non-ASCII
         * character - names, in this application.
         *
         * Errors are suppressed because malformed input is EXPECTED here: this
         * is a sanitiser, and refusing to parse hostile markup would just mean
         * refusing to clean it.
         */
        $previous = libxml_use_internal_errors(true);

        $document->loadHTML(
            '<?xml encoding="UTF-8"?><div id="pk-root">'.$html.'</div>',
            LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD
        );

        libxml_clear_errors();
        libxml_use_internal_errors($previous);

        $root = $document->getElementById('pk-root');

        if ($root === null) {
            return '';
        }

        self::walk($root);

        $out = '';

        foreach ($root->childNodes as $child) {
            $out .= $document->saveHTML($child);
        }

        return trim($out);
    }

    /**
     * Depth-first, removing what is not allowed.
     *
     * A DISALLOWED ELEMENT IS UNWRAPPED, NOT DELETED - its children move up in
     * its place. Deleting the subtree would mean a paste wrapped in a stray
     * `<div>` silently loses all of its text, which reads as the editor eating
     * the operator's work. The exception is anything that can EXECUTE or LOAD:
     * a `<script>`'s children are its payload, so those go with it.
     */
    private static function walk(DOMNode $node): void
    {
        // A static snapshot: the live NodeList shifts as children are moved.
        $children = iterator_to_array($node->childNodes);

        foreach ($children as $child) {
            if (! $child instanceof DOMElement) {
                // Text and everything else that is not an element stays as it
                // is; DOMDocument has already escaped it.
                continue;
            }

            $tag = strtolower($child->nodeName);

            if (in_array($tag, ['script', 'style', 'iframe', 'object', 'embed', 'svg', 'math', 'form'], true)) {
                $child->parentNode?->removeChild($child);

                continue;
            }

            if (! array_key_exists($tag, self::ALLOWED)) {
                self::walk($child);
                self::unwrap($child);

                continue;
            }

            self::stripAttributes($child, self::ALLOWED[$tag]);
            self::walk($child);
        }
    }

    /** Replace an element with its own children. */
    private static function unwrap(DOMElement $element): void
    {
        $parent = $element->parentNode;

        if ($parent === null) {
            return;
        }

        while ($element->firstChild !== null) {
            $parent->insertBefore($element->firstChild, $element);
        }

        $parent->removeChild($element);
    }

    /**
     * Keep only the named attributes, and only if their value is acceptable.
     *
     * This is what removes `onerror`, `onclick`, `style`, `srcset` and every
     * other attribute - including ones that do not exist yet. Nothing is named
     * as forbidden; anything not named as permitted is gone.
     *
     * @param  list<string>  $allowed
     */
    private static function stripAttributes(DOMElement $element, array $allowed): void
    {
        $attributes = iterator_to_array($element->attributes ?? []);

        foreach ($attributes as $attribute) {
            if (! $attribute instanceof DOMAttr) {
                continue;
            }

            $name = strtolower($attribute->nodeName);

            if (! in_array($name, $allowed, true)) {
                $element->removeAttribute($attribute->nodeName);

                continue;
            }

            if ($name === 'href' && ! self::isSafeUrl($attribute->nodeValue ?? '')) {
                $element->removeAttribute($attribute->nodeName);
            }
        }

        /*
         * An external link opens in a new tab WITHOUT handing it a window
         * reference. `target="_blank"` alone lets the opened page rewrite this
         * one through `window.opener`; `rel` is what closes that.
         */
        if ($element->hasAttribute('href')) {
            $element->setAttribute('target', '_blank');
            $element->setAttribute('rel', 'noopener noreferrer nofollow');
        }
    }

    /**
     * Relative paths, and the three schemes a note legitimately needs.
     *
     * `javascript:` is the obvious one. `data:` matters just as much - it is how
     * an SVG carrying a script gets in through an attribute that passed every
     * tag-level check.
     */
    private static function isSafeUrl(string $url): bool
    {
        // Control characters and whitespace inside a scheme are a bypass:
        // `java\nscript:` is treated as `javascript:` by some parsers.
        $normalised = strtolower(preg_replace('/[\x00-\x20]/', '', $url) ?? '');

        if ($normalised === '') {
            return false;
        }

        // No scheme at all: a relative path or a fragment. Both are fine.
        if (! preg_match('/^([a-z0-9+.-]+):/', $normalised, $matches)) {
            return true;
        }

        return in_array($matches[1], self::SCHEMES, true);
    }

    /** @return array<string, mixed> */
    public function toSchema(): array
    {
        return [
            ...parent::toSchema(),
            'toolbar' => $this->toolbar,
            'maxLength' => $this->maxLength,
        ];
    }
}
