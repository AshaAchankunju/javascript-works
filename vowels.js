var text='PYTHON IS AN INTERPRETED LANGUAGE'
var textnew=text.toLocaleLowerCase()
var vowels=['a','e','i','o','u']
var newarray=[]
for(let i of textnew){
    if (vowels.includes(i)){
        console.log(i)
        newarray.push(i)
    }
}
console.log(newarray)