<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\AuditEntry;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Alxtexh\Panel\Audit\AuditRecorder;
use Alxtexh\Panel\CustomFields\CustomField;
use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Support\Abilities;

/**
 * The history of one record.
 *
 * GATED ON SEEING THE RECORD ITSELF, not on a separate "view audit" ability. The
 * trail contains before-and-after values of the record's own fields, so anybody
 * who may view the record may already see everything in it - a second permission
 * would be theatre. What it must not do is let somebody who CANNOT open a record
 * read its history, which is the check below.
 *
 * PAGINATED AND BOUNDED. A busy subscriber accumulates thousands of entries and
 * a timeline is read from the top; an unbounded query here would be the one
 * place in the panel that loads an entire table.
 */
final class AuditController extends Controller
{
    private const PER_PAGE = 25;

    public function index(Request $request, string $resource, string $id): JsonResponse
    {
        $class = app(PanelManager::class)->resource($resource);

        abort_if($class === null, 404);

        // The same ability the detail page requires.
        abort_unless($request->user()?->hasPermission(Abilities::name('view', $resource)), 403);

        /*
         * THE RECORD MUST BE VISIBLE THROUGH THE SCOPED QUERY. Without this, the
         * audit endpoint reads history by type and id alone - and `auditable_id`
         * is a string in the URL, so another organisation's record id would
         * return its entire history. The scope is what makes that a 404.
         */
        $record = $class::model()::query()->whereKey($id)->first();

        abort_if($record === null, 404);

        $entries = AuditEntry::query()
            ->where('auditable_type', $class::model())
            ->where('auditable_id', (string) $id)
            ->orderByDesc('created_at')
            ->orderByDesc('id')
            ->paginate(self::PER_PAGE, ['*'], 'page', (int) $request->query('page', '1'));

        return response()->json([
            'entries' => collect($entries->items())->map(fn (AuditEntry $entry): array => [
                'id' => $entry->id,
                'event' => $entry->event,
                'actor' => $entry->actor(),
                'at' => $entry->created_at?->toIso8601String(),
                'ip' => $entry->ip_address,
                'changes' => $this->presentChanges($entry),
            ])->all(),
            'hasMore' => $entries->hasMorePages(),
        ]);
    }

    /**
     * Changes as a flat, renderable list.
     *
     * VALUES ARE STRINGIFIED AND TRUNCATED HERE rather than in the browser. A
     * changed rich-text field can hold tens of kilobytes, and a timeline is a
     * summary - sending the whole of both versions to render two clipped lines
     * is bandwidth spent to be thrown away.
     *
     * @return list<array{field: string, from: string, to: string}>
     */
    private function presentChanges(AuditEntry $entry): array
    {
        $out = [];

        foreach ((array) $entry->changes as $field => $pair) {
            $from = $pair['from'] ?? null;
            $to = $pair['to'] ?? null;

            /*
             * A JSON COLUMN IS NOT A VALUE, IT IS A BAG OF THEM - Part G.5.
             * The trail used to print the raw bag on both sides:
             * `Custom: {"fibre_node":"FN-1234"} → {"fibre_node":"FN-99",...}`
             * which is backend data shown to a person. Expanded per key, the
             * same change reads `Fibre node ID: FN-1234 → FN-99` and an added
             * key reads as an addition - with unchanged keys not shown at
             * all, because they did not change.
             */
            $fromBag = $this->asBag($from);
            $toBag = $this->asBag($to);

            if ($fromBag !== null || $toBag !== null) {
                foreach (array_unique([...array_keys($fromBag ?? []), ...array_keys($toBag ?? [])]) as $key) {
                    $before = ($fromBag ?? [])[$key] ?? null;
                    $after = ($toBag ?? [])[$key] ?? null;

                    if ($before === $after) {
                        continue;
                    }

                    $out[] = [
                        'field' => $this->labelFor($field, (string) $key),
                        'from' => $this->stringify($before),
                        'to' => $this->stringify($after),
                    ];
                }

                continue;
            }

            $out[] = [
                'field' => str_replace('_', ' ', $field),
                'from' => $this->stringify($from),
                'to' => $this->stringify($to),
            ];
        }

        return $out;
    }

    /**
     * An associative array when the value is one - decoded when the trail
     * stored the column's raw JSON string - or null for scalar values.
     *
     * @return array<string, mixed>|null
     */
    private function asBag(mixed $value): ?array
    {
        if (is_array($value)) {
            return $value;
        }

        if (is_string($value) && str_starts_with(trim($value), '{')) {
            $decoded = json_decode($value, true);

            return is_array($decoded) ? $decoded : null;
        }

        return null;
    }

    /**
     * The name an operator knows the key by.
     *
     * The `custom` bag's keys are custom-field keys, and every one of those
     * has a LABEL somebody typed when they defined it - `fibre_node` was
     * christened "Fibre node ID" - so the trail should use it. Any other
     * bag falls back to its humanised key.
     */
    private function labelFor(string $field, string $key): string
    {
        if ($field === 'custom') {
            static $labels = null;

            $labels ??= CustomField::query()->pluck('label', 'key')->all();

            return (string) ($labels[$key] ?? str_replace('_', ' ', $key));
        }

        return str_replace('_', ' ', $field).' '.str_replace('_', ' ', $key);
    }

    private function stringify(mixed $value): string
    {
        if ($value === null) {
            return '-';
        }

        if (is_bool($value)) {
            return $value ? 'yes' : 'no';
        }

        if (is_array($value)) {
            $value = json_encode($value);
        }

        $value = (string) $value;

        // Untouched if it is the redaction marker - truncating it would make it
        // look like a real value that happened to be short.
        if ($value === AuditRecorder::REDACTED) {
            return $value;
        }

        /*
         * DATES READ AS THE PANEL WRITES THEM - Part G.5. The trail stores
         * whatever the column held, which is an ISO instant on one side and a
         * database datetime on the other: `2026-01-28T22:22:11.000000Z →
         * 2026-01-28 00:00:00` is one date change wearing two costumes. Both
         * render as the panel's own date format, with the time only when it
         * says something.
         */
        if (preg_match('/^\d{4}-\d{2}-\d{2}([T ]\d{2}:\d{2}(:\d{2})?(\.\d+)?Z?)?$/', $value) === 1) {
            try {
                $moment = Carbon::parse($value);

                return $moment->format($moment->format('H:i:s') === '00:00:00' ? 'M j, Y' : 'M j, Y H:i');
            } catch (\Throwable) {
                // Not a date after all - fall through to the plain string.
            }
        }

        return mb_strlen($value) > 120 ? mb_substr($value, 0, 120).'…' : $value;
    }
}
