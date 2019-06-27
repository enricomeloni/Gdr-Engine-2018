import { List, Map } from "immutable";
import Room from "../models/Room";
import { Action } from "../models/Action";
import { Character } from "../models/Character";
import { setActiveRoom, updateActions } from "../actions/RoomActions";
import { handleActions, Action as ReduxAction } from "redux-actions";

export interface IState {
    activeRoom: Room;
    actions: List<Action>;
    characters: Map<number, Character>;
}

const initialState: IState = {
    activeRoom: new Room(),
    actions: List<Action>([]),
    characters: Map<number, Character>([])
}

let handleSetActiveRoom = (state: IState, action: ReduxAction<any>) => {
    let roomAction = action as ReduxAction<{ room: Room }>;
    return { ...state, activeRoom: roomAction.payload.room };
};

let handleUpdateActions = (state: IState, action: ReduxAction<any>) => {

    let updateAction = action as ReduxAction<{
        actions: Action[],
        characters: Character[]
    }>;

    const actions = List<Action>(updateAction.payload.actions);
    let charactersMap = Map<number, Character>();

    charactersMap = charactersMap.withMutations(map => {
        updateAction.payload.characters.forEach(character => {
            map.set(character.id, character);
        });
    });

    return { ...state, actions: actions, characters: charactersMap };
};


export const roomReducer = handleActions({
    [updateActions.toString()]: handleUpdateActions,
    [setActiveRoom.toString()]: handleSetActiveRoom
}, initialState);