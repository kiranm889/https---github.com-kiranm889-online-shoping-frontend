import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/service/products.service';

export class Todo {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public price: number,
    public features: string,
    public status: string,
    public done: boolean,
    public targetDate: Date,
    public imageUrl: string
  ) {}
}
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  message: string | undefined;
  todos: Todo[] | undefined;

  constructor(
    private productservice: ProductsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.productservice.retrieveAllTodos().subscribe((response) => {
      console.log(response);
      this.todos = response;
    });
  }

  deleteProduct(productName: string, id: number) {
    console.log(`delete Todo ${id}`);
    this.productservice.deleteTodo(productName, id).subscribe((response) => {
      console.log(response);
      this.message = `Delete of Todo ${id} SuccessFul !`;
    });
  }

  updateProduct(productName: string, id: number) {
    // console.log(`update ${id}`);
    // this.router.navigate(['todos', id]);
  }

  addTodo() {
    this.router.navigate(['/productsForm']);
  }
}
