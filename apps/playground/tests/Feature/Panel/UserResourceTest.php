<?php

declare(strict_types=1);

namespace Tests\Feature\Panel;

use App\Models\User;
use App\Panel\Resources\UserResource;
use Tests\TestCase;

final class UserResourceTest extends TestCase
{
    public function test_the_generated_resource_exposes_a_model_and_table_schema(): void
    {
        self::assertSame(User::class, UserResource::model());
        self::assertNotEmpty(UserResource::definition()->getColumns());
    }
}
