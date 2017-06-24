import { Content } from './../models/customized';
import {Http} from '@angular/http';
import {Injectable} from '@angular/core';

@Injectable()
export class ContentService {
   bikes:  Content[]=[];
 clothing:  Content[]=[];
 components:  Content[]=[];
  Canada:  Content[]=[];
 USA:  Content[]=[];
 Russia:  Content[]=[];
 Vishal:  Content[]=[];
 Clinton:  Content[]=[];
 Pavan:  Content[]=[];
 selected:string;
 
  constructor(public http: Http) {
  }

  getContent() {                                                                                           
    // return this.http.get('/dashboard/getDashboardDetails')
    // .map(res => <Content[]> res.json());

     return this.http.get('/assets/data/data.json')
    .map(res => <Content[]> res.json().data);
  }

}
