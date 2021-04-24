import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-reactive-forms',
  templateUrl: './login-reactive-forms.component.html',
  styleUrls: ['./login-reactive-forms.component.scss']
})
export class LoginReactiveFormsComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  loginForm=this.fb.group({
    email:['',[Validators.required]] ,
    password:['',[Validators.required]],
  })

  ngOnInit(): void {
  }

  get email()
  {
    return this.loginForm.get('email');
  }

  get password()
  {
    return this.loginForm.get('password');
  }
}
