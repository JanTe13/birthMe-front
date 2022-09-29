import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './register/form/form.component';
import { SummaryComponent } from './register/summary/summary.component';

const routes: Routes = [
  { path: 'sign-up-form', component: FormComponent },
  { path: 'sign-up-summary', component: SummaryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
