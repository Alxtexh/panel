<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Http\Controllers;

use Illuminate\Database\UniqueConstraintViolationException;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Gate;
use Illuminate\Validation\ValidationException;
use Alxtexh\Panel\CustomFields\CustomField;
use Alxtexh\Panel\CustomFields\CustomFieldFactory;
use Alxtexh\Panel\CustomFields\CustomFieldStorage;

/**
 * The ONE write path a custom-field definition has left - Part G.4.
 *
 * THE DEDICATED SCREEN IS GONE, by the user's direct instruction: fields are
 * defined from the record form's own "+ Add a field" dialog, at the moment
 * the need arises, and nowhere else. That dialog posts here. There is no
 * index to browse, no edit, no reorder - a definition is written once and
 * lives in the forms it decorates.
 *
 * THE VALIDATION IS WHAT THE RESOURCE USED TO DECLARE, kept server-side and
 * whole: the resource must be one that reserved storage, the type one the
 * factory can build, the key an identifier that will survive being a column
 * name, and a duplicate (resource, key) comes back as the same `_conflict`
 * field error every other unique collision in the panel produces - see
 * RecordController::save()'s own note on why that is not a 500.
 */
final class CustomFieldController extends Controller
{
    public function store(Request $request): RedirectResponse
    {
        abort_unless(Gate::allows('create', CustomField::class), 403);

        $validated = $request->validate([
            'resource' => ['required', 'string', 'in:'.implode(',', CustomFieldStorage::resources())],
            'type' => ['required', 'string', 'in:'.implode(',', CustomFieldFactory::types())],
            'key' => ['required', 'string', 'max:64', 'regex:/^[a-z][a-z0-9_]*$/'],
            'label' => ['required', 'string', 'max:80'],
            'required' => ['boolean'],
            'options' => ['nullable', 'array', 'max:30'],
            'options.*' => ['string', 'max:120'],
        ]);

        try {
            CustomField::create([
                ...$validated,
                'required' => (bool) ($validated['required'] ?? false),
                'options' => $validated['options'] ?? null,
                'sort' => ((int) CustomField::query()
                    ->where('resource', $validated['resource'])->max('sort')) + 1,
            ]);
        } catch (UniqueConstraintViolationException) {
            throw ValidationException::withMessages([
                '_conflict' => "A field with the key [{$validated['key']}] already exists on {$validated['resource']}.",
            ]);
        }

        return back()->with('success', 'The field is now on every form.');
    }
}
