import { Component, Input, OnInit } from '@angular/core';
import { Birthday } from 'src/shared/models/birthday.model';

@Component({
  selector: 'app-birth-card',
  templateUrl: './birth-card.component.html',
  styleUrls: ['./birth-card.component.scss']
})
export class BirthCardComponent implements OnInit {

  @Input() birth: Birthday;

  date: Date;

  constructor() { }

  ngOnInit(): void {
    this.date = new Date(this.birth.date);
  }

}
