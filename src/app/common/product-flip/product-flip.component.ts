import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product-service';

@Component({
  selector: 'app-product-flip',
  templateUrl: './product-flip.component.html',
  styleUrls: ['./product-flip.component.scss']
})
export class ProductFlipComponent implements OnInit {  
  @Input() products: Product[] = [];
  @Input() product: Product;
  @Input() productK: Product[];
  @Input() productA: Product[];  
    
  productList$:Observable<Product[]> = this.productService.getAll();
     
  constructor(
    private productService: ProductService,    
  ) { }

  ngOnInit(): void {
  }

}
