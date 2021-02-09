import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pager'
})
export class PagerPipe implements PipeTransform {

  start: number;
  end: number;
  transform(value: any[], page: number, numbersOfRows:number): any[] {
    this.start = page * numbersOfRows-numbersOfRows;
    this.end = page *numbersOfRows;
    if (!Array.isArray(value) || !page) {
      return value;
    }
    return value.slice(this.start, this.end);

  };
}

