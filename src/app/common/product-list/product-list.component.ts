import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../model/product';
import { ProductService } from '../../service/product-service';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[] = [];
  @Input() kategoria1:Product[];
  @Input() kategoria2: Product[];
  
  productList: Product[] = this.productService.list; 
  kategoria1List: Product[] = this.productList.filter(item => item.catId === 1);
  kategoria2List: Product[] = this.productList.filter(item => item.catId === 2);
  
//  phrase:string='';
 @Input() phraseString:string='';
  constructor(
    private productService: ProductService,    
  ) { }

  ngOnInit(): void {
  }
    




}