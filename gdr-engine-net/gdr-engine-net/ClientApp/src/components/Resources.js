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
var reactstrap_1 = require("reactstrap");
var Resources = /** @class */ (function (_super) {
    __extends(Resources, _super);
    function Resources(props) {
        return _super.call(this, props) || this;
    }
    Resources.prototype.render = function () {
        var characteristics = this.props.characteristics;
        return (React.createElement(reactstrap_1.Container, null,
            React.createElement(reactstrap_1.Row, { className: "mb-1" },
                React.createElement(reactstrap_1.Col, null,
                    React.createElement(reactstrap_1.Progress, { value: characteristics.health, color: "success" }, "Health"))),
            React.createElement(reactstrap_1.Row, { className: "mt-1" },
                React.createElement(reactstrap_1.Col, null,
                    React.createElement(reactstrap_1.Progress, { value: characteristics.mana }, "Mana")))));
    };
    return Resources;
}(React.Component));
exports.default = Resources;
//# sourceMappingURL=Resources.js.map