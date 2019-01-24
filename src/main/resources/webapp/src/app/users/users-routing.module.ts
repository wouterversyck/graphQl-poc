import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetUsersComponent } from './get-users/get-users.component';

const routes: Routes = [
  {
    path: '',
    component: GetUsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
