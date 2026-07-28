<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\AuditEntry;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use PanelKit\Panel\Audit\AuditRecorder;
use PanelKit\Panel\PanelManager;
use PanelKit\Panel\Support\Abilities;

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
            $out[] = [
                'field' => str_replace('_', ' ', $field),
                'from' => $this->stringify($pair['from'] ?? null),
                'to' => $this->stringify($pair['to'] ?? null),
            ];
        }

        return $out;
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

        return mb_strlen($value) > 120 ? mb_substr($value, 0, 120).'…' : $value;
    }
}
