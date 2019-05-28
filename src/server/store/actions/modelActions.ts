import { ActionCreator } from "redux";
import { IPayloadAction, dashboardActionTypes } from "./actionTypes";

export const setStars: ActionCreator<IPayloadAction<number>> =
(stars: number) => {
    return {
        type: dashboardActionTypes.SET_STARS,
        payload: stars,
    };
};

export const setComment: ActionCreator<IPayloadAction<string>> =
(comment: string) => {
    return {
        type: dashboardActionTypes.SET_COMMENT,
        payload: comment,
    };
};
