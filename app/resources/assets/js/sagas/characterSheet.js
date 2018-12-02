import {call, put, takeEvery} from "redux-saga/effects";
import {storeCharacter, storeCharacteristics, showCharacterSheet} from "../actions/characterActions";
import axios from "axios";
import {CharacterSheet} from "../components/CharacterSheet";
import React from "react";
import {showActiveWindow} from "../actions/activeWindows";

export default function* showCharacterSheetSaga() {
    yield takeEvery(showCharacterSheet, function*({payload: {id}}) {
        let {data: character} = yield call(axios.get, '/api/character/'+id);
        yield put(storeCharacter(character));

        let {data: characteristics} = yield call(axios.get, '/api/character/'+id+'/characteristics');
        yield put(storeCharacteristics(characteristics));

        character.characteristics = characteristics;

        let characterSheet = <CharacterSheet character={character}/>;
        yield put(showActiveWindow(characterSheet, character.name + " - Sheet"));
    })
}
