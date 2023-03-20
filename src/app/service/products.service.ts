import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../menu/products/products.component';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private baseUrl = 'http://localhost:8080/api/v1.0/shopping';
  constructor(private http: HttpClient) {}

  retrieveAllTodos() {
    return this.http.get<Todo[]>(`${this.baseUrl}/all`);
    // console.log('Execute hello world Bean Service');
  }

  deleteTodo(username: string, id: number) {
    return this.http.delete(`${this.baseUrl}/${username}/delete/${id}`);
  }
}
