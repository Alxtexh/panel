<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Support\TransparentImage;
use InvalidArgumentException;
use PHPUnit\Framework\TestCase;

final class TransparentImageTest extends TestCase
{
    public function test_jpeg_is_refused_by_name(): void
    {
        $path = tempnam(sys_get_temp_dir(), 'pk');

        try {
            $this->expectException(InvalidArgumentException::class);
            $this->expectExceptionMessage(TransparentImage::JPEG);
            TransparentImage::assert($path, 'logo.jpg');
        } finally {
            @unlink($path);
        }
    }

    public function test_a_transparent_png_passes(): void
    {
        if (! function_exists('imagecreatetruecolor')) {
            $this->markTestSkipped('GD is required for the pixel walk.');
        }

        $path = tempnam(sys_get_temp_dir(), 'pk').'.png';
        $image = imagecreatetruecolor(4, 4);
        imagealphablending($image, false);
        imagesavealpha($image, true);
        $clear = imagecolorallocatealpha($image, 0, 0, 0, 127);
        imagefilledrectangle($image, 0, 0, 3, 3, $clear);
        imagepng($image, $path);
        imagedestroy($image);

        try {
            TransparentImage::assert($path, 'stamp.png');
            $this->assertTrue(TransparentImage::hasTransparency($path));
        } finally {
            @unlink($path);
        }
    }
}
