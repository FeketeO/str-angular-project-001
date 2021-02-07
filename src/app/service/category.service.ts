import { Injectable } from '@angular/core';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  list: Category[] = [
    {id:1, name:"Vitaminok", description: 'A vitamin, B vitamin, C vitamin, D vitamin, E vitamin'},
    {id:2, name:"Ásványi anyagok", description: 'Kalcium, Magnézium, Vas, Jód, Szelén'},
  ];

  constructor() { }
}
