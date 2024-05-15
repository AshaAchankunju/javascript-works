
interface Editor{
    edit()
    execute()
    debug()
}

class Vscode implements Editor{
    edit() {
        console.log("vscode edit ethod");
    }
    execute() {
        console.log("vscode execute method");
    }
    debug() {
        console.log("vscode debug method");
    }
}
class Pycharm implements Editor{
    edit() {
        console.log("pycharm edit ethod");
    }
    execute() {
        console.log("pycharm execute method");
    }
    debug() {
        console.log("pycharm debug method");
    }

}
var a=new Vscode()
var b=new Pycharm()