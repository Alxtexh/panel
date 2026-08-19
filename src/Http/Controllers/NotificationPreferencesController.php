<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Inertia\Inertia;
use Inertia\Response;

final class NotificationPreferencesController
{
    /**
     * Minimal MVP categories.
     *
     * Applications can override with `panel.notifications.categories`.
     *
     * @return list<string>
     */
    private function categories(): array
    {
        $categories = (array) config('panel.notifications.categories', [
            'general',
            'exports',
            'actions',
        ]);

        return array_values(array_filter($categories, static fn (mixed $c): bool => is_string($c) && $c !== ''));
    }

    public function edit(Request $request): Response
    {
        $user = $request->user();

        $categories = $this->categories();
        $prefs = [];

        foreach ($categories as $category) {
            $prefs[$category] = ['toast_enabled' => true, 'digest_enabled' => false];
        }

        if (! Schema::hasTable('panel_notification_preferences')) {
            return Inertia::render('settings/Notifications', [
                'categories' => $categories,
                'preferences' => $prefs,
            ]);
        }

        $rows = DB::table('panel_notification_preferences')
            ->where('user_id', $user->getKey())
            ->whereIn('category', $categories)
            ->get(['category', 'toast_enabled', 'digest_enabled']);

        foreach ($rows as $row) {
            $prefs[(string) $row->category] = [
                'toast_enabled' => (bool) $row->toast_enabled,
                'digest_enabled' => (bool) $row->digest_enabled,
            ];
        }

        return Inertia::render('settings/Notifications', [
            'categories' => $categories,
            'preferences' => $prefs,
        ]);
    }

    public function update(Request $request): RedirectResponse
    {
        $user = $request->user();

        $categories = $this->categories();

        $validated = $request->validate([
            'preferences' => ['array'],
            'preferences.*.toast_enabled' => ['boolean'],
            'preferences.*.digest_enabled' => ['boolean'],
        ]);

        $input = (array) ($validated['preferences'] ?? []);

        if (Schema::hasTable('panel_notification_preferences')) {
            foreach ($categories as $category) {
                $toast = (bool) ($input[$category]['toast_enabled'] ?? true);
                $digest = (bool) ($input[$category]['digest_enabled'] ?? false);

                DB::table('panel_notification_preferences')
                    ->updateOrInsert(
                        ['user_id' => $user->getKey(), 'category' => $category],
                        ['toast_enabled' => $toast, 'digest_enabled' => $digest],
                    );
            }
        }

        Inertia::flash('toast', ['type' => 'success', 'message' => __('Notification preferences saved.')]);

        return back();
    }
}

