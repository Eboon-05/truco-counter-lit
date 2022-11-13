import { Reducer } from 'redux';
export interface State {
    ellos: number;
    nos: number;
}
export interface Action {
    type: 'INCREASE' | 'DECREASE';
    payload: 'ellos' | 'nos';
}
export declare const reducer: Reducer<State, Action>;
