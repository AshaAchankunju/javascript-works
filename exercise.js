// anagram
var string1="silent";
var string2="listen";
var srtString1=string1.split("").sort().join("");
var srtString2=string2.split("").sort().join("");
console.log(srtString1==srtString2?"anagram":"not anagram");

