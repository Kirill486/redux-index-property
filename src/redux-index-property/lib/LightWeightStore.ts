export type Reducer<S> = (state: S, action: any) => S;

export class LightWeightStore<S> {

    private state: S;
    private reducer: Reducer<S>;
    private thunkActionFinished = false;

    constructor(state: S, reducer: Reducer<S>) {
        this.state = state;
        this.reducer = reducer;
        this.setState = this.setState.bind(this);
        this.getState = this.getState.bind(this);
        this.dispatch = this.dispatch.bind(this);
    }

    public setState(state: S) {
        this.state = state;
    }

    public getState(): S {
        return this.state;
    }

    public dispatch(action: any) {
        if (this.thunkActionFinished) {
            throw new Error("You shouldn't dispatch async actions to simple store");
        }
        if (typeof action === "object") {
            const newState = this.reducer(this.state, action);
            this.setState(newState);
        } else if (typeof action ===  "function") {
            action(this.dispatch, this.getState); // becouse we have thunk
            this.thunkActionFinished = true;
        }
    }
}
