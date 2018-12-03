import {all} from "redux-saga/effects";
import showCharacterSheetSaga from "./characterSheet";
import loginFlow from "./loginFlow";

export default function* rootSaga() {
    try {
        yield all([
            showCharacterSheetSaga(),
            loginFlow()
        ])
    }
    catch(error)
    {
        console.log('error:');
        console.log(error);
    }
}
