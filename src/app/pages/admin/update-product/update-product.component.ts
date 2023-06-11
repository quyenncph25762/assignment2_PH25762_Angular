import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/interface/IProduct';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent {
  product!: IProduct
  productForm = this.formBuiler.group(
    {
      productName: ["", [Validators.required, Validators.minLength(4)]],
      price: [0],
      imgUrl: ["", [Validators.required, Validators.minLength(1)]],
      description: '',
    }
  )
  constructor(private productService: ProductService, private formBuiler: FormBuilder, private router: ActivatedRoute, private routerLink: Router) {
    this.router.paramMap.subscribe((param) => {
      const id = String(param.get('id'));
      this.productService.getOneProduct(id).subscribe((data) => {
        this.product = data
        this.productForm.patchValue({
          productName: data.productName,
          price: data.price,
          imgUrl: data.imgUrl,
          description: data.description
        })
        // console.log(data);

      }, (error) => console.log(error))
    })
  }
  onHandleUpdate() {
    if (this.productForm.valid) {
      const product: IProduct = {
        id: "",
        productName: this.productForm.value.productName || "",
        imgUrl: this.productForm.value.imgUrl || "",
        price: this.productForm.value.price || 0,
        description: this.productForm.value.description || "",
      }

      this.router.paramMap.subscribe((params) => {
        const id = String(params.get("id"))
        this.productService.updateProduct(product, id).subscribe((product) => {
          alert("update thành công")
          this.routerLink.navigate(['/admin/listProduct'])
        })
      })
    }
  }
}
