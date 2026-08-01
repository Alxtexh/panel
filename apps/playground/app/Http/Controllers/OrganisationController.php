<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Storage;
use Inertia\Response;
use InvalidArgumentException;
use PanelKit\Panel\Files\FileStore;
use PanelKit\Panel\Support\TenantContext;
use Symfony\Component\HttpFoundation\StreamedResponse;

/**
 * The organisation's own name and mark.
 *
 * SEPARATE FROM PROFILE, and the split is the point. A profile is one person -
 * their name, their password, their second factor - and changing it affects
 * nobody else. This changes what every colleague sees in the sidebar, so it is
 * a different page with a different permission, and conflating them is how
 * someone renames the company while trying to rename themselves.
 *
 * THE TENANT COMES FROM CONTEXT, NEVER FROM THE REQUEST. There is no tenant id
 * in any of these routes on purpose: an endpoint that accepted one would be an
 * endpoint for renaming somebody else's organisation, and no amount of checking
 * afterwards is as safe as never offering the parameter.
 *
 * THE LOGO IS SERVED, NOT LINKED. It lives on the private disk like every other
 * upload and comes back through a route that checks the session first - a mark
 * is not usually a secret, but "not usually" is not a reason to put an
 * organisation's file on a public URL that outlives their account.
 */
final class OrganisationController extends Controller
{
    /** Where tenant branding is stored, under the tenant's own prefix. */
    private const DIRECTORY = 'branding';

    /**
     * The logo's URL, versioned by the file it points at.
     *
     * THE VERSION IS THE WHOLE POINT. The route is a fixed path - there is one
     * logo per organisation, so there is nothing to put in the URL - and the
     * response is cacheable, because a mark is fetched on every page of the
     * panel and re-downloading it each time is waste.
     *
     * Those two facts together are a bug: uploading a new logo changes the
     * bytes and not the URL, so every browser that had already seen the old one
     * kept showing it until the cache expired. It looked like the upload had
     * silently failed, and "replace it twice and it works" is what people
     * conclude when the second attempt happens after the timeout.
     *
     * The stored path is a fresh uuid per upload, so a hash of it changes
     * exactly when the file does - which is what a cache key should be.
     */
    public static function logoUrl(?string $path): ?string
    {
        if (! is_string($path) || $path === '') {
            return null;
        }

        return route('panel.pages.organisation.logo').'?v='.substr(sha1($path), 0, 12);
    }

    /**
     * The props this screen needs.
     *
     * NO LONGER RENDERS. `OrganisationPage` declares the component, the URL and
     * the abilities; this keeps the part that is actually this application's -
     * what a tenant's branding looks like.
     *
     * @return array<string, mixed>
     */
    public function props(Request $request): array
    {
        $tenant = $this->tenant();

        return [
            /*
             * The slug is NOT sent.
             *
             * It is not editable, and showing it only invited the question of
             * why. It appears in stored file paths, which is a fact about the
             * storage layout rather than something an operator needs on a
             * settings screen - and a read-only field whose only purpose is to
             * be read once is clutter on a page with two real controls.
             */
            'organisation' => [
                'name' => $tenant->name,
                'logo' => $this->describeLogo($tenant),
            ],
        ];
    }

    public function update(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'min:2', 'max:120'],
            // Either an upload handle, the word `keep`, or null to remove it.
            // A path is deliberately NOT accepted: the client has no business
            // naming a storage location, and anything it could name would be
            // something it read from somewhere.
            'logo' => ['nullable', 'string', 'max:64'],
        ]);

        $tenant = $this->tenant();
        $tenant->name = $validated['name'];

        $logo = $validated['logo'] ?? null;

        if ($logo === null) {
            $this->deleteLogo($tenant);
            $tenant->logo_path = null;
        } elseif ($logo !== 'keep') {
            try {
                $promoted = FileStore::promote($logo, self::DIRECTORY);
            } catch (\RuntimeException $e) {
                return back()->withErrors(['logo' => 'That upload has expired. Please choose the file again.']);
            }

            // Replaced, so the old one goes. A logo has exactly one current
            // version and keeping the previous file forever is a leak with a
            // company's branding in it.
            $this->deleteLogo($tenant);
            $tenant->logo_path = $promoted;
        }

        $tenant->save();

        return back()->with('success', 'Organisation updated.');
    }

    /** Accept a logo into the pending area. Same vetting as any other upload. */
    public function uploadLogo(Request $request): JsonResponse
    {
        $request->validate(['file' => ['required', 'file']]);

        try {
            $pending = FileStore::acceptPending(
                $request->file('file'),
                // Raster only. SVG is a document format that executes script,
                // and a logo is rendered on every page of the panel - the one
                // place stored XSS would reach every colleague at once.
                ['png', 'jpg', 'jpeg', 'webp'],
                2048,
            );
        } catch (InvalidArgumentException $e) {
            return response()->json(['message' => $e->getMessage()], 422);
        }

        return response()->json($pending->toArray(), 201);
    }

    /** Stream the current logo to a signed-in member of this organisation. */
    public function logo(Request $request): StreamedResponse
    {
        $tenant = $this->tenant();
        $path = $tenant->logo_path;

        abort_if(! is_string($path) || $path === '', 404);

        // The path came from the tenant's own row, but a row carrying a path
        // outside its prefix is corrupt data and must not be served on the
        // strength of that alone.
        abort_unless(FileStore::belongsToCurrentTenant($path), 404);

        $disk = Storage::disk(FileStore::disk());
        abort_unless($disk->exists($path), 404);

        return $disk->response($path, null, [
            'X-Content-Type-Options' => 'nosniff',
            // A logo is displayed rather than downloaded, which is the one
            // upload in the panel served inline - hence the tight CSP and the
            // raster-only allowlist above.
            'Content-Security-Policy' => "default-src 'none'; sandbox",
            'Cache-Control' => 'private, max-age=300',
        ]);
    }

    /** @return array{value: string, name: string, size: int, url: string}|null */
    private function describeLogo(Model $tenant): ?array
    {
        if (! is_string($tenant->logo_path) || $tenant->logo_path === '') {
            return null;
        }

        $described = FileStore::describe($tenant->logo_path);

        if ($described === null) {
            return null;
        }

        return [
            // `keep` rather than the path: the form has to be able to say
            // "unchanged" without ever holding a storage location.
            'value' => 'keep',
            'name' => $described['name'],
            'size' => $described['size'],
            'url' => self::logoUrl($tenant->logo_path),
        ];
    }

    private function deleteLogo(Model $tenant): void
    {
        if (is_string($tenant->logo_path) && $tenant->logo_path !== '') {
            $disk = Storage::disk(FileStore::disk());

            $disk->delete([$tenant->logo_path, $tenant->logo_path.'.json']);
        }
    }

    /**
     * The tenant record, from context rather than from a lookup.
     *
     * NOT `Tenant::find($key)`, deliberately. That works only when the tenants
     * table sits on the connection this request is using - which is true for
     * single-database tenancy and false for stancl's multi-database mode, where
     * the central `tenants` table is not on the tenant connection at all.
     * `TenantContext::tenant()` already knows which of those it is in, and
     * returns the model the tenancy layer resolved.
     */
    private function tenant(): Model
    {
        $tenant = app(TenantContext::class)->tenant();

        abort_if(! $tenant instanceof Model, 404, 'No organisation in context.');

        return $tenant;
    }
}
