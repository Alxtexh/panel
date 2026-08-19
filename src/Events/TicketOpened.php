<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Alxtexh\Panel\Models\Ticket;

/**
 * Somebody opened a ticket, and the row exists.
 *
 * AN EVENT RATHER THAN A DIRECT CALL, which is the one change made while
 * promoting this. In the reference app the model called the Telegram announcer
 * itself - fine when there is one thing to tell, and a dead end the moment an
 * installation wants a second: a webhook, an email to a rota, a row in
 * somebody's own queue. A consumer cannot edit a packaged model to add theirs.
 *
 * DISPATCHED FROM `created`, NOT `creating`. An alert naming ticket #0 because
 * the id had not been assigned is an alert nobody can act on.
 *
 * LISTENERS MUST NOT THROW. A customer's ticket has to be saved whether or not
 * a chat API answered - a failed notification is one somebody misses, a failed
 * save is a complaint that vanished. The packaged listener holds to that; one
 * an application adds is its own responsibility.
 */
final class TicketOpened
{
    use Dispatchable;

    public function __construct(public readonly Ticket $ticket) {}
}
