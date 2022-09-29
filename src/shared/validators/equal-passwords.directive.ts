import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const equalPasswordsValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  const correctPassword = password && confirmPassword && password.value === confirmPassword.value;
  if (!correctPassword) {
    confirmPassword?.setErrors({ equalPasswords: true });
    return { equalPasswords: true };
  } else {
    confirmPassword?.setErrors(null);
    return null;
  }
};