import { PropertyAcceptor } from "./PropertyAcceptor";
import { SimpleStore } from "./SimpleStore";
import { initialAction } from "./actions/initialAction";

export class KeyIndexedProperty<StateOuter, StateInner> {

    private acceptor: PropertyAcceptor<StateOuter, StateInner>;
    private outerState: StateOuter;

    private innerStore: SimpleStore<StateInner>;

    constructor(
        acceptor: PropertyAcceptor<StateOuter, StateInner>,
        reducer: (state: StateInner, action: any) => StateInner,
        state: StateOuter,
    ) {
        this.acceptor = acceptor;
        this.outerState = state;

        const targetPropertyValue = this.acceptor.getProperty(this.outerState);
        this.innerStore = new SimpleStore<StateInner>(targetPropertyValue, reducer);
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
}
