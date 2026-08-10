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
const INDUSTRY = /\b(subscriber|fibre|broadband|mikrotik|hotspot|pppoe|radius|isp)\b/i

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
