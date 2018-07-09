import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardConditionComponent } from './card-condition.component';

describe('CardConditionComponent', () => {
  let component: CardConditionComponent;
  let fixture: ComponentFixture<CardConditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardConditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
