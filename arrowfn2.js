// create a  arrow function 
// lastdigitmax with two params 
// num1,num2 return number that
//  contain largest digit in  last place

var lastDigitMax=(num1,num2)=>num1%10>num2%10?num1:num2
console.log(lastDigitMax(150,15))