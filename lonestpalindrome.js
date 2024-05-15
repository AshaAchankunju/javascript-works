
var text="RACECAR";
var result="";
for (let i=0;i<text.length;i++){
    let l=i;
    let r=i;
    while(l>=0 && r < text.length && text[l]==text[r] ){
        let currentString=text.substring(l,r+1);
        
        if(currentString.length>result.length){
            
            result=currentString;
        }
        l--;
        r++;
    }
}
console.log(result);