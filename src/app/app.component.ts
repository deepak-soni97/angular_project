import { Component } from '@angular/core';
import {UsersDataService} from './services/users-data.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'call-api';
  users:any;
  constructor(private userData:UsersDataService)
  {
    userData.users().subscribe((data)=>{
      console.log("data",data);
      this.users = data

      
    })
  }
  getUserFormData(data:any){
    this.userData.saveData(data).subscribe((result)=>{
    console.log(result);
      
    })
    
  }
}
