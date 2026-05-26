const User = {
    _email: 'p@gmail.com',
    _password: 'abc ',

    get email(){
        return this._email.toUpperCase();
    },
    set email(newEmail){
        this._email = newEmail;
    },

    get password(){
        return this._password.toUpperCase();
    },
    set password(newPassword){
        this._password = newPassword;
    }
}

const tea = Object.create(User);
console.log(tea.email);
console.log(tea.password);

