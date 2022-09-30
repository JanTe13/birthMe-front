import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { Account } from '../models/account.model';

const loginCredentials = {
  username: 'user',
  password: 'password'
};

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  account: Account | null;

  constructor() { }

  login(username: string, password: string): Observable<boolean> {
    return new Observable<boolean>((subscriber: Subscriber<boolean>) => {
      if (username === loginCredentials.username && password === loginCredentials.password) {
        subscriber.next(true);
      }
      else {
        subscriber.error('Username or Password not correct.');
      }
    });
  }

  reset(): void {
    this.account = null;
  }
}
