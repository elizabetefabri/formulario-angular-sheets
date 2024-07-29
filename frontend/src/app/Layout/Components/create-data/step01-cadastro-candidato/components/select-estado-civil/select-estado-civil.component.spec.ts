import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectEstadoCivilComponent } from './select-estado-civil.component';

describe('SelectEstadoCivilComponent', () => {
  let component: SelectEstadoCivilComponent;
  let fixture: ComponentFixture<SelectEstadoCivilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectEstadoCivilComponent]
    });
    fixture = TestBed.createComponent(SelectEstadoCivilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
