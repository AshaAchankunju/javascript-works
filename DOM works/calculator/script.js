

function displayNumber(event){
    let val=event.target.value
    let operators=["+","-","*","/","."]
    let currentExpression=result.value;
    let currentExpLastCharater=currentExpression.slice(-1)
    if (operators.includes(currentExpLastCharater) && operators.includes(val)){
        result.value=result.value.slice(0,-1)+val
        return
    }
    else{
        result.value+=val;

    }
    
}

function clearBox(){
    result.value=""
}

function evalExp(){
    let currentExpression=result.value;
    let output=eval(currentExpression);
    result.value=output;
}

function backSpace(){
    let output=result.value.slice(0,-1);
    result.value=output;
}