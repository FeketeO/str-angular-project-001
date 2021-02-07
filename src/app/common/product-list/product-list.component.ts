import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../model/product';
import { ProductService } from '../../service/product-service';
import { Category } from '../../model/category';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[] = [];
  @Input() category1List: Product[];
  @Input() category2List: Product[];

  productList$: Observable<Product[]> = this.productService.getAll();

  @Input() phraseString: string = '';
  constructor(
    private productService: ProductService,
  ) { }

  @Input() categoria:number=0;

  ngOnInit(): void {
  }





}