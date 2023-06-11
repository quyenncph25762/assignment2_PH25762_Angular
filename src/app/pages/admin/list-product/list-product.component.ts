import { ProductService } from './../../../services/product.service';
import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/IProduct';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent {
  products: IProduct[] = []
  constructor(private productService: ProductService) {
    this.productService.getProduct().subscribe(data => { this.products = data }, error => console.log(error.message)
    )
  }

  removeProduct(id: string) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter(product => product.id !== id)
    })
  }
}
