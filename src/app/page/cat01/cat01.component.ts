import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { ProductService } from '../../service/product-service';
import { ProductListComponent } from '../../common/product-list/product-list.component';


@Component({
  selector: 'app-cat01',
  templateUrl: './cat01.component.html',
  styleUrls: ['./cat01.component.scss']
})
export class Cat01Component implements OnInit {

  phrase:string='';

  product: Product = new Product();
  productList: Product[] = this.productService.list;
  kiemelt: boolean = true;
  

  kiemeltList: Product[] = this.productList.filter(item => item);
 kategoria1List: Product[] = this.productList.filter(item => item.catId === 1);

  constructor(
    private productService: ProductService,
  ) { }

  
  ngOnInit(): void {
  }
  onChangePhrase(event:Event): void{
this.phrase = (event.target as HTMLInputElement).value;
}

}
