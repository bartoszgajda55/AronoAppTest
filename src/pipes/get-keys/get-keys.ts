import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getKeys',
})
export class GetKeysPipe implements PipeTransform {
  transform(value: {}): string[] {
    if (!value) {
      return [];
    }
    return Object.keys(value);
  }
}
