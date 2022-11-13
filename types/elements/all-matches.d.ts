import { LitElement, PropertyValues } from 'lit';
export declare class AllMatches extends LitElement {
    static styles: (import("lit").CSSResult | import("lit").CSSResult[])[];
    quantity: number;
    groups: number[];
    render(): import("lit").TemplateResult<1>;
    splitQuantity(): number[];
    firstUpdated(): void;
    protected updated(changedProperties: PropertyValues<this>): void;
}
