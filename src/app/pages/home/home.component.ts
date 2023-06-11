import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interface/IProduct';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: IProduct[] = []
  public productSearch = ""
  constructor(private productService: ProductService) {

  }
  public newProducts: IProduct[] = []

  public ngOnInit(): void {
    this.productService.getProduct().subscribe(data => {
      this.products = data;
      this.filterProduct();
    },
      error => console.log(error.message))
  }
  filterProduct(): void {
    if (this.productSearch.length === 0) {
      this.newProducts = this.products
    } else {
      this.newProducts = this.products.filter(product =>
        product.productName.toLowerCase()
          .includes(this.productSearch.toLowerCase())
      )
    }
  }
}
