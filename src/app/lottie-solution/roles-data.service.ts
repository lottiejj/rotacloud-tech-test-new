import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RoleModel } from '../models/data-models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RolesService implements OnInit {
  roles: RoleModel[] = [];
  constructor(private http: HttpClient) {} 

   ngOnInit(): void {
    this.getRoles();
   }

  getRoles(): Observable<RoleModel[]> {
    const url : string = "https://custom.rotacloud.com/angular-challenge/roles.json"
    return this.http.get<RoleModel[]>(url)
  }

  updateRoles(updatedRole: string):Observable<RoleModel[]> {
    // make request to api endpoint for updating userName in database
    // exact endpoint url currently unknown
    const url : string = "https://custom.rotacloud.com/angular-challenge/roles.json"
    return this.http.put<RoleModel[]>(url, updatedRole, {headers: {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}})
  }
}