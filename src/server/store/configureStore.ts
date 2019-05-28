import {createStore, Store} from "redux";
import { reducer } from "./reducers/reducer";
import { IApplicationState } from "../types";
import { setStars, setComment } from "./actions/modelActions";

export const store: Store<IApplicationState> = createStore(reducer);

const logStata = () => console.log(store.getState());

logStata();

store.subscribe(() => {
    logStata();
});
