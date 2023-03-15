import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private baseUrl = 'http://localhost:8080/api/auth';
  // private currentUserSubject: BehaviorSubject<any>;
  // public currentUser: Observable<any>;
  constructor(private http: HttpClient) {
    // this.currentUserSubject = new BehaviorSubject<any>(
    //   JSON.parse(localStorage.getItem('currentUser'))
    // );
    // this.currentUser = this.currentUserSubject.asObservable();
  }
  // public get currentUserValue() {
  //   return this.currentUserSubject.value;
  // }
  login(loginId: string, password: string) {
    return this.http
      .post<any>(`${this.baseUrl}/login`, { loginId, password })
      .pipe(
        map((user: any) => {
          localStorage.setItem('currentUser', JSON.stringify(user));
          // this.currentUserSubject.next(user);
          return user;
        })
      );
  }
  // logout() {
  //   localStorage.removeItem('currentUser');
  //   this.currentUserSubject.next(null);
  // }
  // resetPassword(email: string) {
  //   return this.http.post<any>(`${this.baseUrl}/reset-password`, { email });
  // }

  // login(loginId: string, password: string) {}
}
