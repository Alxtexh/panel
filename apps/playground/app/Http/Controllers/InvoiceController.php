<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

/**
 * A printable invoice for one subscriber.
 *
 * A REAL PAGE, NOT A PDF-ONLY EXPORT. A PDF has to be generated, stored, served
 * and cleaned up, and it cannot be looked at without downloading something. A
 * page can be read, linked to, and printed - and `window.print()` on a page with
 * a print stylesheet produces the same PDF through the browser's own dialogue,
 * with none of the storage.
 *
 * MONEY IS INTEGER CENTS EVERYWHERE, and formatted once at the edge. A float
 * total is wrong by a fraction of a cent per line and visibly wrong by the
 * twentieth - the classic invoice that adds up to 99.99 when every line is
 * right. Nothing here divides until the moment a number is rendered.
 *
 * THE TOTALS ARE COMPUTED SERVER-SIDE, not in the template. A client that
 * calculates its own totals is a client that can be made to display a different
 * total from the one that will be charged.
 */
final class InvoiceController extends Controller
{
    /** VAT, in basis points, so the rate itself needs no float. */
    private const TAX_BASIS_POINTS = 1600;

    public function show(Request $request, Client $client): Response
    {
        // Route-model binding resolves through the tenant global scope, so
        // another organisation's subscriber is not found rather than forbidden.
        $client->loadMissing('plan');

        $lines = $this->lines($client);
        $subtotal = array_sum(array_column($lines, 'amountCents'));
        $tax = (int) round($subtotal * self::TAX_BASIS_POINTS / 10000);

        return Inertia::render('Invoice', [
            'breadcrumbs' => [
                ['title' => 'Clients', 'href' => '/clients'],
                ['title' => 'Invoice', 'href' => "/clients/{$client->id}/invoice"],
            ],
            'invoice' => [
                /*
                 * A STABLE, HUMAN-QUOTABLE NUMBER derived from the record rather
                 * than a counter. A counter needs its own table and a lock to
                 * stay gapless, and this is a preview of a document rather than
                 * a filed one - the moment invoices are issued for real, this is
                 * the line that has to change, and it is deliberately the only
                 * one.
                 */
                'number' => sprintf('INV-%s-%06d', now()->format('Ym'), $client->id),
                'issuedAt' => now()->toDateString(),
                'dueAt' => now()->addDays(14)->toDateString(),
                'billTo' => [
                    'name' => $client->name,
                    'phone' => $client->phone,
                    'reference' => $client->access_code,
                ],
                'lines' => $lines,
                'subtotalCents' => $subtotal,
                'taxCents' => $tax,
                'totalCents' => $subtotal + $tax,
                'taxRate' => self::TAX_BASIS_POINTS / 100,
                'currency' => 'KES',
                'terms' => 'Payment due within 14 days. Service may be suspended on overdue accounts.',
            ],
        ]);
    }

    /**
     * The billable lines.
     *
     * @return list<array<string, mixed>>
     */
    private function lines(Client $client): array
    {
        $plan = $client->plan;

        if ($plan === null) {
            return [];
        }

        return [
            [
                'description' => $plan->name.' - monthly subscription',
                'detail' => $plan->speed_mbps.' Mbps, '.strtoupper($client->plan_type),
                'quantity' => 1,
                'unitCents' => (int) $plan->price_cents,
                'amountCents' => (int) $plan->price_cents,
            ],
        ];
    }
}
