import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  constructor(private http: HttpClient) { }

  sendResponse(response){
    return this.http.post(`http://localhost:8080/respond`,response);
  }
}
