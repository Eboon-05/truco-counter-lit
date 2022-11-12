import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { globalStyles } from '../styles/globalStyles'

@customElement('truco-counter')
export class TrucoCounter extends LitElement {
    static styles = globalStyles

    @property()
        title = ''

    @property()
        value = 0

    render() {
        return html`
            <h1 class="text-3xl font-bold text-center">
                ${this.title}
            </h1>
            <hr />
            <p class='text-center mb-2'>${this.value}</p>
            <all-matches .quantity=${this.value}></all-matches>
        `
    }
}