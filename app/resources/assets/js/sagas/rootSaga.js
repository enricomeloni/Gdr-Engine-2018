import {all} from "redux-saga/effects";
import showCharacterSheetSaga from "./characterSheet";

export default function* rootSaga() {
    yield all([
        showCharacterSheetSaga()
    ])
}
