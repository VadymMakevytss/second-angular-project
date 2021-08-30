import { Injectable } from '@angular/core';
import { dbData } from '../../../assets/dbData';
import { of, Observable } from 'rxjs';


import { HttpClient } from '@angular/common/http';
import { Map } from '../models/map.models';
import { IShop } from './../models/shop.models';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  array: IShop[];

  constructor(private http: HttpClient) {
    this.array = dbData;
  }

  getLocation(): Observable<Map> {
    return this.http.get<Map>('http://api.ipapi.com/api/check?access_key=b776e23952610e449ee66d9529903af7')
  }

  getAll(): Observable<IShop[]> {
    return of(this.array);
  }

  getProduct(productId: number): Observable<IShop> {
    return of(this.array.find(elem => elem.id === productId));
  }

  getProductByName(productName: string): Observable<IShop> {
    return of(this.array.find(elem => elem.name = productName));
  }

  addNewProduct(newItem: IShop): Observable<any> {
    return of(this.array.push(newItem));
  }

}
