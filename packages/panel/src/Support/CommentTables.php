<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Support;

/**
 * Where resource comments live, asked rather than assumed.
 *
 * Prefixed by default (`panel_comments`) so a package migration does not claim
 * a table name an application may already use for its own comment system.
 */
final class CommentTables
{
    public static function comments(): string
    {
        return (string) config('panel.comments.table', 'panel_comments');
    }
}
