import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-fetch-course',
  templateUrl: './course.component.html'
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
}

interface Courses {
  id: string;
  course: Course;
  type: string;

}

interface Course {
  name: string;
  description: string;
  tags: Tag[];
  duration: number;

}

interface Tag {
  name: string;
}
