import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product-service';
import { ConfigService, ITableCol } from 'src/app/service/config.service';
import { SorterPipe } from '../../pipe/sorter.pipe';
import { PagerPipe } from '../../pipe/pager.pipe';




@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss']
})
export class DataEditorComponent implements OnInit {
  productList$: Observable<Product[]> = this.productService.getAll();
  cols: ITableCol[] = this.config.tableCols;
  phrase: string = '';
  filterKey: string = 'name';
  filterKeys: string[] = Object.keys(new Product());
  page: number = 1;



  columnKey:string='';

isActive1: boolean = true;
  isActive2: boolean = false;
  isActive3: boolean = false;
  isActive4: boolean = false;
  isActive5: boolean = false;



 // @Input() phrase: string;


  constructor(
    private productService: ProductService,
    private config: ConfigService,
  ) { }

  ngOnInit(): void {
  }

  onUpdate(product: Product): void {
    this.productService.update(product).subscribe(
      () => location.reload()
     // updatedUser => console.log(updatedUser)
    );
  }

  onDelete(product: Product): void {
    this.productService.remove(product).subscribe(
      () => location.reload()
     // () => console.log('deleted')
    );
  }
  onColumnSelect(key:string):void{
  this.columnKey=key;}


active(pageIn: number) {
    this.page = pageIn;  
    if(pageIn==1){

      this.isActive1 = true;
      this.isActive2 = false;
      this.isActive3 = false;
      this.isActive4 = false;
      this.isActive5 = false;
    } else if (pageIn==2){

      this.isActive1 = false;
      this.isActive2 = true;
      this.isActive3 = false;
      this.isActive4 = false;
      this.isActive5 = false;
    } else if(pageIn==3){

      this.isActive1 = false;
      this.isActive2 = false;
      this.isActive3 = true;
      this.isActive4 = false;
      this.isActive5 = false;
    } else if(pageIn==4){

      this.isActive1 = false;
      this.isActive2 = false;
      this.isActive3 = false;
      this.isActive4 = true;
      this.isActive5 = false;
    } else if(pageIn==5){

      this.isActive1 = false;
      this.isActive2 = false;
      this.isActive3 = false;
      this.isActive4 = false;
      this.isActive5 = true;
    } 
    }






}