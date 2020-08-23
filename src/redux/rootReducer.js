import { combineReducers } from "redux";
import scheduleReducer from "./reducers/scheduleReducer";
import authReducer from "./reducers/authReducer";
import showReducer from "./reducers/showReducer";
import userActReducer from "./reducers/userActReducer";

export const rootReducer = combineReducers({
  scheduleState:scheduleReducer,
  authState: authReducer,
  showState:showReducer,
  userActState:userActReducer
});