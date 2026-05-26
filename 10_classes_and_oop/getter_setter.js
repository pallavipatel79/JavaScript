class User {
    constructor(emal,password){
        this.email = emal;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase();//underscore is added to avoid race condition between getter setter and constructor
    }
    set email(newEmail){
        this._email = newEmail;
    }

    get password(){//gets the original value from the constructor and returns it in uppercase
        return this._password.toUpperCase();
    }
    set password(newPassword){//sets the value of the constructor to the new value passed in the setter method from the getter
        this._password = newPassword;
    }
}

const pallavi = new User("pallavi@example.com", "abc"); 
console.log(pallavi.password);
console.log(pallavi.email);

