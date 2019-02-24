"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_actions_1 = require("redux-actions");
exports.showActiveWindow = redux_actions_1.createAction("SHOW_ACTIVE_WINDOW", function (windowBody, windowTitle) { return ({ windowBody: windowBody, windowTitle: windowTitle }); });
exports.closeActiveWindow = redux_actions_1.createAction("CLOSE_ACTIVE_WINDOW", function (windowId) { return ({ windowId: windowId }); });
//# sourceMappingURL=activeWindows.js.map