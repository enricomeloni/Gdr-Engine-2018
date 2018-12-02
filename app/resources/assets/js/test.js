import ReactDOM from "react-dom";
import React from "react";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {counterReducer} from "./reducers/counterReducer";
import {increment} from "./actions/counterActions";
import {createLogger} from "redux-logger";
import {fetchCharacter, fetchCharacteristics} from "./actions/characterActions";
import promiseMiddleware from 'redux-promise'
import {Provider} from "react-redux";
import {charactersReducer} from "./reducers/characterReducer";
import ActiveWindow from "./components/ActiveWindow";
import {showActiveWindow} from "./actions/activeWindows";
import {activeWindowsReducer} from "./reducers/activeWindowsReducer";
import WindowsManager from "./containers/WindowsManager";

require('./app');

const axios = require('axios');

const logger = createLogger();

const composedReducer = combineReducers(
    {
        counter: counterReducer,
        characters: charactersReducer,
        activeWindows: activeWindowsReducer
    }
);

const store = createStore(
    composedReducer,
    applyMiddleware(
        promiseMiddleware, 
        logger)
);


//store.dispatch(increment(5));

//store.dispatch(fetchCharacter(1));
//store.dispatch(fetchCharacteristics(1));


if (document.getElementById('app')) {
    ReactDOM.render(
        <Provider store={store}>
            <WindowsManager/>
        </Provider>,
    document.getElementById('app'));
}

store.dispatch(fetchCharacter(1));
store.dispatch(fetchCharacteristics(1));

console.log(increment.toString());
