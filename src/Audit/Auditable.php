<?php

declare(strict_types=1);

namespace PanelKit\Panel\Audit;

/**
 * Opt a model into the audit trail.
 *
 * OPT-IN, NOT AUTOMATIC. Auditing everything sounds safer and is not: the trail
 * fills with rows nobody reads - cache warmers, rollup writes, session touches -
 * and the entries that matter become harder to find. An audit trail is only
 * useful in proportion to how much of it is signal.
 *
 * It also costs an INSERT on every write, which is a real price on a table taking
 * bulk updates.
 *
 * `booted` RATHER THAN AN OBSERVER CLASS so the behaviour travels with the model
 * that declares it. An observer registered in a service provider is a second
 * place to look, and the failure - forgetting to register it - is silent: the
 * model looks audited and records nothing.
 */
trait Auditable
{
    public static function bootAuditable(): void
    {
        static::created(fn ($model) => app(AuditRecorder::class)->record($model, 'created'));
        static::updated(fn ($model) => app(AuditRecorder::class)->record($model, 'updated'));
        static::deleted(fn ($model) => app(AuditRecorder::class)->record($model, 'deleted'));

        /*
         * `restored` only exists on soft-deleting models. Registering it
         * unconditionally throws on a model without SoftDeletes, so the check is
         * for the method rather than for the trait - a model may implement
         * restoring without using Laravel's trait.
         */
        if (method_exists(static::class, 'restored')) {
            static::restored(fn ($model) => app(AuditRecorder::class)->record($model, 'restored'));
        }
    }
}
