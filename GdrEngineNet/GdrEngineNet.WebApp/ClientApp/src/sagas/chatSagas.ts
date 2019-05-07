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

function* updateChatWorker(updateAction) {
    const { payload: { room } } = updateAction;
    try {
        const payload = yield call(axios.get, '/api/rooms/'+room+'/actions');
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
    const chatAction = action.payload.action as Action;
    try {
        const payload = yield call(axios.post, '/api/actions', chatAction);
        console.log(payload)
        yield put(updateChatRequest(chatAction.roomId));
    }
    catch (e) {
        console.log("Api error");
    }
}