import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectRacaComponent } from './select-raca.component';

describe('SelectRacaComponent', () => {
  let component: SelectRacaComponent;
  let fixture: ComponentFixture<SelectRacaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectRacaComponent]
    });
    fixture = TestBed.createComponent(SelectRacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
