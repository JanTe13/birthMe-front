import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/shared/services/register.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router, private registerService: RegisterService) {
    this.router.navigate([], { queryParams: {} });
  }

  isLogged(): boolean {
    return !this.router.url.includes('signup') && !this.router.url.includes('login');
  }

  signout(): void {
    this.registerService.reset();
    this.router.navigateByUrl('login');
  }
}
