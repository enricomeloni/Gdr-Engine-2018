(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ActionType;
    (function (ActionType) {
        ActionType["TextAction"] = "TextAction";
        ActionType["DiceAction"] = "DiceAction";
    })(ActionType = exports.ActionType || (exports.ActionType = {}));
    class Action {
        constructor(id, characterId, roomId) {
            this.id = id;
            this.characterId = characterId;
            this.roomId = roomId;
        }
    }
    exports.Action = Action;
});
//# sourceMappingURL=Action.js.map