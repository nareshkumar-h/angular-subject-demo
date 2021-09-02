import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  user : Observable<any>;

  constructor(private authService: AuthService) {
    this.user =  this.authService.loginSubject;
  }

  ngOnInit(): void {
  }


  login(){
    //let user = { id: 1, name:"Naresh", email:"n@gmail.com", role:"USER"};
    const user = new User(1,"Naresh","USER")
    this.authService.storeLogin(user);
  }

  admin(){
    //let user = { id: 1, name:"Naresh", email:"n@gmail.com", role:"USER"};
    const user = new User(1,"Naresh","ADMIN")
    this.authService.storeLogin(user);
  }
}
