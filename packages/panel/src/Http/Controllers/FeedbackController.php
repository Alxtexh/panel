<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Validation\Rule;
use Alxtexh\Panel\PanelManager;

/**
 * Feature requests and bug reports from inside the panel.
 *
 * OFF until `Panel::feedback()`. Persistence is the host's: pass a closure
 * to `feedback($persist)`, or the validated payload is discarded after the
 * toast. Throttled per user. Context fields are captured by the client and
 * treated as untrusted input.
 */
final class FeedbackController extends Controller
{
    public const KINDS = ['feature', 'bug'];

    public const SEVERITIES = ['low', 'medium', 'high'];

    public function store(Request $request): RedirectResponse
    {
        $panel = app(PanelManager::class)->currentPanel();

        abort_unless($panel?->offersFeedback() ?? false, 404);

        $validated = $request->validate([
            'kind' => ['required', Rule::in(self::KINDS)],
            'subject' => ['required', 'string', 'max:150'],
            'body' => ['required', 'string', 'max:5000'],
            'severity' => [
                Rule::requiredIf(fn (): bool => $request->input('kind') === 'bug'),
                Rule::excludeIf($request->input('kind') !== 'bug'),
                Rule::in(self::SEVERITIES),
            ],
            'page_url' => ['nullable', 'string', 'max:2048'],
            'viewport' => ['nullable', 'string', 'max:32'],
        ]);

        $validated['user_agent'] = substr((string) $request->userAgent(), 0, 1000);

        $persist = $panel->feedbackPersister();

        if ($persist !== null) {
            $persist($validated, $request->user());
        }

        return back()->with('toast', [
            'type' => 'success',
            'message' => $validated['kind'] === 'bug'
                ? 'Thank you. The report is filed with the page and browser details.'
                : 'Thank you. The request is filed.',
        ]);
    }
}
