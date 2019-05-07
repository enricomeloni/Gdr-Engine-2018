import { call, put, all, takeEvery } from 'redux-saga/effects'
import { updateChatRequest, updateActions, addActionRequest } from '../actions/RoomActions';
import axios from 'axios';
import { TextAction } from '../models/TextAction';
import { Action } from '../models/Action';

export default function* chatSaga() {
    yield all([
        updateChatSaga(),
        addActionSaga()
    ]);
}

export function* updateChatSaga() {
    yield takeEvery(updateChatRequest, updateChatWorker);
}

function* updateChatWorker() {

    try {
        const payload = yield call(axios.get, '/api/rooms/1/actions');
        console.log(payload);

        const actions = payload.data as Action[];
        const action = actions[0] as TextAction;

        yield put(updateActions(actions));
    }
    catch (e) {
        console.log("api error");
    }
}

export function* addActionSaga() {
    yield takeEvery(addActionRequest, addActionWorker);
}

function* addActionWorker(action) {
    console.log(action);
    const chatAction = action.payload.action;
    console.log(chatAction);
    try {
        const payload = yield call(axios.post, '/api/actions', chatAction);
        console.log(payload)
        yield put(updateChatRequest());
    }
    catch (e) {
        console.log("Api error");
    }
}