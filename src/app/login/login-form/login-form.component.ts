import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { RegisterService } from 'src/shared/services/register.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  userForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.maxLength(15)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.maxLength(15)
    ]),
    confirmPassword: new FormControl('')
  });

  constructor(
    private router: Router,
    private registerService: RegisterService,
    private messageService: MessageService
  ) { }

  login(): void {
    this.registerService.login(this.userForm.value.username!, this.userForm.value.password!).subscribe({
      next: () => this.router.navigateByUrl('dashboard'),
      error: (error: string) => {
        this.messageService.add({
          severity:'error',
          summary:'Wrong credentials',
          detail: error
        });
      }
    });
  }

  canLogin(): boolean {
    return this.userForm.valid;
  }

  goToSignUp(): void {
    this.registerService.reset();
    this.router.navigateByUrl('signup-user');
  }

}
