# redux-index-property
The easy way to create and maintain maps(key indexed properties) in redux state

## Install and Run
```
npm install

npm start
```
In this application you have [the redux store that](https://github.com/Kirill486/redux-index-property/commit/d5b5dbbac8b459400cbd78b6fb90210906cdfda0) suddenly got [more complicated](https://github.com/Kirill486/redux-index-property/commit/f97b67bce241c2d697f45e512f3150c90e2369fd?diff=split), so you come up with the decent [API](https://github.com/Kirill486/redux-index-property/commit/b8da3c275def618c6f05f0435bd188b348f49b2a).
API usage examples are in index.ts. I did my best to make [the code](https://github.com/Kirill486/redux-index-property/blob/master/src/server/index.ts) readable.

Then it's a good time to meet some code:

Reducer:
```
switch (action.type) {
case userActionTypes.USER_DASHBOARD_ACTION: {
            const userDashboardsIdAction = action as IPayloadIdAction<IPayloadAction<number | string>>;

            const getTargetDashboard =
            (
                statePart: IUser,
            ) => statePart.dashboards[userDashboardsIdAction.id];

            const setTargetDashboard =
            (
                statePart: IUser,
                newValue,
            ) => {
                statePart.dashboards[userDashboardsIdAction.id] = newValue;
            };

            const acceptor = new PropertyAcceptor(getTargetDashboard, setTargetDashboard);

            const idIndexedProperty = new KeyIndexedProperty(acceptor, dashboardReducer, state);
            idIndexedProperty.dispatch(userDashboardsIdAction.payload);
            const newState = idIndexedProperty.getState();

            return {
                ...newState,
            };

        }
    }
```

Here we have our idIndexedProperty calculating the next state out of current state and dispatched action.
The two things to mention here are:
1. Our reducer (```dashboardReducer``` in our case) is written like it manages the single state instance
2. We separate our access logic (search for the target property) from our calculating logic with ```PropertyAcceptor``` .

## Initial intent.
So, why do we need key indexed properties in our state?

1. It's fast (you have constant access time).
2. Sometimes you need some of you properties to relocate and have multiple entries in your state. Like if you had settings for everybody and now for each user. You do not want to rewrite all your model logic, you want to reuse your existing reducer.

## Architecture decisions

**Model-level logic (you do not export part of your model (reducer) outside of the model).**

By saying model I mean the place you store data in your application and API around:

Store - the object, return result of the createStore function, it provides the State of our application to the rest of our application and takes care of state of our application can not be changes any way except through the Actions API.  And most importantly it makes synchronous changes and it makes your state much more predictable and reliable.
Reducers  - pure functions that calculate the new State out of the previous State and the dispatched Action)
ActionCreators - it is the Model Change API we’d love the rest of our application know nothing about how things are happened inside)

There are also:
Actions – the objects that has type: string property 
The State – it is the state of our application. Our application is just the function that returns jsx with TheState argument passed.  
We never work with them directly though. We most likely have connect and we definitely use ActionCreators. First to consume the Model API and the second to provide the Model Change API.

So we could’ve thought of grabbing the reducer (since it is a pure function and it returns the new State) into a thunk action or a saga, calculate the new state there and then write into the state. 

But, you can not just grab the hidden API out of your mode, then import it somewhere and then say you have separation of concerns. So we keep our State changing logic inside the model **and provide API as nice as we can**. 
