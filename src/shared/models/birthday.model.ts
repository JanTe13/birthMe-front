interface BirthdayJson {
  Date: number;
  FirstName: string;
  LastName: string;
  Nickname?: string
}

export class Birthday {
  private _date: number;
  private _firstName: string;
  private _lastName: string;
  private _nickname: string

  constructor(birthday?: BirthdayJson) {
    if (birthday) {
      this._firstName = birthday.FirstName;
      this._lastName = birthday.LastName;
      this._date = birthday.Date;
      this._nickname = birthday.Nickname || '';
    }
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get date(): number {
    return this._date;
  }

  set dob(value: number) {
    this._date = value;
  }

  get nickname(): string {
    return this._nickname;
  }

  set nickname(value: string) {
    this._nickname = value;
  }
}