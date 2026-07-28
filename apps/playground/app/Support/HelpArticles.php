<?php

declare(strict_types=1);

namespace App\Support;

/**
 * The help centre's articles, held on the server.
 *
 * THEY MOVED HERE SO THERE WOULD BE ONE COPY. They lived in `Help.vue`, which
 * was fine while the only thing that read them was the help page - and stopped
 * being fine the moment the assistant needed to cite them. The alternative was a
 * second copy in PHP for indexing, and two copies of an answer is how a panel
 * ends up telling somebody one thing on screen and a different thing in chat,
 * with nothing anywhere reporting a problem.
 *
 * THE PAGE STILL SEARCHES THEM IN THE BROWSER. Nothing about the help centre's
 * behaviour changed: the whole set is handed to the page as a prop, so typing
 * still filters on keystroke with no request. Where the array is DEFINED and
 * where it is SEARCHED are different questions, and only the first one moved.
 *
 * CATEGORIES STAYED IN THE COMPONENT, because a category carries an icon, and an
 * icon is a Vue component. Sending a string for the server to name and the
 * client to look up would put half a decision in each place; the category key
 * here is just a string both ends agree on.
 */
final class HelpArticles
{
    /**
     * @return list<array{id: string, category: string, title: string, keywords: string, body: list<string>}>
     */
    public static function all(): array
    {
        return [
            [
                'id' => 'first-steps',
                'category' => 'start',
                'title' => 'Setting up for the first time',
                'keywords' => 'setup onboarding begin new install first plan router',
                'body' => [
                    'Work in this order: create your plans, register your routers, then add subscribers against them. A subscriber needs both a plan and a router, so creating those first avoids a half-filled form.',
                    'Plans describe what you sell - a speed and a price. Routers describe where a subscriber connects. Neither depends on the other, so you can create them in either order.',
                ],
            ],
            [
                'id' => 'search-anything',
                'category' => 'start',
                'title' => 'Finding anything quickly',
                'keywords' => 'search command palette shortcut keyboard ctrl k find lookup',
                'body' => [
                    'Press ⌘K, or Ctrl+K on Windows and Linux, from anywhere in the panel. The palette searches subscribers, routers and plans at once, and also jumps to pages.',
                    'Searching matches the start of any word, so "achieng" finds "Amina Achieng" without needing the full name.',
                ],
            ],
            [
                'id' => 'filtering',
                'category' => 'subscribers',
                'title' => 'Filtering a list',
                'keywords' => 'filter status expiry date range narrow search tabs',
                'body' => [
                    'The tabs above a table are quick filters on status. The funnel icon opens the full panel, where you can combine several filters at once - status, plan type and an expiry range together.',
                    'Filters are staged: nothing is applied until you press Apply, so you can set three conditions without the table reloading three times.',
                    'The filters live in the address bar, which means a filtered view can be bookmarked or sent to a colleague.',
                ],
            ],
            [
                'id' => 'bulk-actions',
                'category' => 'subscribers',
                'title' => 'Changing many subscribers at once',
                'keywords' => 'bulk select all suspend activate delete many batch mass',
                'body' => [
                    'Tick the rows you want and the action bar appears above the table. To act on more than the visible page, use "Select all" - that takes everything matching your current filters, not just what is on screen.',
                    'A selection you can see is applied immediately. A select-all across thousands of records runs in the background and tells you when it has finished, because a request that long would otherwise time out half way through.',
                    'Destructive actions ask for confirmation and state how many records they will affect.',
                ],
            ],
            [
                'id' => 'rejected-change',
                'category' => 'subscribers',
                'title' => 'Why a change was rejected',
                'keywords' => 'error rejected conflict stale someone else edited failed save',
                'body' => [
                    'If someone else edited the same record while your page was open, the panel refuses your write rather than silently overwriting their change. Reload to see the current values, then reapply your edit.',
                    'A value can also be rejected for not being an allowed option. Statuses and plan types are fixed lists, and a value outside them is refused so the record stays findable by the filters.',
                ],
            ],
            [
                'id' => 'exporting',
                'category' => 'data',
                'title' => 'Exporting a filtered list',
                'keywords' => 'export csv download spreadsheet excel report extract',
                'body' => [
                    'Select rows, or select all matching, and choose Export CSV. The file contains the current filtered view in full - if you filtered to 43 records you get 43 rows, however many pages they span.',
                    'Exports are generated in the background and offered as a download when ready. The link belongs to your account and cannot be used by anyone else.',
                    'The file opens correctly in Excel, including names with accents, and values are written as text so a phone number starting with + is not treated as a formula.',
                ],
            ],
            [
                'id' => 'live-data',
                'category' => 'data',
                'title' => 'How the data stays current',
                'keywords' => 'live refresh realtime polling updates automatic stale',
                'body' => [
                    'Lists update in place without a full page reload, so a status that changes elsewhere appears on your screen shortly afterwards.',
                    'How that happens is a configuration choice - a periodic check or a push connection. Nothing in the interface changes when it is switched, and neither requires you to do anything.',
                ],
            ],
            [
                'id' => 'appearance',
                'category' => 'panel',
                'title' => 'Changing how the panel looks',
                'keywords' => 'theme dark light colour color font size sidebar layout appearance settings',
                'body' => [
                    'The gear icon in the toolbar opens the appearance drawer. You can set the colour scheme, an accent colour, a surface tint, spacing density and text size in pixels.',
                    'The navigation can sit on the left, on the right, or across the top. The rest of the interface mirrors to match, so the collapse control and breadcrumbs stay next to the menu wherever you put it.',
                    'These are your preferences and are stored in your browser, so they do not affect anyone else using the same panel.',
                ],
            ],
            [
                'id' => 'columns',
                'category' => 'panel',
                'title' => 'Showing and hiding columns',
                'keywords' => 'columns hide show table layout customise width',
                'body' => [
                    'The columns icon beside the filters lets you turn individual columns off. Your choice is remembered per table.',
                    'Some columns cannot be hidden - the one carrying the record name, for instance, since a row with no identifier is not useful.',
                ],
            ],
        ];
    }
}
