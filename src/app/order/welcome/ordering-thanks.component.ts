import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ordering-thanks',
  templateUrl: './ordering-thanks.component.html',
  styleUrls: ['./ordering-thanks.component.css']
})
export class OrderingThanksComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onNewOrderClick(): void {
    this.router.navigate(['orders']);
  }


}
