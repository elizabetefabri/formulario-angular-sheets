import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tituloEleitoralValidator } from 'src/app/validators/titulo-eleitoral.validator';

@Component({
  selector: 'app-input-titulo-eleitoral',
  templateUrl: './input-titulo-eleitoral.component.html',
  styleUrls: ['./input-titulo-eleitoral.component.css']
})
export class InputTituloEleitoralComponent implements OnInit {
  @Input() formGroup!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup.addControl('tituloEleitoral', this.fb.control('', [Validators.required, tituloEleitoralValidator()]));
  }
}
