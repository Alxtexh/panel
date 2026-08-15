import { readdirSync, readFileSync, statSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'

/**
 * NOTHING THE PACKAGE RENDERS MAY ASSUME AN INDUSTRY.
 *
 * Alxtexhpanel is developed against an ISP billing reference application, which is
 * the right way to build a framework - a demo under real load finds what a toy
 * cannot - and is also exactly how a framework acquires somebody else's
 * business. The leak is never architectural. It arrives as a placeholder.
 *
 * IT HAD ALREADY HAPPENED. The packaged workspace screen shipped
 * `placeholder="Nairobi Fibre West"`, so a veterinary practice or a law firm
 * creating their first workspace was shown an internet provider's name as the
 * pattern to follow. Nothing failed; every test passed; it simply read as
 * software written for somebody else.
 *
 * WHAT THIS DOES NOT CHECK IS COMMENTS. Explaining a design decision with a
 * concrete example - "a subscriber edited daily makes this timeline long" - is
 * GOOD commentary, and flattening those into "a record" would cost real
 * meaning to buy nothing. A developer reading the source knows where Alxtexhpanel
 * came from. A user filling in a form should not have to.
 *
 * So: rendered markup only, and the packaged screens only. The reference
 * application is free to be an ISP, because it is one.
 */

const HERE = dirname(fileURLToPath(import.meta.url))

/**
 * The vocabulary of the reference application, and of the domain it models.
 *
 * DELIBERATELY NOT "client", "plan" or "session" - those are generic words
 * that any application uses, and a list that flagged them would be turned off
 * within a week. These are words that cannot be anything but an ISP.
 */
/**
 * `radius` USED TO BE ON THIS LIST AND FAILED ITS OWN TEST FOR MEMBERSHIP.
 *
 * RADIUS is an ISP authentication protocol, so it looked like it belonged. It
 * is also the CSS word for a rounded corner, which this package says constantly
 * - `--border-radius`, `var(--radius)`, and an entire Radius control in the
 * appearance drawer with a heading, an options list and an `aria-label`. Two
 * components failed on nothing but rounded corners, in every run of the UI
 * suite, which is how a checker like this one ends up deleted rather than
 * fixed.
 *
 * THE FIRST FIX WAS THE WRONG SHAPE. Hyphens are word boundaries, so a
 * lookaround excluding `-radius` cleared `--border-radius` and left the drawer
 * failing on a heading that reads "Radius" - which is the point at which the
 * word plainly is not "a word that cannot be anything but an ISP". It fails the
 * rule stated directly above, and the answer to that is to drop it rather than
 * to keep narrowing the pattern until only the demo trips it.
 *
 * NOTHING IS LOST. A screen genuinely about ISP authentication does not say
 * RADIUS alone - it says PPPoE, hotspot or Mikrotik alongside it, and those are
 * still here.
 */
const INDUSTRY = /\b(subscriber|fibre|broadband|mikrotik|hotspot|pppoe|isp)\b/i

function vueFiles(dir: string, found: string[] = []): string[] {
    for (const entry of readdirSync(dir)) {
        const path = join(dir, entry)

        if (statSync(path).isDirectory()) {
            vueFiles(path, found)
        } else if (entry.endsWith('.vue')) {
            found.push(path)
        }
    }

    return found
}

/**
 * The template, with HTML comments removed.
 *
 * A COMMENT INSIDE `<template>` IS STILL A COMMENT - it explains the markup to
 * whoever maintains it and never reaches a browser. Counting it would fail
 * this test on the very commentary that documents why the rule exists.
 */
function renderedMarkup(source: string): string {
    const match = /<template>([\s\S]*)<\/template>/.exec(source)

    if (!match) {
        return ''
    }

    return match[1].replace(/<!--[\s\S]*?-->/g, '')
}

describe('the packaged screens are industry-neutral', () => {
    const files = [...vueFiles(HERE), ...vueFiles(join(HERE, '..', 'src'))]

    it('finds screens to check, so it cannot pass by looking at nothing', () => {
        expect(files.length).toBeGreaterThan(100)
    })

    it.each(files)('%s renders no ISP-specific vocabulary', (file) => {
        const markup = renderedMarkup(readFileSync(file, 'utf8'))
        const offending = markup
            .split('\n')
            .map((line, i) => [i + 1, line] as const)
            .filter(([, line]) => INDUSTRY.test(line))

        expect(
            offending.map(([n, line]) => `line ${n}: ${line.trim()}`),
            `This file ships to every installation, so a word only an internet provider ` +
                `would use reads as software written for somebody else. Use a neutral example.`,
        ).toEqual([])
    })
})
