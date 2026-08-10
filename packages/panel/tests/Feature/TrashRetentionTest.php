<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Support\PanelSettings;
use Alxtexh\Panel\Tests\Fixtures\Models\Article;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Alxtexh\Panel\Trash\TrashBin;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * How long the bin keeps things, and why both ends of the range are fixed.
 *
 * BELOW A WEEK IS NOT A BIN. "I deleted it on Friday" has to still be
 * recoverable on Monday - that is the exact case the feature exists for, and a
 * three-day window fails it every weekend.
 *
 * ABOVE A MONTH IS A SECOND DATABASE. It stops being a bin and becomes a copy
 * nobody is looking after, holding personal data long after anybody meant to
 * keep it - which is a retention problem rather than a convenience.
 *
 * THE CLAMP LIVES HERE, NOT ONLY IN THE FORM, and that is the property worth
 * asserting. A value can arrive from a hand-edited request, a config file, or
 * an older release that allowed a wider range; this is the one function both
 * the settings screen and the PRUNER read, so clamping here is what makes the
 * bound real rather than advisory.
 */
final class TrashRetentionTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenant;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenant = Tenant::create(['name' => 'Mine', 'slug' => 'mine']);

        $user = User::create([
            'tenant_id' => $this->tenant->id,
            'name' => 'Operator',
            'email' => 'operator@example.test',
            'password' => 'password',
            'email_verified_at' => now(),
        ]);

        $this->actingAs($user);
    }

    public function test_a_configured_value_inside_the_range_is_honoured(): void
    {
        config(['panel.trash.retention_days' => 14]);

        $this->assertSame(14, TrashBin::retentionDays());
    }

    public function test_a_value_below_the_minimum_is_clamped_up(): void
    {
        config(['panel.trash.retention_days' => 1]);

        $this->assertSame(
            TrashBin::MINIMUM_DAYS,
            TrashBin::retentionDays(),
            'A bin shorter than a week cannot survive a weekend, which is the case it exists for.',
        );
    }

    public function test_a_value_above_the_maximum_is_clamped_down(): void
    {
        config(['panel.trash.retention_days' => 3650]);

        $this->assertSame(
            TrashBin::MAXIMUM_DAYS,
            TrashBin::retentionDays(),
            'A bin longer than a month is a second copy of the database nobody is looking after.',
        );
    }

    public function test_a_nonsense_value_still_lands_inside_the_range(): void
    {
        foreach ([0, -30, 'not-a-number', null] as $value) {
            config(['panel.trash.retention_days' => $value]);

            $days = TrashBin::retentionDays();

            $this->assertGreaterThanOrEqual(TrashBin::MINIMUM_DAYS, $days);
            $this->assertLessThanOrEqual(TrashBin::MAXIMUM_DAYS, $days);
        }
    }

    /**
     * THE SETTING WINS OVER CONFIG, because this is an operational decision
     * rather than a deployment one: whoever runs the panel knows how long their
     * people take to notice a mistake, and that answer should not need a deploy.
     */
    public function test_a_stored_setting_overrides_the_configured_default(): void
    {
        config(['panel.trash.retention_days' => 10]);

        app(PanelSettings::class)->put('trash.retention_days', 21);

        $this->assertSame(21, TrashBin::retentionDays());
    }

    /**
     * AND A STORED VALUE IS CLAMPED TOO.
     *
     * The screen validates, but the stored value can also arrive from an older
     * release or a direct write - so the bound has to hold on read.
     */
    public function test_a_stored_setting_outside_the_range_is_clamped(): void
    {
        app(PanelSettings::class)->put('trash.retention_days', 9999);

        $this->assertSame(TrashBin::MAXIMUM_DAYS, TrashBin::retentionDays());
    }

    /**
     * EVERY RECORD SAYS WHEN IT WILL BE PURGED.
     *
     * A bin that does not say is a bin people do not trust, so they take their
     * own copies - which is the outcome the feature was meant to prevent.
     */
    public function test_a_record_reports_when_it_will_be_purged(): void
    {
        config(['panel.trash.retention_days' => 14]);

        $article = Article::withoutGlobalScopes()->create([
            'tenant_id' => $this->tenant->id,
            'title' => 'Gone',
            'status' => 'draft',
        ]);

        $article->delete();

        $purgesAt = app(TrashBin::class)->purgesAt($article->fresh());

        $this->assertSame(
            14,
            (int) round(now()->diffInDays($purgesAt, absolute: true)),
            'The purge date did not follow the retention window.',
        );
    }

    public function test_the_bin_reports_the_window_it_is_using(): void
    {
        config(['panel.trash.retention_days' => 14]);

        $this->assertSame(14, TrashBin::retentionDays());

        config(['panel.trash.retention_days' => 30]);

        $this->assertSame(30, TrashBin::retentionDays());
    }
}
