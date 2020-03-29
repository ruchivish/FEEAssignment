import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-fetch-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent{
  public courses: Courses[];
  public course: Course;
  public tags: Tag[];
 public items = [];
  public pageOfItems: Array<any>;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Courses[]>(baseUrl + 'course').subscribe(result => {
      this.courses = result;
      //console.log(this.courses);
    }, error => console.error(error));
  }
  checked() {
    return this.courses.filter(item => { return item.checked; });
  }
}

export interface Courses {
  id: string;
  course: Course;
  type: string;
  checked: boolean;

}

export interface Course {
  name: string;
  description: string;
  tags: Tag[];
  duration: number;
}

interface Tag {
  name: string;
}
