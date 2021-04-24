import { Component, OnInit } from '@angular/core';
import { IComment } from 'src/app/models/IComment';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  comments: IComment[] = [];
  constructor(private commentsService: CommentsService) { }

  getComments(): void {
    this.commentsService.getComments()
      .subscribe(comments => this.comments = comments)
  }

  ngOnInit() {
    this.getComments()
  }
}
