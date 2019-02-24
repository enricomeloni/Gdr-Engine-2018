"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a;
var immutable_1 = require("immutable");
var Room_1 = require("../models/Room");
var RoomActions_1 = require("../actions/RoomActions");
var redux_actions_1 = require("redux-actions");
var initialState = {
    activeRoom: new Room_1.default(),
    actions: immutable_1.List([])
};
var handleSetActiveRoom = function (state, payload) {
    return __assign({}, state, { activeRoom: payload.room });
};
var handleUpdateActions = function (state, payload) {
    return __assign({}, state, { actions: payload.actions });
};
var handleAddAction = function (state, payload) {
    var actions = state.actions.push(payload.action);
    return __assign({}, state, { actions: actions });
};
exports.roomReducer = redux_actions_1.handleActions((_a = {},
    _a[RoomActions_1.updateActions.toString()] = handleUpdateActions,
    _a[RoomActions_1.setActiveRoom.toString()] = handleSetActiveRoom,
    _a[RoomActions_1.addAction.toString()] = handleAddAction,
    _a), initialState);
//# sourceMappingURL=RoomReducer.js.map