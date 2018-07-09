import { Patient } from './patient';

export class Room {
    _roomNumber;
    _patients: Array<Patient>;
    _numberOfBeds: number;

    constructor(roomNumber: number, numberOfBeds, patients) {
        this._roomNumber = roomNumber;
        this._patients = patients;
        this._numberOfBeds = numberOfBeds;
    }

}
