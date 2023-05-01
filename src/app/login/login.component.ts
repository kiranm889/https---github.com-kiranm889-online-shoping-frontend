import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginId!: string;
  password!: string;
  errorMessage!: string;
  invalidCredentials = false;
  constructor(private loginService: UserService, private router: Router) {}

  onSubmit() {}

  login() {
    this.loginService.login(this.loginId, this.password).subscribe(
      (response) => {
        // handle successful login
        console.log(response);
        this.router.navigate(['/menu']);
        sessionStorage.setItem('authenticatedUser', this.loginId);
      },
      (error) => {
        // handle login error
        console.log(error);
        this.invalidCredentials = true;
        console.error(error);
      }
    );
  }
  email = 'lion@gmail.com';
  forgotPassword() {
    this.loginService.changePassword(this.loginId, this.email);
  }
}
