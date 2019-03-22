import { Component, OnInit } from '@angular/core';
import { UserRestService } from '../../services/rest/user-rest.service';
import { MatTableDataSource, PageEvent } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { Page } from '../../../core/models/page.model';
import { User } from '../../models/user.model';
import { LoaderService } from '../../../core/components/loader/service/loader.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.css']
})
export class GetUsersComponent implements OnInit {
  currentPage: Page<User> = new Page();
  dataSource: DataSource<User>;
  displayedColumns: string[] = ['firstName', 'lastName', 'delete'];

  constructor(private userService: UserRestService, private loaderService: LoaderService) { }

  ngOnInit() {
    this.fetchUsers(0, 10);
  }

  public deleteUser(id: number): void {
    if(!confirm(`Delete user with id ${id}, this will also delete all the questions associated with the user`)) {
      return;
    }
    this.userService.deleteUsers(id)
      .subscribe(e => {
        this.currentPage.content = this.currentPage.content.filter(e => e.id !== id);
        this.dataSource = new MatTableDataSource(this.currentPage.content);
      });
  }

  private fetchUsers(page: number, nrOfResult: number): void {
    this.loaderService.show();
    this.userService.getUsers(page, nrOfResult)
      .pipe(
        finalize(() => this.loaderService.hide())
      ).subscribe((e: Page<User>) => {
        this.currentPage = e;
        this.dataSource = new MatTableDataSource(this.currentPage.content);
      });
  }

  pageEvent(event: PageEvent) {
    this.fetchUsers(event.pageIndex, event.pageSize);
  }
}
