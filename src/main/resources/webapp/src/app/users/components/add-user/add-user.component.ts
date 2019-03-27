import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserRestService } from '../../services/rest/user-rest.service';
import { LoaderService } from '../../../core/components/loader/service/loader.service';
import { debounceTime, distinctUntilChanged, finalize, map } from 'rxjs/operators';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    userName: new FormControl('', Validators.required)
  });
  constructor(private userService: UserRestService, private loaderService: LoaderService) { }

  ngOnInit() {
    this.userForm.valueChanges
      .pipe(
        map(e => e.userName),
        debounceTime(400),
        distinctUntilChanged()
      ).subscribe(e => this.userService.userNameExists(e).subscribe(result => {
        if (result) {
          this.userNameControl.setErrors({
            'already.exists': true
          });
        }
        this.userForm.updateValueAndValidity();
    }));
  }
  onSubmit() {
    this.loaderService.show();
    this.userService.addUser(this.userForm.getRawValue())
      .pipe(
        finalize(() => this.loaderService.hide())
      )
      .subscribe(() => this.userForm.reset());
  }

  get firstNameControl() {
    return this.userForm.controls['firstName'];
  }

  get lastNameControl() {
    return this.userForm.controls['lastName'];
  }

  get userNameControl() {
    return this.userForm.controls['userName'];
  }
}
