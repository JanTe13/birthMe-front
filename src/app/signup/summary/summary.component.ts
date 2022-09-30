import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Account } from 'src/shared/models/account.model';
import { RegisterService } from 'src/shared/services/register.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  account: Account;

  constructor(
    private router: Router,
    private registerService: RegisterService,
    private messageService: MessageService
  ) {
    this.account = this.registerService.account!;
  }

  ngOnInit(): void {
  }

  confirm(): void {
    this.messageService.add({
      severity:'success',
      summary:'Sign Up Completed',
      detail: `Welcome to BirthMe, ${this.account?.username}!`
    });
    this.router.navigateByUrl('');
  }
}
