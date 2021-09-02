import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //1. Subject - In header, we are going to listen this data
  loginSubject = new BehaviorSubject<any>(this.getUser());

  constructor() { }


  storeLogin(user:User){

    localStorage.setItem("LOGGED_IN_USER", JSON.stringify(user));
    this.loginSubject.next(user);
  }

  logout(){
    localStorage.clear();
    this.loginSubject.next(null);
  }

  getUser(){

    let user = localStorage.getItem("LOGGED_IN_USER");
   return user != null ? JSON.parse(user) : null;
   //return user != null;
  }
}
