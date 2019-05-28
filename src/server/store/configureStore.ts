import {createStore, Store} from "redux";
import { reducer } from "./reducers/reducer";
import { IApplicationState } from "../types";

export const store: Store<IApplicationState> = createStore(reducer);

const logStata = () => console.log(store.getState());

logStata();

store.subscribe(() => {
    logStata();
});
