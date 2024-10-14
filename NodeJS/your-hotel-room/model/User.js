class User {
    constructor(id, name, email, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }
    // Getter
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get email() {
        return this._email;
    }
    get password() {
        return this._password;
    }
    
    // Setter
    set id(id) {
        this._id = id;
    }
    set name(name) {
        this._name = name;
    }
    set email(email) {
        this._email = email;
    }
    set password(password) {
        this._password = password;
    }
}