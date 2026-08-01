<?php

declare(strict_types=1);

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use PanelKit\Panel\Support\Blueprint;
use Tests\TestCase;

/**
 * The guide tells an agent what exists, and stays true when that changes.
 *
 * THE BLUEPRINT USED TO DESCRIBE CONDUCT AND NOT INVENTORY. It said never write
 * a controller for a resource screen, and never said `ColourField` exists. An
 * agent reading it therefore knew how to behave and had to GUESS what to build
 * with - which produces two failures, both of which survive review:
 *
 *   - a `TextField` with a hex-validation rule, where `ColourField` was there;
 *   - `ImageField::make()`, invented because it sounds like it should exist.
 *
 * The second is a fatal on a name nothing defines. The first is worse: it works.
 *
 * SO THE CATALOGUE IS GENERATED FROM THE SOURCE TREE, and this test exists to
 * keep it that way. A hand-written list is correct on the day it is written, and
 * afterwards it is a document that tells an agent to build against a field that
 * was renamed - the exact drift `panel:blueprint` was built to avoid.
 */
final class BlueprintCatalogueTest extends TestCase
{
    use RefreshDatabase;

    private function markdown(): string
    {
        return Blueprint::markdown();
    }

    /** Every field the package ships is named, so nothing has to be guessed. */
    public function test_it_names_every_form_field(): void
    {
        $markdown = $this->markdown();

        foreach (glob(__DIR__.'/../../../../packages/panel/src/Forms/Fields/*.php') ?: [] as $file) {
            $class = basename($file, '.php');

            $this->assertStringContainsString(
                $class,
                $markdown,
                "The blueprint does not mention [{$class}], so an agent has no way to know it exists.",
            );
        }
    }

    /** And every column, which is the other half of declaring a screen. */
    public function test_it_names_every_table_column(): void
    {
        $markdown = $this->markdown();

        foreach (glob(__DIR__.'/../../../../packages/panel/src/Tables/Columns/*.php') ?: [] as $file) {
            $this->assertStringContainsString(basename($file, '.php'), $markdown);
        }
    }

    /**
     * IT COUNTS WHAT IT LISTS, and the count has to be the real one.
     *
     * A catalogue that says "23" beside a list of nineteen is worse than no
     * count: it reads as authoritative and tells the reader to stop looking.
     */
    public function test_the_counts_match_what_is_actually_there(): void
    {
        $fields = count(glob(__DIR__.'/../../../../packages/panel/src/Forms/Fields/*.php') ?: []);

        $this->assertStringContainsString(
            "**Form fields** ({$fields})",
            $this->markdown(),
            'The blueprint states a field count that does not match the package.',
        );
    }

    /**
     * AND IT TELLS AN AGENT NOT TO INVENT, which is the instruction that
     * prevents the failure this whole section exists for.
     */
    public function test_it_forbids_inventing_a_field_type(): void
    {
        $this->assertStringContainsString('do not invent a field type', $this->markdown());
    }

    /**
     * THE WIDGET GROUP NAMES ITS HOST.
     *
     * `Widgets` sat in this catalogue beside `Forms/Fields` under one sentence -
     * "every name below is a real class" - which is true of both and useful for
     * only one. A field is mounted by naming it in `form()`. A widget had no
     * host at all: the package routed no dashboard, so `StatWidget::make()`
     * composed a value object that nothing rendered, and an agent reading the
     * list could not tell the two apart. The dashboard it then built was clean,
     * tested and invisible.
     *
     * 0.3.0 GAVE THEM A HOST, and this assertion inverted with it. The previous
     * version of this test pinned the words "no host in the package" - which
     * was the honest answer for two releases and became, on the day
     * `DashboardPage` shipped, a test enforcing a lie about the package's own
     * flagship feature. A doc test is only as true as the day it was written;
     * what it must pin is that the group states A host, not which one it was.
     */
    public function test_the_widget_group_names_what_mounts_a_widget(): void
    {
        $markdown = $this->markdown();

        $this->assertStringContainsString('DashboardPage', $markdown);
        $this->assertStringContainsString('make:panel-page Overview --dashboard', $markdown);

        $this->assertStringNotContainsString(
            'no host in the package',
            $markdown,
            'The guide still tells an agent that widgets cannot be mounted. They can, since 0.3.0.',
        );
    }

    /**
     * AND THE PAGE MECHANISM IS IN THE CATALOGUE AT ALL.
     *
     * An agent plans from this list. For two releases it named no way to build
     * a screen that is not a list of records, and the report that came back
     * from a real installation said PanelKit had none - correctly, from the
     * only document it was given.
     */
    public function test_it_names_the_page_mechanism(): void
    {
        $markdown = $this->markdown();

        $this->assertStringContainsString('make:panel-page', $markdown);
        $this->assertStringContainsString('app/Panel/Pages', $markdown);

        foreach (glob(__DIR__.'/../../../../packages/panel/src/Pages/*.php') ?: [] as $file) {
            $class = basename($file, '.php');

            $this->assertStringContainsString(
                $class,
                $markdown,
                "The blueprint does not mention [{$class}], so an agent has no way to know it exists.",
            );
        }
    }

    /** And every group states how it is used, so none of them can overclaim again. */
    public function test_every_group_says_how_it_is_used(): void
    {
        $markdown = $this->markdown();

        preg_match_all('/^\*\*(.+?)\*\* \(\d+\):/m', $markdown, $matches);

        $this->assertNotEmpty($matches[1], 'The catalogue listed no groups at all.');

        $this->assertSame(
            count($matches[1]),
            substr_count($markdown, '_How to use them:'),
            'A catalogue group lists classes without saying how they are mounted.',
        );
    }

    /**
     * THE INSTALLER WRITES IT, because a guide nobody knows to generate is a
     * guide nobody has. `panel:blueprint` shipped from the beginning and
     * nothing ran it.
     */
    public function test_the_installer_writes_the_guide(): void
    {
        $install = file_get_contents(
            __DIR__.'/../../../../packages/panel/src/Commands/InstallCommand.php'
        );

        $this->assertStringContainsString(
            'panel:blueprint',
            (string) $install,
            'panel:install does not write AGENTS.md, so a fresh install has no guide.',
        );
    }
}
