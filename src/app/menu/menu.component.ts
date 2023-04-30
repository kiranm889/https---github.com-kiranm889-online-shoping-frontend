import { Component, EventEmitter, Output } from '@angular/core';
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
  imageUrl!: 'assets/images/plant1.jpg';
  searchQuery: string = '';
  searchResults: Todo[] | undefined;
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

  onSearch(query: string) {
    if (query.length >= 3) {
      this.searchResults = this.todos;
      // Filter searchResults based on query
      this.searchResults = this.searchResults?.filter((item) => {
        return item.name.toLowerCase().includes(query.toLowerCase());
      });
    } else {
      this.searchResults = [];
    }
  }
}
