import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/data-models';
import { EMPTY, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {
  private users: Observable<UserModel[]> = EMPTY;
  private dataRecieved: boolean = false;
  constructor(private http: HttpClient) {
   }

   ngOnInit(): void {
  
   }

   getUsers(): Observable<UserModel[]> {
    if (!this.dataRecieved) {
      const url : string = "https://custom.rotacloud.com/angular-challenge/users.json"
    this.users = this.http.get<UserModel[]>(url);
    this.dataRecieved = true;
    }
    return this.users;
   }
  getUsersObservable(): Observable<UserModel[]> {
    const url : string = "https://custom.rotacloud.com/angular-challenge/users.json"
    return this.http.get<UserModel[]>(url);
  
}

updateUsers(updatedUser: string):Observable<UserModel[]> {
  // make request to api endpoint for updating userName in database
  // exact endpoint url currently unknown
  const url : string = "https://custom.rotacloud.com/angular-challenge/users.json"
  return this.http.put<UserModel[]>(url, updatedUser, {headers: {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}})
}
}
