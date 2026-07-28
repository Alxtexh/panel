<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Feedback;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

/**
 * Filing a feature request or a bug report from inside the panel.
 *
 * ONE ENDPOINT FOR BOTH, because they differ by one field. Two endpoints would
 * duplicate the identity handling and the context capture, which are the parts
 * that must not drift.
 *
 * THROTTLED, and not as a formality. This is an authenticated endpoint that
 * writes a row carrying free text, so it is the cheapest way in the panel to
 * fill a tenant's storage. The limit is per user rather than per IP: an office
 * behind one NAT address is one IP and many legitimate reporters, so an
 * IP-keyed limit punishes the wrong people and misses the actual abuser.
 */
final class FeedbackController extends Controller
{
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'kind' => ['required', Rule::in(Feedback::KINDS)],
            'subject' => ['required', 'string', 'max:150'],
            'body' => ['required', 'string', 'max:5000'],

            /*
             * REQUIRED FOR BUGS, FORBIDDEN FOR FEATURES. `required_if` alone
             * would let a feature request carry a severity, which then shows up
             * in a triage list sorted by it - a request that outranks real bugs
             * because a field nobody meant to send was populated.
             */
            'severity' => [
                Rule::requiredIf(fn (): bool => $request->input('kind') === 'bug'),
                Rule::excludeIf($request->input('kind') !== 'bug'),
                Rule::in(Feedback::SEVERITIES),
            ],

            /*
             * Context is CAPTURED BY THE CLIENT and therefore untrusted like any
             * other input - it is bounded and stored, never interpreted. The
             * page URL in particular is rendered in a triage screen later, so it
             * is length-capped here rather than being trusted to be a URL.
             */
            'page_url' => ['nullable', 'string', 'max:2048'],
            'viewport' => ['nullable', 'string', 'max:32'],
        ]);

        /*
         * BUILT THEN SAVED, not `create()`-then-fill.
         *
         * `create()` inserts immediately, and `tenant_id` is NOT NULL - so
         * assigning identity afterwards fails on the insert that already
         * happened. Identity has to be on the model before it touches the
         * database, which is also the honest ordering: a row that exists
         * without a tenant, even briefly, is a row the scope cannot protect.
         */
        $feedback = new Feedback($validated);

        $feedback->user_agent = substr((string) $request->userAgent(), 0, 1000);

        // From the request's own identity, never from its body. See the model's
        // note on why `fillable` excludes these.
        $feedback->forceFill([
            'tenant_id' => $request->user()->tenant_id,
            'user_id' => $request->user()->id,
        ])->save();

        return back()->with('toast', [
            'type' => 'success',
            'message' => $validated['kind'] === 'bug'
                ? 'Thank you - the report is filed with the page and browser details.'
                : 'Thank you - the request is filed.',
        ]);
    }
}
