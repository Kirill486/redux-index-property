import { ActionCreator } from "redux";
import { setStars, setComment } from "./modelActions";

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
