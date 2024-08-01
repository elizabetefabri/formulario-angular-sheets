import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-data-nascimento',
  templateUrl: './input-data-nascimento.component.html',
  styleUrls: ['./input-data-nascimento.component.css']
})
export class InputDataNascimentoComponent implements OnInit {
  @Input() formGroup!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup.addControl('data', this.fb.control('', [Validators.required]));
  }
}
