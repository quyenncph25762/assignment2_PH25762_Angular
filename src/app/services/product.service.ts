import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interface/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API = 'http://localhost:3000/products'
  constructor(public http: HttpClient) { }

  getProduct(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.API}`)
  }
  deleteProduct(id: string): Observable<IProduct[]> {
    return this.http.delete<IProduct[]>(`${this.API}/${id}`)
  }
  createProduct(product: IProduct): Observable<IProduct[]> {
    return this.http.post<IProduct[]>(`${this.API}`, product)
  }
  updateProduct(product: IProduct, id: string): Observable<IProduct> {
    return this.http.put<IProduct>(`${this.API}/${id}`, product)
  }
  getOneProduct(id: string): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.API}/${id}`)
  }
}
