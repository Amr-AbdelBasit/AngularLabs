import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/models/IPost';
import { IUser } from 'src/app/models/IUser';
import { PostService } from 'src/app/services/posts.service';
import { UserService } from 'src/app/services/users.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  posts: IPost[] = [];
  users: IUser[] = [];

  constructor(
    private postsService: PostService,
    private usersService: UserService
  ) {
    // this.getPosts()
  }

  // getPosts() {
    
  // }

  // setUserName() {
  //   if (this.posts && this.users) {
  //     for(const post of this.posts) {
  //       for(const user of this.users) {
  //         if (post.userId === user.id) {
  //           post.name = user.name
  //         }
  //       }
  //     }
  //   }
  // }

  ngOnInit(): void {
    this.postsService.getPosts()
      .subscribe( posts => {this.posts = posts;} )
    this.usersService.getUsers()
      .subscribe( users => {this.users = users;})
    console.log(this.posts[1].title)
  }

}
