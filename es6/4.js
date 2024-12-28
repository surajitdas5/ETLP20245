class Student{
    //  constructor(){
    //     console.log("Student object is created");
    //     this.roll = 0;
    //     this.name = "Sam"
    //  }
    //  constructor(roll, name){
    //     this.roll = roll;
    //     this.name = name
    //  }
     constructor(roll=0, name=""){
        this.roll = roll;
        this.name = name
     }

     details() {
        console.log(this.roll+" "+this.name);
     }
}

let s = new Student()
let s1 = new Student(123, "Sam")
// console.log(s.name);
// console.log(s1.name);
s1.details()