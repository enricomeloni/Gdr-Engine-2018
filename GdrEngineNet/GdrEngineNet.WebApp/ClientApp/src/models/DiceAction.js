(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Action"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Action_1 = require("./Action");
    class DiceAction extends Action_1.Action {
        constructor(props) {
            super(props.id, props.characterId, props.roomId);
            this.actionType = Action_1.ActionType.DiceAction;
            this.rolledDice = props.rolledDice;
            this.result = props.result;
            this.characteristic = props.characteristic;
            this.characteristicValue = props.characteristicValue;
        }
    }
    exports.DiceAction = DiceAction;
});
//# sourceMappingURL=DiceAction.js.map