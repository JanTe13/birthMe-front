import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { PersonalFormComponent } from './signup/personal-form/personal-form.component';
import { SummaryComponent } from './signup/summary/summary.component';
import { UserFormComponent } from './signup/user-form/user-form.component';
import { AuthGuardService as AuthGuard } from 'src/shared/services/auth-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'signup-user', component: UserFormComponent },
  { path: 'signup-personal', component: PersonalFormComponent },
  { path: 'signup-summary', component: SummaryComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [ AuthGuard ] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
