var employee={
    id:100,
    name:"hari",
departmeent:"hr",
salary:123546
}
console.log(employee.name)
console.log(employee.salary);
employee.gender="male"
console.log(employee)

if ("name" in employee){
    console.log("presesnt")
}
else{
        console.log("not present")
}
