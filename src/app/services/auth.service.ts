import { Injectable } from '@angular/core';
import{HttpClient}  from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
   baseUrl :string = 'https://bookcart.azurewebsites.net/swagger/v1/swagger.json';


  constructor(private http: HttpClient) { }
  isLoggedIn() {

    return this.http.get<any>(this.baseUrl)
  }
  
}
