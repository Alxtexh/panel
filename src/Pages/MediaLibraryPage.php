<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Pages;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use InvalidArgumentException;
use Alxtexh\Panel\Files\FileStore;
use Alxtexh\Panel\Media\PanelMediaItem;
use Alxtexh\Panel\Notifications\Notification;
use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Support\TenantContext;

/**
 * Media library on local disk. OFF until `apps(['media-library'])`.
 *
 * Tenant-scoped paths under `{tenant}/media/`. Host may swap disk via Laravel
 * config; no S3 driver in core.
 */
class MediaLibraryPage extends Page
{
    protected static string $icon = 'folder';

    protected static ?string $group = 'Files';

    public static function uri(): string
    {
        return 'files/media-library';
    }

    public static function label(): string
    {
        return 'Media library';
    }

    public static function component(): string
    {
        return 'MediaLibrary';
    }

    public static function isEnabled(): bool
    {
        $panel = app(PanelManager::class)->panel(static::panel());

        return $panel !== null && $panel->offersApp('media-library');
    }

    public static function actions(): array
    {
        return [
            'upload' => 'manage_media_library',
            'move' => 'manage_media_library',
            'delete' => 'manage_media_library',
        ];
    }

    public static function actionUris(): array
    {
        return [
            'upload' => 'upload',
            'move' => 'move',
            'delete' => 'delete',
        ];
    }

    public static function description(): ?string
    {
        return 'Tenant-scoped files on local disk. Preview URLs are host-supplied when the disk is private.';
    }

    /**
     * @return list<string>
     */
    public static function folders(Request $request): array
    {
        $tenantId = app(TenantContext::class)->currentKey();

        if ($tenantId === null) {
            return [];
        }

        return PanelMediaItem::query()
            ->where('tenant_id', $tenantId)
            ->distinct()
            ->orderBy('folder')
            ->pluck('folder')
            ->map(static fn ($f): string => (string) $f)
            ->all();
    }

    /**
     * @return array<string, mixed>
     */
    public static function data(Request $request): array
    {
        $tenantId = app(TenantContext::class)->currentKey();
        $folder = (string) $request->query('folder', '');
        $base = static::pageHref();

        $items = $tenantId === null ? [] : PanelMediaItem::query()
            ->where('tenant_id', $tenantId)
            ->where('folder', $folder)
            ->orderByDesc('id')
            ->get()
            ->map(static function (PanelMediaItem $row): array {
                $mime = $row->mime;
                $isImage = is_string($mime) && str_starts_with($mime, 'image/');

                return [
                    'id' => $row->id,
                    'name' => $row->name,
                    'path' => $row->path,
                    'mime' => $mime,
                    'size' => $row->size,
                    'folder' => $row->folder,
                    /*
                     * Private uploads have no public URL by design. Hosts that
                     * serve media through a signed route can override data().
                     */
                    'url' => null,
                    'is_image' => $isImage,
                ];
            })
            ->all();

        return [
            'folder' => $folder,
            'folders' => static::folders($request),
            'items' => $items,
            'uploadHref' => $base.'/upload',
            'moveHref' => $base.'/move',
            'deleteHref' => $base.'/delete',
        ];
    }

    public static function upload(Request $request): RedirectResponse
    {
        $tenantId = app(TenantContext::class)->currentKey();
        $user = $request->user();

        abort_if($tenantId === null, 403);

        $validated = $request->validate([
            'file' => ['required', 'file', 'max:10240'],
            'folder' => ['nullable', 'string', 'max:120'],
        ]);

        /** @var UploadedFile $file */
        $file = $validated['file'];
        $folder = (string) ($validated['folder'] ?? '');

        try {
            $pending = FileStore::acceptPending($file, FileStore::knownExtensions(), FileStore::maxKilobytes());
            $path = FileStore::promote($pending->handle, 'media');
        } catch (InvalidArgumentException $e) {
            return back()->withErrors(['file' => $e->getMessage()]);
        }

        PanelMediaItem::query()->create([
            'tenant_id' => $tenantId,
            'folder' => $folder,
            'path' => $path,
            'name' => $file->getClientOriginalName(),
            'mime' => $file->getMimeType(),
            'size' => $file->getSize(),
            'uploaded_by' => $user !== null ? (int) $user->getAuthIdentifier() : null,
        ]);

        Notification::make()->title('File uploaded')->success()->send();

        return back();
    }

    public static function move(Request $request): RedirectResponse
    {
        $tenantId = app(TenantContext::class)->currentKey();

        abort_if($tenantId === null, 403);

        $validated = $request->validate([
            'id' => ['required', 'integer'],
            'folder' => ['required', 'string', 'max:120'],
        ]);

        PanelMediaItem::query()
            ->where('tenant_id', $tenantId)
            ->whereKey($validated['id'])
            ->update(['folder' => $validated['folder']]);

        Notification::make()->title('File moved')->success()->send();

        return back();
    }

    public static function delete(Request $request): RedirectResponse
    {
        $tenantId = app(TenantContext::class)->currentKey();

        abort_if($tenantId === null, 403);

        $validated = $request->validate([
            'id' => ['required', 'integer'],
        ]);

        $item = PanelMediaItem::query()
            ->where('tenant_id', $tenantId)
            ->whereKey($validated['id'])
            ->firstOrFail();

        if (FileStore::belongsToCurrentTenant($item->path)) {
            Storage::disk(FileStore::disk())->delete($item->path);
        }

        $item->delete();

        Notification::make()->title('File deleted')->success()->send();

        return back();
    }

    protected static function pageHref(): string
    {
        $path = '/'.trim(static::navigationPath(), '/');
        $prefix = app(PanelManager::class)->currentPanel()?->getPath() ?? '';

        if ($prefix !== '' && $prefix !== '/') {
            $path = rtrim($prefix, '/').$path;
        }

        if (! str_starts_with($path, '/')) {
            $path = '/'.$path;
        }

        return $path;
    }
}
