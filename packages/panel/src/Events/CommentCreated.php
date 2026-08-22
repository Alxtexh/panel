<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Events;

use Alxtexh\Panel\Models\PanelComment;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

/**
 * Fired after a resource comment is stored. Listeners may notify @mentioned users.
 */
final class CommentCreated
{
    use Dispatchable;
    use SerializesModels;

    /**
     * @param  list<int|string>  $mentionedUserIds
     */
    public function __construct(
        public readonly PanelComment $comment,
        public readonly Model $record,
        public readonly string $resourceKey,
        public readonly string $recordUrl,
        public readonly array $mentionedUserIds,
    ) {}
}
