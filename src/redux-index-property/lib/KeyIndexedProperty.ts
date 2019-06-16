import { PropertyAcceptor } from "./PropertyAcceptor";
import { LightWeightStore, Reducer } from "./LightWeightStore";
import { initialAction } from "./actions/initialAction";

export class KeyIndexedProperty<StateOuter, StateInner> {

    private acceptor: PropertyAcceptor<StateOuter, StateInner>;
    private outerState: StateOuter;

    private innerStore: LightWeightStore<StateInner>;

    constructor(
        acceptor: PropertyAcceptor<StateOuter, StateInner>,
        reducer: Reducer<StateInner>,
        state: StateOuter,
    ) {
        this.acceptor = acceptor;
        this.outerState = state;

        const targetPropertyValue = this.acceptor.getProperty(this.outerState);
        this.innerStore = new LightWeightStore<StateInner>(targetPropertyValue, reducer);
        this.innerStore.dispatch(initialAction());

        this.dispatch = this.dispatch.bind(this);
        this.getState = this.getState.bind(this);
    }

    public dispatch(action) {
        this.innerStore.dispatch(action);
    }

    public getState() {
        const newPropertyValue = this.innerStore.getState();
        this.acceptor.setProperty(this.outerState, newPropertyValue);
        return this.outerState;
    }

    public getInnerState() {
        return this.innerStore.getState();
    }
}
