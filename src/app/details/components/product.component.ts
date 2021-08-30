import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IShop } from '../../shared/models/shop.models';
import { CardService } from '../../shared/sevices/card.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  product: IShop;
  starQuantity = new Array(5, 4, 3, 2, 1);
  faStar = faStar;
  faCartPlus = faCartPlus;
  faPencilAlt = faPencilAlt;

  constructor(private activatedRoute: ActivatedRoute, private cardService: CardService) { }

  ngOnInit(): void {
    this.subscription = this.activatedRoute.paramMap.subscribe(params => {
      const id = +params.get('id');
      this.getProduct(id);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private getProduct(productId: number): void {
    this.cardService.getProduct(productId).subscribe(product => {
      this.product = product;

    }, (err) => console.log(err));
  }

}
