import {handleActions} from "redux-actions";
import {loginError, loginSuccess} from "../actions/session";
import {Map} from 'immutable'

const defaultState = Map({
    loggedIn: false,
    error: ""
});

function handleLoginSuccess(state, payload)
{
    let x = Map();
    return state.set('loggedIn', true);

}

function handleLoginError(state, payload)
{
    return state.set('error', payload);
}

export const sessionReducer = handleActions({
    [loginSuccess]: handleLoginSuccess,
    [loginError]: handleLoginError
}, defaultState);


