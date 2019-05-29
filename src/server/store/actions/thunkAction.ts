import { ActionCreator } from "redux";
import { setStars, setComment } from "./modelActions";

export const controllerAction: ActionCreator<any> =
() => {
    const action = (dispatch: any) => {
        dispatch(thunkUserAction(10, "controllerActionWorksAsWell"));
    };
    return action;
};

export const thunkUserAction: ActionCreator<any> =
(
    stars: number,
    comment: string,
) => {
    const action = (dispatch: any) => {
        dispatch(setStars(stars));
        dispatch(setComment(comment));
    };
    return action;
};

export const asyncTimeoutAction: ActionCreator<any> =
() => {
    const action = (dispatch: any, getState: any) => {
        dispatch(setStars(0));
        dispatch(setComment("0"));

        setTimeout(() => {
            console.log("1");
            dispatch(setStars(1));
            dispatch(setComment("1"));
        }, 1000);

        setTimeout(() => {
            console.log("5");
            dispatch(setStars(5));
            dispatch(setComment("5"));
        }, 5000);

        setTimeout(() => {
            console.log("7");
            dispatch(setStars(7));
            dispatch(setComment("7"));

            console.log(getState());
        }, 7000);
    };

    return action;
};
