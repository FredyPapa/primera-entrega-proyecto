import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descripcionSexo'
})
export class DescripcionSexoPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    return value=="1"?args[0] : args[1];
  }

}
