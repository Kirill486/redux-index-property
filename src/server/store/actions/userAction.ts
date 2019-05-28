import { ActionCreator } from "redux";
import { IPayloadAction, userActionTypes, IPayloadIdAction } from "./actionTypes";

export const userAction: ActionCreator<IPayloadIdAction<IPayloadAction<number | string>>> =
(
    dashboardId: number,
    action: IPayloadAction<number | string>,
) => {
    return {
        type: userActionTypes.USER_DASHBOARD_ACTION,
        id: dashboardId,
        payload: action,
    };
};
