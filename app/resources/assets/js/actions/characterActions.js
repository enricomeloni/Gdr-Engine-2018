import {createAction} from "redux-actions";

export const storeCharacter = createAction('STORE_CHARACTER', (character) => ({character}));
export const storeCharacteristics = createAction('STORE_CHARACTERISTICS', (characteristics) => ({characteristics}));
export const showCharacterSheet = createAction('SHOW_CHARACTER_SHEET', (id) => ({id}));
