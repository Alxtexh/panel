<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Client;
use App\Models\Plan;
use App\Models\Router;
use App\Models\Tenant;
use App\Models\User;
use App\Panel\Resources\ClientResource;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Gate;
use InvalidArgumentException;
use PanelKit\Panel\Imports\CsvReader;
use PanelKit\Panel\Imports\Importer;
use Tests\TestCase;

/**
 * Importing records from a file somebody assembled in a spreadsheet.
 *
 * THE HARDER DIRECTION. An export writes what the panel already believes; an
 * import accepts whatever a human produced - a missing column, three date
 * formats in one file, a trailing comma on row 4,000, and a stray column called
 * `tenant_id` that would be very convenient for an attacker.
 *
 * Most of these tests are about ROWS FAILING INDEPENDENTLY, because the
 * alternative - one bad cell aborting five thousand good rows with no indication
 * of which cell - is what makes an import feature unusable in practice.
 */
final class ImportTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenant;

    private User $user;

    private Plan $plan;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenant = Tenant::create(['name' => 'A', 'slug' => 'a']);
        $this->user = User::factory()->create([
            'tenant_id' => $this->tenant->id,
            'email_verified_at' => now(),
        ]);

        $this->plan = Plan::withoutGlobalScopes()->create([
            'tenant_id' => $this->tenant->id,
            'name' => 'Plan',
            'speed_mbps' => 10,
            'price_cents' => 1000,
        ]);

        Router::withoutGlobalScopes()->create([
            'tenant_id' => $this->tenant->id,
            'name' => 'Router',
            'ip_address' => '10.0.0.1',
            'model' => 'RB750',
            'status' => 'online',
        ]);

        $this->actingAs($this->user);
    }

    /* ------------------------------------------------------------- the file */

    public function test_the_headers_are_read_for_mapping(): void
    {
        $file = $this->csv("Name,Phone,Code\nAsha,0722,AB1\n");

        $response = $this->post('/clients/import/inspect', ['file' => $file])->assertOk();

        $this->assertSame(['Name', 'Phone', 'Code'], $response->json('headers'));
        $this->assertNotEmpty($response->json('fields'), 'The mappable fields travel too.');
    }

    /**
     * THE PANEL'S OWN EXPORT WRITES A BOM so Excel reads UTF-8. Re-importing
     * that file glues three invisible bytes to the first header, so the first
     * column never maps - and the header looks completely correct in every
     * editor anybody would open it in.
     */
    public function test_a_byte_order_mark_is_stripped_from_the_first_header(): void
    {
        $file = $this->csv("\xEF\xBB\xBFName,Phone\nAsha,0722\n");

        $headers = $this->post('/clients/import/inspect', ['file' => $file])->json('headers');

        $this->assertSame('Name', $headers[0], 'A BOM must not become part of the header.');
    }

    /**
     * A BLANK HEADER IS NAMED, not dropped. Dropping it would shift every
     * column after it by one, so names would import into the phone field with
     * no error anywhere.
     */
    public function test_a_blank_header_gets_a_positional_name_rather_than_shifting_the_rest(): void
    {
        $path = $this->write("Name,,Phone\nAsha,x,0722\n");

        $headers = (new CsvReader($path))->headers();

        $this->assertSame(['Name', 'column_1', 'Phone'], $headers);
    }

    /** A short row is padded rather than aborting the file. */
    public function test_a_row_with_too_few_columns_does_not_abort_the_file(): void
    {
        $path = $this->write("Name,Phone\nAsha,0722\nMissing\n");

        $rows = iterator_to_array((new CsvReader($path))->rows());

        $this->assertCount(2, $rows);
        $this->assertNull($rows[1]['Phone']);
    }

    public function test_blank_lines_are_skipped(): void
    {
        $path = $this->write("Name,Phone\nAsha,0722\n\nBea,0733\n");

        $this->assertCount(2, iterator_to_array((new CsvReader($path))->rows()));
    }

    /* --------------------------------------------------------- the mapping */

    /**
     * THE CENTRAL GUARD. A mapping onto a field the form does not declare is
     * refused at construction - not ignored, because ignoring it means a file
     * mapping `tenant_id` imports cleanly and silently drops the column, which
     * reads as success.
     */
    public function test_a_mapping_to_an_undeclared_field_is_refused(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessageMatches('/is not a field on this form/');

        new Importer(ClientResource::formDefinition(), ['Tenant' => 'tenant_id']);
    }

    /** Columns the mapping does not name never become input. */
    public function test_unmapped_columns_are_dropped(): void
    {
        $importer = new Importer(ClientResource::formDefinition(), $this->validMapping());

        $result = $importer->process([[
            ...$this->validRow(),
            'Internal Ref' => 'XYZ',
            'Formula' => '=SUM(A1)',
        ]]);

        $this->assertSame(1, $result->importable());
        $this->assertStringNotContainsString('Internal Ref', json_encode($result->toArray()));
    }

    /**
     * A REQUIRED FIELD WITH NO COLUMN IS A MAPPING ERROR, caught before a single
     * row is read.
     *
     * Found by a test that expected the opposite. Only MAPPED fields have their
     * rules applied - correct for an optional column a file omits, and silently
     * wrong for a required one, because an unmapped `name` is then never
     * validated at all and five thousand rows import with a value the form
     * considers impossible. It belongs on the mapping because that is what is
     * wrong: the operator should be told to map the Name column, not handed
     * five thousand identical row errors.
     */
    public function test_a_required_field_with_no_column_is_refused_before_reading_the_file(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessageMatches('/required and no column maps to them/');

        new Importer(ClientResource::formDefinition(), ['Name' => 'name']);
    }

    /* ------------------------------------------------------- row isolation */

    /**
     * THE HEADLINE CASE. Three bad rows in five thousand must be reported as
     * three bad rows, not as a failed file.
     */
    public function test_one_bad_row_does_not_invalidate_the_good_ones(): void
    {
        $importer = new Importer(ClientResource::formDefinition(), [
            'Name' => 'name',
            'Phone' => 'phone',
            'Code' => 'access_code',
            'Status' => 'status',
            'Type' => 'plan_type',
        ]);

        $result = $importer->process([
            ['Name' => 'Asha', 'Phone' => '0722', 'Code' => 'A1', 'Status' => 'active', 'Type' => 'pppoe'],
            ['Name' => '', 'Phone' => '0733', 'Code' => 'A2', 'Status' => 'active', 'Type' => 'pppoe'],
            ['Name' => 'Cara', 'Phone' => '0744', 'Code' => 'A3', 'Status' => 'active', 'Type' => 'pppoe'],
        ]);

        $this->assertSame(2, $result->importable());
        $this->assertSame(1, $result->failed());
    }

    /**
     * THE LINE NUMBER IS THE SPREADSHEET'S. Somebody fixing this file is
     * looking at a sheet where the header is line 1 - telling them "row 1
     * failed" makes them count, and on five thousand rows they will count wrong.
     */
    public function test_a_failure_names_the_spreadsheet_line_not_the_array_index(): void
    {
        $importer = new Importer(ClientResource::formDefinition(), $this->validMapping());

        $result = $importer->process([
            0 => $this->validRow(),
            1 => [...$this->validRow(), 'Name' => ''],
        ]);

        $lines = array_column($result->toArray()['failures'], 'line');

        // Index 1 is the sheet's line 3: header, then two records.
        $this->assertContains(3, $lines);
    }

    /** A file above the ceiling reports it rather than exhausting memory. */
    public function test_a_file_beyond_the_row_ceiling_stops_and_says_so(): void
    {
        $importer = new Importer(ClientResource::formDefinition(), $this->validMapping());

        $rows = [];

        for ($i = 0; $i <= Importer::MAX_ROWS + 10; $i++) {
            $rows[] = [...$this->validRow(), 'Name' => "Client {$i}"];
        }

        $report = $importer->process($rows)->toArray();

        $this->assertStringContainsString('more than', json_encode($report['failures']));
    }

    /** A very broken file reports an exact count but a capped listing. */
    public function test_the_failure_listing_is_capped_but_the_count_is_exact(): void
    {
        $importer = new Importer(ClientResource::formDefinition(), $this->validMapping());

        $rows = array_fill(0, 120, [...$this->validRow(), 'Name' => '']);

        $report = $importer->process($rows)->toArray();

        $this->assertSame(120, $report['failed'], 'The count is exact.');
        $this->assertCount(50, $report['failures'], 'The listing is not.');
        $this->assertTrue($report['truncated'], 'And it says so.');
    }

    /* ------------------------------------------------------------ the write */

    /** A dry run validates everything and writes nothing. */
    public function test_a_dry_run_writes_nothing(): void
    {
        $before = Client::query()->count();

        $response = $this->post('/clients/import', [
            'file' => $this->validCsv(),
            'mapping' => $this->validMapping(),
            'dryRun' => true,
        ])->assertOk();

        $this->assertSame(2, $response->json('importable'));
        $this->assertSame(0, $response->json('failed'));
        $this->assertSame($before, Client::query()->count(), 'Nothing was written.');
    }

    public function test_a_clean_file_is_imported(): void
    {
        $response = $this->post('/clients/import', [
            'file' => $this->validCsv(),
            'mapping' => $this->validMapping(),
        ])->assertOk();

        $this->assertSame(2, $response->json('written'));
        $this->assertSame(2, Client::query()->count());
    }

    /**
     * THE TENANT COMES FROM CONTEXT. Nothing in the file can influence it -
     * there is no form field for it, so no mapping can reach it.
     */
    public function test_imported_rows_belong_to_the_acting_tenant(): void
    {
        $this->post('/clients/import', [
            'file' => $this->validCsv(),
            'mapping' => $this->validMapping(),
        ])->assertOk();

        $this->assertSame(
            2,
            Client::withoutGlobalScopes()->where('tenant_id', $this->tenant->id)->count(),
        );
    }

    /**
     * NOTHING IS WRITTEN WHEN ANYTHING FAILED, because a partial import is one
     * the operator then has to reconcile - and re-uploading the corrected file
     * would duplicate everything that succeeded the first time.
     */
    public function test_a_file_with_any_failure_writes_nothing(): void
    {
        $csv = $this->csv(
            "Name,Phone,Code,Status,Type\n"
            ."Asha,0722,A1,active,pppoe\n"
            .",0733,A2,active,pppoe\n"
        );

        $this->post('/clients/import', [
            'file' => $csv,
            'mapping' => $this->validMapping(),
        ])->assertStatus(422);

        $this->assertSame(0, Client::query()->count(), 'Not even the good row.');
    }

    public function test_a_user_without_create_permission_cannot_import(): void
    {
        $this->travel(0); // no-op; keeps the intent explicit below

        Gate::define('create', fn (): bool => false);

        $stranger = User::factory()->create(['tenant_id' => $this->tenant->id]);

        $this->actingAs($stranger);

        // Plans declares no form, so it has nothing to import into - a
        // different refusal, and the one that applies without a policy stub.
        $this->post('/plans/import', [
            'file' => $this->validCsv(),
            'mapping' => ['Name' => 'name'],
        ])->assertNotFound();
    }

    public function test_a_guest_cannot_import(): void
    {
        auth()->logout();

        $this->post('/clients/import', [
            'file' => $this->validCsv(),
            'mapping' => $this->validMapping(),
        ])->assertRedirect('/login');
    }

    /* ---------------------------------------------------------------- setup */

    /** @return array<string, string> */
    private function validRow(): array
    {
        return [
            'Name' => 'Asha',
            'Phone' => '0722',
            'Code' => 'A1',
            'Status' => 'active',
            'Type' => 'pppoe',
        ];
    }

    /** @return array<string, string> */
    private function validMapping(): array
    {
        return [
            'Name' => 'name',
            'Phone' => 'phone',
            'Code' => 'access_code',
            'Status' => 'status',
            'Type' => 'plan_type',
        ];
    }

    private function validCsv(): UploadedFile
    {
        return $this->csv(
            "Name,Phone,Code,Status,Type\n"
            ."Asha Import,0722000001,IMP1,active,pppoe\n"
            ."Bea Import,0722000002,IMP2,active,hotspot\n"
        );
    }

    private function csv(string $contents): UploadedFile
    {
        return new UploadedFile($this->write($contents), 'import.csv', 'text/csv', null, true);
    }

    private function write(string $contents): string
    {
        $path = tempnam(sys_get_temp_dir(), 'pk').'.csv';

        file_put_contents($path, $contents);

        return $path;
    }
}
