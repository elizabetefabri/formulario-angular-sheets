import { AbstractControl, ValidatorFn } from '@angular/forms';

export function rgValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const rg = control.value;
    if (!rg) {
      return null;
    }

    const valid = validateRG(rg);
    return valid ? null : { rgInvalid: true };
  };
}

function validateRG(rg: string): boolean {
  rg = rg.replace(/[^\w.-]+/g, ''); // Remove all non-alphanumeric characters except dot and hyphen

  // Regex for initial validation
  const rgRegex = /^[a-zA-Z0-9]{2}\.\d{3}\.\d{3}-?[a-zA-Z0-9]{0,2}$/;
  if (!rgRegex.test(rg)) {
    return false;
  }

  // Additional logic based on starting characters
  const start = rg.substring(0, 2);
  const end = rg.slice(-2);

  const startsWithLetters = /^[a-zA-Z]{2}$/.test(start);
  const endsWithNumbers = /^\d{2}$/.test(end);
  const endsWithAlphaNum = /^[a-zA-Z0-9]{2}$/.test(end) || end.length === 1;

  if (startsWithLetters) {
    return endsWithNumbers;
  } else {
    return endsWithAlphaNum;
  }
}
