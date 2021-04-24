import { Component, OnInit } from '@angular/core';
import { RegisterModel } from 'src/app/models/register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  socialMedia = ['Google', 'FaceBook', 'Twitter'];

  userModel = new RegisterModel();

  constructor() { }

  ngOnInit(): void {
  }

}
