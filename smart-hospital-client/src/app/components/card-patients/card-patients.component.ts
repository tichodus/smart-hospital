import { Component, OnInit, Input } from '@angular/core';
import { Patient } from '../../models/patient';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-card-patients',
  templateUrl: './card-patients.component.html',
  styleUrls: ['./card-patients.component.css']
})
export class CardPatientsComponent implements OnInit {

  @Input() patients: Array<Patient>;

  selected: Subject<Patient>;

  constructor() {
    this.selected = new Subject<Patient>();
  }

  setSelected(index: number) {
    this.selected.next(this.patients[index]);
  }

  getSelected() {
    return this.selected.asObservable();
  }

  ngOnInit() {
  }

}
