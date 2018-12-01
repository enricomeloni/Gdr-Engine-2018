import ReactDOM from "react-dom";
import React from "react";
import CharacterSheet from "./components/CharacterSheet";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {counterReducer} from "./reducers/counterReducer";
import {increment} from "./actions/counterActions";
import {createLogger} from "redux-logger";
import {fetchCharacter, fetchCharacteristics} from "./actions/characterActions";
import promiseMiddleware from 'redux-promise'
import {Provider} from "react-redux";
import {characterReducer} from "./reducers/characterReducer";

require('./app');

const axios = require('axios');

const logger = createLogger();

const composedReducer = combineReducers({counter: counterReducer, character: characterReducer});

const store = createStore(composedReducer, applyMiddleware(promiseMiddleware, logger));


//store.dispatch(increment(5));

store.dispatch(fetchCharacter(1));
store.dispatch(fetchCharacteristics(1));

store.dispatch(increment(5));

console.log(store.getState().counter.counter);

if (document.getElementById('app')) {
    ReactDOM.render(<Provider store={store}><CharacterSheet /></Provider>, document.getElementById('app'));
}
