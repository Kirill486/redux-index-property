import { IUser } from "../../types";
import { Action } from "redux";
import { IPayloadAction, userActionTypes, IPayloadIdAction } from "../actions/actionTypes";
import { dashboardReducer } from "./dashboardReducer";
import { KeyIndexedProperty, PropertyAcceptor } from "../../../redux-index-property";

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
        case userActionTypes.USER_DASHBOARD_ACTION: {
            const userDashboardsIdAction = action as IPayloadIdAction<IPayloadAction<number | string>>;

            const getTargetDashboard =
            (
                statePart: IUser,
            ) => statePart.dashboards[userDashboardsIdAction.id];

            const setTargetDashboard =
            (
                statePart: IUser,
                newValue,
            ) => {
                statePart.dashboards[userDashboardsIdAction.id] = newValue;
            };

            const acceptor = new PropertyAcceptor(getTargetDashboard, setTargetDashboard);

            const idIndexedProperty = new KeyIndexedProperty(acceptor, dashboardReducer, state);
            idIndexedProperty.dispatch(userDashboardsIdAction.payload);
            const newState = idIndexedProperty.getState();

            return {
                ...newState,
            };

        }
        default: {
            return state;
        }
    }
};
