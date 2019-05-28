import { ActionCreator, Action } from "redux";
import { initialActionType } from "./actionTypes";

export const initialAction: ActionCreator<Action> =
() => {
    return {
        type: initialActionType,
    };
};
