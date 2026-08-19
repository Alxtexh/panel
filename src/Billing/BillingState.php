<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Billing;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string $billable_type
 * @property string $billable_key
 * @property string $status
 * @property \Illuminate\Support\Carbon|null $period_end_at
 * @property \Illuminate\Support\Carbon|null $grace_ends_at
 * @property string|null $provider_ref
 * @property \Illuminate\Support\Carbon $updated_at
 */
final class BillingState extends Model
{
    protected $table = 'panel_billing_states';

    protected $guarded = [];

    protected function casts(): array
    {
        return [
            'period_end_at' => 'datetime',
            'grace_ends_at' => 'datetime',
            'updated_at' => 'datetime',
        ];
    }
}

