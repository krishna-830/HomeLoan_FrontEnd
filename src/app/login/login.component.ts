import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
export interface user {
  username: string;
  password: string;
  repassword: string;
  email: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  u: user = {
    username: "",
    password: "",
    repassword: "",
    email: ""
  };
  constructor(private router: Router) {}
  username: string='';
  password:string='';
  ngOnInit() {}
  login(u) {
    console.log("login called");
    console.log(u.username,u.password);
    
    if (u.username === 'ad' && u.password === 'ad') {
      console.log('in admin');
      sessionStorage.setItem('role', 'admin');
      this.router.navigateByUrl("role/admin/adminbash");
    }
    if (u.username === 'emp' && u.password === 'emp') {
      console.log('in emp');
      sessionStorage.setItem('role', 'emp');
      this.router.navigateByUrl("role/emp/empdash");
    }
    if (u.username === 'oe' && u.password === 'oe') {
     
      sessionStorage.setItem('role', 'operation');
      this.router.navigateByUrl("role/operation/oeenq");
    }
    if (u.username === 'cm' && u.password === 'cm') {
      console.log(u.username,u.password);
      sessionStorage.setItem('role', 'cr');
      this.router.navigateByUrl("role/cr");
    }
    if (u.username === 're' && u.password === 're') {
      console.log(u.username,u.password);
      sessionStorage.setItem('role', 'relation');
      this.router.navigateByUrl("role/relation/review");
    }
    if (u.username === 'abc' && u.password === 'abc') {
      console.log(u.username,u.password);
      sessionStorage.setItem('role', 'Admin');
      this.router.navigateByUrl("role/Admin/a");
    }
    if (u.username === 'ah' && u.password === 'ah') {
      console.log(u.username,u.password);
      sessionStorage.setItem('role', 'account');
      this.router.navigateByUrl("role/account/viewapp");
    }
    if (u.username === 'bm' && u.password === 'bm') {
      console.log(u.username,u.password);
      sessionStorage.setItem('role', 'manager');
      this.router.navigateByUrl("role/manager/viewapp");
    }
    if (u.username === 'th' && u.password === 'th') {
      console.log(u.username,u.password);
      sessionStorage.setItem('role', 'telehead');
      this.router.navigateByUrl("role/telehead/viewpayer");
    }
    
  }
  signup(u) {
    console.log("signup");
  }
}
