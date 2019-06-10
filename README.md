# redux-index-property
The easy way to create and maintain maps(key indexed properties) in redux state

## Install and Run

npm install

npm start

In this application you have the redux store that suddenly got more complicated, so you come up with the decent API.
API usage examples are in index.ts. I did my best to make the code readable.

## Initial intent.
So, why do we need key indexed properties in our state?

1. It's fast (you have constant access time).
2. Sometimes you need some of you properties to relocate and have multiple entries in your state. Like if you had settings for everybody and now for each user. You do not want to rewrite all your model logic, you want to reuse your existing reducer.

## Architecture decisions

Model-level logic (you do not export part of your model (reducer) outside of the model).

By saying model I mean the place you store data in your application and API around:

Store - the object, return result of the createStore function, it provides the State of our application to the rest of our application and takes care of state of our application can not be changes any way except through the Actions API.  And most importantly it makes synchronous changes and it makes your state much more predictable and reliable.
Reducers  - pure functions that calculate the new State out of the previous State and the dispatched Action)
ActionCreators - it is the Model Change API we’d love the rest of our application know nothing about how things are happened inside)

There are also:
Actions – the objects that has type: string property 
The State – it is the state of our application. Our application is just the function that returns jsx with TheState argument passed.  
We never work with them directly though. We most likely have connect and we definitely use ActionCreators. First to consume the Model API and the second to provide the Model Change API.

So we could’ve thought of grabbing the reducer (since it is a pure function and it returns the new State) into a thunk action or a saga, calculate the new state there and then write into the state. 

But, you can not just grab the hidden API out of your mode, then import it somewhere and then say you have separation of concerns. So we keep our State changing logic inside the model and provide API as nice as we can. 
