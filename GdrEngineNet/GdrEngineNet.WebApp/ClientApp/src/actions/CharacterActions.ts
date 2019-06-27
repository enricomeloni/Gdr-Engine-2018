import { createAction } from "redux-actions";
import { Character } from "../models/Character"

export const getCharacterRequest = createAction("GET_CHARACTER_REQUEST", (id: number) => ({ id }));
export const storeCharacter = createAction("STORE_CHARACTER", (character: Character) => ({ character }) );