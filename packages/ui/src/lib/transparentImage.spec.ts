import { describe, expect, it } from 'vitest'
import {
    JPEG_IMAGE_ERROR,
    TRANSPARENT_IMAGE_HELP,
    assertTransparentImage,
} from './transparentImage'

describe('assertTransparentImage', () => {
    it('rejects JPEG before inspecting pixels', async () => {
        const file = new File([new Uint8Array([0xff, 0xd8, 0xff])], 'logo.jpg', {
            type: 'image/jpeg',
        })

        await expect(assertTransparentImage(file)).rejects.toThrow(JPEG_IMAGE_ERROR)
    })

    it('rejects an unrecognised raster type', async () => {
        const file = new File([new Uint8Array([0, 1, 2])], 'logo.gif', {
            type: 'image/gif',
        })

        await expect(assertTransparentImage(file)).rejects.toThrow(TRANSPARENT_IMAGE_HELP)
    })
})
