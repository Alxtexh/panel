<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Knowledge;

/**
 * Somewhere the panel can get text worth answering questions from.
 *
 * AN INTERFACE BECAUSE THE PACKAGE DOES NOT KNOW WHAT IS WORTH INDEXING. Help
 * articles, service policies, the notes on an account, a wiki export - which of
 * those the assistant should be able to cite is a decision about the business,
 * not about retrieval, and a package that guessed would index either nothing
 * useful or something confidential.
 *
 * IT YIELDS RATHER THAN RETURNS. A source may be a table with a million rows in
 * it, and `array` as a return type would mean loading all of them to index the
 * first one. `iterable` costs a source nothing - returning an array still
 * satisfies it - and it is what lets the command run against something large
 * without holding it all.
 *
 * EVERYTHING IT YIELDS IS INDEXED UNDER THE CURRENT TENANT. A source that reads
 * from a model gets the tenant scope for free; one that reads files or a remote
 * system does NOT, and is responsible for not yielding another organisation's
 * text. Retrieval puts this into a prompt and gets prose back, so a mistake here
 * surfaces as an answer in the panel's own voice.
 */
interface KnowledgeSource
{
    /**
     * A short, stable name - `help`, `policies`, `account-notes`.
     *
     * STABLE MATTERS: re-indexing replaces by source, and `--fresh` deletes by
     * it. Renaming a source orphans everything it previously wrote, which stays
     * retrievable and stays wrong.
     */
    public function key(): string;

    /** @return iterable<Document> */
    public function documents(): iterable;
}
