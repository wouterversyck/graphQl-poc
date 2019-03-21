import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { GetUsersComponent } from './components/get-users/get-users.component';
import { UserRestService } from './services/rest/user-rest.service';
import { CustomMaterialsModule } from '../custom-materials/custom-materials.module';
import { UserComponent } from './pages/user/user.component';
import { AddUserComponent } from './components/add-user/add-user.component';

@NgModule({
  declarations: [
    GetUsersComponent,
    UserComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    CustomMaterialsModule,
    UsersRoutingModule
  ],
  providers: [
    UserRestService
  ]
})
export class UsersModule { }
