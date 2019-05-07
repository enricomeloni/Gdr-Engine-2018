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
var TextAction = /** @class */ (function (_super) {
    __extends(TextAction, _super);
    function TextAction(props) {
        var _this = _super.call(this, props.id, props.characterId, props.roomId) || this;
        _this.actionType = Action_1.ActionType.TextAction;
        _this.text = props.text;
        _this.tag = props.tag;
        return _this;
    }
    return TextAction;
}(Action_1.Action));
exports.TextAction = TextAction;
//# sourceMappingURL=TextAction.js.map