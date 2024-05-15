

var lottery=new Promise((res,rej)=>{
    let ticketNumber=5;
    let priceNumber=Math.floor(Math.random()*10)
    if (ticketNumber==priceNumber){
        res("Won!!!")
    }
})

lottery.then(res=>console.log("buy a new car"))