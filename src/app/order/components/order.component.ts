import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CardService } from './../../shared/sevices/card.service';
import { IShop } from './../../shared/models/shop.models';
import { Subscription } from 'rxjs';
import { ICreate } from './../../shared/models/create.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  orderForm: FormGroup;
  order: ICreate = {
    goods: '',
    description: '',
    country: '',
    city: '',
    address: '',
    paymentMethod: '',
    date: new Date()
  };

  // TODO messages and const - set to separate file in folder const, if you have model - create class with fields and after initialize it by new expression
  shopInfo: IShop[];
  description = '';
  deliveryDate: Date;
  counter = 0;
  btnDisabled = false;

  formErrors = {
    goods: '',
    description: '',
    country: '',
    city: '',
    address: '',
    paymentMethod: '',
    date: ''
  };

  validationMessages = {
    goods: {
      required: 'Goods is Required',
    },
    description: {
      required: 'Description is Required',
    },
    country: {
      required: 'Country is Required',
      minlength: 'Country must be greater then 2 characters',
      maxlength: 'Country must be less then 10 characters'
    },
    city: {
      required: 'City is required'
    },
    address: {
      required: 'Address is required'
    },
    paymentMethod: {
      required: 'Payment method is required'
    },
    date: {
      requred: 'Delivery date selection is required'
    }
  };

  constructor(
    private fb: FormBuilder,
    private cardService: CardService,
    private router: Router) { }

  ngOnInit(): void {
    this.getInfo();
    this.formBuilding();
    this.valueChangesSubscribe();
  }

  formBuilding(): void {
    this.orderForm = this.fb.group({
      goods: ['', Validators.required],
      description: ['', Validators.required],
      country: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      city: ['', Validators.required],
      address: ['', Validators.required],
      paymentMethod: ['', Validators.required],
      date: ['', Validators.required],
    });
  }

  valueChangesSubscribe(): void {
    this.subscription = this.orderForm.valueChanges.subscribe(data => {
      this.logValidationErrors(this.orderForm);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  // *********Validation messages method**********
  logValidationErrors(group: FormGroup = this.orderForm): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      this.formErrors[key] = '';
      if (abstractControl && !abstractControl.valid && (abstractControl.touched || abstractControl.dirty || abstractControl.value !== '')) {
        const messages = this.validationMessages[key];
        for (const errorKey in abstractControl.errors) {
          if (errorKey) {
            this.formErrors[key] += messages[errorKey] + ' ';
          }
        }
      }
    });
  }

  onNextClick(): void {
    this.counter < 4 ? this.counter++ : this.counter = 0;
    this.counter === 4 ? this.mapDate(this.orderForm.value.date) : false;
  }

  onPrevClick(): void {
    this.counter > 0 ? this.counter-- : this.counter = 0;
  }

  onSubmit(order: FormGroup): void {
    this.mapFormValuesToOrderModel();
    this.orderForm.reset();
    this.counter = 0;
    this.redirectToComponent();
  }

  mapDate(date: string): void {
    let currentDate = new Date();
    switch (date) {
      case 'today': currentDate.setDate(currentDate.getDate()); break;
      case 'tomorrow': currentDate.setDate(currentDate.getDate() + 1); break;
      default: currentDate = (this.orderForm.value.date);
    }
    this.deliveryDate = currentDate;
    this.orderForm.patchValue({
      date: currentDate
    });
  }
  // TODO if you order form and order are same you may use only this.form.value
  // In case of server data publish
  mapFormValuesToOrderModel(): void {
    this.order.goods = this.orderForm.value.goods;
    this.order.description = this.orderForm.value.description;
    this.order.country = this.orderForm.value.country;
    this.order.city = this.orderForm.value.city;
    this.order.address = this.orderForm.value.address;
    this.order.paymentMethod = this.orderForm.value.paymentMethod;
    this.order.date = this.deliveryDate;
  }

  getInfo(): void {
    this.subscription = this.cardService.getAll().subscribe(res => {
      this.shopInfo = this.sortArray(res) ? this.sortArray(res) : [];
    });
  }

  private sortArray(array: IShop[]): IShop[] {
    return array.sort((a, b) => b.discount - a.discount);
  }

  onChange(): void {
    let descrData = '';
    const prodName = this.orderForm.get('goods').value;
    this.subscription = this.cardService.getProductByName(prodName).subscribe(product => {
      descrData = product.description;
      this.orderForm.patchValue({
        description: descrData,
      });
    });
  }

  redirectToComponent(): void {
    this.router.navigate(['orders/welcome']);
  }

}
