import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product-service';
import { ProductListComponent } from '../product-list/product-list.component';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})

export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  @Input() products: Product[];
  productList: Product[] = this.productService.list;

  @Input() phraseString:string='';

  phrase:string='';

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
  }
  
onChangePhrase(event:Event): void{
this.phrase = (event.target as HTMLInputElement).value;
}
}