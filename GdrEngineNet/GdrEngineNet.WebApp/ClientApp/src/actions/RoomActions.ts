import { createAction } from "redux-actions";
import Room from "../models/Room";
import { Action } from "../models/Action"

export const setActiveRoom = createAction("SET_ACTIVE_ROOM", (room: Room) => ({ room }));
export const updateActions = createAction("UPDATE_ACTIONS", (actions: Action[]) => ({ actions }));
export const updateChatRequest = createAction("UPDATE_CHAT_REQUEST", () => ({}));
export const addActionRequest = createAction("ADD_ACTION_REQUEST", (action: Action) => ({ action }));
export const addAction = createAction("ADD_ACTION", () => { });

