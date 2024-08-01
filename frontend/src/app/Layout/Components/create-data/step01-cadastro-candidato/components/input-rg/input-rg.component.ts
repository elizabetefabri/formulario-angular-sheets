import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { rgValidator } from 'src/app/validators/rg.validator';

@Component({
  selector: 'app-input-rg',
  templateUrl: './input-rg.component.html',
  styleUrls: ['./input-rg.component.css']
})
export class InputRgComponent implements OnInit {
  @Input() formGroup!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup.addControl('rg', this.fb.control('', [Validators.required, rgValidator()]));
  }
}
