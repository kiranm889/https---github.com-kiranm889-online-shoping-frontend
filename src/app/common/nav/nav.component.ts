import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  constructor(public userService: UserService, private router: Router) {}

  adminCheck() {
    if (this.userService.getLoggedInUser() == 'lion123') {
      console.log(this.userService.getLoggedInUser());
      this.router.navigate(['/products']);
    } else {
    }
  }
}
