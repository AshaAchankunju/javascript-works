array=[2,3,4,5,6]
for (let i=1;i<=3;i++){
    let a=array.pop()
    array.unshift(a)
}
console.log(array)