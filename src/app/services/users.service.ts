import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserController } from '../APIs/UserController';
import { IUser } from '../models/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // constructor(private http: HttpClient) { }

  // url = UserController.GetAllUsers;

  // getAllProducts(): Observable<IUser[]> {
  //   return this.http.get<IUser[]>(this.url).pipe(catchError((err) => {
  //     return throwError(err.message || 'Please try again');
  //   }))
  // }


  private usersUrl: string = UserController.GetAllUsers;
  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.usersUrl)
  }

  getUser(id: number): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.usersUrl}/${id}`)
  }
}
