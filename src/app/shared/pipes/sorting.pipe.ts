import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {

  transform(value: any[], fieldName: any, reverse: boolean): any {
    const array: any[] = (value || []).sort((a: any, b: any): number => {
      return a[fieldName] > b[fieldName] ? 1 : -1;
    });
    if (reverse) {
      return array.reverse();
    }
    return array;
  }

}
