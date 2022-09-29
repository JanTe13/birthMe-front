import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from 'src/shared/models/user.model';
import { RegisterService } from 'src/shared/services/register.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  registerUser: User | undefined;

  constructor(
    private router: Router,
    private registerService: RegisterService,
    private messageService: MessageService
  ) {
    this.registerUser = this.registerService.registerForm;
  }

  ngOnInit(): void {
  }

  back(): void {
    this.router.navigateByUrl('sign-up-form');
  }

  confirm(): void {
    this.messageService.add({
      severity:'success',
      summary:'Sign Up Completed',
      detail: `Welcome to BirthMe, ${this.registerUser?.firstName} ${this.registerUser?.lastName}`
    });
    this.router.navigateByUrl('');
  }
}
