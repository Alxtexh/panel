<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Ai;

use Illuminate\Database\Eloquent\Model;
use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Support\Abilities;

/**
 * The base every panel AI tool extends, and the reason is authorisation.
 *
 * A TOOL IS A NEW WAY INTO THE SAME DATA, and it does not travel the HTTP path
 * that every existing guard sits on. There is no policy middleware around a tool
 * call, no route, no controller - the model decides to call it and it runs. So a
 * tool that queries subscribers directly is an endpoint with no authorisation at
 * all, reachable by asking politely.
 *
 * THE ONLY SAFE ARRANGEMENT IS THE SAME GATE THE BUTTON USES. Not a similar one,
 * and not a prompt instruction: "only suspend accounts when the user is allowed
 * to" is a request, not a permission check, and the whole premise of a language
 * model is that its output is not guaranteed. `authorise()` calls
 * `Resource::can()` - the identical method the screen calls to decide whether to
 * render the button.
 *
 * IT REFUSES WITH A SENTENCE, NOT AN EXCEPTION. A thrown error inside a tool call
 * becomes a stack trace the agent then tries to interpret, and it will
 * cheerfully summarise it to the person as though it were an answer. A returned
 * refusal is something the model can relay accurately: it is text, which is what
 * it is good at.
 */
abstract class PanelTool
{
    /**
     * Refuse unless the acting user may perform `$action` on `$resourceKey`.
     *
     * Returns null when allowed, and the refusal text otherwise - so a tool
     * reads as `if ($refusal = $this->authorise(...)) { return $refusal; }`,
     * which puts the check at the top and makes its absence visible.
     */
    protected function authorise(string $action, string $resourceKey, ?Model $record = null): ?string
    {
        $class = app(PanelManager::class)->resource($resourceKey);

        if ($class === null) {
            return "There is no {$resourceKey} in this panel.";
        }

        /*
         * BOTH GATES, exactly as the HTTP path applies them. `can()` runs the
         * policy, which asks tenancy AND ability; `hasPermission` is what the
         * policy consults. Checking only the ability would let a tool reach
         * another organisation's records; checking only tenancy would let a
         * read-only role act.
         */
        if (! $class::can($action, $record)) {
            return 'You do not have permission to do that, so I have not done it.';
        }

        return null;
    }

    /**
     * The ability name for an action, for tools that need to name it.
     */
    protected function ability(string $action, string $resourceKey): string
    {
        return Abilities::name($action, $resourceKey);
    }

    /**
     * Whether this tool changes anything.
     *
     * DESTRUCTIVE TOOLS PAUSE FOR APPROVAL - see `AgentApproval`. Declaring it
     * here rather than at the call site means a tool cannot be added to an agent
     * without answering the question, and the answer travels with the tool
     * rather than with whoever wired it up.
     */
    public function isDestructive(): bool
    {
        return false;
    }
}
