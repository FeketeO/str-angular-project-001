import { Component, Input, OnInit, Pipe } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product-service';
import { ConfigService, ITableCol } from 'src/app/service/config.service';
import { SorterPipe } from '../../pipe/sorter.pipe';




@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss']
})
export class DataEditorComponent implements OnInit {


  productList$: Observable<Product[]> = this.productService.getAll();
  cols: ITableCol[] = this.config.tableCols;


columnKey:string='';



  @Input() phrase : string;


  constructor(
    private productService: ProductService,
    private config: ConfigService,

  ) { }

  ngOnInit(): void {
  }

  onUpdate(product: Product) : void {
    this.productService.update(product).subscribe(
      () => location.reload()
    );
  }

  onDelete(product: Product) : void {
    this.productService.remove(product).subscribe(
      () => location.reload()
    );
  }



onColumnSelect(key:string):void{
  this.columnKey=key;
}



}
