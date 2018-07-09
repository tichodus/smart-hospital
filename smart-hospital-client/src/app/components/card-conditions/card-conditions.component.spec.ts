import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardConditionsComponent } from './card-conditions.component';

describe('CardConditionsComponent', () => {
  let component: CardConditionsComponent;
  let fixture: ComponentFixture<CardConditionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardConditionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
