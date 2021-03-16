import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { Cat01Component } from './page/cat01/cat01.component';
import { Cat02Component } from './page/cat02/cat02.component';
import { HomeComponent } from './page/home/home.component';
import { ProductListComponent } from './common/product-list/product-list.component';
import { FilterPipe } from './pipe/filter.pipe';
import { ProductFlipComponent } from './common/product-flip/product-flip.component';
import { ProductCardComponent } from './common/product-card/product-card.component';
import { DataEditorComponent } from './common/data-editor/data-editor.component';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { FeaturedFilterPipe } from './pipe/featured-filter.pipe';
import { AdminComponent } from './page/admin/admin.component';
import { PagerPipe } from './pipe/pager.pipe';
import { SorterPipe } from './pipe/sorter.pipe'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    Cat01Component,
    Cat02Component,
    HomeComponent,
    ProductListComponent,
    FilterPipe,
    ProductFlipComponent,
    ProductCardComponent,
    DataEditorComponent,
    FeaturedFilterPipe,
    AdminComponent,

    PagerPipe,

    SorterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
