import { ProductService } from './../../services/product.service';
import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/interface/IProduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  @Input() newProducts: IProduct[] = []
}
