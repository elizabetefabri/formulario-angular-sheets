import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select-raca',
  templateUrl: './select-raca.component.html',
  styleUrls: ['./select-raca.component.css']
})
export class SelectRacaComponent {
  @Input() formGroup!: FormGroup;
}
