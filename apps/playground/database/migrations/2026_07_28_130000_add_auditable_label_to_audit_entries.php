<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

/**
 * What the record was CALLED, recorded at the time.
 *
 * AN ID IS NOT AN ANSWER. The activity log showed `2541000` in a column headed
 * "Id", which tells a person reading it nothing at all - the question they came
 * with is "which subscriber was deleted", and the answer was a number they would
 * have to go and look up.
 *
 * IT CANNOT BE A JOIN, and that is the whole reason this is a column rather than
 * a query. The most important entries in an audit trail are deletions, and a
 * deleted row has no name left to join to - so the moment the log becomes
 * genuinely useful is exactly the moment a join returns nothing.
 *
 * THE SAME REASONING ALREADY EXISTED HERE for the actor. `actor_name` is a
 * snapshot taken at write time so that a rename does not rewrite history and a
 * departed colleague is still named. The record deserved the same treatment and
 * did not get it.
 *
 * EXISTING ROWS ARE BACKFILLED WHERE THE RECORD SURVIVES, and left null where it
 * does not - null then falls back to the id, which is what those rows already
 * showed. Inventing a label for something already gone would be worse than the
 * gap.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::table('audit_entries', function (Blueprint $table): void {
            $table->string('auditable_label', 160)->nullable()->after('auditable_id');
        });

        $this->backfill();
    }

    public function down(): void
    {
        Schema::table('audit_entries', function (Blueprint $table): void {
            $table->dropColumn('auditable_label');
        });
    }

    /**
     * Name the records that still exist.
     *
     * ONE UPDATE PER TYPE rather than per row: an audit table is the one that
     * grows without bound, and a per-entry lookup here is a migration that times
     * out on the installation that most needs it.
     */
    private function backfill(): void
    {
        $types = DB::table('audit_entries')
            ->select('auditable_type')
            ->distinct()
            ->pluck('auditable_type');

        foreach ($types as $type) {
            if (! is_string($type) || ! class_exists($type)) {
                continue;
            }

            $model = new $type;
            $table = $model->getTable();

            // Only a column that actually exists, and only the conventional
            // ones - guessing wider would produce confident nonsense.
            $column = collect(['name', 'title', 'label'])
                ->first(fn (string $c): bool => Schema::hasColumn($table, $c));

            if ($column === null) {
                continue;
            }

            DB::table('audit_entries')
                ->where('auditable_type', $type)
                ->whereNull('auditable_label')
                ->update([
                    'auditable_label' => DB::raw(
                        "(select {$column} from {$table} where "
                        ."cast({$table}.".$model->getKeyName().' as text)'
                        .' = audit_entries.auditable_id limit 1)'
                    ),
                ]);
        }
    }
};
