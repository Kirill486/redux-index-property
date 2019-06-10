import { store } from "./store/configureStore";
import { setStars, setComment } from "./store/actions/modelActions";
import { userAction } from "./store/actions/userAction";
import { controllerAction } from "./store/actions/thunkAction";
import * as assert from "assert";
import { resultAssertion, initialAssertion, fixedStars, fixedComment } from "./store/constants";
const dashboardId = 7;
const newValidNumberOfStars = 5;
const newGoodComment = "now it's ok=)";

assert.deepEqual(store.getState(), initialAssertion);

store.dispatch(userAction(dashboardId, setStars(newValidNumberOfStars)));

assert.deepEqual(store.getState(), fixedStars);

store.dispatch(userAction(dashboardId, setComment(newGoodComment)));

assert.deepEqual(store.getState(), fixedComment);

store.dispatch(userAction(66, controllerAction()));

assert.deepEqual(store.getState(), resultAssertion);
