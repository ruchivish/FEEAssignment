import { Pipe, PipeTransform } from '@angular/core';
import { Course, Courses } from 'src/app/Course/course.component'
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  public course: Course;
  transform(items: Courses[], searchText: string): any[] {
    var courseNames: Course[];
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    console.log(items);
  //  courseNames = items.course;
    return items.filter(it => {
      console.log("name", it.course.name);
      return it.course.name.toLowerCase().includes(searchText);
    });
  }

}
