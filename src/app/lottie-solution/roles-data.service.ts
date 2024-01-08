import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RoleModel, UserModel } from '../models/data-models';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolesService implements OnInit {
    roles: RoleModel[] = [];
  constructor(private http: HttpClient) {
    this.roles = [];
   }

   ngOnInit(): void {
    this.getRoles();
   }

  getRoles(): RoleModel[] {
    const url : string = "https://custom.rotacloud.com/angular-challenge/roles.json"
     this.http.get<RoleModel[]>(url).subscribe(res => {
      this.roles = res
     })
     return this.roles;
}
}