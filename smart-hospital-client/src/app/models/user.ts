
export class User {
    _id: string;
    _username: string;
    _firstName: string;
    _lastName: string;
    _password: string;
    _email: string;

    constructor( username: string, firstName: string, lastName: string, password: string, email: string) {
        this._username = username;
        this._firstName = firstName;
        this._lastName = lastName;
        this._password = password;
        this._email = email;
    }

}
