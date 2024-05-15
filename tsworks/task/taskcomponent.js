"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ide = exports.Editor = void 0;
var Editor = /** @class */ (function () {
    function Editor() {
    }
    Editor.prototype.debug = function () {
        console.log("debug code");
    };
    Editor.prototype.execute = function () {
        console.log("execute code");
    };
    return Editor;
}());
exports.Editor = Editor;
var ide = /** @class */ (function () {
    function ide() {
    }
    ide.prototype.debug = function () {
        console.log("dubug code");
    };
    ide.prototype.execute = function () {
        console.log("execute code");
    };
    return ide;
}());
exports.ide = ide;
