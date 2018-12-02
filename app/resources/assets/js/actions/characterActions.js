import {createAction} from "redux-actions";

function fetchCharacterPromise(characterId)
{
    return axios.get('/api/character/'+characterId);
}

function fetchCharacteristicsPromise(characterId)
{
    return axios.get('/api/character/'+characterId+'/characteristics');
}

export const fetchCharacter = createAction('FETCH_CHARACTER', (id) => fetchCharacterPromise(id));
export const fetchCharacteristics = createAction('FETCH_CHARACTERISTICS', (id) => fetchCharacteristicsPromise(id))
export const showCharacterSheet = createAction('SHOW_CHARACTER_SHEET', (id) => ({id}));
