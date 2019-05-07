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
var React = require("react");
var CharacterStats_1 = require("./CharacterStats");
var reactstrap_1 = require("reactstrap");
var Resources_1 = require("./Resources");
var CharacterSheet = /** @class */ (function (_super) {
    __extends(CharacterSheet, _super);
    function CharacterSheet(props) {
        return _super.call(this, props) || this;
    }
    CharacterSheet.prototype.render = function () {
        var character = this.props.character;
        return (React.createElement(reactstrap_1.Container, null,
            React.createElement(reactstrap_1.Row, null,
                React.createElement(reactstrap_1.Col, { md: 5 },
                    React.createElement("img", { src: "img/unknown.png", className: "img-fluid", alt: "test" })),
                React.createElement(reactstrap_1.Col, { md: 'auto' },
                    React.createElement(CharacterStats_1.default, { characteristics: character.characteristics }))),
            React.createElement(reactstrap_1.Row, null,
                React.createElement(reactstrap_1.Col, { md: 5 },
                    React.createElement(Resources_1.default, { characteristics: character.characteristics }))),
            React.createElement(reactstrap_1.Row, null,
                React.createElement(reactstrap_1.Col, null,
                    "Created at ",
                    character.createdAt.toLocaleString()))));
    };
    return CharacterSheet;
}(React.Component));
exports.default = CharacterSheet;
//# sourceMappingURL=CharacterSheet.js.map