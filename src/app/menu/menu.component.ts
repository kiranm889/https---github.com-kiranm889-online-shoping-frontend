import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../service/products.service';
import { Todo } from './products/products.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  todos: Todo[] | undefined;

  constructor(
    private router: Router,
    private productservice: ProductsService
  ) {}

  ngOnInit() {
    // this.router.navigate(['/products']);
    this.productservice.retrieveAllTodos().subscribe((response) => {
      console.log(response);
      this.todos = response;
    });
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
