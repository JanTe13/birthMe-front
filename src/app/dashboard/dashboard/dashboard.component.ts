import { Component, OnInit } from '@angular/core';
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

  constructor(
    private birthService: BirthService,
    private registerService: RegisterService
  ) { }

  ngOnInit(): void {
    this.birthService.loadBirthdays(this.registerService.account?.username!).subscribe({
      next: (birthdays: Birthday[]) => {
        this.calendar = birthdays;
      }
    });
  }

}
