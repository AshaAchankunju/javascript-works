var words=["hello","hai","hello",]
var wc={}

// for (let w of words){
//     w in wc ? wc[w]+=1:wc[w]=1
// }
// console.log(wc)

words.map(w=>w in wc?wc[w]+=1:wc[w]=1)
console.log(wc)