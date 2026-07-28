/**
 * Lint config for the shipped package.
 *
 * WHY THIS FILE EXISTS AT ALL. `packages/ui` sits outside the playground's
 * config directory, and ESLint 9 refuses to lint files above its config's base
 * path — it reports "File ignored because outside of base path", which reads
 * like a warning and means "not checked". So the component code that actually
 * ships to consumers was the one part of the repository with no lint coverage,
 * while the application that merely consumes it had full coverage.
 *
 * `basePath` on a config OBJECT was the first attempt and does not help: it
 * rebases that object's own patterns, not the run. A config file living beside
 * the code it checks is what ESLint's model actually wants.
 *
 * IT RE-EXPORTS THE PLAYGROUND'S RULES rather than restating them. Two rule
 * sets in one repository drift, and the one that drifts is always the one
 * nobody is looking at.
 */
import playground from '../../apps/playground/eslint.config.js'

export default [
    ...playground,
    {
        // The playground's ignore list names ITS paths; none of them exist here,
        // and re-listing them would suggest they might.
        ignores: ['node_modules', 'dist'],
    },
]
