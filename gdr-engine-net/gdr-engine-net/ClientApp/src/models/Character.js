"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Character = /** @class */ (function () {
    function Character(props) {
        this.firstName = props.firstName;
        this.middleName = props.middleName;
        this.lastName = props.lastName;
        this.characteristics = props.characteristics;
        this.createdAt = props.createdAt;
    }
    Character.prototype.fullName = function () {
        return this.firstName + " " + this.middleName + " " + this.lastName;
    };
    return Character;
}());
exports.default = Character;
//# sourceMappingURL=Character.js.map