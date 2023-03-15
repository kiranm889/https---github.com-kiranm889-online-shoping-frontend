import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  loginId: string;
  password: string;
  confirmPassword: string;
  contactNumber: string;
}
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  user = {
    firstName: '',
    lastName: '',
    email: '',
    loginId: '',
    password: '',
    confirmPassword: '',
    contactNumber: '',
  };
  emailExists = false;
  loginIdExists = false;
  passwordMismatch = false;

  constructor(private userService: UserService) {}

  onSubmit() {
    // if (this.user.password !== this.user.confirmPassword) {
    //   this.passwordMismatch = true;
    //   return;
    // }
    // this.userService
    //   .checkEmailExists(this.user.email)
    //   .subscribe((exists: boolean) => {
    //     if (exists) {
    //       this.emailExists = true;
    //       return;
    //     }
    //     this.userService
    //       .checkLoginIdExists(this.user.loginId)
    //       .subscribe((exists: boolean) => {
    //         if (exists) {
    //           this.loginIdExists = true;
    //           return;
    //         }
    this.userService.createUser(this.user).subscribe((response: any) => {
      // Handle successful registration
    });
    //     });
    // });
  }
}
