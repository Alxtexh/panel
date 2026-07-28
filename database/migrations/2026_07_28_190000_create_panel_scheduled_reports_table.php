<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * A filtered list, on a schedule, emailed as a CSV.
 *
 * IT IS THE EXPORT BUTTON, MINUS THE PERSON. Everybody who runs an operations
 * team has somebody who opens the panel every Monday, applies four filters,
 * presses Export and forwards the file - and the reason that person exists is
 * that the panel could not do it. The filters, the resource and the recipients
 * are all things the panel already knows how to hold.
 *
 * THE FILTER STATE IS STORED, NOT THE ROWS. A report is a question, and the
 * answer has to be recomputed each time it runs - storing the result would make
 * Monday's email a copy of the day the report was created, which is the failure
 * that looks most like success.
 *
 * IT RUNS AS A PERSON. `user_id` is not decoration: the export applies the
 * panel's own policies and tenant scope, so a report has to act as somebody in
 * order to have a scope at all. A report whose owner loses access stops
 * producing rows, which is the correct direction.
 *
 * RECIPIENTS ARE ARBITRARY ADDRESSES ON PURPOSE - the whole point is sending it
 * to a finance mailbox or an external accountant who has no panel account. That
 * makes this an outbound data path, which is why `last_sent_at` and the audit
 * trail matter more here than on a screen.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('panel_scheduled_reports', function (Blueprint $table): void {
            $table->id();

            $table->unsignedBigInteger('tenant_id')->index();

            /*
             * WHOSE PERMISSIONS IT RUNS WITH. Without an owner the export has no
             * policy to check and no tenant to scope to - and a report that
             * produced rows nobody was entitled to see would be a leak with a
             * delivery mechanism attached.
             */
            $table->unsignedBigInteger('user_id')->index();

            $table->string('name');
            $table->string('resource');

            /*
             * The filter, sort and search state, exactly as a saved view holds
             * it - so a report is "this screen, every Monday" rather than a
             * second way of describing a query.
             */
            $table->json('state');

            $table->string('frequency', 16)->default('weekly');
            $table->string('time', 5)->default('07:00');
            $table->unsignedTinyInteger('weekday')->default(1);
            $table->unsignedTinyInteger('day_of_month')->default(1);

            $table->json('recipients');

            $table->boolean('is_active')->default(true);

            /*
             * WHEN IT LAST WENT OUT, which is the only way to notice that it
             * stopped. A report that silently stops arriving is indistinguishable
             * from a quiet week, and nobody chases an email they did not receive.
             */
            $table->timestamp('last_sent_at')->nullable();
            $table->string('last_result')->nullable();

            $table->timestamps();

            // The scheduler asks "which are due" once a minute across every
            // tenant, so the index is on the columns that question filters by.
            $table->index(['is_active', 'frequency']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('panel_scheduled_reports');
    }
};
