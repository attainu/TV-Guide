import Axios from "axios"
import { FETCH_POPULAR_SHOWS, FETCH_LATEST_SHOWS } from "../actionTypes"
import { api } from "../../functions/config"

export const getPopularShows = () => async (dispatch)=>{
    const showList=await Axios(`https://api.themoviedb.org/3/tv/popular?api_key=${api.tmdb}&language=en-US&page=1
    `)
    dispatch({
            type: FETCH_POPULAR_SHOWS,
            payload: showList
        })
}
export const getLatestShows = () => async (dispatch)=>{
    const showList=await Axios(`https://api.themoviedb.org/3/tv/airing_today?api_key=${api.tmdb}&language=en-US&page=1
    `)
    dispatch({
            type: FETCH_LATEST_SHOWS,
            payload: showList
        })
}
