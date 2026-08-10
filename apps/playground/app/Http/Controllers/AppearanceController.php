<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

/**
 * Saves the acting user's display preferences.
 *
 * EVERY VALUE IS CHECKED AGAINST A LIST. These end up as CSS custom properties
 * on `<html>`, so an unvalidated value is a string the browser will happily
 * accept into a style declaration. `primary` in particular becomes part of a
 * colour value - the allow-list is what keeps this a preference endpoint rather
 * than a way to inject style into every page the user loads.
 *
 * FONT SIZE IS CLAMPED, not merely typed. An integer is still an integer at
 * 4,000, and the panel would render one word per screen with no way back except
 * clearing storage.
 *
 * PARTIAL UPDATES ARE MERGED. The drawer changes one setting at a time, and a
 * replace-everything write would blank the other six each click.
 */
final class AppearanceController extends Controller
{
    /**
     * The permitted values, mirroring the client's tables.
     *
     * Duplicated deliberately: the client decides what a preference LOOKS like,
     * the server decides what may be STORED. A shared list would mean trusting
     * the browser's copy, which is the thing being validated.
     */
    /*
     * TWO, NOT THREE. `system` is gone: it made the appearance a property of
     * the machine rather than of the account, and it was the default - so most
     * people were shown a theme nobody had chosen. A client that still sends it
     * is refused here rather than storing a value nothing can render.
     */
    private const THEMES = ['light', 'dark'];

    private const DENSITIES = ['comfortable', 'compact'];

    private const SIDES = ['left', 'right', 'horizontal'];

    private const CARD_STYLES = ['transparent', 'filled'];

    private const PRIMARIES = [
        'slate', 'gray', 'zinc', 'red', 'rose', 'orange', 'amber', 'yellow',
        'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo',
        'violet', 'purple', 'fuchsia', 'pink',
    ];

    private const SURFACES = ['neutral', 'slate', 'gray', 'zinc', 'stone', 'warm', 'cool', 'sand'];

    /** Mirrors RADIUS_OPTIONS in useAppearance.ts - fixed stops, not a range. */
    private const RADII = [0, 0.25, 0.5, 0.75, 1];

    private const CONTENT_LAYOUTS = ['full', 'centered'];

    private const MENU_STYLES = ['collapsible', 'drilldown'];

    private const FONT_MIN = 12;

    private const FONT_MAX = 20;

    public function update(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'theme' => ['sometimes', 'string', 'in:'.implode(',', self::THEMES)],
            'density' => ['sometimes', 'string', 'in:'.implode(',', self::DENSITIES)],
            'sidebarSide' => ['sometimes', 'string', 'in:'.implode(',', self::SIDES)],
            'cardStyle' => ['sometimes', 'string', 'in:'.implode(',', self::CARD_STYLES)],
            'primary' => ['sometimes', 'string', 'in:'.implode(',', self::PRIMARIES)],

            /*
             * WHETHER THE ACCENT WAS CHOSEN OR IS JUST THE DEFAULT.
             *
             * It decides whether the organisation's brand colour applies, so it
             * has to persist per ACCOUNT rather than per browser - otherwise
             * signing in somewhere else shows the company colour over a choice
             * already made, and the person has to make it again.
             */
            'primaryChosen' => ['sometimes', 'boolean'],
            'surface' => ['sometimes', 'string', 'in:'.implode(',', self::SURFACES)],
            'fontSize' => ['sometimes', 'integer', 'between:'.self::FONT_MIN.','.self::FONT_MAX],
            'radius' => ['sometimes', 'numeric', 'in:'.implode(',', self::RADII)],
            'contentLayout' => ['sometimes', 'string', 'in:'.implode(',', self::CONTENT_LAYOUTS)],
            'menuStyle' => ['sometimes', 'string', 'in:'.implode(',', self::MENU_STYLES)],
        ]);

        $user = $request->user();

        // Merged, not replaced: the drawer sends one key at a time.
        $user->appearance = [...($user->appearance ?? []), ...$validated];
        $user->save();

        return response()->json(['appearance' => $user->appearance]);
    }
}
