import { all } from 'redux-saga/effects'
import chatSaga from './chatSagas';

export default function* rootSaga() {
    yield all([
        helloSaga(),
        chatSaga()
    ])
}

function* helloSaga() {
    console.log('Hello world!');
}