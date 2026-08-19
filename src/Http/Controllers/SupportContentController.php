<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Http\Controllers;

use Alxtexh\Panel\Models\ContentEntry;
use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Support\GithubReleases;
use Alxtexh\Panel\Support\SupportEditing;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

/**
 * Persist Help / FAQ / What's new / About from the screens themselves.
 *
 * THE RESOURCE AT `/content-entries` STILL EXISTS for bulk work. This is the
 * on-page path: replace database rows of one kind with what the Add form
 * submitted. Packaged HelpCentre / Changelog / panel.about copy is never
 * stored here and cannot be deleted this way. Kinds this request does not
 * name are left alone.
 */
final class SupportContentController
{
    public function update(Request $request): RedirectResponse
    {
        $this->authorise();

        $validated = $request->validate([
            'kind' => ['required', Rule::in([
                ContentEntry::KIND_FAQ,
                ContentEntry::KIND_ARTICLE,
                ContentEntry::KIND_RELEASE,
                ContentEntry::KIND_ABOUT,
            ])],
            'entries' => ['present', 'array'],
            'entries.*.id' => ['nullable', 'integer'],
            'entries.*.category' => ['nullable', 'string', 'max:120'],
            'entries.*.title' => ['required', 'string', 'max:200'],
            'entries.*.body' => ['nullable', 'string'],
            'entries.*.meta' => ['nullable', 'array'],
            'entries.*.sort' => ['nullable', 'integer'],
            'entries.*.published' => ['nullable', 'boolean'],
        ]);

        $kind = $validated['kind'];

        $kept = [];

        foreach (array_values($validated['entries']) as $index => $row) {
            $payload = [
                'kind' => $kind,
                'category' => (string) ($row['category'] ?? ''),
                'title' => (string) $row['title'],
                'body' => $row['body'] ?? null,
                'meta' => $this->meta($kind, (array) ($row['meta'] ?? [])),
                'sort' => (int) ($row['sort'] ?? $index),
                'published' => (bool) ($row['published'] ?? true),
            ];

            $id = isset($row['id']) ? (int) $row['id'] : 0;
            $entry = $id > 0 ? ContentEntry::query()->where('kind', $kind)->find($id) : null;

            if ($entry === null) {
                $entry = ContentEntry::query()->create($payload);
            } else {
                $entry->update($payload);
            }

            $kept[] = $entry->id;
        }

        ContentEntry::query()
            ->where('kind', $kind)
            ->when($kept !== [], fn ($query) => $query->whereNotIn('id', $kept))
            ->when($kept === [], fn ($query) => $query)
            ->delete();

        return back()->with('success', 'Support content saved.');
    }

    public function syncGithub(Request $request): RedirectResponse
    {
        $this->authorise();

        $panel = app(PanelManager::class)->currentPanel();
        $repo = $panel?->getSupportGithubRepository();

        if ($repo === null) {
            return back()->with('error', 'No GitHub repository is configured for What\'s new.');
        }

        $releases = GithubReleases::fetch($repo);

        if ($releases === []) {
            return back()->with('error', 'GitHub releases could not be loaded. Locally edited entries were kept.');
        }

        $existing = ContentEntry::query()
            ->where('kind', ContentEntry::KIND_RELEASE)
            ->pluck('title')
            ->map(static fn (string $title): string => ltrim($title, 'v'))
            ->all();

        $sort = (int) ContentEntry::query()->where('kind', ContentEntry::KIND_RELEASE)->min('sort');
        $imported = 0;

        foreach ($releases as $release) {
            if (in_array($release['version'], $existing, true)
                || in_array('v'.$release['version'], $existing, true)) {
                continue;
            }

            $sort--;

            ContentEntry::query()->create([
                'kind' => ContentEntry::KIND_RELEASE,
                'category' => $release['date'],
                'title' => $release['version'],
                'body' => $release['highlight'] !== '' ? $release['highlight'] : null,
                'meta' => ['source' => 'github'],
                'sort' => $sort,
                'published' => true,
            ]);

            $imported++;
            $existing[] = $release['version'];
        }

        if ($imported === 0) {
            return back()->with('success', 'GitHub had no new releases to add.');
        }

        return back()->with('success', $imported === 1
            ? 'Imported 1 release from GitHub.'
            : 'Imported '.$imported.' releases from GitHub.');
    }

    private function authorise(): void
    {
        $panel = app(PanelManager::class)->currentPanel();

        abort_unless($panel?->isSupportEditable(), 404);
        abort_unless(SupportEditing::can($panel), 403);
    }

    /**
     * @param  array<string, mixed>  $meta
     * @return array<string, mixed>
     */
    private function meta(string $kind, array $meta): array
    {
        if ($kind === ContentEntry::KIND_RELEASE) {
            return [
                'added' => $this->lines($meta['added'] ?? []),
                'changed' => $this->lines($meta['changed'] ?? []),
                'fixed' => $this->lines($meta['fixed'] ?? []),
                'source' => $meta['source'] ?? null,
            ];
        }

        if ($kind === ContentEntry::KIND_ARTICLE) {
            return ['keywords' => (string) ($meta['keywords'] ?? '')];
        }

        if ($kind === ContentEntry::KIND_ABOUT) {
            $links = [];

            foreach ((array) ($meta['links'] ?? []) as $link) {
                if (! is_array($link) || ($link['href'] ?? '') === '') {
                    continue;
                }

                $links[] = [
                    'label' => (string) ($link['label'] ?? $link['href']),
                    'href' => (string) $link['href'],
                ];
            }

            return [
                'version' => $meta['version'] ?? null,
                'contact' => $meta['contact'] ?? null,
                'tagline' => $meta['tagline'] ?? null,
                'links' => $links,
            ];
        }

        return $meta;
    }

    /**
     * @param  mixed  $value
     * @return list<string>
     */
    private function lines(mixed $value): array
    {
        if (is_string($value)) {
            $value = preg_split('/\r\n|\n|\r/', $value) ?: [];
        }

        if (! is_array($value)) {
            return [];
        }

        return array_values(array_filter(array_map(
            static fn (mixed $line): string => trim((string) $line),
            $value,
        ), static fn (string $line): bool => $line !== ''));
    }
}
