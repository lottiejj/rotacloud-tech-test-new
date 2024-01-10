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
   }

   ngOnInit(): void {
    this.getRoles();
   }

  getRoles(): Observable<RoleModel[]> {
    const url : string = "https://custom.rotacloud.com/angular-challenge/roles.json"
     return this.http.get<RoleModel[]>(url)
}

updateRoles(updatedList: RoleModel[]):Observable<RoleModel[]> {
  const url : string = "https://custom.rotacloud.com/angular-challenge/roles.json"
  return this.http.put<RoleModel[]>(url, updatedList, {headers: {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}})
}
}