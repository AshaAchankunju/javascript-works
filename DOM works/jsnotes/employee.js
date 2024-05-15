class Employee{
    constructor(name,empid,department){
        this.name=name
        this.empid=empid
        this.department=department
    }
    getEmployee(){
        console.log(this.name,this.empid,this.department);
    }
}

var emp=new Employee("ash","123","ghgh")
emp.getEmployee()