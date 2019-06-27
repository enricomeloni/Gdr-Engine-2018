import { Character } from '../models/Character'
import { call, put, all, takeEvery } from "redux-saga/effects"
import { updateChatRequest, updateActions, addActionRequest } from "../actions/RoomActions";
import { getCharacterRequest, storeCharacter} from "../actions/CharacterActions"
import axios from "axios";
import { TextAction } from '../models/TextAction';
import { Action } from '../models/Action';
//import { Character } from "../models/Character";
import { Set } from "immutable"

import { client, IResponse } from "../api/Api";


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
        //const payload = yield call(axios.get, '/api/rooms/'+room+'/actions');


        const payload: IResponse = yield call([client, client.getActions], room);

        const actions = payload.data as Action[];
        console.log(actions);
        let characterIds = Set<number>([]);
        let characters = Set<Character>([]);

        console.log(actions.values());

        for (let action of actions.values()) {

            let characterId = action.characterId;

            if (!characterIds.contains(characterId)) {
                try {
                    const payload = yield call(axios.get, '/api/characters/' + characterId);
                    //console.log(payload);
                    characterIds = characterIds.add(characterId);

                    const character = new Character(payload.data);
                    characters.add(character);
                } catch (e) {
                    console.log("api error");
                }
            }
        }

        let x = updateActions(actions, characters.toArray());

        yield put(x);
    }
    catch (e) {
        console.log("api error", e);
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