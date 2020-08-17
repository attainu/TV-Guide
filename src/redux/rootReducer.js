import { combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import showReducer from "./reducers/showReducer";
import userActReducer from "./reducers/userActReducer";

export const rootReducer = combineReducers({
  authState: authReducer,
  showState:showReducer,
  userActState:userActReducer
});