import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CardService } from '../../shared/sevices/card.service';
import { newItem, colors, sizes, shops, formErrors, validationMessages } from './../../../assets/const/Const';
import { IShop } from './../../shared/models/shop.models';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.css']
})
export class CreateNewComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  selectedFile: any;


  array: IShop[];
  newItemForm: FormGroup;
  newItem: IShop = newItem;
  colors = colors;
  sizesValues = sizes;
  shops = shops;
  description = '';
  sizeArray = [];
  colorArray = [];
  formErrors = formErrors;
  validationMessages = validationMessages;

  constructor(private cardService: CardService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.createForm();
    this.getInfo();
    this.valueChangesSubscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  createForm(): void {
    this.newItemForm = this.fb.group({
      id: null,
      imgUrl: ['', Validators.required],
      price: ['', Validators.required],
      discount: ['', Validators.required],
      selectMain: ['', Validators.required],
      shop: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      shipping: ['', Validators.required],
      discountUntil: ['', Validators.required],
      selectNew: ['', Validators.required],
      color: ['', Validators.required],
      size: ['', Validators.required],
      review: this.fb.array([
        this.addReviewFormGroup()
      ])
    });
  }

  addReviewFormGroup(): FormGroup {
    return this.fb.group({
      author: ['', Validators.required],
      rating: ['', Validators.required],
      descText: ['', Validators.required]
    });
  }

  logValidationErrors(group: FormGroup = this.newItemForm): void {
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
      if (abstractControl instanceof FormGroup) {
        this.logValidationErrors(abstractControl);
      }
    });
  }

  valueChangesSubscribe(): void {
    this.subscription = this.newItemForm.valueChanges.subscribe(data => {
      this.logValidationErrors(this.newItemForm);
    });
  }

  getInfo(): void {
    this.subscription = this.cardService.getAll().subscribe(res => {
      this.array = this.sortArray(res) ? this.sortArray(res) : [];
    });
  }

  private sortArray(array: IShop[]): IShop[] {
    return array.sort((a, b) => b.discount - a.discount);
  }



  onChangeColor(event: any, color: string): void {
    if (event.target.checked) {
      this.colorArray.push(color);
    } else {
      this.colorArray = this.colorArray.filter((item) => {
        return item !== color;
      });
    }
  }

  onChangeSize(event: any, size: string): void {
    if (event.target.checked) {
      this.sizeArray.push(size);
    } else {
      this.sizeArray = this.sizeArray.filter(item => {
        return item !== size;
      });
    }
  }

  // Image upload
  onImageSelect(event: any): void {
    const reader = new FileReader();

    reader.onloadend = () => {
      this.selectedFile = reader.result;
      console.log(this.selectedFile);
    };

    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
    } else {
      this.selectedFile = '';
    }
  }

  // Reset image select fild
  handleReset(event: string): void {
    this.selectedFile = event;
    this.newItemForm.patchValue({
      imgUrl: this.selectedFile
    })
  }

  onSubmit(newItemForm: FormGroup): void {
    this.mapFormValueTonewItemModel();
    if (this.checkIfFormValid()) {
      this.subscription = this.cardService.addNewProduct(newItem).subscribe(() => {
        this.router.navigate(['card']);
      });
    }
  }

  checkIfFormValid(): boolean {
    return this.newItemForm.valid;
  }

  addReview(): void {
    (this.newItemForm.get('review') as FormArray).push(this.addReviewFormGroup());
  }

  mapFormValueTonewItemModel(): void {
    this.newItem.id = this.array.length + 1;
    this.newItem.imgUrl = this.selectedFile;
    this.newItem.price = this.newItemForm.value.price;
    this.newItem.discount = this.newItemForm.value.discount;
    this.newItem.main = this.newItemForm.value.selectMain;
    this.newItem.shop = this.newItemForm.value.shop;
    this.newItem.name = this.newItemForm.value.name;
    this.newItem.description = this.newItemForm.value.description;
    this.newItem.shipping = this.newItemForm.value.shipping;
    this.newItem.discountUntil = this.newItemForm.value.discountUntil;
    this.newItem.new = this.newItemForm.value.selectNew;
    this.newItem.color = this.colorArray;
    this.newItem.size = this.sizeArray;
    this.newItem.review = this.newItemForm.value.review;
    console.log(newItem);
  }

}
