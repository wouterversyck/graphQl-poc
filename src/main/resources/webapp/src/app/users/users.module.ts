import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { GetUsersComponent } from './components/get-users/get-users.component';
import { CustomMaterialsModule } from '../custom-materials/custom-materials.module';
import { UserComponent } from './pages/user/user.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GetUsersComponent,
    UserComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomMaterialsModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
