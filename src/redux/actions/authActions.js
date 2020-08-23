import { SET_CURRENT_USER, CLEAR_CURRENT_USER } from "../actionTypes";
export const setCurrentUser = (user) => async (dispatch) => {
  try {
  
    dispatch({
      type: SET_CURRENT_USER,
      payload:user
    });
  } catch (error) {
    console.log(error);
  }
};
export const clearCurrentUser = () => async (dispatch) => {
  try {
  
    dispatch({
      type: CLEAR_CURRENT_USER,
      payload:null
    });
  } catch (error) {
    console.log(error);
  }
};
