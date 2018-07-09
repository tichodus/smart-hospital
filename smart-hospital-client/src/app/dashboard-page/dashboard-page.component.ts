import { Component, OnInit, ViewChild } from '@angular/core';
import { Room } from '../models/room';
import { CardRoomsComponent } from '../components/card-rooms/card-rooms.component';
import { Patient } from '../models/patient';
import { CardPatientsComponent } from '../components/card-patients/card-patients.component';
import { Condition } from '../models/Condition';
import { CardConditionsComponent } from '../components/card-conditions/card-conditions.component';
import { ApiService } from '../api.service';
import { DataService } from '../data.service';


@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  private rooms: Array<Room>;
  private room: Room;
  private patients: Array<Patient>;
  private patient: Patient;
  private conditions: Array<Condition>;
  private condition: Condition;

  @ViewChild(CardRoomsComponent) roomsComponent: CardRoomsComponent;
  @ViewChild(CardPatientsComponent) patientsComponent: CardPatientsComponent;
  @ViewChild(CardConditionsComponent) conditionsComponent: CardConditionsComponent;

  constructor(private api: ApiService, private dataService: DataService) {
    this.rooms = new Array<Room>();

    setInterval(
      () => {
        this.api.getData().subscribe(data => {
          const rooms = new Array<Room>();
          const dataArray = data as Array<any>;
          for (let i = 0; i < dataArray.length; i++) {
            // tslint:disable-next-line:no-shadowed-variable
            const patients = new Array<Patient>();
            for (let j = 0; j < dataArray[i].beds.length; j++) {
              const conditions = new Array<Condition>();
              if (dataArray[i].beds[j].patient != null) {
                // tslint:disable-next-line:max-line-length
                patients.push(new Patient(dataArray[i].beds[j].patient.id, dataArray[i].beds[j].patient.firstName, dataArray[i].beds[j].patient.lastName, conditions, dataArray[i].beds[j].patient.temperature, dataArray[i].beds[j].patient.sys + ':' + dataArray[i].beds[j].patient.dias));
                if (dataArray[i].beds[j].patient.condition != null) {
                // tslint:disable-next-line:max-line-length
                  conditions.push(new Condition(dataArray[i].beds[j].patient.condition.type, dataArray[i].beds[j].patient.condition.description, dataArray[i].beds[j].patient.isUrgent));
                }
              }
            }
           rooms.push(new Room(dataArray[i].id, dataArray[i].beds.length, patients));
          }
          this.rooms = rooms;
          this.dataService.setValue(this.rooms);
        });
      }, 800
    );
  }

  ngOnInit() {
    this.roomsComponent.getSelected().subscribe(data => {
      this.room = data;
      this.patients = this.room._patients;
      this.dataService.setValue(this.rooms);
    });
    this.patientsComponent.getSelected().subscribe(data => {
      this.patient = data;
      this.conditions = this.patient._conditions;
    });
    this.conditionsComponent.getSelected().subscribe(data => {
      this.condition = data;
    });
    this.dataService.setValue(this.rooms);
  }

}
