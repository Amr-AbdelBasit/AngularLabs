import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentController } from '../APIs/CommentController';
import { IComment } from '../models/IComment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private commentsUrl: string = CommentController.GetAllComments;
  constructor(private http: HttpClient) { }

  getComments(): Observable<IComment[]>{
    return this.http.get<IComment[]>(this.commentsUrl)
  }
}
