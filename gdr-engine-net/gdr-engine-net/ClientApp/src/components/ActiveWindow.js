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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_draggable_1 = require("react-draggable");
var reactstrap_1 = require("reactstrap");
var ActiveWindow = /** @class */ (function (_super) {
    __extends(ActiveWindow, _super);
    function ActiveWindow(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            windowId: _this.props.id,
            collapsed: false
        };
        _this.onCloseButtonClick = _this.props.onCloseButtonClick.bind(_this);
        _this.onMinifyButtonClick = function (event) {
            _this.setState(function (state) { return (__assign({}, state, { collapsed: !state.collapsed })); });
        };
        return _this;
    }
    ActiveWindow.prototype.render = function () {
        return (React.createElement(reactstrap_1.Container, null,
            React.createElement(reactstrap_1.Row, null,
                React.createElement(reactstrap_1.Col, { md: 8 },
                    React.createElement(react_draggable_1.default, { handle: ".handle" },
                        React.createElement(reactstrap_1.Card, null,
                            React.createElement(reactstrap_1.CardHeader, { className: "handle" },
                                React.createElement(reactstrap_1.Row, { className: "align-items-center" },
                                    React.createElement(reactstrap_1.Col, null, this.props.title),
                                    React.createElement(reactstrap_1.Col, { className: "d-flex justify-content-end" },
                                        React.createElement(reactstrap_1.Button, { className: "btn-info btn-sm ml-1", onClick: this.onMinifyButtonClick }, "_"),
                                        React.createElement(reactstrap_1.Button, { className: "btn-danger btn-sm ml-1", onClick: this.onCloseButtonClick }, "X")))),
                            this.state.collapsed ? null : (React.createElement(reactstrap_1.CardBody, null, this.props.children))))))));
    };
    ;
    return ActiveWindow;
}(React.Component));
exports.default = ActiveWindow;
//# sourceMappingURL=ActiveWindow.js.map