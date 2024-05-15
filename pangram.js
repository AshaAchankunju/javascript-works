var text="Two driven jocks help fax my big quiz";
var alphabets="abcdefghijklmnopqrstuvwxyz"


var isPangram=true;
for (let ch of alphabets){
    if(! text.includes(ch)){
        isPangram=false;
        break;
    }
}
console.log(isPangram ? "pangram" : "not pangram")
// or
//var isalphabetsexist=alphabets.split("").map(ch=>text.includes(ch)).includes(false)
// if (isalphabetsexist.icludes(false)){
//     console.log("not pangram")
//  }
// else{
//     console.log("pangram")
// }
