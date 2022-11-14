import { LitElement, html } from 'lit'
import { customElement, query } from 'lit/decorators.js'
import { connect } from 'pwa-helpers'

import { globalStyles } from './styles/globalStyles'
import { store } from './redux/store'


import './elements/truco-counter'
import './elements/all-matches'
import './elements/match-group'
import './elements/single-match'
import './elements/app-btn'
import './elements/info-modal'
import { InfoModal } from './elements/info-modal'

@customElement('my-element')
export class MyElement extends connect(store)(LitElement) {
    static styles = globalStyles

    @query('info-modal')
        modal!: InfoModal

    render() {
        return html`
            <div class='grid gap-2 grid-cols-2 grid-rows-1 max-w-3xl mx-auto'>
                <truco-counter counter-title='nos'></truco-counter>
                <truco-counter counter-title='ellos'></truco-counter>
            </div>
            <button class='fixed bottom-28 left-1/2 -translate-x-1/2'
                @click=${() => this.modal.open()}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                    class="w-10 h-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
            </button>
            <info-modal></info-modal>
        `
    }
}