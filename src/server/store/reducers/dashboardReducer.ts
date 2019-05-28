import { IApplicationState, IDashboard } from "../../types";
import { Action } from "redux";
import { dashboardActionTypes, IPayloadAction } from "../actions/actionTypes";

const initialState: IDashboard = {
    stars: 0,
    comment: "initialStateComment",
};

export const reducer =
(
    state: IDashboard = initialState,
    action: Action | IPayloadAction<any>,
): IDashboard => {
    switch (action.type) {
        case dashboardActionTypes.SET_STARS: {
            const numberAction = action as IPayloadAction<number>;
            return {
                ...state,
                stars: numberAction.payload,
            };
        }
        case dashboardActionTypes.SET_COMMENT: {
            const stringAction = action as IPayloadAction<string>;
            return {
                ...state,
                comment: stringAction.payload,
            };
        }
        default: {
            return state;
        }
    }
};
