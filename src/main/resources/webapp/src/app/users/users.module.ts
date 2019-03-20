import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { GetUsersComponent } from './get-users/get-users.component';
import { UserRestService } from './services/rest/user-rest.service';
import { CustomMaterialsModule } from '../custom-materials/custom-materials.module';

@NgModule({
  declarations: [
    GetUsersComponent
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
