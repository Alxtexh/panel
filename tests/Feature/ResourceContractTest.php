<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Tests\Fixtures\Models\Post;
use Alxtexh\Panel\Tests\Fixtures\Resources\PostResource;
use Alxtexh\Panel\Tests\TestCase;

/**
 * The first test this package has ever run on its own.
 *
 * IT ASSERTS NOTHING NEW. Every property below is already covered from inside
 * `apps/playground` - which is the point: these pass here, against a `Post`
 * that has no tenant, no plan and no router, which is what proves the
 * behaviour belongs to the FRAMEWORK rather than to the reference app's
 * schema. A test that can only be written against `Client` was never
 * describing the framework.
 */
final class ResourceContractTest extends TestCase
{
    public function test_a_resource_derives_its_key_and_labels_from_the_model(): void
    {
        $this->assertSame('posts', PostResource::key());
        $this->assertSame(Post::class, PostResource::model());
    }

    /**
     * A RESOURCE THAT SAYS NOTHING IS PUBLISHED ON `/api/v1`.
     *
     * PINNED HERE BECAUSE NOTHING ELSE PINS IT. `documented()` decides whether
     * a resource appears in the public API document, and its default is
     * opt-OUT. Every one of the eleven resources in `apps/playground` overrides
     * it explicitly, so the 2,215 tests over there assert the overrides and
     * never the DEFAULT - which is the value every consumer's generated
     * resource actually gets, since `make:panel-resource` writes no override.
     *
     * This assertion is why the fixture has to be a class that declares
     * nothing. It found its own author out on the first run: the test was
     * written expecting `false`, from a change that had been reverted, and the
     * harness said so immediately.
     */
    public function test_a_resource_is_published_to_the_api_unless_it_opts_out(): void
    {
        $this->assertTrue(PostResource::documented());
    }

    /**
     * IMPORT IS OPT-IN. A resource that says nothing must not grow an Import
     * button merely because it has a form. The playground's subscribers list
     * opts in; everything else stays closed until it does the same.
     */
    public function test_a_resource_does_not_offer_import_unless_it_opts_in(): void
    {
        $this->assertFalse(PostResource::importable());
    }

    public function test_the_declared_table_reaches_the_schema(): void
    {
        $columns = PostResource::schema()['table']['columns'] ?? [];

        $this->assertSame(
            ['title', 'status', 'created_at'],
            array_values(array_map(static fn (array $c): string => $c['key'], $columns)),
        );
    }
}
