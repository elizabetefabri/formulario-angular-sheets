import { AbstractControl, ValidatorFn } from '@angular/forms';

export function tituloEleitoralValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const titulo = control.value;
    if (!titulo) {
      return null;
    }

    const tituloRegex = /^\d{12}$/;
    return tituloRegex.test(titulo) ? null : { tituloInvalid: true };
  };
}
