import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step01CadastroCandidatoComponent } from './step01-cadastro-candidato.component';

describe('Step01CadastroCandidatoComponent', () => {
  let component: Step01CadastroCandidatoComponent;
  let fixture: ComponentFixture<Step01CadastroCandidatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Step01CadastroCandidatoComponent]
    });
    fixture = TestBed.createComponent(Step01CadastroCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
