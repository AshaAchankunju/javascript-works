

function eventCheck(event){
    let color=event.target.value;
    let root=document.querySelector("#root");
    root.removeAttribute("class")
    if (color=="red"){
        root.classList.add("rounded-circle","bg-danger")
    }
    else if(color=="green"){
        root.classList.add("rounded-circle","bg-success")
    }
    else if(color=="blue"){
            root.classList.add("rounded-circle","bg-primary")
    }

}