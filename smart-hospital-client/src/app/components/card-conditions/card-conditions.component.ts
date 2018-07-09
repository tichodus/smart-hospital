import { Component, OnInit, Input } from '@angular/core';
import { Condition } from '../../models/Condition';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-card-conditions',
  templateUrl: './card-conditions.component.html',
  styleUrls: ['./card-conditions.component.css']
})
export class CardConditionsComponent implements OnInit {

  @Input() conditions: Array<Condition>;

  selected: Subject<Condition>;

  constructor() {
    this.selected = new Subject<Condition>();
  }

  setSelected(index: number) {
    this.selected.next(this.conditions[index]);
  }

  getSelected() {
    return this.selected.asObservable();
  }

  ngOnInit() {
  }

}
