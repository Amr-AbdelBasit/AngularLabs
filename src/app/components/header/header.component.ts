import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ICategory } from '../../models/ICategory';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // name: string = "Test Prop"

  // isBold: boolean = true;
  // fontSize: number = 30;

  // inputValue: string;

  firstName: string = 'Amr';
  lastName: string = 'Elsharif';
  address: string = 'Abnoub';
  faculty: string = 'Science';
  mobile: string = '01063192968';
  gender: string = 'Male';

  showDetails: boolean = false;

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }

  categories: ICategory[] = [
    { id: 1, name: 'Category1' },
    { id: 2, name: 'Category2' },
    { id: 3, name: 'Category3' },
  ];

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    console.log('Thank You');
  }

  FirstName: string;
  LastName: string;
  Email: string;

  RegisterStudent(studentForm: NgForm) {
    // debugger;

    this.FirstName = studentForm.controls.firstName.value;
    this.LastName = studentForm.controls.lastName.value;
    this.Email = studentForm.controls.email.value;

    console.log(studentForm.value);
    console.log(this.FirstName);
    console.log(this.LastName);
    console.log(this.Email);
  }
}
