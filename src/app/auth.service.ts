import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  saveUserData(userData: any) {
    sessionStorage.setItem('userData', JSON.stringify(userData));
  }

  getUserData() {
    const userData = sessionStorage.getItem('userData');
    return userData ? JSON.parse(userData) : null;
  }

  logout() {
    sessionStorage.removeItem('userData');
  }

  getToken() {
    const userData = this.getUserData();
    return userData ? userData.jwtToken : null;
  }

  getUserId() {
    const userData = this.getUserData();
    return userData ? userData.id : null;
  }

}
