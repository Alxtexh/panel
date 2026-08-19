<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Pages\TillPage;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Http\Request;

final class TillPageDefaultsTest extends TestCase
{
    public function test_till_page_empty_defaults(): void
    {
        $page = new class extends TillPage
        {
            protected static string $panel = 'admin';

            public static function ability(): ?string
            {
                return null;
            }
        };

        $data = $page::data(Request::create('/till', 'GET'));

        $this->assertSame([], $data['items']);
        $this->assertSame([], $data['facets']);
        $this->assertSame(0.0, $data['taxRate']);
        $this->assertSame('Tax', $data['taxLabel']);
        $this->assertNull($data['itemPath']);
        $this->assertSame('Till', $page::component());
    }
}
