import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTelefoneComponent } from './input-telefone.component';

describe('InputTelefoneComponent', () => {
  let component: InputTelefoneComponent;
  let fixture: ComponentFixture<InputTelefoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputTelefoneComponent]
    });
    fixture = TestBed.createComponent(InputTelefoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
