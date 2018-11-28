import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LottieAnimationViewModule } from 'ng-lottie';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductRelationComponent } from './product-relation/product-relation.component';
import { HomeComponent } from './home/home.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { KeysPipe } from './keys.pipe';
import { CartComponent } from './cart/cart.component';
import { SearchPipe } from './search.pipe';
import { ProductCardComponent } from './product-card/product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    ProductDetailComponent,
    ProductRelationComponent,
    HomeComponent,
    CartDetailComponent,
    KeysPipe,
    CartComponent,
    SearchPipe,
    ProductCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    LottieAnimationViewModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
