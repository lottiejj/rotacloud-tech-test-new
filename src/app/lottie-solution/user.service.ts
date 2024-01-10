import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/data-models';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {
  private users: UserModel[];
  constructor(private http: HttpClient) {
    this.users = [];
   }

   ngOnInit(): void {
    this.getUsers();
   }

  getUsers(): Observable<UserModel[]> {
    const url : string = "https://custom.rotacloud.com/angular-challenge/users.json"
    return this.http.get<UserModel[]>(url);
  
}

updateUsers(updatedList: UserModel[]):Observable<UserModel[]> {
  const url : string = "https://custom.rotacloud.com/angular-challenge/users.json"
  return this.http.put<UserModel[]>(url, updatedList, {headers: {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}})
}
}
