class Student{
    setStudent(name,rollno,course){
        this.name=name
        this.rollno=rollno
        this.course=course
    }
    getStudent(){
        console.log(this.name,this.rollno,this.course);
    }
}

var obj=new Student()
obj.setStudent("Ann","22","python")
obj.getStudent()