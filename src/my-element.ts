import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'

import { globalStyles } from './styles/globalStyles'

@customElement('my-element')
export class MyElement extends LitElement {
    static styles = globalStyles

    render() {
        return html`
            <h1 class="text-3xl font-bold underline">
                Hello world!
            </h1>
        `
    }
}