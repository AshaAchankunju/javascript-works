var arr=[1,5,4,6,8,10,100]

arr.sort((o1,o2)=>o1-o2)
console.log(arr)

arr.sort((o1,o2)=>o2-o1)
console.log(arr)
// function compare(o1,o2){
//     if (o1<o2){
//         return -1//returns 1st parameter
//     }
//     else{
//         return 1// returns 2nd parameter
//     }
// }
// arr.sort(compare)
// console.log(arr)