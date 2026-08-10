<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Support;

/**
 * Where the ticket tables live, asked rather than assumed.
 *
 * TWO REASONS THIS IS NOT A CONSTANT.
 *
 * `tickets` IS A NAME AN APPLICATION MIGHT ALREADY USE. A package that creates
 * it in somebody else's database has taken a decision that was not its to take,
 * and the failure is not a clean collision - it is a migration that succeeds
 * against a table holding somebody else's data. Every other table this package
 * ships is `panel_*`; these default the same way.
 *
 * AND AN INSTALLATION THAT PREDATES THE PACKAGED VERSION ALREADY HAS TABLES.
 * The reference app built ticketing before it was promoted and has `tickets` /
 * `ticket_replies` with real rows in them. Pointing config at those is the whole
 * migration - no data moves, no downtime, no rename on a live table.
 *
 * READ THROUGH HERE, NEVER HARDCODED. A model, a migration and a query builder
 * that each spell the name themselves are three places to keep in step, and the
 * one that drifts fails at runtime against a table that does not exist.
 */
final class TicketTables
{
    public static function tickets(): string
    {
        return (string) config('panel.ticketing.tables.tickets', 'panel_tickets');
    }

    public static function replies(): string
    {
        return (string) config('panel.ticketing.tables.replies', 'panel_ticket_replies');
    }
}
