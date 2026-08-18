<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Fixtures\Widgets;

use Alxtexh\Panel\Tests\Fixtures\Resources\PostResource;
use Alxtexh\Panel\Widgets\TableWidget;

final class RecentPostsWidget
{
    public static function make(): TableWidget
    {
        return TableWidget::make('recent')->resource(PostResource::class)->limit(3);
    }
}
