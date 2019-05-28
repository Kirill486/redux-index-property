import { IUser } from "../../types";
import { Action } from "redux";
import { IPayloadAction, userActionTypes } from "../actions/actionTypes";

export const userReducer =
(
    state: IUser,
    action: Action,
) => {
    switch (action.type) {
        case userActionTypes.SET_USERS: {
            const usersAction = action as IPayloadAction<IUser>;
            return usersAction.payload;
        }
        default: {
            return state;
        }
    }
};
