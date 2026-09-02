<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Inertia\Response;
use Alxtexh\Panel\Panel;
use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Support\SetupWizard;
use Alxtexh\Panel\Support\SetupWizardState;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

/**
 * The full-screen first-run wizard `Panel::setupWizard()` declares.
 *
 * ONE SUBMIT, LIKE THE SCHEMA COMPONENT IT RENDERS. `store()` validates and
 * saves everything together - see `SetupWizard`'s own docblock for why there
 * is no per-step endpoint here the way there is no per-step Save button in
 * the Vue wizard it renders.
 */
final class SetupWizardController extends Controller
{
    public function show(Request $request): Response|RedirectResponse
    {
        $panel = $this->panel();
        $wizard = $this->wizardOrFail($panel);

        if (SetupWizardState::isDone($request)) {
            $home = Route::has($panel->getRouteName().'pages.dashboard')
                ? route($panel->getRouteName().'pages.dashboard')
                : url('/'.trim($panel->getPath(), '/'));

            return redirect($home);
        }

        return Inertia::render('SetupWizard', [
            'wizard' => ['nodes' => [$wizard->getWizard()->toSchema()]],
            'values' => [],
            'options' => $wizard->form()->resolveOptions(),
            'errors' => [],
            'completed' => false,
            'completion' => null,
            'skipUrl' => route($panel->getRouteName().'setup-wizard.skip'),
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $panel = $this->panel();
        $wizard = $this->wizardOrFail($panel);

        $validated = Validator::make($request->all(), $wizard->form()->rules())->validate();
        $sanitized = $wizard->form()->sanitize($validated);

        DB::transaction(function () use ($wizard, $sanitized, $request): void {
            $wizard->runSubmit($sanitized, $request);
        });

        SetupWizardState::persistDone($request);

        return redirect()
            ->route($panel->getRouteName().'setup-wizard.complete')
            ->withCookie(SetupWizardState::doneCookie(true));
    }

    public function skip(Request $request): RedirectResponse
    {
        $panel = $this->panel();
        $this->wizardOrFail($panel);

        SetupWizardState::persistDone($request);

        $home = Route::has($panel->getRouteName().'pages.dashboard')
            ? route($panel->getRouteName().'pages.dashboard')
            : url('/'.trim($panel->getPath(), '/'));

        return redirect($home)->withCookie(SetupWizardState::doneCookie(true));
    }

    public function complete(Request $request): Response
    {
        $panel = $this->panel();
        $wizard = $this->wizardOrFail($panel);

        return Inertia::render('SetupWizard', [
            'wizard' => ['nodes' => []],
            'values' => [],
            'errors' => [],
            'completed' => true,
            'completion' => $wizard->getCompletion()->toSchema($request),
            'skipUrl' => route($panel->getRouteName().'setup-wizard.skip'),
        ]);
    }

    private function panel(): Panel
    {
        $panel = app(PanelManager::class)->currentPanel();

        abort_if($panel === null, 404);

        return $panel;
    }

    private function wizardOrFail(Panel $panel): SetupWizard
    {
        $resolver = $panel->setupWizardResolver();

        if (! $panel->offersSetupWizard() || $resolver === null) {
            throw new NotFoundHttpException;
        }

        return $resolver();
    }
}
