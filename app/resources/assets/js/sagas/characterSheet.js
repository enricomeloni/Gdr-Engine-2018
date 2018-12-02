import {put, takeEvery} from "redux-saga/effects";
import {fetchCharacter, fetchCharacteristics, showCharacterSheet} from "../actions/characterActions";

export default function* showCharacterSheetSaga() {
    yield takeEvery(showCharacterSheet, function*({payload: {id}}) {
        console.log("id is " + id);
        let action = fetchCharacter(id);
        let x = yield put(fetchCharacter(id));
        console.log("fetched character " + id);
        yield put(fetchCharacteristics(id));
        console.log("fetched characteristcs " + id);
    })
}
