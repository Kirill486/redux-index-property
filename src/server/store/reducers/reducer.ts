import { IApplicationState } from "../../types";
import { Action } from "redux";
import { actionTypes, IPayloadAction } from "../actions/actionTypes";

const initialState: IApplicationState = {
    stars: 0,
    comment: "initialStateComment",
};

export const reducer =
(
    state: IApplicationState = initialState,
    action: Action | IPayloadAction<any>,
): IApplicationState => {
    switch (action.type) {
        case actionTypes.SET_STARS: {
            const numberAction = action as IPayloadAction<number>;
            return {
                ...state,
                stars: numberAction.payload,
            };
        }
        case actionTypes.SET_COMMENT: {
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
    return state;
};
