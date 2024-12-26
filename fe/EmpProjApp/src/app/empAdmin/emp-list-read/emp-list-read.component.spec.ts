import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpListReadComponent } from './emp-list-read.component';

describe('EmpListReadComponent', () => {
  let component: EmpListReadComponent;
  let fixture: ComponentFixture<EmpListReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmpListReadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpListReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
