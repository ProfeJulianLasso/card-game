import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hola',
})
export class HolaPipe implements PipeTransform {
  transform(value: string): string {
    return `Hola ${value}`;
  }
}
