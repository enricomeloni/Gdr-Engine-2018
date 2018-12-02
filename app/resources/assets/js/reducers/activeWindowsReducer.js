import {closeActiveWindow, showActiveWindow} from "../actions/activeWindows";
import ActiveWindow from "../components/ActiveWindow";
import React from "react";
import {handleActions} from "redux-actions";

import {Map} from 'immutable'

const defaultState = {
    nextId: 0,
    windowsMap: Map({})
};

function handleShowActiveWindow(state, {payload: {windowBody, windowTitle}}) {
    let newId = state.nextId;

    let windowElement = {
        title: windowTitle,
        body: windowBody
    };

    let windowsMap = state.windowsMap.set(newId, windowElement);
    return {...state, nextId: newId + 1, windowsMap: windowsMap};
}

function handleCloseActiveWindow(state, {payload: {windowId}})
{
    console.log('Closing ' + windowId);
    let windowsMap = state.windowsMap.remove(windowId);
    return {...state, windowsMap}
}


export const activeWindowsReducer = handleActions({
    [showActiveWindow]: handleShowActiveWindow,
    [closeActiveWindow]: handleCloseActiveWindow
}, defaultState);

