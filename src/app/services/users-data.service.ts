import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  constructor(private http:HttpClient) { }
  url = 'http://localhost:8080/api/data'
  users(){
    return this.http.get(this.url)
  }

  saveData(data:any){
    return this.http.post(this.url,data)
  }
}
