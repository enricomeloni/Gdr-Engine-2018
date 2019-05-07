import { List } from "immutable";
import Room from "../models/Room";
import { Action } from "../models/Action"
import { setActiveRoom, updateActions } from "../actions/RoomActions";
import { handleActions, Action as ReduxAction } from "redux-actions";

export interface IState {
    activeRoom: Room;
    actions: List<Action>;
}

const initialState: IState = {
    activeRoom: new Room(),
    actions: List<Action>([])
}

let handleSetActiveRoom = (state: IState, action: ReduxAction<Room>) => {
    return { ...state, activeRoom: action.payload };
}

let handleUpdateActions = (state: IState, action: any) => {
    return { ...state, actions: action.payload.actions };
}

export const roomReducer = handleActions({
    [updateActions.toString()]: handleUpdateActions,
    [setActiveRoom.toString()]: handleSetActiveRoom
}, initialState);