import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionsRestService } from '../../services/rest/questions-rest.service';
import { UserRestService } from '../../../users/services/rest/user-rest.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  questionForm = new FormGroup({
    question: new FormControl('', Validators.required),
  });
  constructor(private questionService: QuestionsRestService, private userService: UserRestService) { }

  ngOnInit() {
  }

  onSubmit() {
    // NOP
  }
}
