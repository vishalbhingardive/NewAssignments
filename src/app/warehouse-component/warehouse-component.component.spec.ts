import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseComponentComponent } from './warehouse-component.component';

describe('WarehouseComponentComponent', () => {
  let component: WarehouseComponentComponent;
  let fixture: ComponentFixture<WarehouseComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarehouseComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehouseComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
