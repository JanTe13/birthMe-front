import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/shared/models/user.model';
import { RegisterService } from 'src/shared/services/register.service';
import { equalPasswordsValidator } from 'src/shared/validators/equal-passwords.directive';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  registerForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.maxLength(15)
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.maxLength(15)
    ]),
    dateOfBirth: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.email ,
      Validators.maxLength(50)
    ]),
    username: new FormControl('', [
      Validators.required,
      Validators.maxLength(15)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.maxLength(15)
    ]),
    confirmPassword: new FormControl('')
  }, { validators: equalPasswordsValidator });

  constructor(
    private router: Router,
    private registerService: RegisterService
  ) { }

  ngOnInit(): void {
    const user: User | undefined = this.registerService.registerForm;
    if (user) {
      this.registerForm.setValue({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        dateOfBirth: formatDate(user.dob, 'dd/MM/yyyy', 'en'),
        username: user.username,
        password: user.password,
        confirmPassword: user.password
      });
    }
  }

  signUp(): void {
    this.registerService.registerForm = new User(this.registerForm.getRawValue());
    this.router.navigateByUrl('sign-up-summary');
  }

  canSubmit(): boolean {
    return this.registerForm.valid;
  }

}
