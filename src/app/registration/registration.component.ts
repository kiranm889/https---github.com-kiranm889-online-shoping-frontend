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
  errorMessage!: string;
  invalidCredentials = false;

  constructor(private userService: UserService) {}

  onSubmit() {
    this.userService.createUser(this.user).subscribe(
      (response: any) => {
        // Handle successful registration
        console.log(response);
      },
      (error) => {
        // handle login error
        console.log(error);
        this.invalidCredentials = true;
        this.errorMessage = error.error.message;
        console.error(error);
      }
    );
  }
}
