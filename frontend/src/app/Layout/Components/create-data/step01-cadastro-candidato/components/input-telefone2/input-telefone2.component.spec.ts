import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTelefone2Component } from './input-telefone2.component';

describe('InputTelefone2Component', () => {
  let component: InputTelefone2Component;
  let fixture: ComponentFixture<InputTelefone2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputTelefone2Component]
    });
    fixture = TestBed.createComponent(InputTelefone2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
