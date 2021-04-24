import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from 'src/app/custom-validators/confirmPassword.validator';

@Component({
  selector: 'app-register-reactive-forms',
  templateUrl: './register-reactive-forms.component.html',
  styleUrls: ['./register-reactive-forms.component.scss']
})
export class RegisterReactiveFormsComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  registerForm=this.fb.group({
    userName :['',[Validators.required , Validators.pattern(/^[a-zA-Z]+$/)]],
    email:['',[Validators.required , Validators.pattern(/^.*@.*$/)]] ,
    password:['',[Validators.required]],
    confirmPassword:['',[Validators.required]],
  },{validators:[ConfirmPasswordValidator]})

  ngOnInit(): void {
  }

  get userName ()
  {
    return this.registerForm.get('userName');
  }

  get email()
  {
    return this.registerForm.get('email');
  }

  get password()
  {
    return this.registerForm.get('password');
  }

  get confirmPassword()
  {
    return this.registerForm.get('confirmPassword');
  }
}
