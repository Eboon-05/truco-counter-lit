import { LitElement, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'

import { globalStyles } from '../styles/globalStyles'

@customElement('all-matches')
export class AllMatches extends LitElement {
    static styles = globalStyles

    @property()
        quantity = 0

    @state()
        groups: number[] = []

    render() {
        return html`
            ${this.groups.map(n => html`<match-group .quantity=${n}></match-group>`)}
        `
    }

    splitQuantity () {
        const parts = Math.ceil(this.quantity / 5)
        const newGroups = []

        for (let i = 1; i <= parts; i++) {
            switch (i) {
            case 1:
                if (parts > 1) {
                    newGroups.push(5)
                } else {
                    newGroups.push(this.quantity)
                }
                break
            case 2:
                if (parts > 2) {
                    newGroups.push(5)
                } else {
                    newGroups.push(this.quantity - 5)
                }
                break
            case 3:
                newGroups.push(this.quantity - 10)
                break
            }
        }

        return newGroups
    }

    firstUpdated () {
        console.log(this.splitQuantity())        
        this.groups = this.splitQuantity()
    }
}