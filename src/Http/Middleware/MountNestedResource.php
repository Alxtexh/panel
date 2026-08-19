<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * Moves the nested prefix's parameters out of the controllers' way - 4.2.
 *
 * WHY THIS EXISTS: Laravel hands SCALAR route parameters to controller
 * methods POSITIONALLY, not by name. A nested route carries
 * `{parent}/{parentId}/{resource}`, so `index($request, string $resource)`
 * received "clients" - the first parameter - as its resource, and
 * `update($request, $resource, $id)` received the parent id as the record
 * id. Every method resolved the wrong thing while looking perfectly typed.
 *
 * So the prefix's two parameters are pocketed as request ATTRIBUTES - where
 * `NestedContext` reads them - and forgotten from the route before the
 * controller binds. The controllers keep the exact signatures the flat
 * mount uses, which is the entire point of nesting being a prefix rather
 * than a second controller.
 */
final class MountNestedResource
{
    public const PARENT_KEY = 'alxtexhpanel.nested.parent-key';

    public const PARENT_ID = 'alxtexhpanel.nested.parent-id';

    public function handle(Request $request, Closure $next): Response
    {
        $route = $request->route();

        if ($route !== null && $route->hasParameter('parent')) {
            $request->attributes->set(self::PARENT_KEY, (string) $route->parameter('parent'));
            $request->attributes->set(self::PARENT_ID, (string) $route->parameter('parentId'));

            $route->forgetParameter('parent');
            $route->forgetParameter('parentId');
        }

        return $next($request);
    }
}
