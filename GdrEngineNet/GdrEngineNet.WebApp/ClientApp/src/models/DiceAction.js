"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Action_1 = require("./Action");
var DiceAction = /** @class */ (function (_super) {
    __extends(DiceAction, _super);
    function DiceAction(props) {
        var _this = _super.call(this, props.id, props.characterId, props.roomId) || this;
        _this.actionType = Action_1.ActionType.DiceAction;
        _this.rolledDice = props.rolledDice;
        _this.result = props.result;
        _this.characteristic = props.characteristic;
        _this.characteristicValue = props.characteristicValue;
        return _this;
    }
    return DiceAction;
}(Action_1.Action));
exports.DiceAction = DiceAction;
//# sourceMappingURL=DiceAction.ts.js.map