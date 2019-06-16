import { ActionCreator, Action } from "redux";
import { initialActionType } from "../../../server/store/actions/actionTypes";

export const initialAction: ActionCreator<Action> =
() => {
    return {
        type: initialActionType,
    };
};
