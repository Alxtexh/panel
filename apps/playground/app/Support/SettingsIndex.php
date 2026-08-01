<?php

declare(strict_types=1);

namespace App\Support;

use App\Models\User;

/**
 * What the settings area contains, declared once with a description.
 *
 * THEIRS IS THREE BARE LINKS in a sidebar, which is fine at three and stops
 * being fine the moment a fourth or fifth setting needs somewhere to live -
 * a sidebar with eight unlabelled words is a list somebody has to click
 * through to identify, not an index. This is what `Settings/Index.vue`
 * searches, in the browser, with no request - the same choice `HelpArticles`
 * made for the help centre and for the same reason: a handful of entries
 * with descriptions is cheap enough to ship whole and filter on keystroke.
 *
 * A ROLE-GATED ENTRY IS OMITTED, not shown disabled. The account menu's own
 * "User management" link makes the same call for the same reason: a link
 * that always 403s advertises a page and then refuses it.
 *
 * NOT PORTAL-GATED, and that is not an oversight. `/settings` is registered
 * outside every panel's own route group - the same way `/settings/profile`,
 * `/settings/security` and `/settings/organisation` already were - so
 * `PanelManager::currentPanel()` resolves to the default panel for this
 * request regardless of which portal linked here. Filtering entries by
 * portal would be enforcing a boundary the routes themselves do not have,
 * which is decoration, not a guard.
 */
final class SettingsIndex
{
    /** @return list<array{key: string, title: string, description: string, href: string}> */
    public static function entries(?User $user): array
    {
        $entries = [
            [
                'key' => 'profile',
                'title' => 'Profile',
                'description' => 'Your name, your email address and your photo.',
                'href' => route('profile.edit'),
            ],
            [
                'key' => 'security',
                'title' => 'Security',
                'description' => 'Password, two-factor authentication and passkeys.',
                'href' => route('security.edit'),
            ],
            /*
             * LAST, AND NAMED FOR WHAT IT IS - the same ordering note the
             * sidebar itself carries: the two above are about the person
             * signed in, this one changes what every colleague sees.
             */
            [
                'key' => 'organisation',
                'title' => 'Organisation',
                'description' => 'The name and logo everyone in this organisation sees.',
                'href' => route('panel.pages.organisation'),
            ],
        ];

        $entries[] = [
            'key' => 'workspaces',
            'title' => 'Workspaces',
            'description' => 'The organisations you belong to; switch between them or start a new one.',
            'href' => route('workspaces.edit'),
        ];

        /*
         * ROLES IS NOT A SEPARATE ENTRY, for the reason the sidebar's own
         * comment already gives: User management has its own Roles tab, and
         * listing both here would be the same destination twice under
         * different names.
         */
        if ($user !== null && $user->hasPermission('manage_roles')) {
            $entries[] = [
                'key' => 'user-management',
                'title' => 'User management',
                'description' => 'Invite teammates, and assign roles and permissions.',
                'href' => route('panel.pages.user-management'),
            ];
        }

        if ($user !== null && $user->hasPermission('manage_assistant')) {
            $entries[] = [
                'key' => 'assistant',
                'title' => 'Assistant',
                'description' => 'The AI provider the assistant runs on, and its key.',
                'href' => route('assistant-settings.edit'),
            ];
        }

        return $entries;
    }
}
