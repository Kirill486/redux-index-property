import { ActionCreator } from "redux";
import { IPayloadAction, actionTypes } from "./actionTypes";

export const setStars: ActionCreator<IPayloadAction<number>> =
(stars: number) => {
    return {
        type: actionTypes.SET_STARS,
        payload: stars,
    };
};

export const setComment: ActionCreator<IPayloadAction<string>> =
(comment: string) => {
    return {
        type: actionTypes.SET_COMMENT,
        payload: comment,
    };
};
