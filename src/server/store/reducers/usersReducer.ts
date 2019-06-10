import { IUser } from "../../types";
import { Action } from "redux";
import { IPayloadAction, userActionTypes, IPayloadIdAction } from "../actions/actionTypes";
import { SimpleStore } from "../SimpleStore";
import { dashboardReducer } from "./dashboardReducer";
import { initialAction } from "../actions/initialAction";

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
            const targetDashboardState = state.dashboards[userDashboardsIdAction.id];
            const targetDashboardStore = new SimpleStore(targetDashboardState, dashboardReducer);

            if (!targetDashboardState) {
                targetDashboardStore.dispatch(initialAction());
            }
            targetDashboardStore.dispatch(userDashboardsIdAction.payload);
            const newTargetDashboardState = targetDashboardStore.getState();

            const newDashboardsStateToMerge = { };
            newDashboardsStateToMerge[userDashboardsIdAction.id] = newTargetDashboardState;

            const newDashboards = {
                ...state.dashboards,
                ...newDashboardsStateToMerge,
            };

            return {
                ...state,
                dashboards: newDashboards,
            };

            // const acceptor = (state: IUser, id) => {
            //     state.dashboards[userDashboardsIdAction.id];
            // }

            // return {
            //     ...state,
            //     dashboards: idIndexedProperty(acceptor, dashboardReducer)
            // }

        }
        default: {
            return state;
        }
    }
};
