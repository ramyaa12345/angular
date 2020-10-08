import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private http:HttpClient
  ) { }

  executeRegistrationService(data: FormData){
    return this.http.post(`http://localhost:8080/employee`,data);
  }

  executeEmployeeLoginService(data: FormData){
    return this.http.post(`http://localhost:8080/employee`,data);
  }

  executeHrLoginService(data: FormData){
    return this.http.post(`http://localhost:8080/hr`,data);
  }

  getByEmail(email){
    return this.http.get(`http://localhost:8080/get/${email}`)
  }

  getByEmailHR(email){
    return this.http.get(`http://localhost:8080/getHR/${email}`)
  }
}
