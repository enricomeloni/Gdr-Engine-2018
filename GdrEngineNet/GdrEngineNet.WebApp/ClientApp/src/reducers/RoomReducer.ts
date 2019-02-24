import { List } from "immutable";
import Room from "../models/Room";
import Action from "../models/Action"
import { setActiveRoom, updateActions, addAction } from "../actions/RoomActions";
import { handleActions } from "redux-actions";

export interface IState {
    activeRoom: Room;
    actions: List<Action>;
}

const initialState : IState = {
    activeRoom: new Room(),
    actions: List<Action>([])
}

let handleSetActiveRoom = (state: IState, payload) => {
    return { ...state, activeRoom: payload.room };
}

let handleUpdateActions = (state: IState, payload) => {
    return { ...state, actions: payload.actions };
}

let handleAddAction = (state: IState, payload) => {
    let actions = state.actions.push(payload.action);
    return { ...state, actions: actions };
}

export const roomReducer = handleActions<IState>({
    [updateActions.toString()]: handleUpdateActions,
    [setActiveRoom.toString()]: handleSetActiveRoom,
    [addAction.toString()]: handleAddAction
}, initialState);