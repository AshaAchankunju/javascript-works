var a=[10,13,8,9,11,4]
var largest=a[0]
for (let i of a){
    if (i>largest){
        largest=i
    }
}
console.log(largest)