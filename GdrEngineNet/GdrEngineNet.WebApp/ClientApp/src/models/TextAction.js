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
    class TextAction extends Action_1.Action {
        constructor(props) {
            super(props.id, props.characterId, props.roomId);
            this.actionType = Action_1.ActionType.TextAction;
            this.text = props.text;
            this.tag = props.tag;
        }
    }
    exports.TextAction = TextAction;
});
//# sourceMappingURL=TextAction.js.map