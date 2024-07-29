import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectEstadoComponent } from './select-estado.component';

describe('SelectEstadoComponent', () => {
  let component: SelectEstadoComponent;
  let fixture: ComponentFixture<SelectEstadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectEstadoComponent]
    });
    fixture = TestBed.createComponent(SelectEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
