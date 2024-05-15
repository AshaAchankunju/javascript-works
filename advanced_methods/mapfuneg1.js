var arr=[1,5,4,5,9]
var squarearr=arr.map((num)=>num**2)
console.log(squarearr)

var cubes=arr.map((num)=>num**3)
console.log(cubes)

var addthree=arr.map((num)=>num+3)
console.log(addthree)

var indexs=arr.map((num,index)=>index)
console.log(indexs)

//or

// var squares=[]
// for(let num of arr){
//     let sq=num**2
//     squares.push()
// }


