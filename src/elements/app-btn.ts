import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { globalStyles } from '../styles/globalStyles'

@customElement('app-btn')
export class AppBtn extends LitElement {
    static styles = globalStyles
    
    @property()
        disabled = false

    render() {
        return html`
            <button type="button" 
                class="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md 
                w-full

                hover:bg-blue-700 hover:shadow-lg 
                
                focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 
                
                active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out
                
                disabled:pointer-events-none disabled:opacity-60"

                ?disabled=${this.disabled}
            >
                <slot></slot>
            </button>
        `
    }
}