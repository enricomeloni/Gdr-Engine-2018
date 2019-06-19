(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "redux-actions"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const redux_actions_1 = require("redux-actions");
    exports.getCharacterRequest = redux_actions_1.createAction("GET_CHARACTER_REQUEST", (id) => ({ id }));
    exports.storeCharacter = redux_actions_1.createAction("STORE_CHARACTER", (character) => ({ character }));
});
//# sourceMappingURL=CharacterActions.js.map