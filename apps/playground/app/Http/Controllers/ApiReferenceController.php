<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Alxtexh\Panel\Support\OpenApiSpec;

/**
 * Playground alias for the kit OpenAPI document.
 *
 * Prefer `Panel::apiDocs()` and `GET {panel}/apps/api-docs/openapi.json`. This
 * route keeps `/docs/openapi.json` working for bookmarks and older tests.
 */
final class ApiReferenceController extends Controller
{
    public function spec(): JsonResponse
    {
        return response()->json(OpenApiSpec::document());
    }
}
