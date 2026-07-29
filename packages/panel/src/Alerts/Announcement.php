<?php

declare(strict_types=1);

namespace PanelKit\Panel\Alerts;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use PanelKit\Panel\Support\TenantContext;

/**
 * A notice somebody wrote, addressed to everybody in an organisation.
 *
 * IT SITS AT THE TOP OF THE DASHBOARD, not on a page of its own. A page called
 * Announcements is a page nobody opens - so the notice everybody needed to read
 * is the one nobody read, which is the entire reason this is a banner.
 *
 * DISMISSING IT DOES NOT DESTROY IT. Closing a banner records that THIS person
 * has read it and writes them a notification, so the thing they just dismissed
 * is still in the bell where they can find it again. A dismissal that deleted
 * the notice would let the first person to click × hide it from the whole
 * organisation; one that simply vanished would lose the announcement for
 * whoever closed it by reflex, which is most people.
 *
 * TENANT-SCOPED LIKE EVERYTHING ELSE, with the usual rule: no tenant means no
 * rows rather than all of them.
 */
final class Announcement extends Model
{
    public const DANGER = 'danger';

    public const WARNING = 'warning';

    public const INFO = 'info';

    public const SUCCESS = 'success';

    /** Persists until dismissed - for anything with a consequence. */
    public const BANNER = 'banner';

    /** Transient - for something pleasant nobody needs to act on. */
    public const TOAST = 'toast';

    protected $table = 'panel_announcements';

    protected $guarded = [];

    protected $casts = [
        'starts_at' => 'datetime',
        'ends_at' => 'datetime',
    ];

    protected static function booted(): void
    {
        /*
         * SCOPED ON READ AND STAMPED ON WRITE, so neither a query nor a create
         * can forget. `null` denies rather than matching everything - the same
         * rule every other scope in this panel follows, and the one that makes a
         * misconfigured resolver show an empty dashboard rather than every
         * organisation's notices at once.
         */
        static::addGlobalScope('tenant', static function (Builder $builder): void {
            $context = app(TenantContext::class);

            if (! $context->shouldScopeByColumn()) {
                return;
            }

            $builder->where(
                $builder->getModel()->getTable().'.tenant_id',
                $context->currentKey() ?? -1,
            );
        });

        static::creating(static function (self $announcement): void {
            if ($announcement->tenant_id === null) {
                $announcement->tenant_id = app(TenantContext::class)->currentKey();
            }
        });
    }

    public function dismissals(): HasMany
    {
        return $this->hasMany(AnnouncementDismissal::class, 'announcement_id');
    }

    /**
     * Notices that are true now and this person has not closed.
     *
     * THE WINDOW IS PART OF THE QUERY. `starts_at` lets somebody write Monday's
     * notice on Friday; `ends_at` is what stops last month's maintenance window
     * sitting on the dashboard forever, because nobody ever goes back to delete
     * one.
     *
     * @return \Illuminate\Database\Eloquent\Collection<int, self>
     */
    public static function activeFor(int|string $userId): \Illuminate\Database\Eloquent\Collection
    {
        return self::query()
            ->where(fn (Builder $q) => $q->whereNull('starts_at')->orWhere('starts_at', '<=', now()))
            ->where(fn (Builder $q) => $q->whereNull('ends_at')->orWhere('ends_at', '>=', now()))
            ->whereDoesntHave('dismissals', fn (Builder $q) => $q->where('user_id', (string) $userId))
            ->orderByRaw("case severity when 'danger' then 0 when 'warning' then 1 else 2 end")
            ->latest('id')
            ->limit(5)
            ->get();
    }

    /** @return array<string, mixed> */
    public function toBanner(): array
    {
        return [
            'id' => $this->getKey(),
            'title' => $this->title,
            'body' => $this->body,
            'severity' => $this->severity,
            'display' => $this->display,
            'actionLabel' => $this->action_label,
            'actionUrl' => $this->action_url,
        ];
    }
}
