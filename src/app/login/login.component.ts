import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
// import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginId!: string;
  password!: string;
  errorMessage!: string;

  constructor(
    // private authenticationService: AuthenticationService,
    private loginService: UserService,
    private router: Router
  ) {}

  onSubmit() {
    // this.authenticationService.login(this.loginId, this.password).subscribe(
    //   () => {
    //     this.router.navigate(['/']);
    //   },
    //   (error: any) => {
    //     this.errorMessage = error;
    //   }
    // );
  }

  login() {
    this.loginService.login(this.loginId, this.password).subscribe(
      (response) => {
        // handle successful login
        console.log(response);
      },
      (error) => {
        // handle login error
        console.error(error);
      }
    );
  }
}
