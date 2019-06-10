export type IPropertyGetter<StateOuter, StateInner> =
(
    state: StateOuter,
    id: number,
) => StateInner;

export type IPropertySetter<StateOuter, StateInner> =
(
    state: StateOuter,
    id: number,
    newValue: StateInner,
) => StateInner;

export class PropertyAcceptor<StateOuter, StateInner> {

    public getProperty: IPropertyGetter<StateOuter, StateInner>;
    public setProperty: IPropertySetter<StateOuter, StateInner>;

    constructor(
        getProperty: IPropertyGetter<StateOuter, StateInner>,
        setProperty: IPropertySetter<StateOuter, StateInner>,
    ) {
        this.getProperty = getProperty;
        this.setProperty = setProperty;
    }
}