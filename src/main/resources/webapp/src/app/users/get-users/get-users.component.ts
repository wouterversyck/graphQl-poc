import { Component, OnInit } from '@angular/core';
import { UserRestService } from '../services/rest/user-rest.service';
import { Page } from '../../core/models/page.model';
import { User } from '../models/user.model';

@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.css']
})
export class GetUsersComponent implements OnInit {
  currentPage: Page<User>;

  constructor(private userService: UserRestService) { }

  ngOnInit() {
    this.fetchUsers();
  }

  public deleteUser(id: number): void {
    if(!confirm(`Delete user with id ${id}, this will also delete all the questions associated with the user`)) {
      return;
    }
    this.userService.deleteUsers(id)
      .subscribe(e => this.currentPage.content = this.currentPage.content.filter(e => e.id !== id));
  }

  private fetchUsers(): void {
    this.userService.getUsers(0, 20)
      .subscribe(e => this.currentPage = e);
  }
}
