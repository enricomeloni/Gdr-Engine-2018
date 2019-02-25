import { createAction } from "redux-actions";
import Room from "../models/Room";
import { Action } from "../models/Action"

export const setActiveRoom = createAction("SET_ACTIVE_ROOM", (room: Room) => ({ room }));
export const updateActions = createAction("UPDATE_ACTIONS", (actions: Action[]) => ({ actions }));
export const addAction = createAction("ADD_ACTION", (action: Action) => ({ action }));

