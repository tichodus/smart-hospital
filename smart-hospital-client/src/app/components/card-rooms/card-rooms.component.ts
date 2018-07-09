import { Component, OnInit, Input } from '@angular/core';
import { Room } from '../../models/room';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-card-rooms',
  templateUrl: './card-rooms.component.html',
  styleUrls: ['./card-rooms.component.css']
})
export class CardRoomsComponent implements OnInit {

  @Input() rooms: Array<Room>;

  selected: Subject<Room>;

  constructor() {
    this.selected = new Subject<Room>();
  }

  setSelected(index: number) {
    this.selected.next(this.rooms[index]);
  }

  public getSelected() {
    return this.selected.asObservable();
  }

  ngOnInit() {
  }

}
