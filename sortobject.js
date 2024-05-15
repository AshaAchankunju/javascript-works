

var fruits={
    "apple":265,
    "mango":50,
    "orange":99,
    "watermelon":20,
    "banana":70
}

var data=Object.entries(fruits)
data.sort((o1,o2)=>o2[1]-o1[1])
console.log(data[0]);

var text="lazyfoxjump"
var text="hellopythonworld"