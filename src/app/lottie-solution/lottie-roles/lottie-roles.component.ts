import { Component, OnInit } from '@angular/core';
import { RolesService } from '../roles-data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RoleModel, RoleModelWithUsers, UserModel } from '../../models/data-models';
import { UserService } from '../user.service';

@Component({
  selector: 'app-lottie-roles',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lottie-roles.component.html',
  styleUrl: './lottie-roles.component.css'
})
export class LottieRolesComponent implements OnInit {
  public roles: RoleModel[] = [];
  public users: UserModel[] = [];
  public usersAssignedToRoles: RoleModelWithUsers[] = [];
  private checkSubsRecieved = {
    users: false,
    roles: false,
  }
    constructor(private rolesService: RolesService,
      private userService: UserService) {
}

ngOnInit(): void {
  this.rolesService.getRoles().subscribe(res => {
    if (res) {
      this.roles = res.sort((a,b) => a.name.localeCompare(b.name));
      this.checkSubsRecieved.roles = true;
      this.checkDataRecieved();
    }
  });
  this.userService.getUsers().subscribe(users => {
    if (users) {
      this.users = users.sort((a,b) => a.name.localeCompare(b.name));
      this.checkSubsRecieved.users = true;
      this.checkDataRecieved();
    }
  })
}

checkDataRecieved() {
  if (Object.values(this.checkSubsRecieved).every((item) => item === true)) {
    this.handleData()
}
}

handleData() {
  let user;
  this.roles.forEach(role => {
   user = this.users.filter(u => u.roles?.includes(role?.id))
   this.usersAssignedToRoles.push({id: role.id, name: role.name, colour: role.colour, users: user})
  });
}

updateRoleName(roleName: string) {
  this.rolesService.updateRoles(this.roles).pipe().subscribe(res => console.log(res))
}
}
