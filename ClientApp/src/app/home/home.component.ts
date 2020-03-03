import { Component, OnInit } from '@angular/core';
import { AuthorizeService } from '../../api-authorization/authorize.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  public isAuthenticated: Observable<boolean>;
  public userName: Observable<string>;
  public isUserNameAvailable: boolean = false;
  public subscription: Subscription;

  constructor(private authorizeService: AuthorizeService) { }

  ngOnInit() {
    this.isAuthenticated = this.authorizeService.isAuthenticated();
    this.userName = this.authorizeService.getUser().pipe(map(u => u && u.name));
    this.subscription = this.isAuthenticated
      .subscribe(data => this.isUserNameAvailable = data);
    console.log(this.isUserNameAvailable);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
}

