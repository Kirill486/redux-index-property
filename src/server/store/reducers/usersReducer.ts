import { IUser } from "../../types";
import { Action } from "redux";
import { IPayloadAction, userActionTypes } from "../actions/actionTypes";

const userInitial: IUser = {
    name: "John",
    dashboards: {
        1: {
            stars: 2,
            comment: "two stars board",
        },
        2: {
            stars: 4,
            comment: "four stars board",
        },
        7: {
            stars: 99,
            comment: "this is probably misstaken",
        },
    },
};

export const userReducer =
(
    state: IUser = userInitial,
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
