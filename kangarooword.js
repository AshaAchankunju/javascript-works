var sourceString="chicken";
var targetString="hen";

//step1 create source string word count
var wc={}
sourceString.split("").map(ch=> ch in wc ? wc[ch]+=1 : wc[ch]=1)
console.log(wc);
//step2
var isKangarooWord=true
for (let ch of targetString){
    if (ch in wc && wc[ch]>0){
        wc[ch]-=1
    }
    else{
        isKangarooWord=false;
        break
    }
}
console.log(isKangarooWord?"kangarooword":"not kangarooword")

