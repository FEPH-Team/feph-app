import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPrecinctComponent } from './add-precinct.component';

describe('AddPrecinctComponent', () => {
  let component: AddPrecinctComponent;
  let fixture: ComponentFixture<AddPrecinctComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPrecinctComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPrecinctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
