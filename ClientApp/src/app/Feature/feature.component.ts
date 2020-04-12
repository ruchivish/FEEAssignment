import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-fetch-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent {
  public features: Features[];
  public items = [];
  public pageOfItems: Array<any>;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Features[]>(baseUrl + 'feature').subscribe(result => {
      this.features = result;
      //console.log(this.features);
    }, error => console.error(error));
  }
  checked() {
    return this.features.filter(item => { return item.checked; });
  }
}

export interface Features {
  name: string;
  description: string;
  IsEnabled: boolean;
  CreatedBy: string;
  LastUpdatedBy: string;
  CreatedDate: string;
  LastUpdatedDate: string;
  checked: boolean;
}

