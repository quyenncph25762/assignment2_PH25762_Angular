import { IProduct } from 'src/app/interface/IProduct';
import { Component } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms'
import { ProductService } from 'src/app/services/product.service';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {
  productForm = this.formBuiler.group({
    productName: ['', [Validators.required, Validators.minLength(4)]],
    imgUrl: ['', [Validators.required, Validators.minLength(4)]],
    price: [0],
    description: ''
  })
  constructor(private formBuiler: UntypedFormBuilder, private productService: ProductService, private router: Router) {

  }
  onSubmitForm() {
    const product: IProduct = {
      id: '',
      productName: this.productForm.value.productName || '',
      price: this.productForm.value.price || 0,
      imgUrl: this.productForm.value.imgUrl || '',
      description: this.productForm.value.description || ''
    }
    this.productService.createProduct(product).subscribe((data) => {
      alert("Thêm thành công!")
      this.router.navigate(['/admin/listProduct'])
    }
    )
  }
}
