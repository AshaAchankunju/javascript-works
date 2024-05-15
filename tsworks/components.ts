interface OnInit{
    ngOnInit()
}

interface OnCgange{
    ngOnchange()
}
class MyComponent implements OnInit,OnCgange{
    ngOnInit() {
        console.log("initialization");
    }
    ngOnchange() {
        console.log("onchange method");
    }
}
var com= new MyComponent()
