import { store } from "./store/configureStore";
import { setStars, setComment } from "./store/actions/modelActions";
import { userAction } from "./store/actions/userAction";

// store.dispatch(setStars(5));
// store.dispatch(setComment("Oh no!! Who could've known that "));
// store.dispatch(setComment("they would want a MAP (!its more eficient) of dashboards EACH!"));

// dashboard with id === 7 probably has a misstaken amount
// of stars - 99

const dashboardId = 7;
const newValidNumberOfStars = 5;
const newGoodComment = "now it's ok=)";

store.dispatch(userAction(dashboardId, setStars(newValidNumberOfStars)));
store.dispatch(userAction(dashboardId, setComment(newGoodComment)));
