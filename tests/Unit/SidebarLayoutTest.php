<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Unit;

use Alxtexh\Panel\Panel;
use Alxtexh\Panel\Tests\TestCase;

/**
 * Sidebar layouts couple AppSidebar chrome through one panel knob.
 */
final class SidebarLayoutTest extends TestCase
{
    public function test_default_layout_is_inset(): void
    {
        $panel = Panel::make('ops');

        $this->assertSame('inset', $panel->getSidebarLayout());
        $this->assertSame('inset', $panel->getSidebarVariant());
    }

    public function test_sidebar_layout_accepts_panelkit_names(): void
    {
        foreach ([
            'inset',
            'sidebar',
            'floating',
            'icon',
            'header',
            'accordion',
            'file-tree',
            'calendar',
            'dialog',
        ] as $layout) {
            $panel = Panel::make('ops')->sidebarLayout($layout);

            $this->assertSame($layout, $panel->getSidebarLayout());
            $this->assertSame($layout, $panel->getSidebarVariant());
        }
    }

    public function test_shadcn_sidebar_block_selects_the_coupled_layout(): void
    {
        $this->assertSame('sidebar', Panel::make('a')->sidebarLayout('sidebar-01')->getSidebarLayout());
        $this->assertSame('floating', Panel::make('b')->sidebarLayout('sidebar-04')->getSidebarLayout());
        $this->assertSame('accordion', Panel::make('c')->sidebarLayout('sidebar-05')->getSidebarLayout());
        $this->assertSame('accordion', Panel::make('d')->sidebarLayout('sidebar-06')->getSidebarLayout());
        $this->assertSame('icon', Panel::make('e')->sidebarLayout('sidebar-07')->getSidebarLayout());
        $this->assertSame('inset', Panel::make('f')->sidebarLayout('sidebar-08')->getSidebarLayout());
        $this->assertSame('file-tree', Panel::make('g')->sidebarLayout('sidebar-11')->getSidebarLayout());
        $this->assertSame('calendar', Panel::make('h')->sidebarLayout('sidebar-12')->getSidebarLayout());
        $this->assertSame('dialog', Panel::make('i')->sidebarLayout('sidebar-13')->getSidebarLayout());
        $this->assertSame('header', Panel::make('j')->sidebarLayout('sidebar-16')->getSidebarLayout());
    }

    public function test_short_aliases_resolve(): void
    {
        $this->assertSame('sidebar', Panel::make('a')->sidebarLayout('edge')->getSidebarLayout());
        $this->assertSame('icon', Panel::make('b')->sidebarLayout('rail')->getSidebarLayout());
        $this->assertSame('file-tree', Panel::make('c')->sidebarLayout('tree')->getSidebarLayout());
        $this->assertSame('accordion', Panel::make('d')->sidebarLayout('dropdown')->getSidebarLayout());
    }

    public function test_sidebar_variant_alias_delegates_to_sidebar_layout(): void
    {
        $panel = Panel::make('ops')->sidebarVariant('floating');

        $this->assertSame('floating', $panel->getSidebarVariant());
    }

    public function test_unknown_layout_falls_back_to_inset(): void
    {
        $panel = Panel::make('ops')->sidebarLayout('not-a-real-layout');

        $this->assertSame('inset', $panel->getSidebarLayout());
    }

    public function test_sidebar_layouts_lists_every_supported_name(): void
    {
        $this->assertSame(
            [
                'inset',
                'sidebar',
                'floating',
                'icon',
                'header',
                'accordion',
                'file-tree',
                'calendar',
                'dialog',
            ],
            Panel::sidebarLayouts(),
        );
    }
}
