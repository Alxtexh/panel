<?php

declare(strict_types=1);

namespace App\Knowledge;

use Illuminate\Support\Str;
use Alxtexh\Panel\Knowledge\Document;
use Alxtexh\Panel\Knowledge\KnowledgeSource;
use Alxtexh\Panel\Support\Blueprint;

/**
 * The blueprint, made retrievable - roadmap 5.5's second source.
 *
 * The blueprint is what `panel:blueprint` writes for an AI agent building
 * ON Alxtexhpanel - the rules that fail silently, where things live, the
 * recipes. Those answer exactly the questions a developer asks the
 * assistant ("how do I add a permission-gated action?"), and indexing the
 * GENERATED text means the answer always matches this installation: the
 * inventory section lists the resources that actually exist here, not the
 * ones an example had.
 *
 * SPLIT BY SECTION, one document per `## ` heading, because the blueprint
 * whole is far past the chunker's passage size and a section is the unit a
 * question maps to - retrieval over "Rules that fail silently" beats
 * retrieval over an arbitrary 800-character window that straddles two
 * subjects.
 *
 * NO URL: the blueprint lives in the repository (AGENTS.md), not at a
 * panel route, and a citation link that 404s is worse than none. The
 * passage itself carries the section heading, which is what somebody
 * greps the file for.
 */
final class BlueprintSource implements KnowledgeSource
{
    public function key(): string
    {
        return 'blueprint';
    }

    public function documents(): iterable
    {
        $sections = preg_split('/^## /m', Blueprint::markdown()) ?: [];

        foreach ($sections as $section) {
            $section = trim($section);

            if ($section === '') {
                continue;
            }

            $title = trim(strtok($section, "\n") ?: '');

            if ($title === '') {
                continue;
            }

            yield new Document(
                source: $this->key(),
                id: Str::slug($title),
                title: 'Blueprint: '.$title,
                content: $section,
                url: null,
            );
        }
    }
}
