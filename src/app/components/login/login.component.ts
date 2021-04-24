import { Component, OnInit } from '@angular/core';
import { LoginModel } from 'src/app/models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userModel = new LoginModel();
  
  constructor() { }

  ngOnInit(): void {
  }

}
