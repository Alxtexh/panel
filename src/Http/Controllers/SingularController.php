<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Inertia\Inertia;
use Inertia\Response;
use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Resources\SingularResource;
use Alxtexh\Panel\Support\Ability;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

/**
 * The two verbs a one-record screen has - roadmap 4.3.
 *
 * IT RENDERS THROUGH `ResourceForm`, the same page every resource edit screen
 * uses, and that reuse is the entire point: the unsaved-changes guard, the
 * validation display, the section layout and the submit flow arrive already
 * tested rather than reimplemented for a screen that differs only in having
 * no siblings. The record id is the literal `current`, which is also the URL
 * the update answers at - there is exactly one record, and its name says so.
 */
final class SingularController extends Controller
{
    public function edit(Request $request, string $singular): Response
    {
        $class = $this->guard($request, $singular);

        $form = $class::formDefinition();

        return Inertia::render('ResourceForm', [
            'schema' => [
                'v' => 1,
                'kind' => 'singular',
                'key' => $class::key(),
                'label' => $class::label(),
                'labelPlural' => $class::label(),
                'purpose' => $class::purpose(),
                'icon' => $class::icon(),
                'group' => $class::group(),
                'routes' => ['index' => '/'.$class::key()],
                'links' => $class::links(),
                'form' => $form->toSchema(),
            ],
            'record' => ['id' => 'current', 'label' => $class::label()],
            'values' => $class::values(),
            'formOptions' => $form->resolveOptions(),
            'breadcrumbs' => [['title' => $class::label(), 'href' => '/'.$class::key()]],
        ]);
    }

    public function update(Request $request, string $singular): RedirectResponse
    {
        $class = $this->guard($request, $singular);

        $form = $class::formDefinition();

        // The single source of validation truth, exactly as record writes do.
        $validated = $request->validate($form->rules());

        $class::save($form->sanitize($validated));

        return back()->with('success', $class::label().' updated.');
    }

    /** @return class-string<SingularResource> */
    private function guard(Request $request, string $singular): string
    {
        $class = app(PanelManager::class)->singular($singular);

        if ($class === null) {
            throw new NotFoundHttpException("No singular resource registered for [{$singular}].");
        }

        $ability = $class::ability();

        if ($ability !== null) {
            $user = $request->user();

            /*
             * The application's own permission method when it has one - the
             * playground's `hasPermission` knows about grants-all roles -
             * falling back to the gate. Panel-level abilities are Spatie
             * permissions, so both paths answer the same question.
             */
            $allowed = Ability::allows($user, $ability);

            abort_unless($allowed, 403);
        }

        return $class;
    }
}
