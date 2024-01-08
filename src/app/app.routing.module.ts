import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { RolesComponent } from './roles/roles.component';
import { LottieUsersComponent } from './lottie-solution/lottie-users/lottie-users.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'users', component: UsersComponent },
	{ path: 'roles', component: RolesComponent },
	{ path: 'lottie-users', component: LottieUsersComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule, CommonModule, FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
