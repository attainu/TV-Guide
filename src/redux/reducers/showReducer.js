import { FETCH_POPULAR_SHOWS, FETCH_LATEST_SHOWS, FETCH_SHOW_DETAILS } from "../actionTypes"

const initialState = {
    popular: null,
    latest: null,
    showDetails:null
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_POPULAR_SHOWS:
            return { ...state, popular: payload }
        case FETCH_LATEST_SHOWS:
            return { ...state, latest: payload }
            case FETCH_SHOW_DETAILS:
            return { ...state, showDetails: payload }
        default:
            return state
    }
}
