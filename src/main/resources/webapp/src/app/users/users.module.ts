import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { GetUsersComponent } from './get-users/get-users.component';
import { UserRestService } from './services/rest/user-rest.service';

@NgModule({
  declarations: [
    GetUsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  providers: [
    UserRestService
  ]
})
export class UsersModule { }
