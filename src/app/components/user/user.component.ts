import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/IUser';
import { UserService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: IUser[] = [];
  constructor(
    private usersService: UserService) { }
  
  getUsers(): void {
    this.usersService.getUsers()
      .subscribe(users => this.users = users)
  }

  ngOnInit() {
    this.getUsers()
  }

}
