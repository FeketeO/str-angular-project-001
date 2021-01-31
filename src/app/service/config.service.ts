import { Injectable } from '@angular/core';

export interface IMenuItem {
  text: string;
  link: string;
  icon?: string;
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
  ];

  constructor() { }
}
