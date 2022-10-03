import { Component, Input, OnInit } from '@angular/core';
import { intlFormatDistance, differenceInCalendarYears } from 'date-fns';
import { Birthday } from 'src/shared/models/birthday.model';

@Component({
  selector: 'app-birth-card',
  templateUrl: './birth-card.component.html',
  styleUrls: ['./birth-card.component.scss']
})
export class BirthCardComponent implements OnInit {

  @Input() birth: Birthday;

  date: Date;
  distanceDate: string;
  age: number;

  constructor() { }

  ngOnInit(): void {
    this.date = new Date(this.birth.date);
    this.distanceDate = intlFormatDistance(
      new Date(this.birth.date).setFullYear(new Date().getFullYear()),
      new Date(),
      { unit: 'day' }
    );
    this.age = differenceInCalendarYears(new Date(), this.date);
  }

}
