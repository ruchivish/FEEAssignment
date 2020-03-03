import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-course',
  templateUrl: './course.component.html'
})
export class CourseComponent {
  public courses: Course[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Course[]>(baseUrl + 'course').subscribe(result => {
      this.courses = result;
      console.log(this.courses);
    }, error => console.error(error));
  }
}

interface Course {
  title: string;
  description: string;
}
