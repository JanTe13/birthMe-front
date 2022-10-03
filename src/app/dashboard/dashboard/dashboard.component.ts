import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Birthday } from 'src/shared/models/birthday.model';
import { BirthService } from 'src/shared/services/birth.service';
import { RegisterService } from 'src/shared/services/register.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  calendar: Birthday[] = [];
  addBirthdayOpen: boolean = false;
  birthdayForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.maxLength(15)
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.maxLength(15)
    ]),
    nickname: new FormControl('', Validators.maxLength(15)),
    dateOfBirth: new FormControl('', Validators.required)
  });

  constructor(
    private birthService: BirthService,
    private registerService: RegisterService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.birthService.loadBirthdays(this.registerService.account?.username!).subscribe({
      next: (birthdays: Birthday[]) => {
        this.calendar = birthdays;
      }
    });
  }

  openAddBirthday(): void {
    this.addBirthdayOpen = true;
  }

  addBirthday(): void {
    this.closeAddBirthday();
    this.addBirthdayOpen = false;
    this.messageService.add({
      severity:'success',
      summary:'Birthday added'
    });
  }

  canAddBirthday(): boolean {
    return this.birthdayForm.valid;
  }

  closeAddBirthday(): void {
    this.birthdayForm.reset();
  }

}
