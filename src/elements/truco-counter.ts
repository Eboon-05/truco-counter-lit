import { LitElement, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { connect } from 'pwa-helpers'

import { store } from '../redux/store'
import { Action, State } from '../redux/reducer'

import { globalStyles } from '../styles/globalStyles'

@customElement('truco-counter')
export class TrucoCounter extends connect(store)(LitElement) {
    static styles = globalStyles

    @property()
        'counter-title': 'nos' | 'ellos' = 'nos'

    @state()
        value = 0

    render() {
        return html`
            <div class='flex justify-between flex-col h-screen p-1'>
                <div>
                    <h1 class="text-3xl font-bold text-center font-kolker">
                        ${this['counter-title'].toLocaleUpperCase()}
                    </h1>
                    
                    <hr />
        
                    <all-matches .quantity=${this.value}></all-matches>
                </div>
                <div class='grid grid-cols-1 grid-rows-2 gap-2 grid-flow-col'>
                        <app-btn 
                            @click=${() => this.updateValue('INCREASE')}
                            .disabled=${this.value > 29}
                        >
                            <!-- + icon -->
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                class="w-6 h-6 mx-auto">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                            </svg>
                        </app-btn>
                        <app-btn 
                            @click=${() => this.updateValue('DECREASE')}
                            .disabled=${this.value < 1}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                                class="w-6 h-6 mx-auto">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                            </svg>
                        </app-btn>
                </div>
            </div>
        `
    }

    stateChanged(state?: State) {
        if (state) {
            this.value = state[this['counter-title']]
        }
    }

    updateValue(type: Action['type']) {
        store.dispatch({
            type,
            payload: this['counter-title']
        })
    }
}