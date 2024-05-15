var scores=["6","6","4","4","2","2","1","4"]
var wc={}
scores.map(w=>w in wc? wc[w]+=1: wc[w]=1)
console.log(wc);
var total=scores.reduce((s1,s2) => Number(w1) + Number(w2))
console.log(total);