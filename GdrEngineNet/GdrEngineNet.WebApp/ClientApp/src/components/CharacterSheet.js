(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "react", "./CharacterStats", "reactstrap", "./Resources"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const React = require("react");
    const CharacterStats_1 = require("./CharacterStats");
    const reactstrap_1 = require("reactstrap");
    const Resources_1 = require("./Resources");
    class CharacterSheet extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            const character = this.props.character;
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
        }
    }
    exports.default = CharacterSheet;
});
//# sourceMappingURL=CharacterSheet.js.map