import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { RoleModel, UserModel, UserModelWithFullRole } from '../../models/data-models';
import { CommonModule } from '@angular/common';
import { RolesService } from '../roles-data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lottie-users',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lottie-users.component.html',
  styleUrl: './lottie-users.component.css'
})
export class LottieUsersComponent implements OnInit {
  public users: UserModel[] = [];
  public roles: RoleModel[] = [];
  public usersWithFullRole: UserModelWithFullRole[] = [];
  private checkSubsRecieved = {
    users: false,
    roles: false,
  }
  constructor(private userService: UserService,
              private roleService: RolesService) {}

  ngOnInit(): void {
    this.userService.getUsers()
    .subscribe(res => {
      this.users = res?.sort((a, b) => a.name.localeCompare(b.name));
      if (res) {
        this.checkSubsRecieved.users = true;
        this.checkDataRecieved();
      }
    });
    const userRoles : any[] = [];
    this.roleService.getRoles()
    .subscribe(roles => {
      this.roles = roles?.sort((a,b) => a.name.localeCompare(b.name))
      if (roles) {
        this.checkSubsRecieved.roles = true;
        this.checkDataRecieved();
      }
    });
  }


  updateUserName(userName: string) {
    this.userService.updateUsers(this.users).pipe().subscribe(res => console.log(res))
  }


  checkDataRecieved() {
  if (Object.values(this.checkSubsRecieved).every((item) => item === true)) {
    this.handleData()
}
  }

  handleData() {
    let role;
    this.users.forEach(user => {
     role = this.roles.filter(role => user.roles?.includes(role?.id))
     this.usersWithFullRole.push({id: user.id, name: user.name, roles:role})
    })
  }
}

