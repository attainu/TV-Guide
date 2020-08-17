import { FETCH_POPULAR_SHOWS, FETCH_LATEST_SHOWS } from "../actionTypes"

const initialState = {
    popular: null,
    latest: null
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_POPULAR_SHOWS:
            return { ...state, popular: payload }
        case FETCH_LATEST_SHOWS:
            return { ...state, latest: payload }
        default:
            return state
    }
}
