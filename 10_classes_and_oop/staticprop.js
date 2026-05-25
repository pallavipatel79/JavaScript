class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
        
    }

    static createId(){//static method can be called without creating an instance of the class
        return `123`//not every instance of the class will have this method, it is only available on the class itself
    }
}

const pallavi = new User("Pallavi");    
// pallavi.logMe(); // Output: Username: Pallavi
// console.log(pallavi.createId()); // Output: 123 This will throw an error because createId is a static method and cannot be called on an instance of the class


class Teacher extends User{
    constructor(username,email){
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher("iPhone","iphone@example.com");
iphone.logMe(); // Output: Username: iPhone
console.log(Teacher.createId()); // Output: 123