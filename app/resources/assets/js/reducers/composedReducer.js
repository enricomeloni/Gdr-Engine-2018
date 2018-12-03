import {combineReducers} from "redux";
import {counterReducer} from "./counterReducer";
import {charactersReducer} from "./characterReducer";
import {activeWindowsReducer} from "./activeWindowsReducer";
import {sessionReducer} from "./sessionReducer";

export const composedReducer = combineReducers(
    {
        counter: counterReducer,
        characters: charactersReducer,
        activeWindows: activeWindowsReducer,
        session: sessionReducer
    }
);
