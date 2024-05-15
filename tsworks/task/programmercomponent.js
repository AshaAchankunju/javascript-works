"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var taskcomponent_1 = require("./taskcomponent");
var programmer = /** @class */ (function () {
    function programmer(editor, ide) {
        this.editor = editor;
        this.ide = ide;
        editor.execute();
        editor.debug();
        ide.execute();
        ide.debug();
    }
    return programmer;
}());
var editorinstance = new taskcomponent_1.Editor();
var ideinstance = new taskcomponent_1.ide();
var programmerinstance = new programmer(editorinstance, ideinstance);
