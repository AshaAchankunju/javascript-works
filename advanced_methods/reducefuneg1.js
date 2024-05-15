var arr=[1,5,6,9,8,4]
var total=arr.reduce((n1,n2)=>n1+n2)
console.log(total)

var product=arr.reduce((n1,n2)=>n1*n2)
console.log(product)

var largestNum=arr.reduce((n1,n2)=>n1>n2?n1:n2)
console.log(largestNum)

var smallestnum=arr.reduce((n1,n2)=>n1>n2?n2:n1)
console.log(smallestnum)

