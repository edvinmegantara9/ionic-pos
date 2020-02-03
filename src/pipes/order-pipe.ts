import { Injectable, Pipe, PipeTransform } from '@angular/core';

/*
  Generated class for the OrderPipe pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'filter',
  pure: false
})
@Injectable()
export class OrderPipe implements PipeTransform {
  /*
    Takes a value and makes it lowercase.
   */
  transform(list_item: any, term: any): any {
    //check if search term is undefined
    if (term === undefined) return list_item;
    //return updated employees array
    return list_item.filter(function(item){
      return item.nama.toLowerCase().includes(term.toLowerCase());
    })
  }
}
