<?php

declare(strict_types=1);

namespace PanelKit\Panel\Http\Controllers\Ticketing;

use Illuminate\Routing\Controller;
use PanelKit\Panel\Models\Ticket;
use PanelKit\Panel\Ticketing\TicketResource;
use Illuminate\Support\Facades\Gate;
use Inertia\Response;

/**
 * The analysis screen.
 *
 * A PAGE, NOT A STRIP ABOVE THE QUEUE, and the split is the point. The queue
 * answers "what do I work on next" and is opened forty times a day; this
 * answers "are we coping" and is opened weekly by somebody deciding staffing.
 * Stacking them put a fortnight's chart above the row somebody was reaching
 * for.
 *
 * IT SHIPS NO FIGURES ITSELF - the page fetches them from the same endpoint
 * the strip used, so there is one query behind one authorisation rather than
 * two paths to the same numbers that can disagree.
 */
final class TicketAnalysisController extends Controller
{
    public function __invoke(): Response
    {
        Gate::authorize('viewAny', Ticket::class);

        return inertia('TicketAnalysis', [
            // Where the queue lives, resolved from the resource rather than
            // written here - this page is mounted in whichever panel the
            // plugin was installed into.
            'queueUrl' => TicketResource::baseUrl(),
        ]);
    }
}
