import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  /*  transform(value: any[], phrase: string, key: string = 'name'): any[]{
  
     if(!Array.isArray(value) || !phrase || !key ){
       return value;
     }

     phrase=(''+phrase).toLowerCase();
     
     return value.filter(item=>{
       const iKey:string=(''+item[key]).toLowerCase();
       return iKey.includes(phrase);
       });
} */
  transform(value: any[], key: string, phrase: string | number | boolean): any[] {

    if (!Array.isArray(value) || !phrase || !key) {
      return value;
    }

    phrase = typeof phrase !== "number" ? ('' + phrase).toLowerCase() : phrase;

    return value.filter(item => {
      if (typeof item[key] === 'number' && typeof phrase === 'number') {
        return item[key] === phrase;
      }

      return ('' + item[key]).toLowerCase().includes((phrase as string));
    });
  }
}

