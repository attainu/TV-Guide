import axios from "axios";
import { FETCH_SCHEDULE_LIST } from "../actionTypes";
export const fetchSchedule = (scheduleDay) => async (dispatch, getState) => {
  try {
    const response = await axios(
      `https://api.tvmaze.com/schedule?country=US&date=${scheduleDay}`
    );
    dispatch({
      type: FETCH_SCHEDULE_LIST,
      payload: response.data
    });
  } catch (error) {
    console.log(error);
  }
};
