"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Action = /** @class */ (function () {
    function Action(id, characterId, roomId) {
        this.id = id;
        this.characterId = characterId;
        this.roomId = roomId;
    }
    return Action;
}());
exports.Action = Action;
var ActionType;
(function (ActionType) {
    ActionType["DiceAction"] = "DiceAction";
    ActionType["TextAction"] = "TextAction";
})(ActionType = exports.ActionType || (exports.ActionType = {}));
//# sourceMappingURL=Action.js.map