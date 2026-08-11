<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Http\Requests;

use Alxtexh\Panel\Http\NestedContext;
use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Resources\Resource;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Http\FormRequest;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

/**
 * Authorisation and validation for a record write, in the one place a
 * precognitive request actually executes.
 *
 * THE ROUTES WERE IN THE `precognitive` GROUP AND THE FEATURE DID NOT WORK -
 * which is worse than it not being wired, because the endpoint ANSWERED.
 *
 * `PrecognitionControllerDispatcher::dispatch()` never calls the controller
 * method. It checks the method exists, RESOLVES ITS PARAMETERS, and aborts 204.
 * That is the whole design: Laravel expects a `FormRequest` in the signature,
 * because resolving one runs `authorize()` and `rules()`. `RecordController`
 * type-hinted the base `Request` and validated inside the body, so under
 * precognition the body never ran and NOTHING was checked.
 *
 * TWO THINGS WERE WRONG, AND THE SECOND IS THE SERIOUS ONE.
 *
 *   - Any payload returned `204 Precognition-Success: true`. The identical
 *     payload without the header returned 422. So the endpoint whose entire
 *     purpose is reporting validation errors early reported that invalid input
 *     was fine - and a client wired to it would have shown every field valid.
 *
 *   - `abort_unless($class::can('create'), 403)` is also in the body, so it did
 *     not run either. A signed-in user with no roles was redirected away from
 *     an ordinary POST and received 204 from a precognitive one. No row was
 *     written, but an authorisation check that does not run is not made safe by
 *     what the request happens not to do afterwards - and with
 *     `Precognition-Validate-Only` it answers field by field about a form the
 *     caller may not open.
 *
 * BOTH FIXES ARE THE SAME MOVE: put the checks in a `FormRequest`. It runs on
 * an ordinary request exactly as before, and it now also runs on the only step
 * a precognitive request performs.
 *
 * THE RULES STILL COME FROM THE FORM, so there is still one source of
 * validation truth and the client still holds no copy.
 */
final class RecordFormRequest extends FormRequest
{
    /**
     * THE SAME QUESTION THE CONTROLLER ASKED, moved rather than added.
     *
     * A create is authorised against the class; an update against the RECORD,
     * because "may you edit this one" is not answerable without it. Fetching
     * the record here is also what makes another tenant's id a 404 rather than
     * a 403 - see `record()`.
     */
    public function authorize(): bool
    {
        $class = $this->resourceClass();

        return $this->isMethod('POST')
            ? $class::can('create')
            : $class::can('update', $this->record());
    }

    /** @return array<string, mixed> */
    public function rules(): array
    {
        return $this->resourceClass()::formDefinition()->rules();
    }

    /**
     * THE RESOURCE THIS REQUEST IS ABOUT, resolved from the route rather than
     * from the body - a resource key taken from input would let a caller
     * validate against one resource's rules while writing to another.
     *
     * @return class-string<Resource>
     */
    public function resourceClass(): string
    {
        $key = (string) $this->route('resource');

        $class = app(PanelManager::class)->resource($key);

        if ($class === null) {
            throw new NotFoundHttpException("No panel resource registered for [{$key}].");
        }

        return $class;
    }

    /**
     * The record being updated, scoped exactly as the controller scopes it.
     *
     * THE TENANT GLOBAL SCOPE MAKES A FOREIGN ID A 404, which is the correct
     * answer: a 403 would confirm the record exists. The nested parent claim in
     * the URL is carried into the query for the same reason it is there - a
     * mismatched pairing must be indistinguishable from a missing record.
     */
    public function record(): Model
    {
        $class = $this->resourceClass();
        $model = $class::model();

        $query = $model::query();

        $parent = NestedContext::parent($this, $class);

        if ($parent !== null) {
            $query->where($class::parentColumn(), $parent->getKey());
        }

        return $query->findOrFail($this->route('id'));
    }
}
