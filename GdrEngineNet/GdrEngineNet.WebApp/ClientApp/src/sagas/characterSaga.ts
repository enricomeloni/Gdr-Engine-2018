import { call, put, all, takeEvery } from "redux-saga/effects"
import { getCharacterRequest, storeCharacter } from "../actions/CharacterActions"
import axios from "axios";
import { Action as ReduxAction } from "redux-actions";
import { Character } from "../models/Character";

export default function* characterSaga() {
    yield all([
        getCharacterSaga()
    ]);
}

export function* getCharacterSaga() {
    yield takeEvery(getCharacterRequest, getCharacterWorker);
}

export function* getCharacterWorker(getAction: ReduxAction<{ id: number }>) {
    const { payload: { id } } = getAction;

    try {
        const payload = yield call(axios.get, '/api/characters/' + id);
        console.log(payload);

        const character = payload.data as Character;
        yield put(storeCharacter(character));
    } catch (e) {
        console.log("api error");
    }

}