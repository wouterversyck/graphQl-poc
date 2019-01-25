import { Component, OnInit } from '@angular/core';
import { QuestionsRestService } from '../services/rest/questions-rest.service';
import { Page } from '../../core/models/page.model';
import { Question } from '../models/question.model';

@Component({
  selector: 'app-get-questions-component',
  templateUrl: './get-questions.component.html',
  styleUrls: ['./get-questions.component.css']
})
export class GetQuestionsComponent implements OnInit {
  currentPage: Page<Question>;

  constructor(private questionsService: QuestionsRestService) { }

  ngOnInit() {
    this.fetchQuestions();
  }

  deleteQuestion(id: number) {
    if(!confirm(`Are you sure you want to delete user with id: ${id}`)) {
      return;
    }

    this.questionsService.deleteQuestion(id).subscribe(
      e => this.currentPage.content = this.currentPage.content.filter(e => e.id !== id)
    );
  }

  private fetchQuestions() {
    this.questionsService.getQuestions(0, 20)
      .subscribe((e: Page<Question>) => this.currentPage = e);
  }
}
