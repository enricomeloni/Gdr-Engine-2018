"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var CharacterStats = /** @class */ (function (_super) {
    __extends(CharacterStats, _super);
    function CharacterStats(props) {
        var _this = _super.call(this, props) || this;
        _this.className = "font-weight-bold";
        _this.characteristicsKeys = [
            "strength",
            "toughness",
            "agility",
            "intelligence",
            "willpower",
            "influence"
        ];
        return _this;
    }
    CharacterStats.prototype.render = function () {
        var _this = this;
        var characteristics = this.props.characteristics;
        return (React.createElement("div", null, this.characteristicsKeys.map(function (key) {
            return React.createElement("div", { key: key },
                React.createElement("span", { className: _this.className },
                    key,
                    ":"),
                " ",
                characteristics[key],
                " ");
        })));
    };
    return CharacterStats;
}(React.Component));
exports.default = CharacterStats;
//# sourceMappingURL=CharacterStats.js.map