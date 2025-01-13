import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { Router } from '@angular/router';
import { SharedLibService } from '@nagpassignment/shared-lib';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";
  routerA : Router;
  serviceA : SharedLibService;

  constructor(private router :Router , private service : SharedLibService ){
    this.routerA = router;
    this.serviceA = service;
  }

  ngOnInit(): void {
    this.serviceA.sendMessage('Hello from Micro Frontend A!');
  }

  login() {
    var userStr = localStorage.getItem(this.username);
    if (userStr != null) {
      var user = JSON.parse(userStr);
      if (user != null && user != undefined && user.password == this.password) {
        localStorage.setItem("LoggedInUser",user.customerId);

        // const customEvent = new CustomEvent('eventFromLoginApp', {detail: {customerId: user.customerId }});
        //dispatchEvent(customEvent);       
        this.routerA.navigate(['/']);
      }
    }
  }
}
