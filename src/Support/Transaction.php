<?php

declare(strict_types=1);

namespace PanelKit\Panel\Support;

use Closure;
use Illuminate\Support\Facades\DB;
use PanelKit\Panel\PanelManager;

/**
 * Run a write inside a transaction, if the panel asked for one.
 *
 * ONE PLACE DECIDES, so the answer cannot differ between creating a record and
 * deleting one. Every write path calls through here; whether it actually opens
 * a transaction is the panel's declaration (`->databaseTransactions()`) and
 * nothing else.
 *
 * IT NESTS, AND THAT IS DELIBERATE. An earlier version refused to open one
 * when a transaction was already running, reasoning that the outermost caller
 * owns the boundary. That threw away a real guarantee: Laravel emits a
 * SAVEPOINT for a nested `DB::transaction()`, so an inner failure rolls back
 * the inner work and leaves the surrounding transaction intact - which is
 * exactly what a bulk run wants when one row of five hundred throws. The
 * refusal also made this a no-op under any caller that had already opened one,
 * `RefreshDatabase` included, so the protection quietly did not exist in the
 * place it was being tested.
 */
final class Transaction
{
    /**
     * @template TReturn
     *
     * @param  Closure(): TReturn  $work
     * @return TReturn
     */
    public static function run(Closure $work): mixed
    {
        return self::wanted() ? DB::transaction($work) : $work();
    }

    private static function wanted(): bool
    {
        return app(PanelManager::class)->currentPanel()?->hasDatabaseTransactions() === true;
    }
}
