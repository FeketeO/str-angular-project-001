import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/model/category';
import { Product } from '../../model/product';
import { ProductService } from '../../service/product-service';
import { CategoryService } from 'src/app/service/category.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-cat01',
  templateUrl: './cat01.component.html',
  styleUrls: ['./cat01.component.scss']
})
export class Cat01Component implements OnInit {
  
  phrase: string = '';
  products: Observable<Product[]> = this.productService.getAll().pipe(
    map(products=>products.filter(Product=>Product.catId===1))
  );
  category: Category = this.categoryService.list[0];

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
  ) { }


  ngOnInit(): void {
  }
  onChangePhrase(event: Event): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }

}
