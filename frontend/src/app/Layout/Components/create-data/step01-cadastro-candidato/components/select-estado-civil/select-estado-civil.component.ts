import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select-estado-civil',
  templateUrl: './select-estado-civil.component.html',
  styleUrls: ['./select-estado-civil.component.css']
})
export class SelectEstadoCivilComponent {
  @Input() formGroup!: FormGroup;
}
