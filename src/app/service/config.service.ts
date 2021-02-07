import { Injectable } from '@angular/core';

export interface IMenuItem {
  text: string;
  link: string;
  icon?: string;
}

export interface ITableCol {
  key: string;
  text: string;
  editable?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  appName: string = 'Arrow FUN Webshop';

  menuItems: IMenuItem[] = [
    {text: 'Home', link: '/', icon: 'home'},
    {text: 'Vitaminok', link: '/cat01'},
    {text: 'Ásványi anyagok', link: '/cat02'},
    {text: 'Admin', link: '/admin'},
  ];

  tableCols: ITableCol[] = [
    {key: 'id', text: 'ID', editable: false},
    {key: 'catId', text: 'CatID', editable: true},
    {key: 'name', text: 'name', editable: true},
    {key: 'description', text: 'description', editable: true},
    {key: 'image', text: 'img', editable: true},
    {key: 'price', text: 'price', editable: true},
    {key: 'stock', text: 'stock', editable: true},
    {key: 'featured', text: 'featured', editable: true},
    {key: 'active', text: 'active', editable: true},
  ];

  constructor() { }
}
