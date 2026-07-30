<?php

declare(strict_types=1);

namespace PanelKit\Panel\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;
use PanelKit\Panel\Documents\DocumentKinds;
use PanelKit\Panel\Documents\DocumentRenderer;
use PanelKit\Panel\Documents\DocumentTemplate;
use PanelKit\Panel\Forms\Form;
use PanelKit\Panel\PanelManager;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

/**
 * Designing the documents that leave the system.
 *
 * FOUR ENDPOINTS AND ONE RENDERER. The designer, the save, the live preview and
 * the printable page all resolve the document through `DocumentRenderer`, so the
 * thing on the right of the designer and the thing that comes out of a printer
 * are produced by the same code. Any other arrangement eventually ships a
 * preview that lies.
 */
final class DocumentTemplateController extends Controller
{
    /**
     * The list of designable documents.
     *
     * IT SAYS WHICH ONES HAVE BEEN DESIGNED. A row of identical cards tells
     * somebody nothing about where they left off, and "still on the shipped
     * defaults" is the single most useful fact about a template.
     */
    public function index(DocumentKinds $kinds, PanelManager $panels): Response
    {
        $saved = DocumentTemplate::query()->pluck('version', 'kind');

        return Inertia::render('documents/Templates', [
            'prefix' => $this->prefix($panels),
            'kinds' => array_values(array_map(static fn ($kind): array => [
                'id' => $kind->id(),
                'label' => $kind->label(),
                'description' => $kind->description(),
                'version' => $saved[$kind->id()] ?? null,
            ], $kinds->all())),
        ]);
    }

    /**
     * The designer: the form on the left, the document on the right.
     */
    public function edit(string $kind, DocumentKinds $kinds, PanelManager $panels, DocumentRenderer $renderer): Response
    {
        $documentKind = $this->kindOr404($kind, $kinds);
        $template = DocumentTemplate::forKind($documentKind);
        $form = Form::make()->schema($documentKind->fields());

        return Inertia::render('documents/TemplateDesigner', [
            'prefix' => $this->prefix($panels),
            'kind' => [
                'id' => $documentKind->id(),
                'label' => $documentKind->label(),
                'description' => $documentKind->description(),
                'variables' => $documentKind->variables(),
            ],

            'schema' => $form->toSchema(),
            'options' => $form->resolveOptions(),
            'values' => [...$documentKind->defaults(), ...($template->settings ?? [])],

            'template' => [
                'exists' => $template->exists,
                'version' => (int) ($template->version ?? 1),
            ],

            /*
             * THE RECORDS THE PREVIEW CAN USE. Sample data never has a
             * 40-character company name or fourteen line items, which are
             * exactly the things that break a layout - so previewing against a
             * real record is the difference between a template that looks right
             * and one that is right.
             */
            'records' => $documentKind->records(),

            // The first paint, so the preview is never briefly empty. A designer
            // whose preview arrives a request later teaches somebody it is
            // broken before they have typed anything.
            'document' => $renderer->render($documentKind, $template),
        ]);
    }

    /**
     * Save, and count the change.
     *
     * VALIDATED THROUGH THE KIND'S OWN FORM, not a hand-written rule list. The
     * kind declares its fields once and both halves - the control that draws
     * them and the rule that checks them - come from that declaration, so a
     * plugin's kind is validated as strictly as ours with nothing extra to
     * write. A hand-written list here would be the copy that drifts.
     */
    public function update(Request $request, string $kind, DocumentKinds $kinds): RedirectResponse
    {
        $documentKind = $this->kindOr404($kind, $kinds);
        $form = Form::make()->schema($documentKind->fields());

        $settings = $form->sanitize(
            $request->validate($form->rules())
        );

        DocumentTemplate::forKind($documentKind)
            ->applySettings($documentKind, $settings, $request->user()?->getAuthIdentifier());

        return back()->with('success', $documentKind->label().' template saved.');
    }

    /**
     * The live preview.
     *
     * IT TAKES THE FORM'S CURRENT VALUES, unsaved, and returns the document they
     * describe. Rendering the STORED settings would give a preview that lags one
     * save behind - which is worse than no preview at all, because it looks live.
     *
     * A PLAIN JSON ENDPOINT, not an Inertia partial reload. The preview is data
     * for a component that is already on screen; a partial reload would rebuild
     * the form's props and take the cursor out of the textarea somebody is
     * typing in.
     *
     * VALIDATION IS DELIBERATELY NOT RUN HERE. A preview of a half-finished form
     * is the normal case - the company name is empty because they have not typed
     * it yet - and refusing to draw it until the form is valid removes the
     * preview exactly when it is most useful. Nothing is saved, so the only cost
     * of an invalid value is an odd-looking preview, which is the point.
     */
    public function preview(Request $request, string $kind, DocumentKinds $kinds, DocumentRenderer $renderer): JsonResponse
    {
        $documentKind = $this->kindOr404($kind, $kinds);

        $settings = $request->input('settings');

        if (! is_array($settings)) {
            throw ValidationException::withMessages([
                'settings' => 'A preview needs the settings to preview.',
            ]);
        }

        return response()->json($renderer->render(
            $documentKind,
            DocumentTemplate::forKind($documentKind),
            $this->recordId($request),
            $settings,
        ));
    }

    /**
     * The document on its own, ready to print.
     *
     * `window.print()` ON A REAL PAGE rather than a generated PDF file. A
     * generated PDF has to be rendered, stored, served and cleaned up, and it
     * cannot be read without downloading something; the browser's own dialogue
     * produces the same PDF from a page that is also linkable. The existing
     * invoice screen made this call already and it holds here for the same
     * reasons.
     *
     * IT RENDERS THE SAVED TEMPLATE, never the form's current values. What comes
     * out of a printer must be what was saved - a print route that accepted
     * arbitrary settings from a query string would let somebody produce an
     * official-looking document that no stored template can account for.
     */
    public function print(Request $request, string $kind, DocumentKinds $kinds, DocumentRenderer $renderer): Response
    {
        $documentKind = $this->kindOr404($kind, $kinds);

        return Inertia::render('documents/DocumentPrint', [
            'document' => $renderer->render(
                $documentKind,
                DocumentTemplate::forKind($documentKind),
                $this->recordId($request),
            ),
        ]);
    }

    /**
     * A kind that is not registered is a 404, not a 500.
     *
     * The id comes from the URL, so an unregistered one is a wrong address
     * rather than a broken installation - and `DocumentKinds::get()` throws,
     * which would otherwise surface as a 500 on a typo.
     */
    private function kindOr404(string $kind, DocumentKinds $kinds): \PanelKit\Panel\Documents\DocumentKind
    {
        if (! $kinds->has($kind)) {
            throw new NotFoundHttpException("No document kind [{$kind}].");
        }

        return $kinds->get($kind);
    }

    /**
     * The record to preview against, if one was named.
     *
     * NOT VALIDATED AGAINST THE RECORD LIST HERE. The kind's `data()` is the
     * gate - it loads through the tenant-scoped model, so another
     * organisation's id resolves to null and falls back to sample data. Checking
     * the id against `records()` first would be a second gate that can disagree
     * with the first, and the weaker one always wins.
     */
    private function recordId(Request $request): int|string|null
    {
        $id = $request->input('record');

        return is_string($id) || is_int($id) ? $id : null;
    }

    private function prefix(PanelManager $panels): string
    {
        return '/'.trim((string) ($panels->currentPanel()?->getPath() ?? ''), '/');
    }
}
