import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'http://localhost:8080/api/v1.0/shopping';

  constructor(private http: HttpClient) {}

  checkEmailExists(email: string) {
    return this.http.get<boolean>(`${this.baseUrl}/checkEmailExists/${email}`);
  }

  checkLoginIdExists(loginId: string) {
    return this.http.get<boolean>(
      `${this.baseUrl}/checkLoginIdExists/${loginId}`
    );
  }

  createUser(user: any) {
    return this.http.post(`${this.baseUrl}/register`, user);
  }

  login(loginId: string, password: string) {
    // const body = { loginId, password };
    const url = `${this.baseUrl}/login?loginId=${loginId}&password=${password}`;
    return this.http.get<any>(url);
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser');
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user == null);
  }

  changePassword(userId: any, email: any) {
    return this.http.post(`${this.baseUrl}/forgot-password`, userId, email);
  }
}
