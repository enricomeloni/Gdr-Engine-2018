import {createAction} from "redux-actions";

function fetchCharacterPromise(characterId)
{
    return axios.get('/api/character/'+characterId);
}

export const fetchCharacter = createAction('FETCH_CHARACTER', (id) => fetchCharacterPromise(id));
