/**
 * Courtesy check for logos and stamps that must sit on a document, not in a box.
 *
 * JPEG HAS NO ALPHA. A JPEG always paints a rectangle; stamping one on an
 * invoice is how a white box appears. PNG and WebP can carry transparency,
 * but an export that flattened onto white still looks like a JPEG — so we
 * inspect pixels, not just the extension.
 *
 * THE SERVER STILL DECIDES. This is a client-side refusal so the operator
 * hears why the file will not blend, before anything is stored.
 */
export const TRANSPARENT_IMAGE_HELP =
    'Upload a PNG with a transparent background so it sits on invoices and contracts without a white box.'

export const OPAQUE_IMAGE_ERROR =
    'This image has no transparent background. Upload a PNG (or WebP) with alpha so it sits on invoices and contracts without a white box.'

export const JPEG_IMAGE_ERROR =
    'JPEG files are fully opaque and stamp a white rectangle. Upload a PNG with a transparent background.'

function looksLikeJpeg(file: File): boolean {
    const name = file.name.toLowerCase()
    const type = file.type.toLowerCase()

    return (
        type === 'image/jpeg' ||
        type === 'image/jpg' ||
        name.endsWith('.jpg') ||
        name.endsWith('.jpeg')
    )
}

function looksLikeAlphaImage(file: File): boolean {
    const name = file.name.toLowerCase()
    const type = file.type.toLowerCase()

    return (
        type === 'image/png' ||
        type === 'image/webp' ||
        name.endsWith('.png') ||
        name.endsWith('.webp')
    )
}

/**
 * True when at least one pixel is not fully opaque.
 *
 * SAMPLES THE BITMAP. A 1×1 white PNG with alpha 255 is refused the same way
 * as a photographed logo on a white field.
 */
export async function imageHasTransparency(file: File): Promise<boolean> {
    const url = URL.createObjectURL(file)

    try {
        const image = await loadImage(url)
        const canvas = document.createElement('canvas')
        const width = Math.max(1, image.naturalWidth)
        const height = Math.max(1, image.naturalHeight)

        canvas.width = width
        canvas.height = height

        const context = canvas.getContext('2d', { willReadFrequently: true })

        if (!context) {
            return false
        }

        context.drawImage(image, 0, 0)

        const { data } = context.getImageData(0, 0, width, height)

        for (let index = 3; index < data.length; index += 4) {
            if ((data[index] ?? 255) < 255) {
                return true
            }
        }

        return false
    } finally {
        URL.revokeObjectURL(url)
    }
}

function loadImage(url: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
        const image = new Image()

        image.onload = () => resolve(image)
        image.onerror = () => reject(new Error('Could not read that image.'))
        image.src = url
    })
}

/** Throws with a sentence the upload control can show, or resolves. */
export async function assertTransparentImage(file: File): Promise<void> {
    if (looksLikeJpeg(file)) {
        throw new Error(JPEG_IMAGE_ERROR)
    }

    if (!looksLikeAlphaImage(file)) {
        throw new Error(TRANSPARENT_IMAGE_HELP)
    }

    const transparent = await imageHasTransparency(file)

    if (!transparent) {
        throw new Error(OPAQUE_IMAGE_ERROR)
    }
}
