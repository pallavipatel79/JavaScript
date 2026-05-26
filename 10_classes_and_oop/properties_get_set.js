function User(email,password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this,'email',{
        get: function(){
            return this._email.toUpperCase();
        },
        set: function(newEmail){
            this._email = newEmail;
        }
    })

    Object.defineProperty(this,'password',{
        get: function(){
            return this._password;
        },
        set: function(newPassword){
            this._password = newPassword;
        }
    })
}



const chai = new User('chai@example.com', 'chai');
console.log(chai.email); 