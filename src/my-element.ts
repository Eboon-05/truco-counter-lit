import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'

import { globalStyles } from './styles/globalStyles'

import './elements/truco-counter'
import './elements/all-matches'
import './elements/match-group'
import './elements/single-match'

@customElement('my-element')
export class MyElement extends LitElement {
    static styles = [
        globalStyles,
        css`
            #root {
                min-height: 100vh;
                width: 100vw;
            }
        `
    ]

    render() {
        return html`
            <div class='flex justify-between flex-col h-screen'>
                <div class='grid gap-2 grid-cols-2 grid-rows-1 p-1'>
                    <truco-counter title='Nos' .value=${8} ></truco-counter>
                    <truco-counter title='Ellos'></truco-counter>
                </div>
                <div>
                    buttons
                </div>
            </div>
        `
    }
}