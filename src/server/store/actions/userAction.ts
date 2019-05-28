import { ActionCreator } from "redux";
import { IPayloadAction, userActionTypes } from "./actionTypes";

export const userAction: ActionCreator<IPayloadAction<IPayloadAction<number | string>>> =
(
    action: IPayloadAction<number | string>,
) => {
    return {
        type: userActionTypes.USER_DASHBOARD_ACTION,
        payload: action,
    };
};
