colors=["red","blue","green"]
colors.unshift("yellow")//insert element beginning of the array

colors.push("white")//insert element end
console.log(colors)

var element=colors.pop()//remove from last element
console.log(element)

var elem=colors.shift()//remove the element from beginning
console.log(elem)


console.log(colors.includes("red"))//returns true or false checking if the object exist or not

console.log(colors.reverse())//reverse the same array