var Vscode = /** @class */ (function () {
    function Vscode() {
    }
    Vscode.prototype.edit = function () {
        console.log("vscode edit ethod");
    };
    Vscode.prototype.execute = function () {
        console.log("vscode execute method");
    };
    Vscode.prototype.debug = function () {
        console.log("vscode debug method");
    };
    return Vscode;
}());
var Pycharm = /** @class */ (function () {
    function Pycharm() {
    }
    Pycharm.prototype.edit = function () {
        console.log("pycharm edit ethod");
    };
    Pycharm.prototype.execute = function () {
        console.log("pycharm execute method");
    };
    Pycharm.prototype.debug = function () {
        console.log("pycharm debug method");
    };
    return Pycharm;
}());
var a = new Vscode();
var b = new Pycharm();
