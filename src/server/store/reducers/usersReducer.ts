import { IUser } from "../../types";
import { Action } from "redux";
import { IPayloadAction, userActionTypes, IPayloadIdAction } from "../actions/actionTypes";
import { SimpleStore } from "../SimpleStore";
import { dashboardReducer } from "./dashboardReducer";
import { initialAction } from "../actions/initialAction";
import { PropertyAcceptor } from "../PropertyAcceptor";

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

            const getTargetDashboard =
            (
                statePart: IUser,
                dashboardId: number,
            ) => statePart.dashboards[dashboardId];

            const setTargetDashboard =
            (
                statePart: IUser,
                dashboardId: number,
                newValue,
            ) => {
                statePart.dashboards[dashboardId] = newValue;
                return statePart;
            };

            const acceptor = new PropertyAcceptor(getTargetDashboard, setTargetDashboard);

            const idIndexedProperty = new IdIndexedProperty(acceptor, dashboardReducer, state);
            idIndexedProperty.dispatch(userDashboardsIdAction.payload);
            const dashboards = idIndexedProperty.getState();

            // return {
            //     ...state,
            //     dashboards
            // }

        }
        default: {
            return state;
        }
    }
};
