import { html, LitElement } from 'lit'
import { customElement, state } from 'lit/decorators.js'

import { globalStyles } from '../styles/globalStyles'

@customElement('info-modal')
export class InfoModal extends LitElement {
    static styles = globalStyles

    @state() active = false

    render() {
        return this.active
            ? html`<div 
                class='fixed w-screen h-screen inset-0 backdrop-blur-md flex flex-col justify-center items-center'
            >
                <div class='w-full md:w-[768px] px-2 font-lato'>

                    <h1 class='flex items-center text-2xl sm:text-4xl mb-2 font-bold' >
                        <img src='icon.png' class='h-[50px] mr-2' />
                        Contador de truco
                    </h1>

                    <p>
                        Hecho por 
                        <a href='https://github.com/Eboon-05' class='text-[#F9D171] underline' target='blank'>
                            Eboon
                        </a>.
                        <br />
                        Ícono de la aplicación hecho por 
                        <a href='https://www.flaticon.es/iconos-gratis/fosforo' class='text-[#F9D171] underline' target='blank'>
                            Nathania Desmonda Tjipto - Flaticon
                        </a>.
                    </p>

                </div>
                <button @click=${this.close} class='mt-2 bg-white bg-opacity-10 rounded' >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                        class="w-10 h-10">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>`
            : null
    }

    open() {
        this.active = true
    }

    close() {
        this.active = false
    }
}