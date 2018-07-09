import { Component, OnInit, Input } from '@angular/core';
import { Condition } from '../../models/Condition';

@Component({
  selector: 'app-card-condition',
  templateUrl: './card-condition.component.html',
  styleUrls: ['./card-condition.component.css']
})
export class CardConditionComponent implements OnInit {

  @Input() condition: Condition;

  constructor() { }

  ngOnInit() {
  }

}
