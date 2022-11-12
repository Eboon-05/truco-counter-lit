import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'


import { globalStyles } from '../styles/globalStyles'

@customElement('match-group')
export class MatchGroup extends LitElement {
    static styles = globalStyles

    @property()
        quantity = 5

    render() {
        return html`
            <div class='relative w-[61.66px] h-[61.66px] mx-auto mb-2'>
                ${this.quantity > 0 ? html`<single-match .position=${1}></single-match>` : null}
                ${this.quantity > 1 ? html`<single-match .position=${2}></single-match>` : null}
                ${this.quantity > 2 ? html`<single-match .position=${3}></single-match>` : null}
                ${this.quantity > 3 ? html`<single-match .position=${4}></single-match>` : null}
                ${this.quantity > 4 ? html`<single-match .position=${5}></single-match>` : null}
            </div>
        `
    }
}