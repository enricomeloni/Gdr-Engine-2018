import {handleActions} from "redux-actions";
import {fetchCharacter, fetchCharacteristics} from "../actions/characterActions";
import {Map} from 'immutable'

const defaultState = {
    charactersMap: Map({}),
    characteristicsMap: Map({})
};

function handleFetchCharacter(state, {payload: {data}})
{
    let characterId = data.id;
    let charactersMap = state.charactersMap.set(characterId, data);
    return {...state, charactersMap: charactersMap};
}

function handleFetchCharacteristics(state, {payload: {data}})
{
    let characterId = data.character_id;
    let characteristicsMap = state.characteristicsMap.set(characterId, data);
    return {...state, characteristicsMap: characteristicsMap};
}

export const characterReducer = handleActions({
    [fetchCharacter]: handleFetchCharacter,
    [fetchCharacteristics]: handleFetchCharacteristics
}, defaultState);
