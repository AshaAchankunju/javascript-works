var num=7;
var prime=true;
for(let i=2;i<7;i++){
    if (num%i==0){
        prime=false
        break
    }
}
console.log(prime)