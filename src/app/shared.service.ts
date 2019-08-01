import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public check = true;
  public username;

  constructor() { }

  saveUserName(uname: string) {
    this.username = uname;
  }

  getUserName() {
    return this.username;
  }

  saveCheckUser(ch: boolean) {
    this.check = ch;
  }

  getCheckUser() {
    return this.check;
  }
}
