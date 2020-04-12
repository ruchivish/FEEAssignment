import { Pipe, PipeTransform } from '@angular/core';
import { Features } from './feature.component';
@Pipe({
  name: 'filterfeature'
})
export class FilterfeaturePipe implements PipeTransform {
  transform(items: Features[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    console.log(items);
  //  courseNames = items.course;
    return items.filter(it => {
      console.log("name", it.name);
      return it.name.toLowerCase().includes(searchText);
    });
  }

}
