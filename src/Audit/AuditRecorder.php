<?php

declare(strict_types=1);

namespace PanelKit\Panel\Audit;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use PanelKit\Panel\Support\TenantContext;

/**
 * Turns a model change into an audit entry.
 *
 * REDACTION IS THE POINT OF THIS CLASS, not the writing. An audit trail records
 * before-and-after values for every changed attribute, which means the moment
 * somebody changes a password, an API key or a two-factor secret, the trail
 * contains it in plain text - in a table built to be kept for years, read by
 * more people than the original, and exported for compliance.
 *
 * That is a worse leak than the one auditing exists to detect, and it arrives
 * silently and by default. So this redacts first and writes second, and the list
 * is deliberately broad: the cost of redacting something harmless is a less
 * useful line, and the cost of missing something is a secret in a log.
 *
 * IT NEVER RECORDS "no change". Eloquent fires `updated` on a save that changed
 * nothing - a form re-submitted, a touch, a no-op bulk action - and a timeline
 * full of "updated (nothing)" is a timeline nobody scrolls, which makes the real
 * entries harder to find rather than easier.
 *
 * IT FAILS QUIETLY, and that is a real trade rather than laziness. An audit
 * write that throws would roll back the change it was describing, so a
 * misconfigured trail would stop the panel working. Losing an entry is bad;
 * refusing a subscriber's suspension because the audit table is missing is
 * worse. Failures are logged and the change proceeds.
 */
final class AuditRecorder
{
    /**
     * Attribute names never written to the trail, matched as substrings.
     *
     * SUBSTRINGS, so `password`, `password_confirmation` and `new_password` are
     * all covered by one entry - an exact-match list is a list somebody has to
     * remember to extend, and they will not.
     */
    public const REDACT = [
        'password',
        'token',
        'secret',
        'api_key',
        'private',
        'signature',
        'recovery_codes',
        'remember_token',
    ];

    public const REDACTED = '••••••••';

    /**
     * A change to one organisation's own records. Almost everything.
     */
    public const SCOPE_TENANT = 'tenant';

    /**
     * A change to the INSTALLATION, done from inside one organisation.
     *
     * Deleting a snapshot is the case that forced this distinction: the backup
     * covers every tenant, so filing the entry under whichever one the operator
     * happened to be signed into said something true and hid something truer.
     * `tenant_id` still records where they were standing; this records that the
     * effect did not stop there.
     */
    public const SCOPE_INSTALLATION = 'installation';

    /**
     * @param  array<string, mixed>  $context
     *                                         Detail for an event that is not a model change - which snapshot was
     *                                         deleted, which report was exported.
     *
     *   IT EXISTS BECAUSE THE ALTERNATIVE WAS SMUGGLING. Only `updated` produces
     *   a change set, so an action like "a backup was deleted" wrote an entry
     *   saying that something happened and nothing about what - and the obvious
     *   workaround, setting a fake attribute on the model before calling this,
     *   silently discards it. The trail's whole value is being able to answer
     *   "which one", so there is a parameter for it.
     *
     *   REDACTED ON THE SAME TERMS AS ATTRIBUTES. A caller passing a token here
     *   would otherwise route around the class's one job.
     */
    public function record(Model $model, string $event, array $context = [], string $scope = self::SCOPE_TENANT): void
    {
        try {
            $this->write($model, $event, $context, $scope);
        } catch (\Throwable $e) {
            // See the class note: never break the change being audited.
            report($e);
        }
    }

    /** @param array<string, mixed> $context */
    private function write(Model $model, string $event, array $context = [], string $scope = self::SCOPE_TENANT): void
    {
        $changes = $event === 'updated' ? $this->changesFor($model) : $this->redactAll($context);

        // Nothing actually changed - see the class note.
        if ($event === 'updated' && $changes === []) {
            return;
        }

        $tenant = app(TenantContext::class)->currentKey();

        /*
         * NO TENANT, NO ENTRY. Writing with a null tenant would either violate
         * the constraint or, worse, land the row somewhere it can be read by the
         * wrong organisation. A console command that edits records without
         * initialising a tenant produces no trail, which is the honest outcome -
         * it also produced no tenant-scoped change.
         */
        if ($tenant === null) {
            return;
        }

        $user = auth()->user();
        $request = request();

        DB::table('audit_entries')->insert([
            'tenant_id' => $tenant,
            'scope' => $scope,
            'user_id' => $user?->getAuthIdentifier(),
            'actor_name' => $user?->getAttribute('name'),
            'auditable_type' => $model::class,
            'auditable_id' => (string) $model->getKey(),
            'auditable_label' => $this->labelFor($model),
            'event' => $event,
            'changes' => $changes === [] ? null : json_encode($changes),
            'ip_address' => $request?->ip(),
            'user_agent' => substr((string) $request?->userAgent(), 0, 500) ?: null,
            'created_at' => now(),
        ]);
    }

    /**
     * What to call this record, captured NOW.
     *
     * A SNAPSHOT, FOR THE SAME REASON `actor_name` IS ONE. The entries anybody
     * actually needs are deletions, and a deleted row has no name left to join
     * to - so a label resolved at read time is guaranteed to be missing exactly
     * when it matters. Written here, "Grace Wanjiku was deleted" survives the
     * deletion.
     *
     * CONVENTIONAL COLUMNS ONLY, in order, and null when none of them fit.
     * Guessing more widely - the first string column, say - would produce a
     * confident label built from a phone number or a status, and a log that is
     * confidently wrong is worse than one that is blank.
     *
     * TRUNCATED, because this is a display label and not a copy of the record.
     */
    private function labelFor(Model $model): ?string
    {
        foreach (['name', 'title', 'label'] as $attribute) {
            $value = $model->getAttribute($attribute);

            if (is_string($value) && $value !== '') {
                return mb_substr($value, 0, 160);
            }
        }

        return null;
    }

    /**
     * Changed attributes as `{field: {from, to}}`, redacted.
     *
     * @return array<string, array{from: mixed, to: mixed}>
     */
    private function changesFor(Model $model): array
    {
        $out = [];

        foreach ($model->getChanges() as $field => $to) {
            // Timestamps are noise: every update changes `updated_at`, and an
            // entry already carries its own time.
            if (in_array($field, [$model->getUpdatedAtColumn(), $model->getCreatedAtColumn()], true)) {
                continue;
            }

            $redacted = $this->isSensitive($field);

            $out[$field] = [
                'from' => $redacted ? self::REDACTED : $model->getOriginal($field),
                'to' => $redacted ? self::REDACTED : $to,
            ];
        }

        return $out;
    }

    /**
     * Context, shaped like a change set so one reader renders both.
     *
     * `to` WITH NO `from`, because these events describe something that
     * happened rather than a value that moved - "snapshot: 2026-07-28.zip" has
     * no before. The audit screen already prints only the side that is present.
     *
     * @param  array<string, mixed>  $context
     * @return array<string, array{to: mixed}>
     */
    private function redactAll(array $context): array
    {
        $out = [];

        foreach ($context as $field => $value) {
            $out[(string) $field] = [
                'to' => $this->isSensitive((string) $field) ? self::REDACTED : $value,
            ];
        }

        return $out;
    }

    /**
     * Whether this attribute's VALUE must never be stored.
     *
     * The field NAME is still recorded - "password changed" is exactly the kind
     * of thing an audit trail is for. It is the value that must not survive.
     */
    private function isSensitive(string $field): bool
    {
        $field = strtolower($field);

        foreach (self::REDACT as $needle) {
            if (str_contains($field, $needle)) {
                return true;
            }
        }

        return false;
    }
}
