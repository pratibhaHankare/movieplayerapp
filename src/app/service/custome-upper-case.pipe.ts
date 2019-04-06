import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customeUpperCase'
})
export class CustomeUpperCasePipe implements PipeTransform {

  transform(value: string, args?: string[]): any {
    if (!value) {
        return value;
    }
    return value.replace(/\w\S*/g, function (str) {
        return str.toUpperCase();
    });
}

}
