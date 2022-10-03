import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { Birthday } from '../models/birthday.model';

@Injectable({
  providedIn: 'root'
})
export class BirthService {

  constructor() { }

  loadBirthdays(username: string): Observable<Birthday[]> {
    return new Observable<Birthday[]>((subscriber: Subscriber<Birthday[]>) => {
      subscriber.next([
        new Birthday({
          Date: new Date('09/27/2007').getTime(),
          FirstName: 'Meritxell',
          LastName: 'De Febrer',
          Nickname: 'Txell'
        }),
        new Birthday({
          Date: new Date('10/03/1995').getTime(),
          FirstName: 'Edgar',
          LastName: 'Ripoll'
        }),
        new Birthday({
          Date: new Date('10/28/1995').getTime(),
          FirstName: 'Marc',
          LastName: 'Martínez'
        }),
        new Birthday({
          Date: new Date('10/29/2001').getTime(),
          FirstName: 'Júlia',
          LastName: 'Gibert'
        }),
        new Birthday({
          Date: new Date('10/28/1995').getTime(),
          FirstName: 'Maria',
          LastName: 'Puig'
        }),
      ]);
    });
  }
}
