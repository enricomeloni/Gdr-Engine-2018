(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "redux-actions"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const redux_actions_1 = require("redux-actions");
    exports.setActiveRoom = redux_actions_1.createAction("SET_ACTIVE_ROOM", (room) => ({ room }));
    exports.updateActions = redux_actions_1.createAction("UPDATE_ACTIONS", (actions, characters) => ({ actions, characters }));
    exports.updateChatRequest = redux_actions_1.createAction("UPDATE_CHAT_REQUEST", (room) => ({ room }));
    exports.addActionRequest = redux_actions_1.createAction("ADD_ACTION_REQUEST", (action) => ({ action }));
});
//# sourceMappingURL=RoomActions.js.map