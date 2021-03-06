import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'featuredFilter'
})
export class FeaturedFilterPipe implements PipeTransform {

  transform(value: any[], key: string): any[] {
    if (!Array.isArray(value) || !key) {
      return value;
    }

    return value
      .filter(item => (item[key]))
      .slice(0, 5);
  };
}

