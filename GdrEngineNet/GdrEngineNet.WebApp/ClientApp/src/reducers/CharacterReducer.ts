import { List, Map } from "immutable";
import { Character } from "../models/Character";
import { storeCharacter, getCharacterRequest as getCharacter } from "../actions/CharacterActions"
import { handleActions, Action as ReduxAction } from "redux-actions";

export interface IState {
    characters: Map<number, Character>
}

const initialState: IState = {
    characters: Map<number,Character>([])
}


let handleStoreCharacter = (state: IState, action: ReduxAction<{character: Character}>) => {
    return {
        ...state,
        characters: state.characters.set(
            action.payload.character.id,
            action.payload.character
        )
    }
}

export const characterReducer = handleActions({
    [storeCharacter.toString()]: handleStoreCharacter
}, initialState);