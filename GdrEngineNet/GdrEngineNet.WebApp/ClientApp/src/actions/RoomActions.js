"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_actions_1 = require("redux-actions");
exports.setActiveRoom = redux_actions_1.createAction("SET_ACTIVE_ROOM", function (room) { return ({ room: room }); });
exports.updateActions = redux_actions_1.createAction("UPDATE_ACTIONS", function (actions) { return ({ actions: actions }); });
exports.addAction = redux_actions_1.createAction("ADD_ACTION", function (action) { return ({ action: action }); });
//# sourceMappingURL=RoomActions.js.map