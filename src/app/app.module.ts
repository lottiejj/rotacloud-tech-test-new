import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { RolesComponent } from './roles/roles.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    RolesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
