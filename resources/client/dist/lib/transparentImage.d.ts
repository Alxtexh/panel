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
export declare const TRANSPARENT_IMAGE_HELP = "Upload a PNG with a transparent background so it sits on invoices and contracts without a white box.";
export declare const OPAQUE_IMAGE_ERROR = "This image has no transparent background. Upload a PNG (or WebP) with alpha so it sits on invoices and contracts without a white box.";
export declare const JPEG_IMAGE_ERROR = "JPEG files are fully opaque and stamp a white rectangle. Upload a PNG with a transparent background.";
/**
 * True when at least one pixel is not fully opaque.
 *
 * SAMPLES THE BITMAP. A 1×1 white PNG with alpha 255 is refused the same way
 * as a photographed logo on a white field.
 */
export declare function imageHasTransparency(file: File): Promise<boolean>;
/** Throws with a sentence the upload control can show, or resolves. */
export declare function assertTransparentImage(file: File): Promise<void>;
