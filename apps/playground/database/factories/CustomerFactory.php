<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\Customer;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;

/**
 * @extends Factory<Customer>
 *
 * NOTE THE ABSENCE OF A ROLE, and contrast it with `UserFactory`.
 *
 * `UserFactory` deliberately grants an Administrator role, because `hasPermission()`
 * denies a user with none and a hundred tests about exports would otherwise
 * have been tests about roles. That convenience is a trap a test asserting a
 * REFUSAL has to opt out of, and this session found one that never did.
 *
 * There is nothing to opt out of here. A customer holds no permissions because
 * the model has no permissions to hold - so a test using this factory cannot
 * accidentally be testing an administrator.
 */
final class CustomerFactory extends Factory
{
    protected $model = Customer::class;

    /** @return array<string, mixed> */
    public function definition(): array
    {
        return [
            'name' => $this->faker->name(),
            'email' => $this->faker->unique()->safeEmail(),
            // A KNOWN password, so a sign-in test can type one. The cast on the
            // model hashes it; hashing here too would double-hash and every
            // login attempt would fail for a reason nothing explains.
            'password' => 'password',
            'remember_token' => null,
        ];
    }

    /** Hash it once, explicitly, for the rare caller that bypasses the cast. */
    public function withHashedPassword(string $plain = 'password'): self
    {
        return $this->state(fn (): array => ['password' => Hash::make($plain)]);
    }
}
