import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Room } from './models/room';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data: Array<Room>;

  constructor() {
  }

  setValue(data: Array<Room>) {
    this.data = data;
  }

  getData() {
    return this.data;
  }
}
