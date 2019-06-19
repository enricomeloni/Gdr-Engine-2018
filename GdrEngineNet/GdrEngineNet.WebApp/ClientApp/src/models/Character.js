(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Character {
        constructor(props) {
            this.id = props.id;
            this.firstName = props.firstName;
            this.middleName = props.middleName;
            this.lastName = props.lastName;
            this.characteristics = props.characteristics;
            this.createdAt = props.createdAt;
        }
        fullName() {
            return this.firstName + " " + this.middleName + " " + this.lastName;
        }
    }
    exports.default = Character;
});
//# sourceMappingURL=Character.js.map