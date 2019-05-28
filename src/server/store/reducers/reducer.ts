import { combineReducers } from "redux";
import { userReducer } from "./usersReducer";

export const reducer = combineReducers({
    users: userReducer,
});
