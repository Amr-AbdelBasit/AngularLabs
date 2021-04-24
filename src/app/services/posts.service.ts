import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PostController } from '../APIs/PostController';
import { IPost } from '../models/IPost';


const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type': 'application/json; charset=UTF-8',
  })
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postsUrl: string = PostController.GetAllPosts;
  constructor(private http: HttpClient) {  }

  getPost(id: number): Observable<IPost[]> {
    return this.http.get<IPost[]>(`${this.postsUrl}/${id}`)
  }

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.postsUrl)
  }

  addPost(post: IPost): Observable<IPost[]> {
    return this.http.post<IPost[]>(this.postsUrl, post, httpOptions) 
  }
}
