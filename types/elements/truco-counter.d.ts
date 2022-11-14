import { LitElement } from 'lit';
import { Action, State } from '../redux/reducer';
declare const TrucoCounter_base: (new (...args: any[]) => {
    _storeUnsubscribe: import("redux").Unsubscribe;
    connectedCallback(): void;
    disconnectedCallback(): void;
    stateChanged(_state: State): void;
    readonly isConnected: boolean;
}) & typeof LitElement;
export declare class TrucoCounter extends TrucoCounter_base {
    static styles: (import("lit").CSSResult | import("lit").CSSResult[])[];
    'counter-title': 'nos' | 'ellos';
    value: number;
    render(): import("lit").TemplateResult<1>;
    stateChanged(state?: State): void;
    updateValue(type: Action['type']): void;
}
export {};
