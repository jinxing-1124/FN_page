import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'numberAddCommas',
})
export class NumberAddCommasPipe implements PipeTransform {
    transform(value: number): string {
      return value.toLocaleString('en-US');   
    }
}

