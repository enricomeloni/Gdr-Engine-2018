import {handleActions} from "redux-actions";
import {showCharacterSheet, storeCharacter, storeCharacteristics} from "../actions/characterActions";
import {Map} from 'immutable'

const defaultState = {
    charactersMap: Map({}),
    characteristicsMap: Map({})
};

function handleStoreCharacter(state, {payload: {character}})
{
    let characterId = character.id;
    let charactersMap = state.charactersMap.set(characterId, character);
    return {...state, charactersMap: charactersMap};
}

function handleStoreCharacteristics(state, {payload: {characteristics}})
{
    let characterId = characteristics.character_id;
    let characteristicsMap = state.characteristicsMap.set(characterId, characteristics);
    return {...state, characteristicsMap: characteristicsMap};
}

export const charactersReducer = handleActions({
    [storeCharacter]: handleStoreCharacter,
    [storeCharacteristics]: handleStoreCharacteristics
}, defaultState);
