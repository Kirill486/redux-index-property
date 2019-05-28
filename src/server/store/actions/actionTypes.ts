import { Action } from "redux";

export interface IPayloadAction<T> extends Action {
    payload: T;
}

export enum actionTypes {
    SET_STARS = "SET_STARS",
    SET_COMMENT = "SET_COMMENT",
}
