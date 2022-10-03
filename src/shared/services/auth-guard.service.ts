import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from './register.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router: Router, private registerService: RegisterService) {}

  canActivate(): boolean {
    if (this.registerService.account) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
