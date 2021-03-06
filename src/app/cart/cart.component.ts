import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { WordpressService } from '../services/wordpress.service';
import { PageTransitionService } from '../services/page-transition.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  cart: any;
  cartTotals: any;

  constructor(
    private wp: WordpressService,
    private titleService: Title,
    public pageTransition: PageTransitionService,
  ) {}

  ngOnInit() {
    this.wp.cart.subscribe(response => (this.cart = response));
    this.wp.cartTotals.subscribe(response => (this.cartTotals = response));
    this.titleService.setTitle('Cart - Reins');
  }

  ngOnDestroy() {
    this.titleService.setTitle('Reins');
  }
}
