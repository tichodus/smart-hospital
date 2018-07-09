import { Component, OnInit, Input, ChangeDetectorRef, } from '@angular/core';
import 'chart.js';
import { ApiService } from '../api.service';
import { Room } from '../models/room';
import { DataService } from '../data.service';

declare var Chart: any;

@Component({
  selector: 'app-statistics-page',
  templateUrl: './statistics-page.component.html',
  styleUrls: ['./statistics-page.component.css']
})

export class StatisticsPageComponent implements OnInit {

  private criterias: Array<string>;
  private rooms: Array<Room>;
  private valuesBlood: Array<number>;
  private valuesTemperature: Array<number>;
  private labels: Array<string>;

  private chart: any;

  constructor(private api: ApiService, private data: DataService, private ref: ChangeDetectorRef) {
    this.criterias = new Array<string>();
    this.criterias.push('Temperature ascending');
    this.criterias.push('Temperature descending');
    this.criterias.push('Blood preasure ascending');
    this.criterias.push('Blood preasure descending');

  }

  ngOnInit() {
    this.rooms = this.data.getData();
      this.valuesBlood = new Array<number>();
      this.valuesTemperature = new Array<number>();
      this.labels = new Array<string>();
      for (let i = 0; i < this.rooms.length; i++) {
        for (let j = 0; j < this.rooms[i]._patients.length; j++) {
          this.valuesBlood.push(this.rooms[i]._patients[j]._bloodPreasure.split(':')[0]);
          this.valuesTemperature.push(this.rooms[i]._patients[j]._temperature);
          this.labels.push(this.rooms[i]._patients[j]._firstName);
        }
      }
      this.generateChart(this.valuesBlood, this.labels, 'Blood preasure chart');
  }

  private drawChart(labels, data, title, bgColor, borderColor) {
    const canvas: any = document.getElementById('chart');
    this.chart = new Chart(canvas.getContext('2d'), {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: title,
          data: data,
          backgroundColor: bgColor,
          borderColor: borderColor,
          borderWidth: 1
        }]
      },
      options: {
        animation: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
      }
    });
  }

  setCriteria(index: number) {
    this.chart.destroy();
    if (index === 0) {
      this.sortAsceningTemperature();
      this.generateChart(this.valuesTemperature, this.labels, 'Temperature chart');
    }
    if (index === 1) {
      this.sortDeceningTemperature();
      this.generateChart(this.valuesTemperature, this.labels, 'Temperature chart');
    }
    if (index === 2) {
      this.sortAsceningBlood();
      this.generateChart(this.valuesBlood, this.labels, 'Blood preasure chart');
    }
    if (index === 3) {
      this.sortDesceningBlood();
      this.generateChart(this.valuesBlood, this.labels, 'Blood preasure chart');
    }
    this.ref.detectChanges();
  }

  private generateChart(values, labels, title) {
    const bgColor = [];
    const borderColor = [];
    for (let i = 0; i < values.length; i++) {
      const red = Math.random() * 256;
      const green = Math.random() * 256;
      const blue = Math.random() * 256;
      bgColor.push('rgba(' + red + ',' + green + ',' + blue + ', 0.5)');
      borderColor.push('rgba(' + red + ',' + green + ',' + blue + ', 1)');
    }
    this.drawChart(labels, values, title, bgColor, borderColor);
  }

  sortAsceningTemperature() {
    for (let i = 0; i < this.valuesTemperature.length; i++) {
      for (let j = 0; j < this.valuesTemperature.length; j++) {
        if (this.valuesTemperature[i] < this.valuesTemperature[j]) {
          const tmpValue = this.valuesTemperature[i];
          this.valuesTemperature[i] = this.valuesTemperature[j];
          this.valuesTemperature[j] = tmpValue;
          const tmpLabel = this.labels[i];
          this.labels[i] = this.labels[j];
          this.labels[j] = tmpLabel;
        }
      }
    }
  }

  sortDeceningTemperature() {
    for (let i = 0; i < this.valuesTemperature.length; i++) {
      for (let j = 0; j < this.valuesTemperature.length; j++) {
        if (this.valuesTemperature[i] > this.valuesTemperature[j]) {
          const tmpValue = this.valuesTemperature[i];
          this.valuesTemperature[i] = this.valuesTemperature[j];
          this.valuesTemperature[j] = tmpValue;
          const tmpLabel = this.labels[i];
          this.labels[i] = this.labels[j];
          this.labels[j] = tmpLabel;
        }
      }
    }
  }

  sortAsceningBlood() {
    for (let i = 0; i < this.valuesBlood.length; i++) {
      for (let j = 0; j < this.valuesBlood.length; j++) {
        if (this.valuesBlood[i] < this.valuesBlood[j]) {
          const tmpValue = this.valuesBlood[i];
          this.valuesBlood[i] = this.valuesBlood[j];
          this.valuesBlood[j] = tmpValue;
          const tmpLabel = this.labels[i];
          this.labels[i] = this.labels[j];
          this.labels[j] = tmpLabel;
        }
      }
    }
  }

  sortDesceningBlood() {
    for (let i = 0; i < this.valuesBlood.length; i++) {
      for (let j = 0; j < this.valuesBlood.length; j++) {
        if (this.valuesBlood[i] > this.valuesBlood[j]) {
          const tmpValue = this.valuesBlood[i];
          this.valuesBlood[i] = this.valuesBlood[j];
          this.valuesBlood[j] = tmpValue;
          const tmpLabel = this.labels[i];
          this.labels[i] = this.labels[j];
          this.labels[j] = tmpLabel;
        }
      }
    }
  }

}
