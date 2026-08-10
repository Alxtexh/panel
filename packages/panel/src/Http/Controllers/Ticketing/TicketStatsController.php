<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Http\Controllers\Ticketing;

use Illuminate\Http\JsonResponse;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Gate;
use Alxtexh\Panel\Models\Ticket;
use Alxtexh\Panel\Support\TicketStats;

/**
 * The queue's numbers.
 *
 * AUTHORISED AS `viewAny` ON THE TICKET, which is the operator's grant. A
 * summary is a read of every ticket in the organisation at once, so it needs
 * the ability that entitles somebody to the whole queue - not the weaker one
 * that lets a subscriber see their own. Counting rows somebody may not list
 * would leak the shape of the queue to them.
 */
final class TicketStatsController extends Controller
{
    public function __invoke(): JsonResponse
    {
        Gate::authorize('viewAny', Ticket::class);

        return response()->json(TicketStats::for());
    }
}
