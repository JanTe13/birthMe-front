import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BirthCardComponent } from './birth-card.component';



@NgModule({
  declarations: [
    BirthCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BirthCardComponent
  ]
})
export class BirthCardModule { }
