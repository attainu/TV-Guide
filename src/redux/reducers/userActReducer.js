import { ADD_TO_WATCHLIST, ADD_TO_SUBSCRIBELIST, VIEW_WATCHLIST, VIEW_SUBSCRIBELIST } from "../actionTypes"

const initialState = {
    add: null,
    subscribe:null,
    addResult: null,
    subscribeResult:null
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_TO_WATCHLIST:
            return {...state, add: payload}
        case ADD_TO_SUBSCRIBELIST:
            return {...state, subscribe: payload}
        case VIEW_WATCHLIST:
            return {...state, addResult:payload}
        case VIEW_SUBSCRIBELIST:
            return {...state, subscribeResult: payload}
        default:
            return state
    }
}
