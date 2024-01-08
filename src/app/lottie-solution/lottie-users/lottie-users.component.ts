import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { RoleModel, UserModel } from '../../models/data-models';
import { CommonModule } from '@angular/common';
import { RolesService } from '../roles-data.service';

@Component({
  selector: 'app-lottie-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lottie-users.component.html',
  styleUrl: './lottie-users.component.css'
})
export class LottieUsersComponent implements OnInit {
  public users: UserModel[] = [];
  public roles: RoleModel[] = [];
  constructor(private userService: UserService,
              private roleService: RolesService) {}

  ngOnInit(): void {
    this.users = this.userService.getUsers().sort((a, b) => a.name.localeCompare(b.name));
    console.log(this.users)
    this.roles = this.roleService.getRoles()
  }
}
