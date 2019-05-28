import { Action } from "redux";

export interface IPayloadAction<T> extends Action {
    payload: T;
}

export enum dashboardActionTypes {
    SET_STARS = "SET_STARS",
    SET_COMMENT = "SET_COMMENT",
}

export enum userActionTypes {
    SET_USERS = "SET_USERS",
}
