import { IPropertyGetter, IPropertySetter } from "./redux-index-property/lib/PropertyAcceptor";

export declare class PropertyAcceptor<StateOuter, StateInner> {
    public getProperty: IPropertyGetter<StateOuter, StateInner>;
    public setProperty: IPropertySetter<StateOuter, StateInner>;

    constructor(
        getProperty: IPropertyGetter<StateOuter, StateInner>,
        setProperty: IPropertySetter<StateOuter, StateInner>,
    )
}

export declare class KeyIndexedProperty<StateOuter, StateInner> {
    constructor(
        acceptor: PropertyAcceptor<StateOuter, StateInner>,
        reducer: (state: StateInner, action: any) => StateInner,
        state: StateOuter,
    )

    public dispatch(action): void;

    public getState(): StateOuter;

    public getInnerState(): StateInner;
}

export { IPropertyGetter, IPropertySetter }
