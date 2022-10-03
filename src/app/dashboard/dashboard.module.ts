import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { BirthCardModule } from 'src/shared/components/birth-card/birth-card.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    BirthCardModule
  ]
})
export class DashboardModule { }
