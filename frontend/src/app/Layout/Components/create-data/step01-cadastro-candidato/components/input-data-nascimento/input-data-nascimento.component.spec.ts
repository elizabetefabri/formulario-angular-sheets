import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDataNascimentoComponent } from './input-data-nascimento.component';

describe('InputDataNascimentoComponent', () => {
  let component: InputDataNascimentoComponent;
  let fixture: ComponentFixture<InputDataNascimentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputDataNascimentoComponent]
    });
    fixture = TestBed.createComponent(InputDataNascimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
