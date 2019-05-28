import { Action } from "redux";

export interface IPayloadAction<T> extends Action {
    payload: T;
}

export interface IPayloadIdAction<T> extends IPayloadAction<T> {
    id: number;
}

export enum dashboardActionTypes {
    SET_STARS = "SET_STARS",
    SET_COMMENT = "SET_COMMENT",
}

export enum userActionTypes {
    SET_USERS = "SET_USERS",
    USER_DASHBOARD_ACTION = "USER_DASHBOARD_ACTION",
}

export const initialActionType = "INITIAL";
