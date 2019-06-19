import { all } from 'redux-saga/effects'
import chatSaga from './chatSagas';
import characterSaga from "./characterSaga"

export default function* rootSaga() {
    yield all([
        helloSaga(),
        chatSaga(),
        characterSaga()
    ]);
}

function* helloSaga() {
    console.log('Hello world!');
}