import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { PersonalFormComponent } from './signup/personal-form/personal-form.component';
import { SummaryComponent } from './signup/summary/summary.component';
import { UserFormComponent } from './signup/user-form/user-form.component';

const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'signup-user', component: UserFormComponent },
  { path: 'signup-personal', component: PersonalFormComponent },
  { path: 'signup-summary', component: SummaryComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
