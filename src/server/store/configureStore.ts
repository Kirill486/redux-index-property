import {createStore, Store} from "redux";
import { reducer } from "./reducers/reducer";
import { IApplicationState } from "../types";

export const store: Store<IApplicationState> = createStore(reducer);

const logStata = () => console.log(JSON.stringify(store.getState(), undefined, 2));

logStata();

store.subscribe(() => {
    logStata();
});
