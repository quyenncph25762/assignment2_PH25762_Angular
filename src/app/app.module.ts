import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutClientComponent } from './components/layouts/layout-client/layout-client.component';
import { LayoutAdminComponent } from './components/layouts/layout-admin/layout-admin.component';
import { HomeComponent } from './pages/home/home.component';
import 'flowbite';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { SigninComponent } from './pages/signin/signin.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ListProductComponent } from './pages/admin/list-product/list-product.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { NavAdminComponent } from './components/layouts/layout-admin/nav-admin/nav-admin.component';
import { AsideAdminComponent } from './components/layouts/layout-admin/aside-admin/aside-admin.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { CreateProductComponent } from './pages/admin/create-product/create-product.component';
import { UpdateProductComponent } from './pages/admin/update-product/update-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutClientComponent,
    LayoutAdminComponent,
    HomeComponent,
    ProductListComponent,
    SigninComponent,
    RegisterComponent,
    DashboardComponent,
    ListProductComponent,
    ProductDetailComponent,
    NavAdminComponent,
    AsideAdminComponent,
    NotFoundPageComponent,
    CreateProductComponent,
    UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
