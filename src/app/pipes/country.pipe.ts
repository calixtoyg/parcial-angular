import { Pipe, PipeTransform } from '@angular/core';
import {Movie} from '../intrefaces/movie';
import {Actor} from '../intrefaces/actor';

@Pipe({
  name: 'country'
})
export class CountryPipe implements PipeTransform {

  transform(value: Actor[] | Movie[], ...args: unknown[]): unknown {
    if (args[0]) {
      // @ts-ignore
      return value?.filter(each => each.country === args[0]);
    }
    return value;
  }

}
