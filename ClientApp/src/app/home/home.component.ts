import { Component, OnInit } from '@angular/core';
import { AuthorizeService } from '../../api-authorization/authorize.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { CourseService } from '../services/course.service';
import { Features } from '../Feature/feature.component';
import { Courses } from '../Course/course.component';
import { FeatureService } from '../services/feature.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public isAuthenticated: Observable<boolean>;
  public userName: Observable<string>;
  public isUserNameAvailable: boolean = false;
  public subscription: Subscription;
  public message: string;
  public features: Features[];
  public courses: Courses[];

  constructor(private authorizeService: AuthorizeService, private courseService: CourseService, private featureService: FeatureService ) { }

  ngOnInit() {
    this.isAuthenticated = this.authorizeService.isAuthenticated();
    this.userName = this.authorizeService.getUser().pipe(map(u => u && u.name));
    this.subscription = this.isAuthenticated
      .subscribe(data => this.isUserNameAvailable = data);
    this.courseService.getCourses()
      .subscribe(courses => this.courses = courses);
    this.featureService.getFeatures()
      .subscribe(features => this.features = features);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
}

