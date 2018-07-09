import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBedsComponent } from './card-beds.component';

describe('CardBedsComponent', () => {
  let component: CardBedsComponent;
  let fixture: ComponentFixture<CardBedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardBedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
