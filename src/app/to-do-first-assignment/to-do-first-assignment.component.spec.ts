import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoFirstAssignmentComponent } from './to-do-first-assignment.component';

describe('ToDoFirstAssignmentComponent', () => {
  let component: ToDoFirstAssignmentComponent;
  let fixture: ComponentFixture<ToDoFirstAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoFirstAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoFirstAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
