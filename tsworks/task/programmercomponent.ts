import {Editor,ide} from "./taskcomponent"

class programmer{
    constructor(private editor:Editor, private ide:ide){
        editor.execute()
        editor.debug()
        ide.execute()
        ide.debug()
    }
}

var editorinstance=new Editor()
var ideinstance=new ide()
var programmerinstance = new programmer(editorinstance,ideinstance)