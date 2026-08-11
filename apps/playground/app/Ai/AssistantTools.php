<?php

declare(strict_types=1);

namespace App\Ai;

/**
 * Tools an installation adds to the assistant.
 *
 * THE ASSISTANT BELONGS TO THE STARTER; ITS ISP TOOLS DO NOT. `FindSubscriber`
 * and `SuspendSubscriber` answer questions about subscribers, which only this
 * demonstration has - and naming them in `PanelAssistant` meant deleting the
 * demo left the agent pointing at classes that were gone.
 *
 * INSTANCES, NOT CLASS NAMES, because a tool may need constructing with
 * something. They are held rather than resolved, and `PanelAssistant::tools()`
 * is only called when a prompt runs - so registering costs nothing on a request
 * that never speaks to the assistant.
 */
final class AssistantTools
{
    /** @var list<object> */
    private static array $tools = [];

    /** @param list<object> $tools */
    public static function add(array $tools): void
    {
        self::$tools = [...self::$tools, ...$tools];
    }

    /** @return list<object> */
    public static function all(): array
    {
        return self::$tools;
    }

    /**
     * Cleared with the panel's other process-level memos - a static list
     * appended to on every boot grows for the life of the process.
     */
    public static function flush(): void
    {
        self::$tools = [];
    }
}
