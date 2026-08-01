<?php

declare(strict_types=1);

namespace PanelKit\Panel\Ai;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Laravel\Ai\Models\Conversation;
use Laravel\Ai\Models\ConversationMessage;
use PanelKit\Panel\Support\TenantContext;

/**
 * Make the AI SDK's conversation tables tenant-scoped without forking it.
 *
 * THE SDK'S MODELS ARE NOT SWAPPABLE - there is no `ai.conversations.model`
 * config key - so the usual approach of pointing it at a subclass is not
 * available. Eloquent's static hooks are, and they attach from outside the
 * package: `addGlobalScope` constrains every read, `creating` stamps every
 * write, and no vendor file is edited.
 *
 * THAT MATTERS BECAUSE THE PACKAGE IS 0.x. A fork would have to be re-applied on
 * every upgrade, silently, by whoever happens to run `composer update` - and the
 * thing silently dropped would be the tenant boundary on a chat history.
 *
 * A CHAT HISTORY IS AMONG THE MOST SENSITIVE THINGS IN THE PANEL: a transcript
 * of what somebody asked about their own customers, in their own words,
 * including the questions they thought better of. The SDK links a conversation
 * to a `participant` and stops there - correct for a single-tenant app, and
 * insufficient here, because every query would then have to remember to join
 * `users` to discover whose organisation it belongs to.
 *
 * THE SCOPE DENIES ON A NULL TENANT, matching every other scope in this panel. A
 * conversation whose tenant is unknown is shown to nobody rather than everybody.
 */
final class TenantScopedConversations
{
    /** @var list<class-string<Model>> */
    private const MODELS = [
        Conversation::class,
        ConversationMessage::class,
    ];

    public static function attach(): void
    {
        foreach (self::MODELS as $model) {
            if (! class_exists($model)) {
                continue;
            }

            $model::addGlobalScope('panel_tenant', static function (Builder $builder): void {
                $context = app(TenantContext::class);

                // Dedicated database: the connection is already the boundary, and
                // the column carries no information there.
                if (! $context->shouldScopeByColumn()) {
                    return;
                }

                $record = $builder->getModel();
                $key = $context->currentKey();

                if ($key === null) {
                    $builder->whereNull($record->qualifyColumn($record->getKeyName()));

                    return;
                }

                $builder->where($record->qualifyColumn('tenant_id'), $key);
            });

            $model::creating(static function (Model $record): void {
                // From context, never from anything supplied - the same rule the
                // rest of the panel follows for identity columns.
                if ($record->getAttribute('tenant_id') === null) {
                    $record->setAttribute('tenant_id', app(TenantContext::class)->currentKey());
                }
            });
        }
    }
}
