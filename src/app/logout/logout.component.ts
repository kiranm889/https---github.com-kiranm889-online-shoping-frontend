import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../service/user.service';

// @Component({
//   selector: 'app-logout',
//   templateUrl: './logout.component.html',
//   styleUrls: ['./logout.component.css'],
// })

@Component({
  selector: 'app-logout',
  template: `
    <div class="banner" [ngClass]="{ show: show }">
      {{ message }}
      <button class="close" (click)="closeBanner()">X</button>
    </div>
  `,
  styles: [
    `
      .banner {
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        background-color: #f44336;
        color: white;
        padding: 12px 24px;
        z-index: 9999;
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
      }
      .banner.show {
        opacity: 1;
      }
      .close {
        position: absolute;
        top: 50%;
        right: 4px;
        transform: translateY(-50%);
        background-color: transparent;
        color: white;
        border: none;
        font-size: 16px;
        cursor: pointer;
      }
    `,
  ],
})
export class LogoutComponent {
  message = 'User Logged Out !!!';
  show = true;

  closeBanner() {
    this.show = false;
    this.router.navigate(['/home']);
  }

  constructor(public userService: UserService, private router: Router) {}
  ngOnInit() {
    this.userService.logout();
  }
}
