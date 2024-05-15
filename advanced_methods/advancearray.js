var arr=[1,5,9,5,6,4]
// fetch all even position numbers
var evenpositionnumber=arr.filter((num,index)=>index%2==0)
console.log(evenpositionnumber)

var oddpositioNumbers=arr.filter((num,index)=>index%2!=0)
console.log(oddpositioNumbers)