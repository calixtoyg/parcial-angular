import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'country'
})
export class CountryPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    console.log(args[0])
    console.log(args[0])
    console.log(args[0])
    console.log(args[0])
    console.log(args[0])
    if (args[0]) {
      return value?.filter(each => each.country === args[0]);
    }
    return value;
  }

}
