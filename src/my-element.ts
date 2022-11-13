import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { connect } from 'pwa-helpers'

import { globalStyles } from './styles/globalStyles'
import { store } from './redux/store'


import './elements/truco-counter'
import './elements/all-matches'
import './elements/match-group'
import './elements/single-match'
import './elements/app-btn'

@customElement('my-element')
export class MyElement extends connect(store)(LitElement) {
    static styles = globalStyles

    render() {
        return html`
            <div class='grid gap-2 grid-cols-2 grid-rows-1 max-w-3xl mx-auto'>
                <truco-counter title='nos'></truco-counter>
                <truco-counter title='ellos'></truco-counter>
            </div>
        `
    }
}