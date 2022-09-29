
export class User {
  private _firstName: string;
  private _lastName: string;
  private _email: string;
  private _dob: number;
  private _username: string;
  private _password: string;

  constructor(user: any) {
    this._firstName = user.firstName;
    this._lastName = user.lastName;
    this._email = user.email;
    this._username = user.username;
    this._password = user.password;

    if (user.dateOfBirth instanceof Date) {
      this._dob = user.dateOfBirth.getTime()
    } else {
      const dobArray: number[] = user.dateOfBirth.split('/').map((value: string) => parseInt(value));
      this._dob = new Date(dobArray[2], dobArray[1] - 1, dobArray[0]).getTime();
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