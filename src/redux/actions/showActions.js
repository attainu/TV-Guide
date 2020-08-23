import Axios from "axios"
import { FETCH_POPULAR_SHOWS, FETCH_LATEST_SHOWS, FETCH_SHOW_DETAILS, FETCH_SEARCH_REASULT } from "../actionTypes"
import { api } from "../../functions/config"

export const getPopularShows = (page = 1) => async (dispatch) => {
    const showList = await Axios(`https://api.themoviedb.org/3/tv/popular?api_key=${api.tmdb}&language=en-US&page=${page}
    `)
    dispatch({
        type: FETCH_POPULAR_SHOWS,
        payload: showList
    })
}
export const getLatestShows = (page = 1) => async (dispatch) => {
    const showList = await Axios(`https://api.themoviedb.org/3/tv/airing_today?api_key=${api.tmdb}&language=en-US&page=${page}
    `)
    dispatch({
        type: FETCH_LATEST_SHOWS,
        payload: showList
    })
}
export const getShowDetails = (showId) => async (dispatch) => {
    const showlist = await Axios(`https://api.themoviedb.org/3/tv/${showId}?api_key=${api.tmdb}&language=en-US&append_to_response=videos%2Ccredits%2Cvideos`)

    dispatch({
        type: FETCH_SHOW_DETAILS,
        payload: showlist
    })
}
export const getSearchResult = (keywords, page = 1) => async (dispatch) => {
    const showlist = await Axios(`https://api.themoviedb.org/3/search/tv?api_key=${api.tmdb}&language=en-US&page=${page}&query=${keywords}&include_adult=true`)

    dispatch({
        type: FETCH_SEARCH_REASULT,
        payload: showlist
    })
}

