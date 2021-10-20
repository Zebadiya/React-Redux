import React from "react";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import reducers from "reducers"; //combinedReducer
import reduxPromise from "redux-promise";


export default ({children, initialState = {}}) => {
    const store = createStore(reducers, initialState, applyMiddleware(reduxPromise));

    return (
        <Provider store={store}>

            {children}
        </Provider>
    )
}


// console.log(clockInstance);