import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from 'src/shared/models/account.model';
import { RegisterService } from 'src/shared/services/register.service';
import { equalPasswordsValidator } from 'src/shared/validators/equal-passwords.directive';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  userForm = new FormGroup({
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
    const account: Account | null = this.registerService.account;
    if (account) {
      this.userForm.setValue({
        username: account.username,
        password: account.password,
        confirmPassword: account.password
      });
    }
  }

  continue(): void {
    const account: Account = this.registerService.account || new Account();
    account.username = this.userForm.value.username!;
    account.password = this.userForm.value.username!;
    this.registerService.account = account;
    this.router.navigateByUrl('signup-personal');
  }

  canContinue(): boolean {
    return this.userForm.valid;
  }

}
