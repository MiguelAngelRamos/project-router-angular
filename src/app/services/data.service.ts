import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../interfaces/IPost';
import { IUser } from '../interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // Traer todos los posts
  getPosts():Observable<IPost[]> {
    return this.http.get<IPost[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getUserById(idUser: number):Observable<IUser> {
    return this.http.get<IUser>('https://jsonplaceholder.typicode.com/users/' + idUser);
    // return this.http.get<any>(`https://jsonplaceholder.typicode.com/users/${idUser}`);
  }
}
