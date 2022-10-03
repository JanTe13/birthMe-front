import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { BirthCardModule } from 'src/shared/components/birth-card/birth-card.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    BirthCardModule,
    SidebarModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    InputTextModule
  ]
})
export class DashboardModule { }
