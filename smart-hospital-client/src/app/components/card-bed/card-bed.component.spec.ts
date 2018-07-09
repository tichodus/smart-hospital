import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBedComponent } from './card-bed.component';

describe('CardBedComponent', () => {
  let component: CardBedComponent;
  let fixture: ComponentFixture<CardBedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardBedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
