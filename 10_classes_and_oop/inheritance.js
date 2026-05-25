class User{
    constructor(name){
        this.name = name;
    }

    logMe(){
        console.log(`Username is ${this.name}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username);//automatically calls the constructor of the parent class and this keyword is passes by default
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new Course added by ${this.name}`);
    }
}

const chai = new Teacher("Chai","chai@example.com","123");
chai.logMe(); // Output: Username is Chai
chai.addCourse(); // Output: A new Course added by Chai

const masalaChai = new User("masalaChai")
masalaChai.logMe(); // Output: Username is masalaChai
// masalaChai.addCourse(); // This will throw an error because addCourse is not a method of User class 
console.log(chai instanceof Teacher);
