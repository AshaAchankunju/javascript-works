var num=370
var len=String(num).length
var sum=0
console.log(len)
while(num!=0){
    let digit=num%10
    let res=digit**len
    sum=sum+res
    num=Math.floor(num/10)
}
console.log(sum)

