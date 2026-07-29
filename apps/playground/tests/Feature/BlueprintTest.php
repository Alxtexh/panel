<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use PanelKit\Panel\Support\Blueprint;
use Tests\TestCase;

/**
 * The instructions an AI agent follows, and the documentation it can fetch.
 *
 * WHY THIS IS WORTH TESTING AT ALL. An instruction file is read by something
 * that cannot tell whether it is current. A person who sees a resource named
 * that no longer exists raises an eyebrow; an agent writes code against it,
 * confidently, and the result compiles. So the parts that can go stale - the
 * resource list, the commands, the panels - are generated, and these tests
 * assert that they are generated from the registry rather than typed once.
 *
 * THE RULES SECTION IS ASSERTED BY NAME, deliberately. Each of those rules
 * exists because ignoring it produces a WORKING-LOOKING screen: a resource with
 * no policy is invisible, a hand-written controller skips the tenant scope, a
 * `window.confirm` silently does nothing in an embedded browser. Losing one in a
 * refactor of this file would be losing the only place it is written down for
 * the reader most likely to need it.
 */
final class BlueprintTest extends TestCase
{
    use RefreshDatabase;

    private User $user;

    protected function setUp(): void
    {
        parent::setUp();

        $tenant = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);

        $this->user = User::factory()->create([
            'tenant_id' => $tenant->id,
            'email_verified_at' => now(),
        ]);
    }

    /* ------------------------------------------------------------ the content */

    /** The rules that fail silently are all present. */
    public function test_it_states_the_rules_that_fail_silently(): void
    {
        $markdown = Blueprint::markdown();

        foreach ([
            'Never write a controller for a resource screen',
            'no policy is invisible',
            'Definitions must not query',
            'null tenant is a deny',
            'Never use `window.confirm`',
            'Every screen needs a way in',
        ] as $rule) {
            $this->assertStringContainsString($rule, $markdown, "The blueprint no longer states: {$rule}");
        }
    }

    /**
     * THE INVENTORY IS GENERATED, which is the whole reason this is a command
     * rather than a document somebody maintains.
     */
    public function test_it_lists_the_resources_this_installation_actually_has(): void
    {
        $markdown = Blueprint::markdown();

        $this->assertStringContainsString('`clients`', $markdown);
        $this->assertStringContainsString('ClientResource', $markdown);

        // Including one a plugin installed, since that is the case nobody would
        // remember to add by hand.
        $this->assertStringContainsString('`announcements`', $markdown);
    }

    /** And the portals, with their paths and contexts. */
    public function test_it_describes_the_panels(): void
    {
        $markdown = Blueprint::markdown();

        $this->assertStringContainsString('`admin`', $markdown);
        $this->assertStringContainsString('`platform`', $markdown);
        $this->assertStringContainsString('central context', $markdown);
    }

    /**
     * EVERY COMMAND IT NAMES IS REGISTERED. An agent that runs a command which
     * answers "not found" reads that as a broken installation and starts trying
     * to fix the wrong thing.
     */
    public function test_every_command_it_names_exists(): void
    {
        preg_match_all('/php artisan ((?:panel|make):[a-z-]+)/', Blueprint::markdown(), $matches);

        $registered = array_keys(\Illuminate\Support\Facades\Artisan::all());

        $this->assertGreaterThan(5, count($matches[1]));

        foreach (array_unique($matches[1]) as $command) {
            $this->assertContains($command, $registered, "The blueprint names [{$command}], which is not registered.");
        }
    }

    /** It tells the agent how to know it worked, which is the part they skip. */
    public function test_it_says_how_to_verify(): void
    {
        $markdown = Blueprint::markdown();

        $this->assertStringContainsString('panel:doctor', $markdown);
        $this->assertStringContainsString('assertTenantIsolation', $markdown);
    }

    /* ------------------------------------------------------------- the command */

    public function test_the_command_writes_a_file(): void
    {
        $path = base_path('AGENTS.test.md');

        @unlink($path);

        $this->artisan('panel:blueprint', ['--file' => 'AGENTS.test.md'])->assertSuccessful();

        $this->assertFileExists($path);
        $this->assertStringContainsString('Rules that fail silently', (string) file_get_contents($path));

        @unlink($path);
    }

    /**
     * RE-RUNNING REPLACES ITS OWN BLOCK AND KEEPS EVERYTHING ELSE.
     *
     * `AGENTS.md` usually holds a team's own notes, so a command that
     * overwrote the file is one nobody runs twice - and appending on every run
     * would leave three copies of the same section for the agent to read.
     */
    public function test_re_running_keeps_the_teams_own_notes(): void
    {
        $path = base_path('AGENTS.test.md');

        file_put_contents($path, "# Our notes\n\nDeploy with make ship.\n");

        $this->artisan('panel:blueprint', ['--file' => 'AGENTS.test.md'])->assertSuccessful();
        $this->artisan('panel:blueprint', ['--file' => 'AGENTS.test.md'])->assertSuccessful();

        $contents = (string) file_get_contents($path);

        $this->assertStringContainsString('Deploy with make ship.', $contents);
        $this->assertSame(1, substr_count($contents, 'Rules that fail silently'), 'The block was appended twice.');

        @unlink($path);
    }

    /* -------------------------------------------------------- fetchable docs */

    /**
     * AN INDEX IN THE SHAPE AGENTS EXPECT, so a tool can decide what to read
     * rather than pulling everything to answer one question.
     */
    public function test_the_documentation_index_is_fetchable(): void
    {
        $response = $this->actingAs($this->user)->get('/docs/llms.txt')->assertOk();

        $response->assertHeader('Content-Type', 'text/plain; charset=utf-8');

        $body = $response->getContent();

        $this->assertStringContainsString('/about/building/tenancy', $body);
        $this->assertStringContainsString('/docs/blueprint.md', $body);
    }

    public function test_the_whole_guide_is_fetchable_as_markdown(): void
    {
        $body = $this->actingAs($this->user)->get('/docs/guide.md')->assertOk()->getContent();

        $this->assertStringContainsString('# Building a panel', $body);
        $this->assertStringContainsString('### Tenancy', $body);
        // Code samples survive the conversion, which is most of what an agent
        // is there for.
        $this->assertStringContainsString('```php', $body);
    }

    public function test_the_blueprint_is_fetchable(): void
    {
        $this->actingAs($this->user)->get('/docs/blueprint.md')->assertOk()
            ->assertSee('Rules that fail silently', false);
    }

    /**
     * ALL THREE ARE BEHIND AUTHENTICATION. The blueprint names this
     * installation's resources and portals - internal detail, whatever else it
     * is - and an unauthenticated endpoint listing them is a map for somebody
     * who has not signed in.
     */
    public function test_the_documentation_endpoints_need_a_session(): void
    {
        foreach (['/docs/llms.txt', '/docs/guide.md', '/docs/blueprint.md'] as $path) {
            $this->get($path)->assertRedirect();
        }
    }
}
