import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';
import { CourseComponent } from './Course/course.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipe } from './Course/filter.pipe';
import { FilterbycoursePipe} from './Course/filterByCourse.pipe';
import { FilterfeaturePipe } from './Feature/filterfeature.pipe';
import { FilterbyfeaturePipe } from './Feature/filterbyfeature.pipe';
import { FeatureComponent } from './Feature/feature.component';
import { CourseService } from './services/course.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    CourseComponent,
    FeatureComponent,
    FilterPipe,
    FilterbycoursePipe,
    FilterfeaturePipe,
    FilterbyfeaturePipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    CommonModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    ApiAuthorizationModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent, canActivate: [AuthorizeGuard] },
      { path: 'fetch-course', component: CourseComponent, canActivate: [AuthorizeGuard] },
      { path: 'fetch-feature', component: FeatureComponent, canActivate: [AuthorizeGuard] },
    ])
  ],
  providers: [
    CourseService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
