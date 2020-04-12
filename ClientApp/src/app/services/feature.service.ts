import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Features } from '../Feature/feature.component';

@Injectable({ providedIn: 'root' })

export class FeatureService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  public getFeatures(): Observable<Features[]> {
    return this.http.get<Features[]>(this.baseUrl + 'feature');
  }

}
