/* eslint-disable indent */
import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import classNames from 'classnames'

import matchImg from '../assets/match.svg'
import { globalStyles } from '../styles/globalStyles'

@customElement('single-match')
export class SingleMatch extends LitElement {
    static styles = globalStyles

    @property()
        position: 1 | 2 | 3 | 4 | 5 = 1

    render () {
        return html`
            <img src=${matchImg} 
                class=${classNames({
                    'h-[50px] m-0 absolute': true,
                    'rotate-90 top-[-22.5px] left-[27.5px]': this.position === 1,
                    'top-[5.83px]': this.position === 2,
                    'top-[5.83px] right-0': this.position === 3,
                    'rotate-90 bottom-[-22.5px] left-[27.5px]': this.position === 4,
                    'rotate-45 top-[5.83px] left-[27.5px]': this.position === 5,
                })}
            />
        `
    }
}