var items=[
    {id:1,title:"onion",price:40,avlQty:50},
    {id:2,title:"potatto",price:55,avlQty:30},
    {id:3,title:"tomatto",price:45,avlQty:20},
    {id:4,title:"mango",price:50,avlQty:5},
    {id:5,title:"beetroot",price:55,avlQty:7},
    {id:6,title:"brinjal",price:35,avlQty:3},
    {id:7,title:"carrot",price:80,avlQty:0},
    {id:8,title:"ginger",price:280,avlQty:0},
]

// print all product names
var productnames=items.map(p=>p.title)
console.log(productnames);

// print all product names whose price < 50
var productspriceltfifty=items.filter(p=>p.price<50).map(p=>p.title)
console.log(productspriceltfifty);

// print outof stock product names
var outofstockproducts=items.filter(p=>p.avlQty<=0).map(p=>p.title)
console.log(outofstockproducts);

// print instock product names
var inStockProduucts=items.filter(p=>p.avlQty>0).map(p=>p.title)
console.log(inStockProduucts)

//costly product
var costlyProduct=items.reduce((p1,p2)=>p1.price>p2.price?p1.title:p2.title)
console.log(costlyProduct);

//sort products wrt avlqty descending
items.sort((p1,p2)=>p2.avlQty-p1.avlQty)
console.log(items);