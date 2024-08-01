import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-data-expedicao',
  templateUrl: './input-data-expedicao.component.html',
  styleUrls: ['./input-data-expedicao.component.css']
})
export class InputDataExpedicaoComponent implements OnInit {
  @Input() formGroup!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup.addControl('data', this.fb.control('', [Validators.required]));
  }
}
