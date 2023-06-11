import { ProductService } from './../../services/product.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interface/IProduct';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  product: IProduct = {
    id: '',
    productName: '',
    price: 0,
    imgUrl: '',
    description: ''
  }
  constructor(private route: ActivatedRoute, private productService: ProductService) {
    this.route.paramMap.subscribe((param) => {
      let id = String(param.get('id'))
      this.productService.getOneProduct(id).subscribe(product => {

      })
    })
  }
}
