var arr=[1,2,3,4,5,6]
//odd position numbers=[2,4,6]
//reverse odd position numbers=[6,4,2]
//and insert it into the array

var oddpositionumber=arr.filter((num,index)=>index%2!=0).reverse()
var index=1
for (let num of oddpositionumber){
    arr[index]=num
    index+=2
}
console.log(arr)
