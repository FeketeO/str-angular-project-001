import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product-service';
import { ProductCardComponent } from 'src/app/common/product-card/product-card.component';


@Component({
  selector: 'app-product-flip',
  templateUrl: './product-flip.component.html',
  styleUrls: ['./product-flip.component.scss']
})
export class ProductFlipComponent implements OnInit {  
  @Input() products: Product[] = [];
  @Input() product: Product;
  @Input() productK: Product;
  @Input() productA: Product;  
    
  productList: Product[] = this.productService.list;
  
  lapozoListK: Product[] = this.productList.filter( product => product.featured )
    .sort( () => 0.5 - Math.random())
    .slice(0, 5);
    

  lapozoListA: Product[] = this.productList.filter( product => product.active )
    .sort( () => 0.5 - Math.random())
    .slice(0, 5);

  constructor(
    private productService: ProductService,    
  ) { }

  ngOnInit(): void {
  }

}
