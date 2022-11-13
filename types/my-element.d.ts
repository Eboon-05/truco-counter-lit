import { LitElement } from 'lit';
import './elements/truco-counter';
import './elements/all-matches';
import './elements/match-group';
import './elements/single-match';
import './elements/app-btn';
declare const MyElement_base: (new (...args: any[]) => {
    _storeUnsubscribe: import("redux").Unsubscribe;
    connectedCallback(): void;
    disconnectedCallback(): void;
    stateChanged(_state: import("./redux/reducer").State): void;
    readonly isConnected: boolean;
}) & typeof LitElement;
export declare class MyElement extends MyElement_base {
    static styles: (import("lit").CSSResult | import("lit").CSSResult[])[];
    render(): import("lit").TemplateResult<1>;
}
export {};
