import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Query } from '../hrquery/hrquery.component';


@Injectable({
  providedIn: 'root'
})
export class QueryService {

  constructor(private http: HttpClient) { }

  postQuery(query){
    return this.http.post(`http://localhost:8080/addQuery`,query);
  }

  getQueries(){
    return this.http.get<Query[]>(`http://localhost:8080/getAllUnansweredQueries`);
  }
}
