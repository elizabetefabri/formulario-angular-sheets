import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectOcupacaoComponent } from './select-ocupacao.component';

describe('SelectOcupacaoComponent', () => {
  let component: SelectOcupacaoComponent;
  let fixture: ComponentFixture<SelectOcupacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectOcupacaoComponent]
    });
    fixture = TestBed.createComponent(SelectOcupacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
