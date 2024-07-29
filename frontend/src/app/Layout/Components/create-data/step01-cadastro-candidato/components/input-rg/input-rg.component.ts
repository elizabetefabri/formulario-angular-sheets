import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-rg',
  templateUrl: './input-rg.component.html',
  styleUrls: ['./input-rg.component.css']
})
export class InputRgComponent {
  @Input() formGroup!: FormGroup;
}
