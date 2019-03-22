import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserRestService } from '../../services/rest/user-rest.service';
import { LoaderService } from '../../../core/components/loader/service/loader.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
  });
  constructor(private userService: UserRestService, private loaderService: LoaderService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.loaderService.show();
    this.userService.addUser(this.userForm.getRawValue())
      .pipe(
        finalize(() => this.loaderService.hide())
      )
      .subscribe(() => this.userForm.reset(''));
  }
}
