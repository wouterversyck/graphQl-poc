import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionsRestService } from '../../services/rest/questions-rest.service';
import { UserRestService } from '../../../users/services/rest/user-rest.service';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { User } from '../../../users/models/user.model';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  questionForm = new FormGroup({
    question: new FormControl('', Validators.required),
    user: new FormControl('', Validators.required),
    userId: new FormControl('', Validators.required)
  });
  users: User[];
  constructor(private questionService: QuestionsRestService, private userService: UserRestService) { }

  ngOnInit() {
    this.questionForm.valueChanges
      .pipe(
        map(e => e.user),
        debounceTime(400),
        distinctUntilChanged()
      ).subscribe(e => {
        this.userService.searchUser(e).subscribe(
          (users: User[]) => {
            console.log(users);
            this.users = users;
          }
        );
    });
  }

  displayFn(user: User): string {
    if (!this.questionForm) { return ''; }
    this.questionForm.patchValue({
      userId: user.id
    });

    return user.lastName;
  }

  getValue (user: User) {
    return `${user.firstName} ${user.lastName}`;
  }

  onSubmit() {
    // NOP
  }
}
