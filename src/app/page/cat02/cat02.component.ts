import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/model/category';
import { Product } from '../../model/product';
import { ProductService } from '../../service/product-service';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-cat02',
  templateUrl: './cat02.component.html',
  styleUrls: ['./cat02.component.scss']
})
export class Cat02Component implements OnInit {

  phrase:string='';
  products: Observable<Product[]> = this.productService.getAll();
  category: Category = this.categoryService.list[1];
  
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
  ) { }

  ngOnInit(): void {
  }
onChangePhrase(event:Event): void{
this.phrase = (event.target as HTMLInputElement).value;
}
}

