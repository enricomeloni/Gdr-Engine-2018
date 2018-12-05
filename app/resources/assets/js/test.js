import ReactDOM from "react-dom";
import React from "react";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {counterReducer} from "./reducers/counterReducer";
import {increment} from "./actions/counterActions";
import {createLogger} from "redux-logger";
import {fetchCharacter, fetchCharacteristics, showCharacterSheet} from "./actions/characterActions";
import promiseMiddleware from 'redux-promise'
import {Provider} from "react-redux";
import {charactersReducer} from "./reducers/characterReducer";
import ActiveWindow from "./components/ActiveWindow";
import {showActiveWindow} from "./actions/activeWindows";
import {activeWindowsReducer} from "./reducers/activeWindowsReducer";
import WindowsManager from "./containers/WindowsManager";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./sagas/rootSaga";
import {CharacterSheet} from "./components/CharacterSheet";
import {composedReducer} from "./reducers/composedReducer";
import {loginRequest, loginSuccess, logoutRequest} from "./actions/session";
require('./app');
const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    composedReducer,
    applyMiddleware(
        promiseMiddleware,
        sagaMiddleware,
        logger)
);

sagaMiddleware.run(rootSaga);

if (document.getElementById('app')) {
    ReactDOM.render(
        <Provider store={store}>
            <WindowsManager/>
        </Provider>,
    document.getElementById('app'));
}

setTimeout(() => {
    store.dispatch(showCharacterSheet(1));
}, 2000);