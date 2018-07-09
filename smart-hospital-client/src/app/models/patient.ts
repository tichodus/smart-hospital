import { Condition } from './Condition';

export class Patient {
    _id;
    _firstName;
    _lastName;
    _conditions: Array<Condition>;
    _temperature;
    _bloodPreasure;

    constructor(id, firstName, lastName, conditions, temperature, bloodPreasure) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._conditions = conditions;
        this._temperature = temperature;
        this._bloodPreasure = bloodPreasure;
    }
}
