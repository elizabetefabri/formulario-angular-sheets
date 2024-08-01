import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-telefone2',
  templateUrl: './input-telefone2.component.html',
  styleUrls: ['./input-telefone2.component.css']
})
export class InputTelefone2Component implements OnInit {
  @Input() formGroup!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onCheckboxChange(event: any, formArrayName: string) {
    const formArray: FormArray = this.formGroup.get(formArrayName) as FormArray;

    if (event.target.checked) {
      formArray.push(this.fb.control(event.target.value));
    } else {
      let i: number = 0;
      formArray.controls.forEach((ctrl: any) => {
        if (ctrl.value == event.target.value) {
          formArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
}
