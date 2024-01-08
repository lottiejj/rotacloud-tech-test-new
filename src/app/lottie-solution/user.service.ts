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

  getUsers(): UserModel[] {
    const url : string = "https://custom.rotacloud.com/angular-challenge/users.json"
     this.http.get<UserModel[]>(url).subscribe(res => {
      this.users = res
     })
     return this.users;
}
}
