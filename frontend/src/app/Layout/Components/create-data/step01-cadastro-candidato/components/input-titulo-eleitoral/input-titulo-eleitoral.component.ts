import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-titulo-eleitoral',
  templateUrl: './input-titulo-eleitoral.component.html',
  styleUrls: ['./input-titulo-eleitoral.component.css']
})
export class InputTituloEleitoralComponent {
  @Input() formGroup!: FormGroup;
}
