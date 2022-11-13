import { Reducer } from 'redux'

export interface State {
    ellos: number,
    nos: number
}

export interface Action {
    type: 'INCREASE' | 'DECREASE',
    payload: 'ellos' | 'nos'
}

const initialState: State = {
    ellos: 0,
    nos: 0
}

export const reducer: Reducer<State, Action> = (state =  initialState, action) => {
    switch (action.type) {
    case 'INCREASE':
        return action.payload === 'nos'
            ? {
                ...state,
                nos: state.nos < 30 ? state.nos + 1 : state.nos
            }
            : {
                ...state,
                ellos: state.ellos < 30 ? state.ellos + 1 : state.ellos
            }
    case 'DECREASE':
        return action.payload === 'nos'
            ? {
                ...state,
                nos: state.nos > 0 ? state.nos - 1 : state.nos
            }
            : {
                ...state,
                ellos: state.ellos > 0 ? state.ellos - 1 : state.ellos
            }
    }
}