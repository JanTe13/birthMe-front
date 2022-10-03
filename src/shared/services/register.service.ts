import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { Account } from '../models/account.model';

// TODO: Remove this object when DDBB finished
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
        this.account = new Account({
          Username: username,
          FirstName: 'Jan',
          LastName: 'Teruel',
          Email: 'jan@gmail.com',
          DateOfBirth: new Date('04/05/1995').getTime().toString()
        });
        subscriber.next(true);
      }
      else {
        subscriber.error('Username or Password not correct.');
      }
    });
  }

  createAccount(): Observable<boolean> {
    return new Observable<boolean>((subscriber: Subscriber<boolean>) => {
      subscriber.next(true);
    });
  }

  reset(): void {
    this.account = null;
  }
}
