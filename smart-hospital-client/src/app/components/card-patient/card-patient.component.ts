import { Component, OnInit, Input } from '@angular/core';
import { Patient } from '../../models/patient';

@Component({
  selector: 'app-card-patient',
  templateUrl: './card-patient.component.html',
  styleUrls: ['./card-patient.component.css']
})
export class CardPatientComponent implements OnInit {

  @Input() patient: Patient;

  constructor() { }

  ngOnInit() {
  }

}
