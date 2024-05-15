const { Long } = require("mongodb")

var numbers=[
    [10,50],
    [2,19],
    [52,48],
    [10,100],
    [15,18]
]
var out=numbers.flat().reduce((n1,n2)=>n1>n2?n1:n2)
console.log(out);