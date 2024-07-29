import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select-grau-instrucao',
  templateUrl: './select-grau-instrucao.component.html',
  styleUrls: ['./select-grau-instrucao.component.css']
})
export class SelectGrauInstrucaoComponent {
  @Input() formGroup!: FormGroup;
}
