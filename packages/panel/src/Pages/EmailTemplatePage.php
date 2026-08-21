<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Pages;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Alxtexh\Panel\Mail\PanelEmailTemplate;
use Alxtexh\Panel\Notifications\Notification;
use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Support\TenantContext;

/**
 * Email templates (subject, body, variables). Sibling to document designer.
 * OFF until `apps(['email-templates'])`.
 */
class EmailTemplatePage extends Page
{
    protected static string $icon = 'mail';

    protected static ?string $group = 'Mail';

    public static function uri(): string
    {
        return 'apps/email-templates';
    }

    public static function label(): string
    {
        return 'Email templates';
    }

    public static function component(): string
    {
        return 'EmailTemplates';
    }

    public static function isEnabled(): bool
    {
        $panel = app(PanelManager::class)->panel(static::panel());

        return $panel !== null && $panel->offersApp('email-templates');
    }

    public static function description(): ?string
    {
        return 'Subject and body templates with variables. Override deliverTest() to send mail.';
    }

    public static function actions(): array
    {
        return [
            'save' => 'manage_email_templates',
            'sendTest' => 'manage_email_templates',
        ];
    }

    public static function actionUris(): array
    {
        return [
            'save' => 'save',
            'sendTest' => 'send-test',
        ];
    }

    /**
     * @return array<string, mixed>
     */
    public static function data(Request $request): array
    {
        $tenantId = app(TenantContext::class)->currentKey();
        $key = $request->query('key');
        $base = static::pageHref();

        $templates = $tenantId === null ? [] : PanelEmailTemplate::query()
            ->where('tenant_id', $tenantId)
            ->orderBy('key')
            ->get()
            ->map(static fn (PanelEmailTemplate $row): array => [
                'key' => $row->key,
                'subject' => $row->subject,
                'variables' => $row->variables ?? [],
            ])
            ->all();

        $selected = null;

        if ($tenantId !== null && is_string($key) && $key !== '') {
            $row = PanelEmailTemplate::query()
                ->where('tenant_id', $tenantId)
                ->where('key', $key)
                ->first();

            if ($row !== null) {
                $selected = [
                    'key' => $row->key,
                    'subject' => $row->subject,
                    'body' => $row->body,
                    'variables' => $row->variables ?? [],
                ];
            }
        }

        return [
            'templates' => $templates,
            'selected' => $selected,
            'sendTestHref' => $base.'/send-test',
        ];
    }

    public static function save(Request $request): RedirectResponse
    {
        $tenantId = app(TenantContext::class)->currentKey();

        abort_if($tenantId === null, 403);

        $validated = $request->validate([
            'key' => ['required', 'string', 'max:120'],
            'subject' => ['required', 'string', 'max:255'],
            'body' => ['required', 'string'],
            'variables' => ['nullable', 'array'],
            'variables.*' => ['string', 'max:120'],
        ]);

        PanelEmailTemplate::query()->updateOrCreate(
            ['tenant_id' => $tenantId, 'key' => $validated['key']],
            [
                'subject' => $validated['subject'],
                'body' => $validated['body'],
                'variables' => isset($validated['variables'])
                    ? array_map('strval', $validated['variables'])
                    : [],
            ],
        );

        Notification::make()->title('Template saved')->success()->send();

        return back();
    }

    public static function sendTest(Request $request): RedirectResponse
    {
        $tenantId = app(TenantContext::class)->currentKey();

        abort_if($tenantId === null, 403);

        $validated = $request->validate([
            'key' => ['required', 'string', 'max:120'],
            'to' => ['required', 'email'],
        ]);

        static::deliverTest($request, $validated['key'], $validated['to']);

        Notification::make()->title('Test email queued')->success()->send();

        return back();
    }

    protected static function deliverTest(Request $request, string $key, string $to): void
    {
        // Host overrides wire Mail::to($to) with the template body.
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
