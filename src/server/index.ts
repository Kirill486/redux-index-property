import { store } from "./store/configureStore";
import { setStars, setComment } from "./store/actions/modelActions";

store.dispatch(setStars(3));
store.dispatch(setStars(5));
store.dispatch(setComment("Oh no!! Who could've known that "));
store.dispatch(setComment("they would want a MAP (!its more eficient) of dashboards EACH!"));
