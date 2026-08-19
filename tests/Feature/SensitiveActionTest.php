<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Auth\SensitiveAction;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

/**
 * A budget on questions that can be asked repeatedly from inside a session.
 *
 * SIGNING IN IS THROTTLED; THE PROMPTS AFTERWARDS ARE NOT, unless something
 * does it. "Confirm your current password" asks the same question as a login
 * form, from a session that is already authenticated - so without a budget it
 * is an unmetered guessing machine for anybody who reaches a borrowed or
 * hijacked session.
 *
 * A CORRECT ANSWER CLEARS THE COUNT, which is the half that keeps the defence
 * usable. A budget that only ever accumulates locks people out of their own
 * settings for mistyping, and a security control people route around is worse
 * than none.
 *
 * IT THROWS A VALIDATION EXCEPTION, NOT A 429. The refusal arrives on a form,
 * so it belongs against the field somebody is typing into - an error page
 * loses their place and says nothing about which field.
 */
final class SensitiveActionTest extends TestCase
{
    use RefreshDatabase;

    private Request $request;

    protected function setUp(): void
    {
        parent::setUp();

        $tenant = Tenant::create(['name' => 'Mine', 'slug' => 'mine']);

        $user = User::create([
            'tenant_id' => $tenant->id,
            'name' => 'Operator',
            'email' => 'operator@example.test',
            'password' => 'password',
            'email_verified_at' => now(),
        ]);

        $this->actingAs($user);

        $this->request = request();
    }

    private function spend(int $times): void
    {
        for ($i = 0; $i < $times; $i++) {
            SensitiveAction::recordFailure($this->request, 'password.confirm');
        }
    }

    public function test_an_untouched_budget_allows_the_action(): void
    {
        SensitiveAction::assertNotExhausted($this->request, 'password.confirm', 'current_password');

        $this->addToAssertionCount(1);
    }

    public function test_a_few_wrong_answers_do_not_lock_anybody_out(): void
    {
        config(['panel.auth.sensitive.max_attempts' => 5]);

        $this->spend(3);

        SensitiveAction::assertNotExhausted($this->request, 'password.confirm', 'current_password');

        $this->addToAssertionCount(1);
    }

    public function test_the_budget_refuses_once_it_is_spent(): void
    {
        config(['panel.auth.sensitive.max_attempts' => 5]);

        $this->spend(6);

        $this->expectException(ValidationException::class);

        SensitiveAction::assertNotExhausted($this->request, 'password.confirm', 'current_password');
    }

    /**
     * THE MESSAGE LANDS ON THE FIELD IT WAS ASKED FOR.
     *
     * The field name is a parameter rather than a constant, because the same
     * budget guards prompts on different forms - and a message attached to the
     * wrong field renders nowhere at all.
     */
    public function test_the_refusal_names_the_field_it_was_given(): void
    {
        config(['panel.auth.sensitive.max_attempts' => 1]);

        $this->spend(2);

        try {
            SensitiveAction::assertNotExhausted($this->request, 'password.confirm', 'a_named_field');

            $this->fail('An exhausted budget did not refuse.');
        } catch (ValidationException $e) {
            $this->assertArrayHasKey('a_named_field', $e->errors());
        }
    }

    /**
     * A CORRECT ANSWER CLEARS THE COUNT. Without this a person who mistypes
     * four times and then succeeds is still one mistake from being locked out
     * of their own settings.
     */
    public function test_a_correct_answer_clears_the_budget(): void
    {
        config(['panel.auth.sensitive.max_attempts' => 5]);

        $this->spend(4);

        SensitiveAction::clear($this->request, 'password.confirm');

        $this->spend(4);

        SensitiveAction::assertNotExhausted($this->request, 'password.confirm', 'current_password');

        $this->addToAssertionCount(1);
    }

    /**
     * ONE ACTION'S BUDGET IS NOT ANOTHER'S.
     *
     * Sharing a counter across prompts would let failures on a harmless one
     * lock out a critical one - and, worse, let somebody exhaust the budget
     * guarding a password prompt by hammering something else entirely.
     */
    public function test_budgets_are_kept_per_action(): void
    {
        config(['panel.auth.sensitive.max_attempts' => 2]);

        $this->spend(3);

        SensitiveAction::assertNotExhausted($this->request, 'some.other.action', 'field');

        $this->addToAssertionCount(1);
    }
}
