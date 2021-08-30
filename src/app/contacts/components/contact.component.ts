import { Component, OnInit } from '@angular/core';
import { CardService } from './../../shared/sevices/card.service';
import { ICustomer } from '../../shared/models/customer.models';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  customer: ICustomer = {
    name: null,
    sureName: null,
    email: '',
    description: null
  };


  latitude = '';
  longitude = '';
  locationChosen = false;

  constructor(private cardService: CardService,
    private router: Router) { }

  ngOnInit(): void {
    this.getLocation();
  }

  // Form code

  saveCustomer(newCustomer: ICustomer): void {

    // newCustomer is object for data base exporting
    console.log(newCustomer);

    this.router.navigate(['thankfull']);
  }



  // Map code
  getLocation(): void {
    this.cardService.getLocation().subscribe((data) => {
      this.latitude = data.latitude;
      this.longitude = data.longitude;
      this.locationChosen = true;
    });
  }

  onChoseLocation(event): void {
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.locationChosen = true;
  }

}
