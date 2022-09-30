import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from 'src/shared/models/account.model';
import { RegisterService } from 'src/shared/services/register.service';

@Component({
  selector: 'app-personal-form',
  templateUrl: './personal-form.component.html',
  styleUrls: ['./personal-form.component.scss']
})
export class PersonalFormComponent implements OnInit {

  personalForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.maxLength(15)
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.maxLength(15)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email ,
      Validators.maxLength(50)
    ]),
    dateOfBirth: new FormControl('', Validators.required)
  });

  constructor(
    private router: Router,
    private registerService: RegisterService
  ) { }

  ngOnInit(): void {
    const account: Account = this.registerService.account!;
    if (account) {
      this.personalForm.setValue({
        firstName: account.firstName || '',
        lastName: account.lastName || '',
        email: account.email || '',
        dateOfBirth: account.dob ? formatDate(account.dob, 'dd/MM/yyyy', 'en') : ''
      });
    }
  }

  continue(): void {
    let account: Account = this.registerService.account!;
    account.firstName = this.personalForm.value.firstName!;
    account.lastName = this.personalForm.value.lastName!;
    account.email = this.personalForm.value.email!;
    account.dob = this.parseDate(this.personalForm.value.dateOfBirth!);
    this.router.navigateByUrl('signup-summary');
  }

  canContinue(): boolean {
    return this.personalForm.valid;
  }

  parseDate(dob: string | Date): number {
    if (dob instanceof Date) {
      return dob.getTime()
    } else {
      const dobArray: number[] = dob.split('/').map((value: string) => parseInt(value));
      return new Date(dobArray[2], dobArray[1] - 1, dobArray[0]).getTime();
    }
  }

}
