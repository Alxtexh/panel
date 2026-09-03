/**
 * Test-environment shims for browser APIs jsdom does not implement.
 *
 * `ResizeObserver` IS NOT OPTIONAL FOR THIS PACKAGE. Every chart measures its
 * host element rather than scaling a fixed `viewBox`, because
 * `preserveAspectRatio="none"` stretches the strokes and the text along with
 * the drawing. So every chart constructs one on mount, and jsdom has none -
 * which made a chart component impossible to mount in a test at all.
 *
 * That is worth noticing: the charts were untestable until now, and the reason
 * was three lines of missing global rather than anything about the charts.
 *
 * THE STUB NEVER FIRES. A callback that reported a size would invite tests
 * that assert pixel positions against a width jsdom invented, which is a
 * measurement of the stub rather than of the component. Charts fall back to
 * their default width, and specs assert RELATIONSHIPS - this point is left of
 * that one, this radius is twice that one - which hold at any width.
 */
class ResizeObserverStub implements ResizeObserver {
    observe(): void {}

    unobserve(): void {}

    disconnect(): void {}
}

globalThis.ResizeObserver ??= ResizeObserverStub as unknown as typeof ResizeObserver

/** jsdom exposes canvas elements but not their 2D context implementation. */
if (typeof HTMLCanvasElement !== 'undefined') {
    HTMLCanvasElement.prototype.getContext = (() => ({
        clearRect() {},
        fillRect() {},
        beginPath() {},
        moveTo() {},
        lineTo() {},
        stroke() {},
    })) as unknown as typeof HTMLCanvasElement.prototype.getContext
}
