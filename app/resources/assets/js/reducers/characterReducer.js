import {handleActions} from "redux-actions";
import {fetchCharacter, fetchCharacteristics} from "../actions/characterActions";


const defaultState = {
    character: {
        name: "undefined"
    },
    characteristics: {
        strength: 40,
        toughness: 30,
        agility: 25,
        intelligence: 40,
        perception: 30,
        willpower: 20,
        fellowship: 15
    }
};

function handleFetchCharacter(state, {payload: {data}})
{
    console.log("PROVAAAA");
    return {...state, character: data}
}

function handleFetchCharacteristics(state, {payload: {data}})
{
    return {...state, characteristics: data}
}

export const characterReducer = handleActions({
    [fetchCharacter]: handleFetchCharacter,
    [fetchCharacteristics]: handleFetchCharacteristics
}, defaultState);
