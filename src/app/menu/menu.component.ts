import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  constructor(private router: Router) {}
  ngOnInit() {
    this.router.navigate(['/products']);
  }
  products = [
    {
      name: 'Product 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      name: 'Product 2',
      description:
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      name: 'Product 3',
      description:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      name: 'Product 3',
      description:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      name: 'Product 3',
      description:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imageUrl: 'https://via.placeholder.com/150',
    },
  ];
}
