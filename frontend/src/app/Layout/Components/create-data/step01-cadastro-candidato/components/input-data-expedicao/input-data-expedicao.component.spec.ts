import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDataExpedicaoComponent } from './input-data-expedicao.component';

describe('InputDataExpedicaoComponent', () => {
  let component: InputDataExpedicaoComponent;
  let fixture: ComponentFixture<InputDataExpedicaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputDataExpedicaoComponent]
    });
    fixture = TestBed.createComponent(InputDataExpedicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
