import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select-ocupacao',
  templateUrl: './select-ocupacao.component.html',
  styleUrls: ['./select-ocupacao.component.css']
})
export class SelectOcupacaoComponent {
  @Input() formGroup!: FormGroup;
}
