import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Courses, Course } from '../Course/course.component';

@Injectable({ providedIn: 'root' })

export class CourseService {
  public courses: Courses[];

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  public getCourses(): Observable<Courses[]> {
    return this.http.get<Courses[]>(this.baseUrl + 'course');
  }

}
