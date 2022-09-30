import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { NavigationModule } from 'src/shared/components/navigation/navigation.module';
import { PersonalFormComponent } from './personal-form/personal-form.component';
import { SummaryComponent } from './summary/summary.component';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  declarations: [
    UserFormComponent,
    SummaryComponent,
    PersonalFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    CalendarModule,
    TableModule,
    NavigationModule
  ]
})
export class SignupModule { }
