<?php

declare(strict_types=1);

namespace PanelKit\Panel\Http\Controllers;

use PanelKit\Panel\Support\Ability;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Inertia\Response;
use PanelKit\Panel\Ai\AiCredentials;
use PanelKit\Panel\PanelManager;

/**
 * The assistant's provider and key, as a settings page - E.1's UI half.
 *
 * MOVED FROM THE REFERENCE APP. `AiCredentials` was packaged from the start and
 * nothing packaged ever offered a way to set one - the assistant shipped with a
 * key that could only come from the deploy's environment, and an installation
 * wanting its own had to build this form.
 *
 * `AiCredentials` already holds every guarantee (encrypted at rest, masked
 * out, layered over the environment); this controller is a form over that
 * tested seam and adds exactly one thing: the gate. `manage_assistant` is
 * its own ability because whoever holds it decides which AI provider reads
 * the organisation's questions and pays that provider's bill - an act worth
 * granting and withholding on its own, separate from managing roles.
 *
 * THE KEY FIELD IS ALWAYS EMPTY ON RENDER. The form never receives the
 * stored secret - only `maskedKey()`'s last four characters as a caption -
 * so "saved" and "shown" stay different states: entering a new key replaces
 * the old one, and leaving the field blank on an unrelated visit changes
 * nothing because blank never submits.
 */
final class AssistantSettingsController
{
    /** A URL under the panel this screen is mounted in. */
    private function at(string $path): string
    {
        $prefix = app(PanelManager::class)->currentPanel()?->getPath() ?? '';

        return url(trim($prefix.'/'.$path, '/'));
    }

    public function edit(Request $request, AiCredentials $credentials): Response
    {
        abort_unless(Ability::allows($request->user(), 'manage_assistant'), 403);

        return Inertia::render('settings/Assistant', [
            /*
             * WHERE THE FORM POSTS, resolved from the current panel's path -
             * the same reason `OperationsController` does it: a packaged screen
             * has no Wayfinder output to import, and a second portal must post
             * to itself rather than into the first.
             */
            'routes' => [
                'update' => $this->at('settings/assistant'),
                'destroy' => $this->at('settings/assistant'),
            ],
            'providers' => AiCredentials::PROVIDERS,
            'provider' => $credentials->provider(),
            'maskedKey' => $credentials->maskedKey(),
            /*
             * Which SOURCE currently powers the assistant, so the page can say
             * "running on the deploy's key" rather than implying nothing works
             * until a key is pasted here.
             */
            'available' => $credentials->available(),
            'byok' => $credentials->configured(),
        ]);
    }

    public function update(Request $request, AiCredentials $credentials): RedirectResponse
    {
        abort_unless(Ability::allows($request->user(), 'manage_assistant'), 403);

        $validated = $request->validate([
            'provider' => ['required', 'string', Rule::in(AiCredentials::PROVIDERS)],
            // Providers disagree about shape; length is the only honest
            // client-side check. Whether it WORKS is learned from the first
            // assistant call, which degrades to a sentence rather than a 500.
            'key' => ['required', 'string', 'min:8', 'max:512'],
        ]);

        $credentials->set($validated['provider'], $validated['key'], $request->user()->name);

        return back()->with('success', 'Assistant credentials saved.');
    }

    public function destroy(Request $request, AiCredentials $credentials): RedirectResponse
    {
        abort_unless(Ability::allows($request->user(), 'manage_assistant'), 403);

        $credentials->clear($request->user()->name);

        return back()->with('success', 'Assistant credentials removed.');
    }
}
