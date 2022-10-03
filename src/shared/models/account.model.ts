interface AccountJson {
  FirstName: string;
  LastName: string;
  Email: string;
  DateOfBirth: string;
  Username: string;
}

export class Account {
  private _firstName: string;
  private _lastName: string;
  private _email: string;
  private _dob: number;
  private _username: string;
  private _password: string;

  constructor(account?: AccountJson) {
    if (account) {
      this._firstName = account.FirstName;
      this._lastName = account.LastName;
      this._email = account.Email;
      this._username = account.Username;
      this._dob = parseInt(account.DateOfBirth);
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

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get dob(): number {
    return this._dob;
  }

  set dob(value: number) {
    this._dob = value;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }
}