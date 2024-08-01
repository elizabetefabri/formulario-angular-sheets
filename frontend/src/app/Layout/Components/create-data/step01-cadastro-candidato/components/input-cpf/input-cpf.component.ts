import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cpfValidator } from 'src/app/validators/cpf.validator';

@Component({
  selector: 'app-input-cpf',
  templateUrl: './input-cpf.component.html',
  styleUrls: ['./input-cpf.component.css']
})
export class InputCpfComponent implements OnInit{
  @Input() formGroup!: FormGroup;

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.formGroup.addControl('cpf', this.fb.control('', [Validators.required, cpfValidator.ValidaCpf]));
  }
}
