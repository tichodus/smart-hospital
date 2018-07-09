import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRoomsComponent } from './card-rooms.component';

describe('CardRoomsComponent', () => {
  let component: CardRoomsComponent;
  let fixture: ComponentFixture<CardRoomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardRoomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
