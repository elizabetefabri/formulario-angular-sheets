import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTituloEleitoralComponent } from './input-titulo-eleitoral.component';

describe('InputTituloEleitoralComponent', () => {
  let component: InputTituloEleitoralComponent;
  let fixture: ComponentFixture<InputTituloEleitoralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputTituloEleitoralComponent]
    });
    fixture = TestBed.createComponent(InputTituloEleitoralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
