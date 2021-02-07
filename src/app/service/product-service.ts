import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  serverUrl: string = 'http://localhost:3000/products';

  constructor(
    private http: HttpClient,
  ) { }

  getAll():Observable<Product[]>{    
    return this.http.get<Product[]>(this.serverUrl);
  }

  get(product:Product):Observable<Product>{    
    return this.http.get<Product>(`${this.serverUrl}/${product.id}`);
  }

  /* create(product:Product):Observable<Product>{      
    return this.http.post<Product>(this.serverUrl,product);
  } */

  remove(product:Product):Observable<Product>{    
    return this.http.delete<Product>(`${this.serverUrl}/${product.id}`);
  }

  update(product:Product):Observable<Product>{     
    return this.http.patch<Product>(`${this.serverUrl}/${product.id}`,product);
  }
}
