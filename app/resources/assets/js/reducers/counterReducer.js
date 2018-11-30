import {combineActions, handleActions} from "redux-actions";
import {increment,decrement} from "../actions/counterActions";


const defaultState = {
    counter: 0
};

function handleIncrementOrDecrement(state, {payload: {amount}})
{
    return {...state, counter: state.counter + payload.amount }
}

export const counterReducer = handleActions({
    [combineActions(increment,decrement)]: handleIncrementOrDecrement
}, defaultState);
