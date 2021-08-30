import { Component, OnInit, OnDestroy } from '@angular/core';
import { CardService } from '../../shared/sevices/card.service';
import { IShop } from '../../shared/models/shop.models';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  array: IShop[];
  message = 'Prepay';

  constructor(private cardService: CardService, private router: Router) {

  }

  ngOnInit(): void {
    this.getInfo();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getInfo(): void {
    this.subscription = this.cardService.getAll().subscribe(res => {
      this.array = this.sortArray(res) ? this.sortArray(res) : [];
    });
  }

  private sortArray(array: IShop[]): IShop[] {
    return array.sort((a, b) => b.discount - a.discount);
  }

  redirectToComponent(elementId: number): void {
    this.router.navigate(['/product', elementId]);
  }

}
