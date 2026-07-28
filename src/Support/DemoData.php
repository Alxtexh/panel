<?php

declare(strict_types=1);

namespace PanelKit\Panel\Support;

/**
 * The shape of the demo data, in one place.
 *
 * EXTRACTED BECAUSE TWO SEEDERS NEEDED IT AND THE LESSONS ARE NOT OBVIOUS. Every
 * comment below records a distribution that was wrong first, in a way no test
 * would fail on: rows spread over three weeks that were meant to cover two
 * years, statuses perfectly correlated with plan type, eight of ten routers with
 * no subscribers at all. Each produced VALID data and a chart that looked like a
 * charting bug. A second copy of this logic would drift from the first, and the
 * drift would be invisible for the same reason.
 *
 * DETERMINISTIC THROUGHOUT. Row `n` of tenant `t` is always the same row, so a
 * benchmark taken today is comparable with one taken next month, and a bug found
 * at scale can be reproduced at a smaller one.
 *
 * INDEXED PER TENANT, NOT GLOBALLY. The caller passes `$n`, this tenant's own
 * row number. The previous global-index form had to divide the loop counter by
 * the tenant count before every modulo - because consecutive rows of one tenant
 * were `$tenantCount` apart, so `$i % count($routers)` visited only the residues
 * that stride happened to land on. Per-tenant numbering removes the trap rather
 * than documenting it, and is what lets tenants have DIFFERENT sizes.
 */
final class DemoData
{
    private const FIRST = ['Amina', 'Brian', 'Cynthia', 'David', 'Esther', 'Felix', 'Grace', 'Hassan', 'Irene', 'James',
        'Kevin', 'Lydia', 'Moses', 'Nancy', 'Oscar', 'Patience', 'Quincy', 'Rose', 'Samuel', 'Teresa'];

    private const LAST = ['Achieng', 'Baraka', 'Chebet', 'Dube', 'Ekwaro', 'Fumo', 'Gitau', 'Hamisi', 'Imani', 'Juma',
        'Kamau', 'Lutta', 'Mwangi', 'Njoroge', 'Otieno', 'Peters', 'Quaye', 'Ruto', 'Simiyu', 'Tembo'];

    private const PLAN_TYPES = ['pppoe', 'hotspot', 'static'];

    /**
     * One subscriber row.
     *
     * @param  int  $n  This tenant's own row number, from 0.
     * @param  int  $seq  A globally unique number, for the access code.
     * @param  list<int|null>  $plans
     * @param  list<int|null>  $routers
     * @param  list<float>  $signupWeights  From dayWeights()
     * @param  list<float>  $expiryWeights  From dayWeights()
     * @return array<string, mixed>
     */
    public function clientRow(
        int $tenantId,
        int $n,
        int $seq,
        array $plans,
        array $routers,
        int $nowTs,
        array $signupWeights,
        array $expiryWeights,
    ): array {
        $routerIndex = $n % max(1, count($routers));

        // Half the estate already lapsed, half still ahead.
        $expiryOffset = $this->offsetFor($n, $expiryWeights, 71) - (86400 * 180);
        $createdOffset = $this->offsetFor($n, $signupWeights, 11);

        return [
            'tenant_id' => $tenantId,
            'plan_id' => $plans[$n % max(1, count($plans))] ?? null,
            'router_id' => $routers[$routerIndex] ?? null,
            'name' => self::FIRST[$n % 20].' '.self::LAST[intdiv($n, 20) % 20],
            'phone' => '+2547'.str_pad((string) (10_000_000 + ($n % 89_999_999)), 8, '0', STR_PAD_LEFT),
            'access_code' => strtoupper(base_convert((string) (100_000 + $seq), 10, 36)),
            'status' => $this->statusFor($n, $routerIndex),
            /*
             * STATUS AND PLAN TYPE MUST BE INDEPENDENT. An earlier version had
             * `$statuses[$i % 9]` beside `$planTypes[$i % 3]`, which look like
             * two unrelated cycles and are not - 9 is a multiple of 3, so the
             * first determines the second. Every suspended client landed on one
             * plan type, and every cross-tab degenerated into a chart that
             * looked broken. `statusFor()` is hashed, so the correlation is gone
             * at the source rather than papered over here.
             */
            'plan_type' => self::PLAN_TYPES[$n % 3],
            'expiry_date' => date('Y-m-d H:i:s', $nowTs + $expiryOffset),
            'created_at' => date('Y-m-d H:i:s', $nowTs - $createdOffset),
            'updated_at' => date('Y-m-d H:i:s', $nowTs - $createdOffset),
        ];
    }

    /**
     * A subscriber's status, biased by which router serves them.
     *
     * `$statuses` is still the source of the mix; this only decides how far
     * along that list a given subscriber lands, so the overall proportions stay
     * recognisable while individual routers diverge.
     */
    public function statusFor(int $i, int $routerIndex): string
    {
        // Stable per router, spread across the range, never 0 or 100.
        $health = 42 + (($routerIndex * 37) % 53);

        /*
         * A proper avalanche hash, not a single multiply.
         *
         * `($i * prime) % 100` looks random and is not: `$i` advances by a FIXED
         * stride between two subscribers on the same router, so the products
         * land on an arithmetic progression and only a handful of distinct rolls
         * ever appear. The first attempt produced routers at exactly 50.1%,
         * 66.7% and 83.3% - and one at a flat 100% - which reads as fabricated
         * because it is.
         *
         * Masking to 32 bits keeps every step in integer range; without it the
         * second multiply exceeds PHP's integer width, silently becomes a float
         * and loses the low bits that carry the randomness.
         */
        $h = ($i * 2654435761) & 0xFFFFFFFF;
        $h = ($h ^ ($h >> 13)) & 0xFFFFFFFF;
        $h = ($h * 1274126177) & 0xFFFFFFFF;
        $h = ($h ^ ($h >> 16)) & 0xFFFFFFFF;

        $roll = ($h + $routerIndex * 7919) % 100;

        if ($roll < $health) {
            return 'active';
        }

        // The remainder splits roughly two to one, as it did before.
        return $roll % 3 === 0 ? 'suspended' : 'expired';
    }

    /**
     * A cumulative weight table over `$days` days, ending today.
     *
     * WHY THE SEEDER SHAPES ITS OWN TIME DISTRIBUTION.
     *
     * The previous `($i * 17) % (86400 * 30)` spread rows PERFECTLY EVENLY over
     * the window. That is fine for measuring query cost - every bucket holds the
     * same number of rows - and useless for everything else: a time series drawn
     * from it is a horizontal line, so a chart bug that mangles the shape is
     * invisible, and so is a chart feature that renders it well.
     *
     * The curve here is weekly seasonality (quiet weekends), a gentle growth
     * trend, and two out-of-phase sine terms so the wobble does not read as a
     * repeating pattern. Deterministic, so a performance number is still
     * comparable between runs.
     *
     * @return list<float> Cumulative weights, normalised to end at 1.0.
     */
    public function dayWeights(int $days, int $nowTs, float $weekendDip, float $growth): array
    {
        $todayDow = (int) date('w', $nowTs);
        $weights = [];
        $sum = 0.0;

        for ($d = 0; $d < $days; $d++) {
            // $d counts BACKWARDS from today, so day 0 is today.
            $dow = ($todayDow - $d % 7 + 7) % 7;
            $seasonal = ($dow === 0 || $dow === 6) ? $weekendDip : 1.0;

            // Older days are lighter, so the series trends upward on screen.
            $trend = 1.0 - $growth * ($d / max(1, $days - 1));
            $wobble = 1 + 0.20 * sin($d / 3.1) + 0.11 * sin($d / 1.6 + 1.2);

            $w = max(0.05, $seasonal * $trend * $wobble);
            $sum += $w;
            $weights[$d] = $sum;
        }

        return array_map(static fn (float $w): float => $w / $sum, $weights);
    }

    /**
     * Pick a second-offset into the past for row `$i`, following `$cumulative`.
     *
     * A binary search over ~90 buckets is seven comparisons - cheap enough to
     * run two million times, which a reject-sampling loop would not be.
     */
    public function offsetFor(int $i, array $cumulative, int $salt): int
    {
        // Knuth multiplicative hash: a well-spread deterministic uniform.
        $u = (($i * 2654435761 + $salt) % 1000003) / 1000003;

        $lo = 0;
        $hi = count($cumulative) - 1;

        while ($lo < $hi) {
            $mid = intdiv($lo + $hi, 2);
            if ($cumulative[$mid] < $u) {
                $lo = $mid + 1;
            } else {
                $hi = $mid;
            }
        }

        /*
         * Hour of day, weighted towards the evening peak an ISP actually sees.
         * Without this the "Today" view - which buckets by hour - is flat even
         * though the daily view is not.
         */
        $hourPick = (($i * 40503 + $salt) % 100) / 100;
        $hour = $hourPick < 0.55
            ? 18 + (int) ($hourPick / 0.55 * 5)   // 18:00-22:00 carries most of it
            : (int) ($hourPick * 24);

        $minute = ($i * 7919 + $salt) % 3600;

        return $lo * 86400 + (23 - min(23, $hour)) * 3600 + $minute;
    }
}
