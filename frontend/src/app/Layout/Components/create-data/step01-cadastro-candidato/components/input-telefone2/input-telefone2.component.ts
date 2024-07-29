import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-telefone2',
  templateUrl: './input-telefone2.component.html',
  styleUrls: ['./input-telefone2.component.css']
})
export class InputTelefone2Component {
  @Input() formGroup!: FormGroup;
}
