import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputRgComponent } from './input-rg.component';

describe('InputRgComponent', () => {
  let component: InputRgComponent;
  let fixture: ComponentFixture<InputRgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputRgComponent]
    });
    fixture = TestBed.createComponent(InputRgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
