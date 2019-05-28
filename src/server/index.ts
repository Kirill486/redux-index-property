import { store } from "./store/configureStore";
import { setStars, setComment } from "./store/actions/modelActions";

store.dispatch(setStars(3));
store.dispatch(setStars(5));
store.dispatch(setComment("five stars solution"));
store.dispatch(setComment("kinda"));
