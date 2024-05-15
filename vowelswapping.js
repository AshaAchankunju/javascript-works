var text="welcomepython".split("")
var start=0;
var end=text.length-1;
var vowels="aeiou";
while(start<end){
    // swap,start increment end decrement
    
   let startCharacter=text[start]
   let endCharcter=text[end] 
    
    if (vowels.includes(startCharacter) && vowels.includes(endCharcter)){
        [text[start],text[end]]=[text[end],text[start]]
        start++;
        end--;
    }
    else if(!vowels.includes(startCharacter)){
        start++
    }
    else if(!vowels.includes(endCharcter)){
        end--
    }

}
console.log(text.join(""));
