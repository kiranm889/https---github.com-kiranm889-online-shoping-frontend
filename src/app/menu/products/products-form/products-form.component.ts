import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css'],
})
export class ProductsFormComponent {
  productName!: string;
  productDescription!: string;
  productPrice!: number;
  productFeatures!: string;
  productStatus!: string;

  constructor(
    private http: HttpClient,
    private productService: ProductsService
  ) {}

  submitProduct() {
    const payload = {
      name: this.productName,
      description: this.productDescription,
      price: this.productPrice,
      features: this.productFeatures,
      status: this.productStatus,
    };

    this.productService.submitProduct(payload);
  }
}
