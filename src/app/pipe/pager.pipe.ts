import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pager'
})
export class PagerPipe implements PipeTransform {

  start: number;
  end: number;
  transform(value: any[], page: number): any[] {
    this.start = page * 10-9;
    this.end = page *10;
    if (!Array.isArray(value) || !page) {
      return value;
    }
    return value.slice(this.start, this.end);

  };
}

