import {closeActiveWindow, showActiveWindow} from "../actions/activeWindows";
import ActiveWindow from "../containers/ActiveWindow";
import React from "react";
import {handleActions} from "redux-actions";

const defaultState = {
    nextId: 0,
    windowsMap: {}
};

function handleShowActiveWindow(state, {payload: {windowBody, windowTitle}}) {
    let newId = state.nextId;

    let windowElement = {
        title: windowTitle,
        body: windowBody
    };

    let windowsMap = {...state.windowsMap, [newId]: windowElement};

    return {...state, nextId: newId + 1, windowsMap: windowsMap};
}

function handleCloseActiveWindow(state, {payload: {windowId}})
{
    console.log('Closing ' + windowId);

    let windowsMap = {...state.windowsMap};
    delete windowsMap[windowId];

    return {...state, windowsMap}
}


export const activeWindowsReducer = handleActions({
    [showActiveWindow]: handleShowActiveWindow,
    [closeActiveWindow]: handleCloseActiveWindow
}, defaultState);

