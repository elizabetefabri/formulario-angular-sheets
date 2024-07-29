import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectGrauInstrucaoComponent } from './select-grau-instrucao.component';

describe('SelectGrauInstrucaoComponent', () => {
  let component: SelectGrauInstrucaoComponent;
  let fixture: ComponentFixture<SelectGrauInstrucaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectGrauInstrucaoComponent]
    });
    fixture = TestBed.createComponent(SelectGrauInstrucaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
