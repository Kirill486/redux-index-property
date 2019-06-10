import { PropertyAcceptor } from "./PropertyAcceptor";
import { SimpleStore } from "./SimpleStore";

export class KeyIndexedProperty<StateOuter, StateInner> {

    private acceptor: PropertyAcceptor<StateOuter, StateInner>;
    // private reducer;
    private state: StateOuter;

    private store: SimpleStore<StateInner>;

    constructor(
        acceptor: PropertyAcceptor<StateOuter, StateInner>,
        reducer: (state: StateInner, action: any) => StateInner,
        state: StateOuter,
    ) {
        this.acceptor = acceptor;
        this.state = state;

        const targetPropertyValue = this.acceptor.getProperty(this.state, );
        this.store = new SimpleStore<StateInner>(targetPropertyValue, reducer);
    }

    public dispatch(action) {
        this.store.dispatch(action);
    }

    public getState() {
        const newPropertyValue = this.store.getState();
        const newStateToMerge = Object.assign({}, this.state);
        this.acceptor.setProperty()

    }


}