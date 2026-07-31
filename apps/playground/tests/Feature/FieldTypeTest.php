<?php

declare(strict_types=1);

namespace Tests\Feature;

use InvalidArgumentException;
use PanelKit\Panel\Forms\Fields\BuilderField;
use PanelKit\Panel\Forms\Fields\CodeField;
use PanelKit\Panel\Forms\Fields\MarkdownField;
use PanelKit\Panel\Forms\Fields\TextField;
use Tests\TestCase;

/**
 * Roadmap 4.5: markdown, code and builder.
 *
 * Each exists because an existing field got something specific wrong -
 * `RichEditorField` stores a RENDERING where the source was wanted, a
 * textarea is hostile to code, and a repeater cannot express blocks of
 * different shapes in a chosen order. The tests below pin the parts that
 * are load-bearing rather than the fluent setters.
 */
final class FieldTypeTest extends TestCase
{
    /* ------------------------------------------------------------ markdown */

    public function test_markdown_declares_its_type_and_stores_text(): void
    {
        $field = MarkdownField::make('body')->rows(20)->toolbar(['bold', 'link']);

        $this->assertSame('markdown', $field->type());
        $this->assertSame(20, $field->toSchema()['rows']);
        $this->assertSame(['bold', 'link'], $field->toSchema()['toolbar']);
    }

    /**
     * NO SANITISING RULE. A markdown field that stripped tags would corrupt a
     * fenced code block containing HTML - exactly what somebody writing
     * developer documentation is trying to save.
     */
    public function test_markdown_is_validated_as_plain_text(): void
    {
        $this->assertSame(['nullable', 'string'], MarkdownField::make('body')->rules());
    }

    /* ---------------------------------------------------------------- code */

    public function test_a_json_code_field_is_validated_as_json_on_the_server(): void
    {
        $rules = CodeField::make('config')->language('json')->rules();

        $this->assertContains('json', $rules, 'The editor checks as you type; this is the boundary.');
    }

    public function test_a_plain_code_field_is_not_validated_as_json(): void
    {
        $this->assertNotContains('json', CodeField::make('snippet')->rules());
    }

    /** An unsupported language is refused rather than silently unhighlighted. */
    public function test_an_unknown_language_is_refused(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessageMatches('/not a supported code language/');

        CodeField::make('snippet')->language('klingon');
    }

    /* ------------------------------------------------------------- builder */

    public function test_a_builder_carries_its_blocks_into_the_schema(): void
    {
        $schema = BuilderField::make('content')
            ->block('heading', 'Heading', [TextField::make('text')])
            ->block('paragraph', 'Paragraph', [TextField::make('body')])
            ->maxBlocks(10)
            ->toSchema();

        $this->assertSame('builder', $schema['type']);
        $this->assertSame(['heading', 'paragraph'], array_column($schema['blocks'], 'type'));
        $this->assertSame(10, $schema['maxBlocks']);
    }

    public function test_two_blocks_cannot_share_a_type(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessageMatches('/already declared/');

        BuilderField::make('content')
            ->block('same', 'One', [TextField::make('a')])
            ->block('same', 'Two', [TextField::make('b')]);
    }

    /**
     * THE ALLOW-LIST IS THE POINT. An undeclared block type, and an
     * undeclared field inside a declared block, are both DROPPED rather than
     * stored - the same posture `Form::sanitize()` takes for top-level keys.
     * Without it the column is a place a client can put arbitrary structure
     * that something downstream later renders.
     */
    public function test_undeclared_blocks_and_fields_are_dropped_on_the_way_to_storage(): void
    {
        $field = BuilderField::make('content')
            ->block('heading', 'Heading', [TextField::make('text')]);

        $stored = $field->transformForStorage([
            ['type' => 'heading', 'data' => ['text' => 'Hello', 'evil' => 'dropped']],
            ['type' => 'not-declared', 'data' => ['anything' => 'dropped']],
        ]);

        $this->assertSame([
            ['type' => 'heading', 'data' => ['text' => 'Hello']],
        ], $stored);
    }

    /** Order is the value a builder carries, so it survives the round trip. */
    public function test_block_order_is_preserved(): void
    {
        $field = BuilderField::make('content')
            ->block('a', 'A', [TextField::make('x')])
            ->block('b', 'B', [TextField::make('x')]);

        $stored = $field->transformForStorage([
            ['type' => 'b', 'data' => ['x' => '2']],
            ['type' => 'a', 'data' => ['x' => '1']],
        ]);

        $this->assertSame(['b', 'a'], array_column($stored, 'type'));
    }

    public function test_the_block_ceiling_is_enforced_on_the_server(): void
    {
        $field = BuilderField::make('content')
            ->block('a', 'A', [TextField::make('x')])
            ->maxBlocks(2);

        $stored = $field->transformForStorage(array_fill(0, 5, ['type' => 'a', 'data' => ['x' => '1']]));

        $this->assertCount(2, $stored);
        $this->assertContains('max:2', $field->rules());
    }
}
