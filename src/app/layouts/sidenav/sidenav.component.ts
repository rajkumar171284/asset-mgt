import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import{Router}from '@angular/router';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  options: FormGroup;

  constructor(fb: FormBuilder,private router:Router) {
    this.options = fb.group({
      bottom: 0,
      fixed: true,
      top: 0,
    });
  }
  ngOnInit(): void {
  }
  logOut(){
    sessionStorage.clear();
    this.router.navigate(['login'])
     }

}
