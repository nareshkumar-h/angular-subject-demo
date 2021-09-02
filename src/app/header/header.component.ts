import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  //Already user variable
  // Now we want to make the user variable as Observable
  //and listen for the updated values
  user : Observable<User>;

  constructor(private authService: AuthService) {

    this.user = this.authService.loginSubject;
    //this.user = JSON.parse(localStorage.getItem("LOGGED_IN_USER"));
  }



  ngOnInit(): void {
  }


  logout(){
    this.authService.logout();
  }
}
