<?php

declare(strict_types=1);

namespace PanelKit\Panel\Documents;

use InvalidArgumentException;

/**
 * Every document kind the installation knows about.
 *
 * A SINGLETON REGISTRY, resolved from the container, in the same shape as the
 * field-control registry on the client. Registration happens at boot - from a
 * plugin's service provider, or from the application's - and never per request.
 *
 * REGISTERING THE SAME ID TWICE REPLACES, and that is the override mechanism
 * rather than an accident. An application that wants its own invoice - different
 * blocks, different fields, a tax line we do not model - registers `invoice`
 * after us and wins, without forking the designer, the preview or the print
 * route. Warning about it would make the supported path look like a mistake.
 */
final class DocumentKinds
{
    /** @var array<string, DocumentKind> */
    private array $kinds = [];

    public function register(DocumentKind $kind): void
    {
        $this->kinds[$kind->id()] = $kind;
    }

    public function has(string $id): bool
    {
        return isset($this->kinds[$id]);
    }

    /**
     * The kind, or a refusal naming what IS registered.
     *
     * THROWS RATHER THAN RETURNING NULL, because every caller has already
     * decided the kind exists - a route bound to `/documents/invoice`, a stored
     * template with `kind = 'invoice'`. A null here would be checked in three
     * places and forgotten in a fourth, and the fourth renders a blank designer.
     *
     * The message lists the registered ids because the cause is nearly always a
     * service provider that never ran or a typo in one.
     */
    public function get(string $id): DocumentKind
    {
        return $this->kinds[$id] ?? throw new InvalidArgumentException(
            "No document kind [{$id}] is registered. Registered: ".
            (implode(', ', array_keys($this->kinds)) ?: 'none').'.'
        );
    }

    /** @return array<string, DocumentKind> */
    public function all(): array
    {
        return $this->kinds;
    }

    /** @return list<string> */
    public function ids(): array
    {
        return array_keys($this->kinds);
    }
}
